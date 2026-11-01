// Stops are in walking order (west to east, then across the river). Coordinates verified against OpenStreetMap.
const STOPS = [
  {
    name: "Skałka",
    lat: 50.0482,
    lon: 19.9376,
    address: "Skałeczna 15",
    title: "Where Poland’s patron saint was said to be killed",
    text: "According to tradition, King Bolesław II killed Bishop Stanisław of Szczepanów here in 1079, though the story is debated. The Paulite church and monastery stand on the site. Its Crypt of the Distinguished holds the remains of Jan Długosz, Stanisław Wyspiański and Czesław Miłosz.",
  },
  {
    name: "Esterka legend house",
    lat: 50.0477,
    lon: 19.9438,
    address: "Krakowska 46",
    title: "The legend of Esterka, the Jewish queen who may never have existed",
    text: "Legend says King Casimir the Great loved a Jewish woman named Esterka. The chronicler Jan Długosz recorded the tale, and later Jewish tradition credited her with the king’s protective charters during the Black Death. No archival proof of her exists. Folk memory links her to the house at Krakowska 46.",
  },
  {
    name: "Plac Wolnica",
    lat: 50.0488,
    lon: 19.9441,
    address: "Plac Wolnica",
    title: "Kazimierz used to be an island",
    text: "The old Vistula channel that made Kazimierz an island was drained and filled in around 1878–1880. It is now the tree-lined Dietla Street. The old town’s heart is Plac Wolnica, with the 14th-century town hall, now the Ethnographic Museum.",
  },
  {
    name: "Plac Nowy",
    lat: 50.0517,
    lon: 19.9446,
    address: "Plac Nowy",
    title: "The round building was a kosher slaughterhouse",
    text: "The “Okrąglak” was built in 1900 for kosher meat slaughter, at the center of what had been the Jewish market. It is now home to Kraków’s famous zapiekanki (open-faced baguette pizzas) and the starting point of the district’s nightlife.",
  },
  {
    name: "Old Synagogue",
    lat: 50.0514,
    lon: 19.9486,
    address: "Szeroka 24",
    title: "The oldest surviving synagogue building in Poland",
    text: "It dates from the 15th century and was rebuilt in the Renaissance style after a fire. The Nazis looted it and used it as a warehouse. It is now a branch of the Kraków Historical Museum.",
  },
  {
    name: "Remuh Synagogue and Cemetery",
    lat: 50.0526,
    lon: 19.9473,
    address: "Szeroka 40",
    title: "The grave of Rabbi Moses Isserles",
    text: "Rabbi Moses Isserles (“Remuh”, d. 1572) is buried here, and pilgrims still leave stones and notes at his tomb. The cemetery was closed in 1800 and neglected, then destroyed by the Nazis in WWII. Many broken tombstones were later pieced into the wall along its edge. The synagogue next door has been in use since 1557.",
  },
  {
    name: "Eagle Pharmacy",
    lat: 50.0462,
    lon: 19.9541,
    address: "Plac Bohaterów Getta 18, Podgórze",
    title: "The pharmacy inside the Kraków Ghetto",
    text: "After the Nazis sealed the Podgórze Ghetto across the river in 1941, pharmacist Tadeusz Pankiewicz refused to move his Apteka Pod Orłem. He became the only non-Jewish Pole allowed to live and work inside the ghetto, and the pharmacy’s back rooms sheltered people during the deportations. He was later named Righteous Among the Nations. It is now a museum.",
  },
];

const ROUTE_API = "https://routing.openstreetmap.de/routed-foot/route/v1/foot/";
const WALK_SPEED_MS = 1.33; // ~4.8 km/h; the demo server's own durations are unreliable
const FAR_KM = 10;
const CENTER = { lat: 50.0517, lon: 19.9446 }; // Plac Nowy

const $ = (id) => document.getElementById(id);

const map = L.map("map", { zoomControl: false }).setView(
  [CENTER.lat, CENTER.lon],
  16,
);
L.control.zoom({ position: "bottomright" }).addTo(map);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: "© OpenStreetMap contributors",
}).addTo(map);

