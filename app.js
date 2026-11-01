// Stops are in walking order (a loop: out along the south, back past Plac Nowy).
// Coordinates verified against OpenStreetMap. Each text has three stretch levels:
// brief (always shown), more (people explained), full (deeper detail + sources).
const W = "https://en.wikipedia.org/wiki/";
const WPL = "https://pl.wikipedia.org/wiki/";

const INTRO = {
  brief: [
    "Casimir III the Great founded Kazimierz in 1335 as a separate royal town beside Kraków. It sat on an island between two branches of the Vistula, with its own walls, market square and town hall. In 1495 King John I Albert expelled Kraków’s Jews from the city, and they resettled in the northeast corner of Kazimierz. For the next 450 years it was one of the great centers of Jewish life in Europe.",
    "Around 1800 Kazimierz lost its separate status and became part of Kraków. In 1941 the Nazis forced the Jewish population into the Podgórze ghetto and later murdered most of them. The district decayed under communism, then revived after 1988 with the Jewish Culture Festival and with Schindler’s List, filmed here in 1993. Today it is Kraków’s bar, café and gallery quarter.",
  ],
  more: [
    "Casimir III the Great (reigned 1333–1370) was the last king of the Piast dynasty. He fortified towns, reformed the law and founded the University of Kraków in 1364. He declared Kazimierz a town on 27 March 1335 and named it after himself. King John I Albert is the other key figure. After a fire in Kraków in June 1494, rioters blamed the Jews and attacked their homes. In 1495 the king expelled Kraków’s Jews from the city, and they moved to Kazimierz.",
    "The Jewish quarter was walled off and called the Oppidum Judaeorum, “the Jewish City”. It covered only about a fifth of Kazimierz’s area but held nearly half its people.",
  ],
  full: [
    "Before the charter, three early medieval settlements stood on the island. The most important was a pagan Slavic shrine with a sacred pool at Skałka, at the island’s western tip. In 1340 the neighboring settlement of Bawół was added, so the town covered the whole island. The Old Vistula channel on its north side was filled in at the end of the 19th century and became Dietla Street.",
    "After the Third Partition of Poland in 1795, Kraków passed to Austria and Kazimierz lost its status as a separate city. The walls were torn down in 1822. By the 1930s much Jewish intellectual life had moved to other districts, and the Jews who remained in the old quarter were mostly poor and strictly traditional. On 5–6 December 1939 the Germans blockaded Jewish homes in Kazimierz and confiscated valuables, before the forced move to the Podgórze ghetto. Since 1988 the Jewish Culture Festival has drawn people back, and Spielberg’s film was shot largely in Kazimierz, though little of the real history happened here.",
  ],
  sources: [
    ["Kazimierz", W + "Kazimierz"],
    ["Casimir III the Great", W + "Casimir_III_the_Great"],
    ["John I Albert", W + "John_I_Albert"],
  ],
};

