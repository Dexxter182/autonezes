// Adatok: a "Elektromos autó vásárlás" Google Sheet és a hasznaltauto.hu hirdetések alapján (2026-11-22).
// Fotók: img/<hirdetés-azonosító>.jpg (a hasznaltauto.hu első képe, kicsinyítve); a build beágyazza őket.
// Eredeti: https://img.hasznaltautocdn.com/2048x1536/<hirdetés>/<kép>.jpg
const IMG = (ad, img) => (window.PHOTOS && window.PHOTOS[ad]) || `img/${ad}.jpg`;
const NAV = (dest) => `https://www.google.com/maps/dir/?api=1&travelmode=driving&destination=${encodeURIComponent(dest)}`;

window.TRIP = {
  title: 'Autónézés',
  date: '2026-11-23',
  dateLabel: 'hétfő, 2026. november 23.',
  summary: 'Indulás 12:00-kor Pilisvörösvárról · 4 megálló, 6 autó · kb. 151 km, kb. 3 óra vezetés · hazaérkezés kb. 17:45',
  fullRoute: 'https://www.google.com/maps/dir/Pilisv%C3%B6r%C3%B6sv%C3%A1r/Solym%C3%A1r/2151+F%C3%B3t,+Erdei+s%C3%A9t%C3%A1ny+5/1182+Budapest,+Kir%C3%A1lyh%C3%A1g%C3%B3+utca+87/V%C3%B6r%C3%B6sk%C5%91+Aut%C3%B3+Biatorb%C3%A1gy/Pilisv%C3%B6r%C3%B6sv%C3%A1r',
  notes: [
    'A menetidőkben 5–10 perc ráhagyás van.',
    '16:00 körül sötétedik, a 3. megálló végére és a 4. megállóra lámpa kell.',
    'Ha csúsztok, Biatorbágy kihagyható, de ezt jelezni kell nekik, mert 17:00-kor zárnak.'
  ],
  start: { time: '12:00', name: 'Indulás, Pilisvörösvár', lat: 47.6194053, lon: 18.9065538, leg: '11 perc, 9 km' },
  end: { time: '~17:45', name: 'Vissza Pilisvörösvárra' },
  stops: [
    {
      n: 1, time: '12:10–12:50', name: 'Pilisvörösvár / Solymár',
      lat: 47.590, lon: 18.933,
      address: 'A pontos cím telefonon: az eladó szerint mindhárom autó egy helyen áll, Solymáron vagy Pilisvörösváron',
      who: 'Magánszemély · hétvégén is megtekinthető',
      phone: '+36307529609', phoneLabel: '(+36) 30/752 9609',
      call: 'Pontos cím elkérése, érkezés 12:10-kor',
      nav: NAV('Solymár'),
      leg: '40 perc, 29 km',
      cars: ['23651328', '23651371', '22735226'],
      watch: [
        'Mindhárom autónál SOH-kiolvasás, ne csak a hirdetés szerinti érték',
        'Miért van egy eladónál három Kona? (kereskedő-e valójában)',
        'Szervizkönyvek, és melyik autót helyezték először Magyarországon forgalomba',
        'Az akkuvisszahívást elvégezték-e',
        'Alvázszámok elkérése az előélet-lekérdezéshez',
        'B) autó: fényezés és rések nappali fényben',
        'C) autó: mi történt a 2020/12-es gyártás és a 2021/8-as forgalomba helyezés között'
      ]
    },
    {
      n: 2, time: '13:35–14:15', name: 'Fót',
      lat: 47.6243995, lon: 19.2101083,
      address: '2151 Fót, Erdei sétány 5',
      who: 'opalcar kft (kereskedés)',
      phone: '+36703722856', phoneLabel: '(+36) 70/372 2856',
      call: 'Érkezés kb. 13:35-kor',
      nav: NAV('2151 Fót, Erdei sétány 5'),
      leg: '42 perc, 46 km (M0)',
      cars: ['23539209'],
      watch: [
        'SOH-kiolvasás: a 100% egyelőre csak szóbeli állítás',
        'Szervizkönyv: az utolsó szerviz dátuma és km-e',
        'Van-e hőszivattyú (a hirdetés nem jelöli)',
        'Alvázszám elkérése az előélet-lekérdezéshez',
        'Rétegvastagság-mérés, résillesztések'
      ]
    },
    {
      n: 3, time: '15:05–15:40', name: 'Budapest XVIII.',
      lat: 47.4188371, lon: 19.2079852,
      address: '1182 Budapest, Királyhágó utca 87. (Fenyőker Fatelep)',
      who: 'Desztics Róbert, magánszemély · 12:30 után bármikor, de szólni kell',
      phone: '+36209147989', phoneLabel: '(+36) 20/914 7989',
      call: 'Érkezés kb. 15:05-kor',
      nav: NAV('1182 Budapest, Királyhágó utca 87'),
      leg: '39 perc, 40 km (M0)',
      cars: ['23693027'],
      watch: [
        'Behozatal papírjai: eredetiségvizsga, magyar forgalomba helyezés dátuma',
        '2019-es Kona: az akkuvisszahívást elvégezték-e (alvázszámmal Hyundai szervizben ellenőrizhető)',
        'Szerviz 2024 júniusa óta: volt-e, és hol',
        'A motorháztető karcolása, fényezés, rések',
        'Az elejéről nincs jó fotó: első sarkok, lökhárító'
      ]
    },
    {
      n: 4, time: '16:25–17:00', name: 'Biatorbágy',
      lat: 47.4694484, lon: 18.8834624,
      address: '2051 Biatorbágy, Budaörsi út vége, balra a murvás úton (a Premier Outlet fölött)',
      who: 'Vöröskő Autó (kereskedés) · hétfőn 17:00-ig',
      phone: '+36703143045', phoneLabel: '(+36) 70/314 3045',
      call: 'Érkezés kb. 16:25-kor, 17:00-kor zárnak',
      nav: NAV('Vöröskő Autó Biatorbágy'),
      leg: '42 perc, 29 km',
      cars: ['23629931'],
      watch: [
        'SOH-kiolvasás (a hirdetés nem adja meg)',
        '2019-es Kona: az akkuvisszahívást elvégezték-e',
        'A fotókon karcosnak tűnnek az ajtóoszlopok',
        'Sötétedés után: lámpával a fényezés és a rések',
        'Garancia feltételei, ha szóba jön'
      ]
    }
  ],
  bring: [
    'Erős lámpa (16:00 után sötét)',
    'Rétegvastagság-mérő',
    'OBD-olvasó és telefonos app a SOH-hoz',
    'Feltöltött telefon'
  ],
  everyCar: [
    'SOH-kiolvasás (OBD-olvasóval vagy szervizpapírral)',
    'Rétegvastagság-mérés minden panelen',
    'Résillesztések: motorháztető, ajtók, csomagtartó, lámpák',
    'Ülés- és kormányfűtés, klíma, hőszivattyú kipróbálása',
    'Töltés kipróbálása: AC és DC, egy- vagy háromfázisú',
    'Szervizkönyv, utolsó szerviz, akkuvisszahívás',
    'Kulcsok száma, töltőkábelek megléte',
    'Gumik állapota, téli gumi van-e',
    'Próbaút: futómű, fékek, zajok',
    'Próbaút: morajlás 40–80 km/h között (motor-reduktor csapágy), kopogás gázadáskor és visszavételkor',
    'Volt-e már csapágy- vagy motorcsere? Ha igen, számla',
    'Alvázszám és forgalmi fotó az előélet-lekérdezéshez'
  ]
};