let me = null; // { lat, lon } once we have a fix
let meMarker = null;
let meCircle = null;
let toStopLine = null;
let tourLine = null;

function formatDistance(m) {
  return m >= 1000 ? `${(m / 1000).toFixed(1)} km` : `${Math.round(m)} m`;
}

function formatMinutes(m) {
  return `${Math.max(1, Math.round(m / WALK_SPEED_MS / 60))} min`;
}

function haversineKm(a, b) {
  const rad = (d) => (d * Math.PI) / 180;
  const h =
    Math.sin(rad(b.lat - a.lat) / 2) ** 2 +
    Math.cos(rad(a.lat)) *
      Math.cos(rad(b.lat)) *
      Math.sin(rad(b.lon - a.lon) / 2) ** 2;
  return 12742 * Math.asin(Math.sqrt(h));
}

async function fetchRoute(points) {
  const path = points.map((p) => `${p.lon},${p.lat}`).join(";");
  const res = await fetch(
    `${ROUTE_API}${path}?overview=full&geometries=geojson`,
  );
  if (!res.ok) throw new Error(`routing HTTP ${res.status}`);
  const data = await res.json();
  if (data.code !== "Ok" || !data.routes?.length) {
    throw new Error(`routing ${data.code}`);
  }
  return data.routes[0];
}

function renderStops() {
  const list = $("stops");
  STOPS.forEach((s, i) => {
    const n = i + 1;
    const card = document.createElement("article");
    card.className = "card stop";
    card.id = `stop-${n}`;

    const h = document.createElement("h3");
    const num = document.createElement("span");
    num.className = "num";
    num.textContent = n;
    h.append(num, s.title);

    const p = document.createElement("p");
    p.textContent = s.text;

    const c = document.createElement("p");
    c.className = "coords";
    c.textContent = `📍 ${s.name}, ${s.address} · ${s.lat.toFixed(4)}° N, ${s.lon.toFixed(4)}° E`;

    const actions = document.createElement("div");
    actions.className = "actions";

    const show = document.createElement("button");
    show.type = "button";
    show.textContent = "Show on map";
    show.addEventListener("click", () => {
      map.flyTo([s.lat, s.lon], 18);
      $("map").scrollIntoView({ behavior: "smooth", block: "start" });
    });

    const fromMe = document.createElement("button");
    fromMe.type = "button";
    fromMe.textContent = "Route from my location";
    fromMe.addEventListener("click", () => routeFromMe(i));

    const ext = document.createElement("a");
    ext.href = `https://www.google.com/maps/dir/?api=1&destination=${s.lat},${s.lon}&travelmode=walking`;
    ext.target = "_blank";
    ext.rel = "noopener";
    ext.textContent = "Open in Maps";
    ext.className = "btn";

    actions.append(show, fromMe, ext);
    card.append(h, p, c, actions);
    list.append(card);

    const icon = L.divIcon({
      className: "",
      html: `<div class="pin">${n}</div>`,
      iconSize: [30, 30],
      iconAnchor: [15, 15],
    });
    L.marker([s.lat, s.lon], { icon, title: s.name })
      .addTo(map)
      .bindPopup(`<strong>${n}. ${s.name}</strong><br>${s.address}`)
      .on("click", () => {
        location.hash = `stop-${n}`;
      });
  });
}

async function drawTour() {
  const fallback = STOPS.map((s) => [s.lat, s.lon]);
  try {
    const route = await fetchRoute(STOPS);
    const latlngs = route.geometry.coordinates.map(([lon, lat]) => [lat, lon]);
    tourLine = L.polyline(latlngs, {
      color: "#b0412e",
      weight: 5,
      opacity: 0.85,
    });
    $("route-text").textContent =
      `${STOPS.length} stops · ${formatDistance(route.distance)} · about ${formatMinutes(route.distance)} on foot.`;
    const legs = $("legs");
    route.legs.forEach((leg, i) => {
      const li = document.createElement("li");
      li.textContent = `${STOPS[i].name} → ${STOPS[i + 1].name}: ${formatDistance(leg.distance)}, ${formatMinutes(leg.distance)}`;
      legs.append(li);
    });
  } catch (err) {
    console.warn("Tour routing failed, drawing straight lines:", err);
    tourLine = L.polyline(fallback, {
      color: "#b0412e",
      weight: 4,
      dashArray: "6 8",
    });
    $("route-text").textContent =
      "Couldn’t load street routing. Showing straight lines between stops.";
  }
  tourLine.addTo(map);
  fitAll();
}