const STOPS = [
  {
    name: "Skałka",
    lat: 50.0482,
    lon: 19.9376,
    address: "Skałeczna 15",
    title: "Where Poland’s patron saint was said to be killed",
    brief: [
      "According to tradition, King Bolesław II killed Bishop Stanisław of Szczepanów here in 1079, though the story is debated. The Paulite church and monastery stand on the site. Its Crypt of the Distinguished holds the remains of Jan Długosz, Stanisław Wyspiański and Czesław Miłosz.",
    ],
    more: [
      "Stanisław of Szczepanów (about 1030–1079) became Bishop of Kraków in 1072 and was one of Poland’s first native bishops. He helped restore the archbishopric at Gniezno, a condition for Bolesław’s coronation as king in 1076. Bolesław II, called “the Bold” or “the Generous”, was the eldest son of Casimir the Restorer. He ruled Poland from 1058, first as duke and from 1076 as king.",
      "The crypt’s famous names: Jan Długosz (1415–1480) was a priest and chronicler whose twelve-volume Annals cover Polish history to 1480. Stanisław Wyspiański (1869–1907) was a poet, playwright and painter. Czesław Miłosz (1911–2004) was a poet who won the Nobel Prize.",
    ],
    full: [
      "Why did they fall out? The sources disagree. Gallus Anonymus, the chronicler nearest in time, calls the bishop a “traitor” and the king violent. Wincenty Kadłubek says the bishop condemned the king’s cruelty to soldiers’ wives. Długosz says it was the king’s own immorality. Historians also think Stanisław backed nobles who wanted to replace Bolesław with his brother Władysław Herman. The bishop excommunicated the king, and the king had him declared a traitor.",
      "The legend says that after his men refused to touch the bishop, the king killed him himself while he said Mass at Skałka. The body was cut up and scattered, but the pieces reunited miraculously at a pool guarded by four eagles. Some historians place the killing at Wawel Castle instead. Bolesław was deposed, fled to Hungary and was succeeded by Władysław Herman. Stanisław was canonized in 1253 and is the patron saint of Poland.",
      "Skałka was already a sacred place, with a pagan Slavic shrine and a sacred pool. The Pauline Fathers have held it since 1472, and the Baroque interior dates from 1733–1751. Tradition says each newly elected king of Poland came here on the eve of his coronation to do penance for the killing.",
    ],
    sources: [
      ["Skałka church", W + "Ska%C5%82ka"],
      ["Stanislaus of Szczepanów", W + "Stanislaus_of_Szczepan%C3%B3w"],
      ["Bolesław II the Bold", W + "Boles%C5%82aw_II_the_Bold"],
    ],
  },
  {
    name: "Esterka legend house",
    lat: 50.0477,
    lon: 19.9438,
    address: "Krakowska 46",
    title: "The legend of Esterka, the Jewish queen who may never have existed",
    brief: [
      "Legend says King Casimir the Great loved a Jewish woman named Esterka. The chronicler Jan Długosz recorded the tale, and later Jewish tradition credited her with the king’s protective charters during the Black Death. No archival proof of her exists. Folk memory links her to the house at Krakowska 46.",
    ],
    more: [
      "Casimir III the Great (1310–1370) was the last Piast king of Poland. He rebuilt a weakened kingdom, fortified nearly 30 towns and founded the University of Kraków in 1364. Jan Długosz (1415–1480), the priest and chronicler, first wrote down the Esterka story about a century after the king died.",
      "David Gans, a Jewish chronicler in Prague about a century after Długosz, went further. He said Esterka was the king’s wife for many years and persuaded him to issue charters of freedom to the Jews. In the legend she was the beautiful, clever daughter of a poor tailor named Rafael from Opoczno, and the king installed her in a palace at Łobzów, just north of Kraków.",
    ],
    full: [
      "In the story, Esterka bore the king two sons, Pelko and Nemir, who were baptized at their father’s wish and became the mythical ancestors of Polish noble families. Her two daughters were raised Jewish. She is also said to have advised the king on free trade, stone-built cities and tolerance, and to have helped protect Jews during the Black Death.",
      "The legend ends badly. After Casimir’s death his nephew Louis of Hungary became king, and anti-Jewish riots broke out in Kraków. Rioters are said to have broken into the palace at Łobzów and killed Esterka and her daughters. In the late 18th century King Stanisław August Poniatowski had the “Esterka Mound” at Łobzów dug up, hoping to find her grave. The mound was destroyed in the 1950s when a sports stadium was built. Krakowska 46 is an Ethnographic Museum site today, and Esterka’s name lives on in streets and places across Poland.",
    ],
    sources: [
      ["Esterka", W + "Esterka"],
      ["Casimir III the Great", W + "Casimir_III_the_Great"],
      ["Jan Długosz", W + "Jan_D%C5%82ugosz"],
    ],
  },
  {
    name: "Plac Wolnica",
    lat: 50.0488,
    lon: 19.9441,
    address: "Plac Wolnica",
    title: "Kazimierz used to be an island",
    brief: [
      "The old Vistula channel that made Kazimierz an island was filled in at the end of the 19th century. It is now the tree-lined Dietla Street. The old town’s heart is Plac Wolnica, with the 14th-century town hall, now the Ethnographic Museum.",
    ],
    more: [
      "Casimir III the Great gave Kazimierz its charter in 1335, with a square market measuring 195 by 195 metres, almost as big as Kraków’s own Main Market Square. The square held traders’ stalls, a weigh-house and the town hall, where Kazimierz’s highest administrative and court authorities sat. The name Wolnica comes from the Latin forum liberum, “free trade”, a right to sell meat outside the stalls that the town received in the late 18th century.",
      "The town hall began as a wooden building. It was rebuilt in the Renaissance style in 1528 and again after 1557, when a north wing and a tower were added. Its tower clock, installed in 1875, is the oldest working tower clock in Kraków.",
    ],
    full: [
      "After Kazimierz lost its city status around 1800, the town hall fell into ruin and was put up for demolition auction in 1806. It survived, and the Ethnographic Museum moved in in 1947. A restoration in 1962–1966 returned much of its original shape and added sgraffito decoration by Wacław Taranczewski.",
      "Look for small things. A plaque from 1907 by Henryk Hochman, “The Arrival of the Jews in Poland”, hangs on the museum wall. The Germans destroyed the original in World War II, and the present plaque, found in Warsaw’s National Museum, was mounted in 1996. At number 11, another plaque marks where ruins of the university buildings that Casimir began, but never finished, were found in 1868. In the square stands the 1970 fountain of the “Three Minstrels” by Bronisław Chromy.",
    ],
    sources: [
      ["Kazimierz town hall (Polish)", WPL + "Ratusz_kazimierski_w_Krakowie"],
      ["Plac Wolnica (Polish)", WPL + "Plac_Wolnica_w_Krakowie"],
      ["Kazimierz", W + "Kazimierz"],
    ],
  },
  {
    name: "Old Synagogue",
    lat: 50.0514,
    lon: 19.9486,
    address: "Szeroka 24",
    title: "The oldest surviving synagogue building in Poland",
    brief: [
      "Sources date the building to either 1407 or 1492, and it was rebuilt in 1570 by the Italian architect Matteo Gucci. The Nazis looted it and used it as a warehouse. It is now a branch of the Kraków Historical Museum.",
    ],
    more: [
      "Matteo Gucci gave the building the look of a fortress: an attic wall with loopholes, windows set high above the ground, and thick, heavily buttressed walls. “Fortress synagogues” like this borrowed ideas from military architecture, so a congregation could withstand a siege.",
      "Tadeusz Kościuszko led the national uprising of 1794, and he spoke from inside this synagogue to win Jewish support. A plaque in the entrance hall quotes the moment: “The Jews proved to the world that whenever humanity can gain, they would not spare themselves.”",
    ],
    full: [
      "The Old Synagogue was the main religious, social and organizational center of Kraków’s Jewish community. In 1939 the Nazis desecrated it. Its art and religious objects were looted, and the building served as a warehouse. In 1943 the Germans executed 30 Polish hostages at its wall.",
      "After a restoration in the late 1950s it became a museum, a branch of the Historical Museum of Kraków. Its exhibits cover birth, prayer, diet, divorce and death. The women’s prayer room, from the 17th century, is often used for temporary exhibitions.",
    ],
    sources: [["Old Synagogue (Kraków)", W + "Old_Synagogue_(Krak%C3%B3w)"]],
  },
  {
    name: "Remuh Synagogue and Cemetery",
    lat: 50.0526,
    lon: 19.9473,
    address: "Szeroka 40",
    title: "The grave of Rabbi Moses Isserles",
    brief: [
      "Rabbi Moses Isserles (“Remuh”, d. 1572) is buried here, and pilgrims still leave stones and notes at his tomb. The cemetery was closed around 1850, and in World War II the Nazis destroyed it and hauled tombstones away as paving; those recovered were re-erected. The synagogue next door was completed in 1557.",
    ],
    more: [
      "Moses Isserles (1530–1572), known by the acronym Rema, was one of the greatest rabbis of his age. He ran a large yeshiva (Talmud school) in Kraków and wrote glosses on the Shulchan Aruch, Joseph Karo’s code of Jewish law, adding Ashkenazi customs. His tombstone reads: “From Moses (Maimonides) to Moses (Isserles) there was none like Moses.” Before World War II thousands of pilgrims visited his grave each year on Lag Ba’omer.",
      "His father, Israel ben Josef, was a wealthy banker and Talmud scholar who settled in Kraków in 1519 after the Jews of Regensburg were expelled. One tradition says he built the synagogue in honor of his famous son. Another, based on the foundation tablet, says it commemorates Israel’s wife, Malka. A third says Moses founded it for his first wife, Golda, who died at 20.",
    ],
    full: [
      "The synagogue was built from 1553 and completed in 1557. It was first called the “New Synagogue” to tell it apart from the Old Synagogue. An epidemic in 1552 had killed several members of Israel’s family. The cemetery beside it was founded between 1535 and 1551.",
      "Other graves include Nathan Spira (1583–1633), a rabbi and head of the Kraków academy, Yom-Tov Lipmann Heller (1578–1654), a Talmudist, Joel Sirkis (1561–1640), a leading rabbi, and “Yossele the Holy Miser”, the hero of a Jewish folk tale. During the occupation the Nazis tore down the walls and hauled tombstones away to pave roads in camps or sell them, but Isserles’s stone stayed intact. They also seized the synagogue and used it to store firefighting equipment, and the bimah was lost. After the war the recovered tombstones were re-erected, though they are a small fraction of those that once stood. The synagogue was restored in 1957 with help from the Joint Distribution Committee’s representative in Poland, Akiva Kahane.",
    ],
    sources: [
      ["Remah Synagogue", W + "Remah_Synagogue"],
      ["Remah Cemetery", W + "Remah_Cemetery"],
      ["Moses Isserles", W + "Moses_Isserles"],
    ],
  },
  {
    name: "Plac Nowy",
    lat: 50.0517,
    lon: 19.9446,
    address: "Plac Nowy",
    title: "The round market hall that became a kosher slaughterhouse",
    brief: [
      "The “Okrąglak” was built in 1900 as a market hall. From 1928 the Jewish community used it as a kosher poultry slaughterhouse. It is now home to Kraków’s famous zapiekanki (open-faced baguette pizzas) and the starting point of the district’s nightlife.",
    ],
    more: [
      "The square was once called Plac Kupa, and it is still sometimes called the “Jewish Square”. Houses on its north side once belonged to the Jewish hospital beside the Kupa synagogue. The Okrąglak (“the round one”, also nicknamed the Rondel) is a twelve-sided building of stone and brick in the middle of the square. Sources credit its design to either Jan Rzymkowski or Władysław Klimczak.",
      "In 1927 Kraków’s Jewish community took over the building. Józef Weinberger redesigned it, adding a covered pavilion in the old courtyard for a poultry slaughterhouse. This was shechita, the ritual slaughter that follows kosher law. It opened at the start of 1928.",
    ],
    full: [
      "The German occupation ended the slaughterhouse. After 1945 the building went back to being an ordinary market hall, and stayed one through the communist years. It was entered in the register of monuments on 19 December 2008.",
      "Today the square is a weekday market for vegetables and antiques, with many cafés and pubs around it. It hosts flea markets and festivals, including a concert on the Okrąglak’s roof during the Jewish Culture Festival. Zapiekanki are sold in and around the Okrąglak, and in 2025 its interior reopened as a food hall called Jatka 2.0.",
    ],
    sources: [
      [
        "Okrąglak (Polish)",
        WPL + "Hala_Targowa_%E2%80%9EOkr%C4%85glak%E2%80%9D_w_Krakowie",
      ],
      ["Plac Nowy (Polish)", WPL + "Plac_Nowy_w_Krakowie"],
    ],
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

const LEVEL_NAMES = ["Brief", "More", "Full"];

// Stretchtext: one slider per card. CSS shows/hides .lvl-N paragraphs from card.dataset.level.
function buildStretch(host, id, label, content) {
  host.dataset.level = "1";
  const wrap = document.createElement("div");
  wrap.className = "stretch";

  const control = document.createElement("div");
  control.className = "stretch-control";
  const lab = document.createElement("label");
  lab.htmlFor = id;
  lab.textContent = "Detail: ";
  const out = document.createElement("output");
  out.htmlFor = id;
  out.textContent = LEVEL_NAMES[0];
  lab.append(out);

  const range = document.createElement("input");
  range.type = "range";
  range.id = id;
  range.min = "1";
  range.max = "3";
  range.step = "1";
  range.value = "1";
  range.setAttribute("aria-label", `Detail level for ${label}`);
  range.setAttribute("aria-valuetext", LEVEL_NAMES[0]);
  range.addEventListener("input", () => {
    const lvl = Number(range.value);
    host.dataset.level = String(lvl);
    range.setAttribute("aria-valuetext", LEVEL_NAMES[lvl - 1]);
    out.textContent = LEVEL_NAMES[lvl - 1];
  });

  const ticks = document.createElement("div");
  ticks.className = "ticks";
  ticks.setAttribute("aria-hidden", "true");
  LEVEL_NAMES.forEach((name) => {
    const t = document.createElement("span");
    t.textContent = name;
    ticks.append(t);
  });
  control.append(lab, range, ticks);

  const body = document.createElement("div");
  body.className = "stretch-body";
  [
    [1, content.brief],
    [2, content.more],
    [3, content.full],
  ].forEach(([lvl, paras]) => {
    paras.forEach((text) => {
      const p = document.createElement("p");
      p.className = `lvl-${lvl}`;
      p.textContent = text;
      body.append(p);
    });
  });

  const src = document.createElement("p");
  src.className = "lvl-3 sources";
  src.append("Sources: ");
  content.sources.forEach(([name, url], i) => {
    if (i) src.append(" · ");
    const a = document.createElement("a");
    a.href = url;
    a.target = "_blank";
    a.rel = "noopener";
    a.textContent = name;
    src.append(a);
  });
  body.append(src);

  wrap.append(control, body);
  return wrap;
}

function renderIntro() {
  const host = $("history");
  host.append(
    buildStretch(host, "detail-history", "the history of Kazimierz", INTRO),
  );
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

    const stretch = buildStretch(card, `detail-${n}`, s.name, s);

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
    card.append(h, stretch, c, actions);
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
  const fallback = [...STOPS, STOPS[0]].map((s) => [s.lat, s.lon]);
  try {
    const route = await fetchRoute([...STOPS, STOPS[0]]);
    const latlngs = route.geometry.coordinates.map(([lon, lat]) => [lat, lon]);
    tourLine = L.polyline(latlngs, {
      color: "#b0412e",
      weight: 5,
      opacity: 0.85,
    });
    $("route-text").textContent =
      `${STOPS.length}-stop loop · ${formatDistance(route.distance)} · about ${formatMinutes(route.distance)} on foot, ending back at the start.`;
    const legs = $("legs");
    route.legs.forEach((leg, i) => {
      const li = document.createElement("li");
      li.textContent = `${STOPS[i].name} → ${STOPS[(i + 1) % STOPS.length].name}: ${formatDistance(leg.distance)}, ${formatMinutes(leg.distance)}`;
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
renderIntro();
renderStops();
drawTour();
startLocation();