window.CARS = [
  // --- A hétfői kör autói ---
  {
    id: '23651328', stop: 1, tag: '1A', color: 'fehér',
    name: 'Hyundai Kona EV 64 kWh Premium, napfénytetős',
    url: 'https://www.hasznaltauto.hu/szemelyauto/hyundai/kona/hyundai_kona_ev_64kwh_premium_elektromos_napfenyteto-23651328',
    img: IMG('23651328', '33463777'),
    price: '7 490 000 Ft', year: '2020/9', km: '96 000 km', soh: '100% (hirdetés szerint)',
    heatpump: 'van', mot: '2027/10', seller: 'Magánszemély', place: 'Solymár vagy Pilisvörösvár', dist: '0–9 km',
    phone: '+36307529609', phoneLabel: '(+36) 30/752 9609',
    plate: '', vin: '', sunroof: true,
    note: '',
    info: 'Elektromos napfénytető, 3 fázis, HUD, Krell, ülés- és kormányfűtés, bőr/szövet elektromos ülések. A hirdető szerint baleset- és sérülésmentes, gyári festékvastagságú, végig vezetett szervizkönyvvel.',
    summary: 'Kevés km, a hirdetés szerint 100%-os akku, hőszivattyú, háromfázisú töltés és napfénytető. A gyári festékvastagságot rétegvastagság-mérővel érdemes ellenőrizni.'
  },
  {
    id: '23651371', stop: 1, tag: '1B', color: 'szürke metál',
    name: 'Hyundai Kona EV 64 kWh Premium',
    url: 'https://www.hasznaltauto.hu/szemelyauto/hyundai/kona/hyundai_kona_ev_64kwh_premium-23651371',
    img: IMG('23651371', '32842231'),
    price: '7 290 000 Ft', year: '2020/12', km: '119 500 km', soh: 'nincs megadva',
    heatpump: 'van', mot: '2027/4', seller: 'Magánszemély', place: 'Solymár vagy Pilisvörösvár', dist: '0–9 km',
    phone: '+36307529609', phoneLabel: '(+36) 30/752 9609',
    plate: '', vin: '', sunroof: false,
    note: 'ez innen tök szép, de ugye fa alatt van fotózva',
    info: 'Hőszivattyú, 3 fázis, HUD, Krell, bőr elektromos ülések, ülés- és kormányfűtés. A fotók fa alatt készültek, a fényezést élőben kell megnézni.',
    summary: 'Teljes felszereltségű, de a 119e km sok, és az akku állapota nem ismert. Jó összehasonlítási alap a másik kettőhöz.'
  },
  {
    id: '22735226', stop: 1, tag: '1C', color: 'kék metál',
    name: 'Hyundai Kona EV 64 kWh Premium',
    url: 'https://www.hasznaltauto.hu/szemelyauto/hyundai/kona/hyundai_kona_ev_64kwh_premium-22735226',
    img: IMG('22735226', '33539009'),
    price: '7 790 000 Ft', year: '2021/8 (gyártás 2020/12)', km: '79 000 km', soh: '100% (hirdetés szerint)',
    heatpump: 'van', mot: '2028/6', seller: 'Magánszemély', place: 'Solymár vagy Pilisvörösvár', dist: '0–9 km',
    phone: '+36307529609', phoneLabel: '(+36) 30/752 9609',
    plate: '', vin: '', sunroof: false,
    note: '',
    info: 'Fűthető és hűthető elektromos első ülések, hátsó ülésfűtés, 3 fázis, HUD, Krell, nagy navi.',
    summary: 'A legdrágább a listán, de a három helyi Kona közül ebben a legkevesebb a km, és ez a legjobban felszerelt. 2020 decemberben gyártották, 2021 augusztusában helyezték forgalomba: erre rá kell kérdezni.'
  },
  {
    id: '23539209', stop: 2, tag: '2', color: '',
    name: 'Kia Soul EV 64 kWh Platinum',
    url: 'https://www.hasznaltauto.hu/szemelyauto/kia/soul/kia_soul_ev_64kwh_platinum_full_extra_meses_allapot_serulesmentes_eloelet-23539209',
    img: IMG('23539209', '31469000'),
    price: '7 000 000 Ft', year: '2021/8', km: '78 000 km', soh: '100% (eladó szerint, telefonon)',
    heatpump: 'nincs jelölve', mot: 'nincs megadva', seller: 'Kereskedés (opalcar kft)', place: 'Fót', dist: '34 km',
    phone: '+36703722856', phoneLabel: '(+36) 70/372 2856',
    plate: '', vin: '', sunroof: false,
    note: 'Érdeklődni, nincs szervízkönyv fotózva, de kívülről szép.',
    info: 'Sérülésmentes előélet (hirdető szerint). Bőr belső, üléshűtés, ülésfűtés elöl és hátul, kormányfűtés, 360 fokos kamera, holttérfigyelő, 10 hangszóró. Telefonon: 100%-os akku, van szervizkönyv, hétfőn bármikor mehettek.',
    summary: 'A legfiatalabb Soul a listán, és ebben a legkevesebb a km. A 100%-os akku és a szervizkönyv egyelőre csak szóbeli állítás.'
  },
  {
    id: '23693027', stop: 3, tag: '3', color: '',
    name: 'Hyundai Kona EV 64 kWh Executive',
    url: 'https://www.hasznaltauto.hu/szemelyauto/hyundai/kona/hyundai_kona_ev_64kwh_executive_hoszivattyu_elektromos_napfenyteto_ulesszelloztetes_futes_hud_krell_diag_s-23693027',
    img: IMG('23693027', '33362454'),
    price: '7 190 000 Ft (akciós, eredetileg 7 290 000)', year: '2019/10', km: '87 000 km', soh: '100% (Hyundai márkaszerviz mérte)',
    heatpump: 'van', mot: '2028/1', seller: 'Magánszemély (Desztics Róbert)', place: 'Budapest XVIII.', dist: '33 km',
    phone: '+36209147989', phoneLabel: '(+36) 20/914 7989',
    plate: 'AU-HB-654', vin: 'KMHK581GFKU050716', sunroof: true,
    note: 'kivül nem látok a képeken szart sem, és a szar kép is kevés... van digitális szervizkönyv',
    info: 'Elektromos napfénytető, ülésfűtés és -szellőztetés, kormányfűtés, HUD, Krell hifi, távolságtartó tempomat, holttérfigyelő. Telefonon: egy hónapja hozták be, a motorháztetőn van egy karcolás. A szervizkönyv szerint holland lízingautó volt, az utolsó dokumentált szerviz 75 204 km-nél, 2024 júniusában.',
    summary: 'Alacsony km, márkaszervizben mért 100%-os akku, hőszivattyú, napfénytető. A hirdetés magyarországi első forgalomba helyezést jelöl, a szervizkönyv viszont holland előéletet mutat.'
  },
  {
    id: '23629931', stop: 4, tag: '4', color: '',
    name: 'Hyundai Kona EV 64 kWh Executive',
    url: 'https://www.hasznaltauto.hu/szemelyauto/hyundai/kona/hyundai_kona_ev_64kwh_executive_led_navi_kamera_bor_ules_hutes-futes_hoszivattyu-23629931',
    img: IMG('23629931', '32579519'),
    price: '6 699 000 Ft', year: '2019/9', km: '109 686 km', soh: 'nincs megadva',
    heatpump: 'van', mot: '2028/10', seller: 'Kereskedés (Vöröskő Autó)', place: 'Biatorbágy', dist: '29 km',
    phone: '+36703143045', phoneLabel: '(+36) 70/314 3045',
    plate: '', vin: 'KMHK581GFKU040933', sunroof: false,
    note: 'miért karcosak itt is az oszlopok?',
    info: 'LED, navigáció, bőr belső, ülésfűtés és -szellőztetés, kulcs nélküli nyitás, tolatókamera. A kereskedő szerint gyári fényezésű; egyéves garancia köthető, 30%-tól hitelre is vihető.',
    summary: 'A legolcsóbb Kona a listán, hőszivattyúval. Az alvázszám a hirdetésben szerepel, az előélet előre lekérdezhető. Az akku állapota nem ismert.'
  },

  // --- A körön kívüli autók ---
  {
    id: '23447192', stop: null, tag: '', color: '',
    name: 'Kia Soul EV 64 kWh Platinum',
    url: 'https://www.hasznaltauto.hu/szemelyauto/kia/soul/kia_soul_ev_64kwh_platinum-23447192',
    img: IMG('23447192', '30353054'),
    price: '6 690 000 Ft', year: '2020/8', km: '115 000 km', soh: '100% (eladó szerint, telefonon)',
    heatpump: 'nincs megadva', mot: 'nincs megadva', seller: 'Magánszemély', place: 'Pécel', dist: '48 km',
    phone: '+36305559692', phoneLabel: '(+36) 30/555 9692',
    plate: 'AE-JX-045', vin: '', sunroof: false,
    note: 'a jobb ajtókon a műanyag miért olyan kopott? eddig ez a legőszintébb hirdetés fotók alapján',
    info: 'Márkaszervizben karbantartott, garanciális; a leírásban 2021-es évjárat szerepel. Telefonon: most javíttatják a csapágyat, 1 év garanciával; amíg szervizben van, nem lehet megnézni.',
    summary: 'Korrekt ár. Az évjárat ellentmondásos (2020 vagy 2021), erre rá kell kérdezni. Érdemes megkérdezni, mennyibe került a csapágyjavítás.'
  },
  {
    id: '23721894', stop: null, tag: '', color: '',
    name: 'Kia Soul EV 64 kWh Gold',
    url: 'https://www.hasznaltauto.hu/szemelyauto/kia/soul/kia_soul_ev_64kwh_gold_120e_km_-_magasan_felszerelt_-_head-up-23721894',
    img: IMG('23721894', '33745118'),
    price: '6 190 000 Ft', year: '2019/8', km: '120 000 km', soh: 'nincs megadva',
    heatpump: 'nincs megadva', mot: '2028/10', seller: 'Kereskedés', place: 'Kiskunfélegyháza', dist: '134 km',
    phone: '+36209248599', phoneLabel: '(+36) 20/924 8599',
    plate: '', vin: '', sunroof: false,
    note: 'vannak rajta apróságok pl mind2 b oszlop meg a bal c is össze van baszva valamivel... , a többi szebb',
    info: 'Harman/Kardon, adaptív tempomat. Kereskedés, 09:00–17:00 között lehet menni.',
    summary: 'A legolcsóbb, de a legrégebbi is, és az akku állapota nem ismert. Messze van.'
  },
  {
    id: '23727978', stop: null, tag: '', color: '',
    name: 'Hyundai Kona EV 64 kWh Premium',
    url: 'https://www.hasznaltauto.hu/szemelyauto/hyundai/kona/hyundai_kona_ev_64kwh_premium-23727978',
    img: IMG('23727978', '33807653'),
    price: '7 250 000 Ft', year: '2021/3', km: '82 000 km', soh: 'nincs megadva (cellacsere folyamatban)',
    heatpump: 'nincs megadva', mot: '2027/3', seller: 'Magánszemély', place: 'Dunaharaszti', dist: '45 km',
    phone: '+36209675064', phoneLabel: '(+36) 20/967 5064',
    plate: 'SRA-149', vin: '', sunroof: false,
    note: 'a bal1 öülés nem tetsik, de semmi extra. ez legalább magyar, így talán könnyebb lekövetni',
    info: 'Garanciális cellacsere folyik (alkatrészre vár, addig csak 80%-ig tölt). Magyarországon helyezték forgalomba, márkaszervizben szervizelték; téli és nyári gumi; apróbb karcok.',
    summary: 'Fiatal, kevés km, magyarországi, márkaszervizes előélettel. A cellacsere után érdemes megnézni, és papírt kérni a cseréről.'
  },
  {
    id: '23767563', stop: null, tag: '', color: '',
    name: 'Hyundai Kona EV 64 kWh Comfort (facelift)',
    url: 'https://www.hasznaltauto.hu/szemelyauto/hyundai/kona/hyundai_kona_ev_64kwh_comfort_serules_mentes_2_kulcs_uj_allapot_73.348_km_szervizkonyv_friss_szerviz-23767563',
    img: IMG('23767563', '34313436'),
    price: '7 290 000 Ft', year: '2021/10', km: '73 348 km', soh: 'nincs megadva',
    heatpump: 'nincs jelölve (Comfortban csak felárért volt)', mot: '2028/8', seller: 'Kereskedés (Danan Euro Car)', place: 'Vác', dist: '57 km',
    phone: '+36705300048', phoneLabel: '(+36) 70/530 0048',
    plate: 'AO-PJ-015', vin: '', sunroof: false,
    note: 'nem tudom a hátulját eldönteni. a csomagtartó ajtó és a lámpa között olyan nagy a rés... de a többi oké',
    info: 'Facelift; első tulajdonos, 2 kulcs, sérülésmentes (kereskedő szerint); alap felszereltség. A belső fotón az ülésfűtés és a kormányfűtés helyén vakgomb van.',
    summary: 'A legfiatalabb autó, a legkevesebb km-rel, de nincs benne ülés- és kormányfűtés, a hőszivattyú sincs jelölve.'
  },
  {
    id: '23439877', stop: null, tag: '', color: '',
    name: 'Kia Soul EV 64 kWh Platinum',
    url: 'https://www.hasznaltauto.hu/szemelyauto/kia/soul/kia_soul_ev_64kwh_platinum_kamera360-head_up-ulesfutes_szelloztetes_elol_hatul-gyorstoltes-bluelink-23439877',
    img: IMG('23439877', '30272783'),
    price: '6 590 000 Ft', year: '2021/7', km: '149 125 km', soh: '99%',
    heatpump: 'nincs megadva', mot: '2028/7', seller: 'Magánszemély', place: 'Nagybaracska', dist: '226 km',
    phone: '', phoneLabel: '',
    plate: '', vin: '', sunroof: false,
    note: 'nekem képeken ez is rendben van',
    info: 'Első tulajdonos, 11 kW 3 fázis, 360 fokos kamera, szervizkönyv.',
    summary: '99%-os akku, első tulajdonos, jó ár, de sok km. Ugyanott van, mint a másik nagybaracskai.'
  },
  {
    id: '23711007', stop: null, tag: '', color: '',
    name: 'Kia Soul EV 64 kWh Platinum',
    url: 'https://www.hasznaltauto.hu/szemelyauto/kia/soul/kia_soul_ev_64kwh_platinum-23711007',
    img: IMG('23711007', '33586739'),
    price: '6 990 000 Ft', year: '2020/5', km: '106 100 km', soh: '98%',
    heatpump: 'van', mot: '2028/11', seller: 'Magánszemély', place: 'Nagybaracska', dist: '226 km',
    phone: '', phoneLabel: '',
    plate: '', vin: '', sunroof: false,
    note: 'a szervíz könyv alapján több gazdás? egyébként szép',
    info: '11 kW 3 fázis, Harman/Kardon, 2 kulcs, friss vizsga.',
    summary: 'Műszakilag az egyik legjobb Soul: 98%-os akku, hőszivattyú, háromfázisú töltés. Hátránya a 226 km-es távolság.'
  }
];