function fitAll() {
  const pts = STOPS.map((s) => [s.lat, s.lon]);
  if (me) pts.push([me.lat, me.lon]);
  map.fitBounds(L.latLngBounds(pts), { padding: [30, 30] });
}

async function routeFromMe(i) {
  const s = STOPS[i];
  if (!me) {
    $("status").textContent =
      "Waiting for your location. Allow location access, then try again.";
    return;
  }
  $("status").textContent = `Routing to ${s.name}…`;
  if (toStopLine) toStopLine.remove();
  try {
    const route = await fetchRoute([me, s]);
    const latlngs = route.geometry.coordinates.map(([lon, lat]) => [lat, lon]);
    toStopLine = L.polyline(latlngs, {
      color: "#1a73e8",
      weight: 5,
      dashArray: "2 10",
      lineCap: "round",
    }).addTo(map);
    map.fitBounds(toStopLine.getBounds(), { padding: [30, 30] });
    $("status").textContent =
      `To ${s.name}: ${formatDistance(route.distance)}, about ${formatMinutes(route.distance)} on foot.`;
    $("map").scrollIntoView({ behavior: "smooth", block: "start" });
  } catch (err) {
    console.warn("Route from me failed:", err);
    $("status").textContent = "Couldn’t load a route from your location.";
  }
}

function onPosition(pos) {
  const { latitude: lat, longitude: lon, accuracy } = pos.coords;
  const first = !me;
  me = { lat, lon };
  if (!meMarker) {
    meMarker = L.marker([lat, lon], {
      icon: L.divIcon({
        className: "",
        html: '<div class="me-dot"></div>',
        iconSize: [18, 18],
        iconAnchor: [9, 9],
      }),
      zIndexOffset: 1000,
      interactive: false,
    }).addTo(map);
    meCircle = L.circle([lat, lon], {
      radius: accuracy,
      color: "#1a73e8",
      weight: 1,
      fillOpacity: 0.1,
    }).addTo(map);
  } else {
    meMarker.setLatLng([lat, lon]);
    meCircle.setLatLng([lat, lon]).setRadius(accuracy);
  }
  const km = haversineKm(me, CENTER);
  if (km > FAR_KM) {
    $("status").textContent =
      `Live location on (±${Math.round(accuracy)} m). You’re ${Math.round(km)} km from Kazimierz.`;
  } else {
    $("status").textContent = `Live location on (±${Math.round(accuracy)} m).`;
    if (first && tourLine) fitAll();
  }
}

function onGeoError(err) {
  const msg = {
    1: "Location blocked. Allow location for this site in your browser settings to see where you are.",
    2: "Your position is unavailable right now.",
    3: "Timed out getting your location.",
  };
  $("status").textContent = msg[err.code] || "Couldn’t get your location.";
}

let watching = false;

function startLocation() {
  if (watching) return;
  watching = true;
  if (!("geolocation" in navigator)) {
    $("status").textContent = "This browser doesn’t support geolocation.";
    return;
  }
  navigator.geolocation.watchPosition(onPosition, onGeoError, {
    enableHighAccuracy: true,
    maximumAge: 5000,
    timeout: 20000,
  });
}

function initTheme() {
  const root = document.documentElement;
  try {
    const saved = localStorage.getItem("theme");
    if (saved) root.dataset.theme = saved;
    else root.dataset.theme = "light";
  } catch {
    root.dataset.theme = "light";
  }
  $("theme").addEventListener("click", () => {
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      // storage unavailable (private mode); theme just won't persist
    }
  });
}

$("locate").addEventListener("click", () => {
  if (me) map.flyTo([me.lat, me.lon], 17);
  else startLocation();
});
$("fit").addEventListener("click", fitAll);

initTheme();
renderStops();
drawTour();
startLocation();
