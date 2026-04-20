// i18n.js
// Globální překlady: STR.cs + STR.en
// app.js si bere překlady přes useLang() -> t = STR[lang]

window.STR = {
  cs: {
    brand1: "Jana Segelberg",
    brand2: "Stínění s esencí",

    a11yHome: "Domů",
    a11yMainNav: "Hlavní navigace",
    a11yLangSwitcher: "Přepínač jazyka",
    a11yMenu: "Menu",

    // Header nav
    nav: ["Jak pracujeme", "Kolik zaplatíte", "Galerie", "Esence", "Kontakt"],

    // Hero
    heroSub: "Záclony · Závěsy · Rolety · Garnýže na míru",
    cta: "Domluvit konzultaci",
    heroKicker: "Jana Segelberg · Interiérové stínění",
    heroKickerSmall: "Praha · okolí · interiéry",
    heroPanelTitle: "Světlo, klid a detail",
    heroPanelText:
      "Navrhujeme a realizujeme vnitřní stínění tak, aby prostor působil přirozeně, harmonicky a dlouhodobě dobře fungoval.",
    heroScript: "Vy rozhodujete. My navrhujeme.",
    heroTitleMobile: "Záclony, závěsy, rolety a garnýže na míru",
    heroLead: "Stínění navrhujeme podle prostoru, světla a způsobu používání interiéru.",
    heroLeadMobile: "Stínění navrhujeme podle prostoru, světla a toho, jak interiér funguje.",

    heroSlides: [
      { h1: "Záclony, závěsy, rolety a garnýže podle vašeho prostoru", bg: "assets/img/hero/hero-01.webp", pos: "center", posMobile: "center 35%" },
      { h1: "Navrhujeme stínění, které dává interiéru klid, soukromí a atmosféru", bg: "assets/img/hero/hero-02.webp", pos: "center", posMobile: "center 55%" },
      { h1: "Kompletní realizace od konzultace po finální montáž", bg: "assets/img/hero/hero-03.webp", pos: "center", posMobile: "center 50%" }
    ],

    homeAboutH: "Navrhujeme a realizujeme vnitřní stínění",
    homeAboutHMobile: "Stínění podle prostoru",

    homeAbout: [
      "Stínění není samostatný prvek. Vybíráme ho v návaznosti na prostor, materiály i způsob používání tak, aby celek působil klidně a jistě."
    ],
    homeAboutMobile:
      "Vybrané řešení musí sedět prostoru, světlu i tomu, jak místnost během dne používáte.",

    featureNoteTitle: "Návrh začíná v prostoru",
    featureNoteTitleMobile: "Návrh začíná v prostoru",
    featureNoteText:
      "Materiál vybíráme v reálném světle, v konkrétním interiéru a s ohledem na jeho rytmus.",
    featureNoteTextMobile:
      "Materiál vybíráme přímo v interiéru a v reálném světle.",
    featureImageAlt: "Vzorky a materiály",
    inspLeadMobile:
      "Správně navržené stínění ovlivňuje světlo, soukromí i celkový pocit z interiéru.",
    homeAboutExtra:
      "Pracujeme s tím, co v prostoru skutečně hraje roli — světlo, proporce, potřeba soukromí, způsob používání interiéru i jemnost materiálů. Nejde jen o to okno zakrýt. Jde o to, aby prostor fungoval lépe.",

    homeServicesTitle: "Řešení, která drží atmosféru i funkci",
    homeServicesLead:
      "Každá vrstva má svoji roli. Působení prostoru stojí na detailu, ne na množství prvků.",
    homeServicesLeadMobile: "",

    homeAtmosTitle: "Interiér se nemění jen vzhledem. Mění se pocitem.",
    homeLuxuryTitle: "Luxusní pocit nevzniká okázalostí. Vzniká jistotou.",
    homeLuxuryLead: "Na výsledku je to vidět. V proporci, materiálu i v tom, jak prostor funguje každý den.",
    homeProjectsLeadMobile: "",
    benefitDetailLabel: "Detail",
    homeProjectsTitle: "Hotové realizace",
    homeProjectsLead:
      "Výběr z interiérů, kde stínění dotváří klid, měkkost a správnou míru světla.",
mobileProjectsCtaTitle: "Chcete podobný výsledek?",
mobileProjectsCtaText:
  "Začínáme vaším prostorem, světlem v interiéru a tím, jak má místnost během dne fungovat.",

mobileServicesCtaTitle: "Nevíte, co je pro váš prostor vhodné?",
mobileServicesCtaText:
  "Na konzultaci vybereme vhodné řešení podle světla, soukromí a způsobu používání interiéru.",

homeFinalCtaLocation:
  "Praha a okolí. Konzultace přímo ve vašem interiéru.",
    
    homeFaqTitle: "To podstatné, co chce klient vědět předem",
    homeFinalCtaTitle: "Nejdřív se podíváme na váš prostor. Až potom navrhujeme.",

    serviceCardCta: "Zobrazit orientační ceny →",
    services: [
      { name: "Záclony", note: "Zjemní denní světlo, zútulní a odlehčí prostor." },
      { name: "Závěsy", note: "Pomohou se zatemněním, akustikou i pocitem tepla a klidu." },
      { name: "Rolety", note: "Praktické řešení pro přesnou regulaci světla a čistý vzhled." },
      { name: "Technické systémy", note: "Kolejnice, garnýže a řešení navržená podle prostoru." },
      { name: "Servis", note: "Sundání, vyčištění, vyžehlení a opětovné zavěšení našich realizací." }
    ],
    serviceCardCta: "Zobrazit orientační ceny →",

    inspH: "Atmosféra prostoru",
    inspLead:
      "Správně navržené stínění mění víc než jen okno.\nOvlivňuje světlo během dne, soukromí večer i celkový dojem z interiéru. Rozdíl mezi prostorem bez stínění a promyšleným řešením bývá větší, než čekáte.",
    inspTags: [
      "Světlo · Prostor · Svoboda",
      "Měkkost · Pohyb · Soukromí",
      "Funkčnost · Ticho · Domov"
    ],

    benefitsH: "Proč si klienti vybírají nás",
    benefits: [
      { name: "Individuální návrh", note: "Každý prostor má jiné světlo, proporce i potřeby. Návrh proto vzniká vždy podle konkrétního interiéru." },
      { name: "20 let zkušeností", note: "Známe materiály, technická řešení i detaily, které rozhodují o výsledku." },
      { name: "Kompletní realizace", note: "Od první konzultace přes zaměření a výrobu až po montáž a finální zavěšení." }
    ],

    benefitCardCta: "Zjistit víc →",

    faqH: "Často se ptáte",
    faq: [
      { q: "Jak probíhá konzultace?", a: "Přijedeme k vám, podíváme se na prostor, probereme vaše potřeby a doporučíme vhodné řešení stínění." },
      { q: "Jak dlouho trvá realizace?", a: "Obvykle 2–8 týdnů podle rozsahu zakázky, zvolených materiálů a dostupnosti." },
      { q: "Přivezete vzorky látek k nám domů?", a: "Ano, vzorky látek vozíme na osobní konzultaci přímo do vašeho prostoru, aby bylo možné vybírat v reálném světle a kontextu interiéru." },
      { q: "Dodáváte i kolejnice a garnýže?", a: "Ano, zajišťujeme kompletní dodání včetně kolejnic, garnýží, technických systémů a montáže." },
      { q: "Je možné řešit i jen jednu místnost?", a: "Ano. Navrhujeme jak celé interiéry, tak jednotlivé místnosti podle konkrétních potřeb klienta." }
    ],

    homeCtaNote: "Praha a okolí. Konzultace přímo ve vašem interiéru. Návrh, výroba i montáž na míru.",

   homeTrust: [
  {
    value: "20+",
    label: "let zkušeností",
    detail: "Ve vnitřním stínění a textilních realizacích."
  },
  {
    value: "Individuální návrh",
    label: "podle prostoru a jeho fungování",
    detail: "Podle světla, proporcí i toho, jak se interiér používá."
  },
  {
    value: "Kompletní realizace",
    label: "od návrhu po montáž",
    detail: "Zaměření, výroba, instalace i finální dekorování."
  },
  {
    value: "Spolupráce",
    label: "s architekty a designéry",
    detail: "Respektujeme koncept interiéru i technické požadavky prostoru."
  }
],
    // Process
    processH: "Jak pracujeme",
    processLead:
      "Od prvního zaměření po finální dekorování. Každý krok má svoje tempo, důvod i přesnost.",
    processLeadMobile:
      "Od zaměření po finální dekorování. Jasně, krok za krokem.",
    processQuoteTitle: "Výsledek má být přirozený",
    processShowDetail: "Zobrazit detail",
    processHideDetail: "Skrýt detail",
    steps: ["Konzultace", "Návrh a cena", "Výroba", "Realizace"],
    stepsTxt: [
      "Přijedeme za vámi, prostor si projdeme přímo na místě a vše přesně zaměříme.\n\nProbereme zda od stínění očekáváte soukromí, zatemnění nebo čistě dekorativní funkci.\n\nUkážeme vám vzorky látek a doporučíme řešení, která dávají v prostoru smysl po technické i vizuální stránce.\n\nPo konzultaci budete mít jasno, jaké možnosti připadají v úvahu a jakým směrem se návrh bude ubírat.",
      "Na základě vybraných materiálů a technického řešení připravíme cenovou nabídku.\n\nTa slouží jako výchozí bod. Pokud je potřeba cenu upravit, hledáme společně alternativy v materiálech, technice nebo skladbě řešení.\n\nCílem je najít rovnováhu mezi funkčností, estetikou a rozpočtem.\n\nPřed zahájením výroby přesně víte, co bude realizováno a v jaké ceně.",
      "Po schválení nabídky a složení zálohy zahajujeme výrobu.\n\nV této fázi probíhá zpracování textilu a příprava všech technických prvků.\n\nSoučasně domlouváme termín realizace tak, aby navazoval na dokončení výroby.\n\nVýroba obvykle trvá několik týdnů podle rozsahu zakázky a zvolených materiálů.",
      "Hotové stínění přivezeme, odborně namontujeme a textil pečlivě pověsíme.\n\nZáclony i závěsy vyžehlíme, nadekorujeme a doladíme tak, aby vše fungovalo vizuálně i technicky.\n\nPo dokončení práce prostor uklidíme a předáme vám ho připravený k používání.\n\nNa místě vám vysvětlíme ovládání a doporučíme vhodnou údržbu, aby stínění dlouhodobě fungovalo tak, jak má."
    ],
    processImgs: [
      "assets/img/process/process-01.webp",
      "assets/img/process/process-02.webp",
      "assets/img/process/process-03.webp",
      "assets/img/process/process-04.webp"
    ],
    processBridges: ["Z pozorování vzniká směr.", "Návrh se mění v realitu.", "Detail rozhoduje o výsledku."],
    processMicroByStep: [
      "Světlo, proporce, rytmus dne.",
      "Materiál, technika, harmonie.",
      "Řemeslo, přesnost, trpělivost.",
      "Montáž, doladění, klid."
    ],
    processBehindH: "Co stojí za naší prací",
    processBehindCards: [
      {
        id: "individualni-navrh",
        title: "Individuální návrh",
        p1: "Každý prostor má jiné světlo, jiné proporce a jiný rytmus dne.",
        p2: "Návrh vzniká přímo na místě z pozorování světla, dispozice prostoru a způsobu, jak interiér používáte.",
        p3: "Individuální návrh pro nás znamená společně najít správnou volbu."
      },
      {
        id: "zkusenosti",
        title: "20 let zkušeností",
        p1: "Zkušenosti nám dávají nadhled a jistotu při rozhodování.",
        p2: "Pomáháme vám se zorientovat v možnostech a sladit funkčnost s estetikou.",
        p3: "Výsledkem je řešení, které dává smysl nejen vizuálně, ale i funkčně a dlouhodobě."
      },
      {
        id: "detail",
        title: "Preciznost a jemnost v detailu",
        p1: "Kvalita zpracování a technické provedení rozhodují o tom, jestli stínění bude dlouhodobě fungovat a dobře vypadat i po letech.",
        p2: "V detailech se ukazuje rozdíl mezi řešením, které jen dobře vypadá, a řešením, které obstojí v čase.",
        p3: "Preciznost a detail jsou viditelné na první pohled, právě v nich se potkává vaše očekávání s naší zkušeností."
      }
    ],
    processEnding: "Cílem je, abyste se v prostoru cítili přirozeně a dobře.",

  // Pricing
priceH: "Kolik stojí stínění od nás",
pricingLead: "Orientační ceny a typy řešení pro představu ještě před konzultací.",
pricingLeadMobile: "Orientační ceny pro rychlou představu ještě před konzultací.",
pricingSectionTitle: "Co ovlivňuje cenu stínění",
pricingOpenButton: "Zobrazit orientační ceny",

pricingIntroMobile: [
  "Prostor, materiál a zvolené řešení.",
],

pricingIntro: [
  "Prostor, materiál a zvolené řešení.",
  "Níže najdete orientační přehled."
],

    
pricingDisclaimer:
  "Uvedené částky jsou orientační scénáře pro představu. Konkrétní návrh a rozpočet vždy upřesníme po konzultaci na místě podle rozměrů, zvolených materiálů a technického řešení.",
pricingDisclaimerMobile:
  "Ceny jsou orientační. Přesný návrh a rozpočet připravíme po konzultaci na místě.",
openDetail: "Otevřít detail",
writeMe: "Nezávazná konzultace",
close: "Zavřít",
previous: "Předchozí",
next: "Další",
lightboxHint: "Procházejte fotografie šipkami nebo kliknutím na tlačítka.",
mobileSwipeHint: "Přejeďte pro další",
mobileSwipeHintServices: "Přejeďte pro další řešení",
mobileSwipeHintBenefits: "Přejeďte pro další důvody",
mobileSwipeHintProjects: "Přejeďte pro další realizace",
mobileSwipeHintProcess: "Přejeďte pro další principy",

pricingItems: [
  {
    key: "zaclon",
    title: "Záclony",
    img: "assets/img/pricing/pricing-01.webp",
    vibe: "Světlo zůstává. Prostor se zjemní a zútulní.",
    micro: "Světlo, proporce, jemnost.",
    intro: "Záclony propouští denní světlo a zároveň vytváří základní soukromí v interiéru. Ideální řešení pro obývací pokoje, ložnice i velká francouzská okna.",
    modalLead: "Lehké textilie, které změkčí světlo a doplní interiér o soukromí i lehkost.",
    rangesTitle: "Orientačně (pro představu)",
    ranges: [
      { label: "malé okno (200 x 270cm)", value: "cca 3–16 tis. Kč" },
      { label: "velké okno (500 x 290cm)", value: "cca 8–42 tis. Kč" }
    ],
    rangesNote: "Orientační cena zahrnuje návrh podle prostoru, zaměření, výrobu, montáž a finální dekorování",
    tiersTitle: "Typy",
    tiers: [
      { name: "Základní lehké voály", note: "Vzdušné látky s nižší pořizovací cenou." },
      { name: "Střední kategorie", note: "Vyvážený poměr ceny, vzhledu a funkce." },
      { name: "Prémiové tkaniny", note: "Exkluzivní textura, přírodní materiály." }
    ]
  },
  {
    key: "zaves",
    title: "Závěsy",
    img: "assets/img/pricing/pricing-02.webp",
    vibe: "Vytvoří soukromí. Večer zklidní. Ráno ochrání.",
    micro: "Materiál, ticho, komfort.",
    intro: "Závěsy zajišťují soukromí, zatemnění a pomáhají regulovat světlo i teplotu v prostoru. Vhodné do ložnic, obývacích pokojů i interiérů, kde chcete dosáhnout maximálního klidu.",
    modalLead: "Textil pro větší soukromí, regulaci světla a celkově klidnější atmosféru prostoru.",
    rangesTitle: "Orientačně (pro představu)",
    ranges: [
      { label: "malé okno (200 x 270cm)", value: "cca 6–21 tis. Kč" },
      { label: "velké okno (500 x 290cm)", value: "cca 15–49 tis. Kč" }
    ],
    rangesNote: "Orientační cena zahrnuje návrh podle prostoru, zaměření, výrobu, montáž a finální dekorování",
    tiersTitle: "Typy",
    tiers: [
      { name: "Dekorativní závěs", note: "Primárně vzhled a soukromí." },
      { name: "Dim-out", note: "Ztlumí světlo, ale úplnou tmu neudělá." },
      { name: "Blackout", note: "Maximální zatemnění, částečná tepelná izolace." }
    ]
  },
  {
    key: "roleta",
    title: "Rolety",
    img: "assets/img/pricing/roleta-latkova.webp",
    vibe: "Čisté linie. Funkce bez kompromisu.",
    micro: "Regulace světla, jednoduchost.",
    intro: "Rolety umožňují přesnou regulaci světla a čisté, minimalistické řešení bez závěsů. Vhodné pro kuchyně, koupelny, pracovny i moderní interiéry.",
    subtypes: [
      {
        key: "latkova",
        label: "Látková roleta",
        img: "assets/img/pricing/roleta-latkova.webp",
        micro: "Regulace světla, jednoduchost.",
        intro: "Látkové rolety umožňují regulaci světla podle zvoleného materiálu od lehkého zastínění po výraznější zatemnění. Praktické řešení pro každodenní používání.",
        rangesTitle: "Orientačně (pro představu)",
        ranges: [
          { label: "malé okno (130 x 200cm)", value: "cca 10–35 tis. Kč / ks" },
          { label: "velké okno (350 x 300cm)", value: "cca 32–85 tis. Kč / ks" }
        ],
        rangesNote: "Orientační cena zahrnuje návrh podle prostoru, zaměření, výrobu, montáž a finální dekorování",
        tiersTitle: "Typy",
        tiers: [
          { name: "Screen / denní", note: "Regulace světla, vzdušnost." },
          { name: "Zatemňovací", note: "Větší soukromí a tlumení světla." },
          { name: "Motor", note: "Komfort, vyšší náklady." }
        ]
      },
      {
        key: "rimska",
        label: "Římská roleta",
        img: "assets/img/pricing/roleta-rimska.webp",
        micro: "Měkká textilní vrstva, dekor a klid.",
        intro: "Římské rolety kombinují funkčnost rolety a vzhled závěsu. Vhodné do interiérů, kde chcete zachovat měkkost textilu bez klasických závěsů.",
        rangesTitle: "Orientačně (pro představu)",
        ranges: [
          { label: "malé okno (110 x 150cm)", value: "cca 6–11 tis. Kč / ks" },
          { label: "velké okno (180 x 250cm)", value: "cca 14–19 tis. Kč / ks" }
        ],
        rangesNote: "Orientační cena zahrnuje návrh podle prostoru, zaměření, výrobu, montáž a finální dekorování",
        tiersTitle: "Typy",
        tiers: [
          { name: "Ze záclonových látek", note: "Vzdušnost, praktičnost." },
          { name: "Ze závěsových látek", note: "Soukromí, zatemnění." },
          { name: "Motor", note: "Komfort, vyšší náklady." }
        ]
      },
      {
        key: "plisse",
        label: "Plissé roleta",
        img: "assets/img/pricing/roleta-plisse.webp",
        micro: "Přesné dávkování světla. Skvělé i na atypy.",
        intro: "Plissé rolety umožňují stínění shora i zdola a umožňuje přesně regulovat světlo. Ideální řešení pro atypická okna a specifické situace.",
        rangesTitle: "Orientačně (pro představu)",
        ranges: [
          { label: "malé okno (80 x 100cm)", value: "cca 3,3–6 tis. Kč / ks" },
          { label: "velké okno (120 x 220cm)", value: "cca 7–16 tis. Kč / ks" }
        ],
        rangesNote: "Orientační cena zahrnuje návrh podle prostoru, zaměření, výrobu, montáž a finální dekorování",
        tiersTitle: "Typy",
        tiers: [
          { name: "Screen / denní", note: "Regulace světla, vzdušnost." },
          { name: "Zatemňovací", note: "Větší soukromí a tlumení světla." }
        ]
      }
    ]
  },
  {
    key: "systemy",
    title: "Kolejnice a garnýže",
    img: "assets/img/pricing/systemy-kolejnice.webp",
    vibe: "Základ který vše drží a řídí.",
    micro: "Funkční i dekorativní.",
    intro: "Kolejnice a garnýže zajišťují správnou funkci i vzhled stínění. Navrhujeme je podle prostoru a typu textilu.",
    subtypes: [
      {
        key: "kolejnice",
        label: "Kolejnice",
        img: "assets/img/pricing/systemy-kolejnice.webp",
        micro: "Čistá linie. Funkce a přesnost.",
        intro: "Kolejnice na závěsy a záclony umožňují čisté a funkční řešení stínění. Vhodné pro stropy, stěny a atypické prostory včetně ohýbaných variant.",
        rangesTitle: "Orientačně (pro představu)",
        ranges: [
          { label: "malé okno (200 x 270cm)", value: "cca 1–13 tis. Kč" },
          { label: "velké okno (500 x 290cm)", value: "cca 2.5–18 tis. Kč" }
        ],
        rangesNote: "Orientační cena zahrnuje návrh podle prostoru, zaměření, výrobu, montáž a finální dekorování",
        tiersTitle: "Typy",
        tiers: [
          { name: "Rovná", note: "Jednoduché, čisté řešení." },
          { name: "Ohýbaná", note: "Podle dispozice a vedení prostoru." },
          { name: "Motor", note: "Komfort a automatizace." }
        ]
      },
      {
        key: "garnyze",
        label: "Garnýže",
        img: "assets/img/pricing/systemy-garnyze.webp",
        micro: "Dekor. Detail, který je vidět.",
        intro: "Garnýže tvoří viditelný prvek interiéru. Volíme materiály, barvy i detaily tak, aby ladily s textilem a celkovým stylem prostoru.",
        rangesTitle: "Orientačně (pro představu)",
        ranges: [
          { label: "malé okno (200 x 270cm)", value: "cca 1–13 tis. Kč" },
          { label: "velké okno (500 x 290cm)", value: "cca 2.5–18 tis. Kč" }
        ],
        rangesNote: "Orientační cena zahrnuje návrh podle prostoru, zaměření, výrobu, montáž a finální dekorování",
        tiersTitle: "Typy",
        tiers: [
          { name: "Klasická", note: "Dekorativní řešení do bytů i domů." },
          { name: "Designová", note: "Výraznější materiál, povrch, detail." },
          { name: "Individuální řešení", note: "Specifické uchycení, délky, rohy." }
        ]
      }
    ]
  },
  {
    key: "servis",
    title: "Servis a údržba stínění",
    img: "assets/img/pricing/pricing-05.webp",
    vibe: "Profesionální údržba ve třech krocích.",
    micro: "Znovu jako nové.",
    intro: "Zajišťujeme servis záclon a závěsů od sundání přes praní nebo čištění až po opětovné zavěšení a finální úpravu.",
    modalLead: "Pravidelná údržba, praní i opětovné zavěšení, aby stínění zůstalo v perfektním stavu.",
    rangesTitle: "Orientačně podle rozsahu",
    ranges: [
      { label: "malé okno (200 x 270cm)", value: "cca 6–8 tis. Kč" },
      { label: "velké okno (500 x 290cm)", value: "cca 17–20 tis. Kč" }
    ],
    rangesNote: "Orientační cena zahrnuje obě vrstvy textilu, tedy záclonu i závěs.",
    tiersTitle: "Typy",
    tiers: [
      { name: "Běžná údržba", note: "Sundání, praní/čištění, žehlení a pověšení." },
      { name: "Velké plochy", note: "Více dílů, větší náročnost manipulace." },
      { name: "Atyp / výšky", note: "Speciální přístup, lešení/plošina dle situace." }
    ],
    serviceOnlyNote: "Servis poskytujeme pouze na naše realizace."
  }
],

    // Gallery
    galleryH: "Realizace stínění",
    galleryLead: "Výběr realizací záclon, závěsů, rolet a technických systémů.",
    galleryLeadMobile: "Výběr hotových realizací v rychlejším přehledu pro telefon.",
    gallerySectionTitle: "Realizace, ve kterých stínění nepůsobí navíc. Působí správně.",
    gallerySectionLead: "Výběr realizací záclon, závěsů, rolet a technických systémů.",
    gallerySectionLeadMobile: "Ukázka hotových realizací. Klepnutím otevřete detail fotografie.",
    galleryOurWorkH: "Ukázky našich realizací",
    galleryOurWorkP: "Prohlédněte si realizace záclon, závěsů, rolet, kolejnic a garnýží v různých typech interiérů. Každé řešení navrhujeme na míru podle prostoru, světla a způsobu využití místnosti.",
    galleryShowAll: "Zobrazit všechny realizace →",
    galleryModalH: "Realizace stínění na míru",
    galleryModalSub: "Prohlédněte si detaily našich realizací záclon, závěsů, rolet a technických systémů.",
    galleryPartnersH: "Spolupracujeme s architekty a designéry",
    galleryPartnersP: "Na realizacích často spolupracujeme s architekty a interiérovými designéry, se kterými ladíme finální podobu stínění tak, aby odpovídala prostoru i celkovému konceptu interiéru.",
    galleryVisitWeb: "Navštívit web →",

    galleryPartnersNotes: {
      onoje: "Architektura s citem pro atmosféru, materiál a detail. Dáváme tomu finální vrstvu.",
      richter: "Spolupráce na interiérech, kde hraje roli čistota linií, funkce a klid prostoru.",
      epic: "Interiérové studio se zaměřením na atmosféru, funkci a detail. Společně ladíme finální vrstvu stínění tak, aby prostor působil přirozeně a harmonicky.",
      broda: "Interiérový design zaměřený na nadčasovost, práci s prostorem a materiály. Spolupracujeme na projektech, kde stínění dotváří klid a charakter interiéru."
    },

    // Essences
    essenceH: "Esence",
    essenceLead:
      "Vůně jemně doplňuje vizuální dojem z prostoru. Pomáhá dotvořit atmosféru, která se pojí se světlem, látkou i rytmem dne. Vybrané esence používáme jako nenápadný, ale účinný prvek celkového vnímání interiéru.",
    essenceLeadMobile:
      "Esence vnímáme jako jemnou vrstvu atmosféry, ne jako hlavní téma interiéru.",
    essenceBoxH: "Esence připravujeme",
    essenceBoxP:
      "Vůně budou samostatnou kapitolou navázanou na prostor a atmosféru v něm.\n\nEsence budou laděny tak, aby odpovídaly potřebám a aktivitám vykonávaným v daném prostoru.",
    essenceBoxFoot: "Připravujeme pro vás",

   contactH: "Kontakt",
contactLead: "Pošlete zprávu, fotografie prostoru a ozveme se s dalším krokem.",
contactLeadMobile: "Napište nám a připojte fotky prostoru. Ozveme se s dalším krokem.",
contactAddressLabel: "Adresa",

contactFormTitle: "Nezávazná poptávka",
contactFormIntro:
  "Popište prostor a pošlete fotografie. Společně najdeme řešení, které bude dávat smysl právě u vás.",

contactName: "Jméno a příjmení",
contactEmail: "E-mail",
contactPhone: "Kontakt (telefon)",
contactMessage: "Zpráva",

contactPhotos: "Fotografie (volitelné)",
contactPhotosNote: "Můžete přiložit až 5 fotografií.",

contactNextStepsTitle: "Co bude následovat:",
contactNextSteps: [
  "Navrhneme další postup",
  "Domluvíme termín konzultace",
  "Vzorky přivezeme přímo do interiéru",
],

contactSubmit: "Poslat nezávaznou poptávku",
contactSending: "Odesílání...",

contactSuccess:
  "Děkujeme, zpráva byla odeslána. Ozveme se vám s dalším krokem.",
contactError:
  "Odeslání se nepodařilo. Zkuste to prosím znovu.",

uploadSelect: "Vybrat soubory",
uploadEmpty: "Nejsou vybrané soubory",
uploadSelected: "soubor vybrán",
uploadSelectedFew: "soubory vybrány",
uploadSelectedMany: "souborů vybráno",

  footerContactH: "Kontakt",
footerLegalH: "Práva a informace",
footerTerms: "Obchodní podmínky",
footerPrivacy: "Ochrana osobních údajů",
footerCookies: "Cookies",
footerCta: "Napište mi →",
footerBlurb: "Návrh a realizace vnitřního stínění na míru.\nZáclony · Závěsy · Rolety · Garnýže · Technické systémy",
rights: "Všechna práva vyhrazena.",
    
    // Terms / Privacy / Cookies pages
    termsH: "Obchodní podmínky",
    termsIntro:
      "Tyto obchodní podmínky upravují vztah mezi prodávajícím a zákazníkem při nákupu zboží a služeb prostřednictvím těchto webových stránek. Doporučuji vám je před dokončením objednávky pročíst.",
    termsSections: [
      {
        h: "I. Úvodní ustanovení",
        p:
          "Prodávajícím je podnikatel působící pod jménem nebo obchodní firmou uvedenou na této stránce a v patičce webu (včetně IČO, DIČ a kontaktních údajů). Zákazníkem je fyzická nebo právnická osoba, která uzavírá smlouvu s prodávajícím na dálku, prostřednictvím těchto webových stránek, e-mailu nebo telefonu."
      },
      {
        h: "II. Nabídka zboží a služeb",
        p:
          "Na webu jsou prezentovány zejména hotové nebo zakázkově vyráběné prvky vnitřního stínění, doplňkové produkty (např. esence a vůně) a související služby, jako jsou konzultace, návrh řešení a montáž. U zakázek na míru je cena stanovována individuálně podle konkrétních parametrů zakázky."
      },
      {
        h: "III. Objednávka a uzavření smlouvy",
        p:
          "Zboží nebo služby lze objednat prostřednictvím objednávkového formuláře, e-mailem nebo telefonicky. Smlouva je uzavřena okamžikem potvrzení objednávky ze strany prodávajícího, a to zpravidla e-mailem. U zakázek na míru dochází k uzavření smlouvy až po schválení konkrétní cenové nabídky zákazníkem."
      },
      {
        h: "IV. Cena a platební podmínky",
        p:
          "Ceny jsou uvedeny včetně DPH, je-li prodávající plátcem DPH, a včetně případných zákonných poplatků, není-li uvedeno jinak. Cena může být uhrazena převodem na účet prodávajícího nebo jiným způsobem uvedeným v objednávce. U zakázek na míru si prodávající může vyžádat zálohu, jejíž výše a splatnost jsou uvedeny v nabídce."
      },
      {
        h: "V. Dodací podmínky",
        p:
          "Dodací lhůta hotového zboží je uvedena orientačně u jednotlivých produktů nebo v potvrzení objednávky. U zakázek na míru závisí na povaze zakázky, zvolených materiálech a domluveném harmonogramu. Zboží je doručováno dopravcem nebo předáno při osobní montáži."
      },
      {
        h: "VI. Práva z vadného plnění (reklamace)",
        p:
          "Zákazník je povinen po převzetí zboží zkontrolovat jeho stav a případné zjevné vady bez zbytečného odkladu reklamovat. Reklamace může být uplatněna písemně nebo e-mailem na kontakty uvedené na webu. Prodávající vyřídí reklamaci bez zbytečného odkladu, nejpozději do 30 dnů od jejího uplatnění, pokud se se zákazníkem nedohodne jinak."
      },
      {
        h: "VII. Odstoupení od smlouvy u spotřebitelů",
        p:
          "Je-li zákazník spotřebitelem, má při nákupu na dálku právo odstoupit od smlouvy do 14 dnů od převzetí zboží, není-li zákonem stanovena výjimka. Toto právo se nevztahuje zejména na zboží vyrobené podle přání zákazníka nebo pro jeho osobní potřebu (například závěsy, záclony a stínění šité na konkrétní míru a dle schváleného návrhu)."
      },
      {
        h: "VIII. Mimosoudní řešení sporů",
        p:
          "V případě sporu mezi prodávajícím a spotřebitelem se může spotřebitel obrátit na Českou obchodní inspekci (www.coi.cz) jako subjekt mimosoudního řešení sporů."
      },
      {
        h: "IX. Závěrečná ustanovení",
        p:
          "Právní vztahy mezi prodávajícím a zákazníkem se řídí právním řádem České republiky. Aktuální znění těchto obchodních podmínek je zveřejněno na webových stránkách prodávajícího a může být průběžně aktualizováno."
      }
    ],

    privacyH: "Ochrana osobních údajů",
    privacyIntro:
      "Na této stránce najdete informace o tom, jak zpracovávám osobní údaje v souvislosti s poptávkami, objednávkami a fungováním těchto webových stránek.",
    privacySections: [
      { h: "Správce osobních údajů", p: "Správcem osobních údajů je podnikatel uvedený v kontaktních údajích na těchto stránkách (jméno / název, adresa, IČO, DIČ, e-mail, telefon)." },
      {
        h: "Jaké údaje zpracovávám a za jakým účelem",
        p:
          "Zpracovávám zejména identifikační a kontaktní údaje (jméno, příjmení, název firmy, e-mail, telefon, adresu), dále údaje o poptávce a zakázce (např. rozměry, fotografie oken a interiéru, vaše požadavky na řešení) a fakturační údaje včetně platebních údajů.\n\nÚdaje zpracovávám za účelem vyřízení poptávky, uzavření smlouvy, dodání zboží a služeb, vedení účetnictví a plnění zákonných povinností, případně ochrany svých právních nároků (např. při reklamaci nebo sporu)."
      },
      {
        h: "Právní základ zpracování",
        p:
          "Právním základem je zejména plnění smlouvy nebo jednání před uzavřením smlouvy, splnění právních povinností v oblasti účetnictví a daní a oprávněný zájem na ochraně právních nároků. Pro případný marketing (např. zasílání newsletteru) bych osobní údaje používala pouze s vaším souhlasem nebo na základě oprávněného zájmu, pokud jste mým zákazníkem, a vždy s možností jednoduchého odhlášení."
      },
      {
        h: "Doba uchování osobních údajů",
        p:
          "Údaje související se smlouvou a fakturací uchovávám po dobu stanovenou právními předpisy (typicky 10 let). Údaje z nezávazných poptávek uchovávám po dobu nezbytně nutnou k vyřízení komunikace, obvykle nejdéle 1 rok, pokud z poptávky nevznikne smluvní vztah."
      },
      {
        h: "Předávání osobních údajů třetím stranám",
        p:
          "Osobní údaje mohu předat pouze v nezbytném rozsahu účetnímu nebo daňovému poradci, poskytovatelům IT a hostingových služeb, dopravcům nebo montážním partnerům, pokud je to nutné pro realizaci zakázky, a orgánům veřejné moci, pokud to vyžaduje zákon. S těmito subjekty mám uzavřeny odpovídající smlouvy o zpracování osobních údajů."
      },
      {
        h: "Vaše práva",
        p:
          "Máte právo na přístup k osobním údajům, jejich opravu nebo doplnění, omezení zpracování, výmaz (pokud jsou splněny zákonné podmínky), přenositelnost údajů a právo vznést námitku proti zpracování založenému na oprávněném zájmu.\n\nPokud se domníváte, že dochází k neoprávněnému zpracování osobních údajů, máte také právo podat stížnost u Úřadu pro ochranu osobních údajů (www.uoou.cz)."
      },
      {
        h: "Fotografie interiéru a referenční snímky",
        p:
          "Fotografie vašeho interiéru, oken a realizovaného stínění slouží primárně k návrhu a realizaci zakázky. Pro použití fotografií jako referencí (např. v galerii realizací) vždy požádám o váš výslovný souhlas nebo fotografie používám tak, aby nebylo možné vás jednoznačně identifikovat."
      }
    ],

    cookiesH: "Cookies",
    cookiesP: [
      "Tyto webové stránky používají soubory cookies, které slouží k zajištění jejich základní funkčnosti, případně k anonymnímu měření návštěvnosti a zlepšování uživatelského prostředí.",
      "Cookies jsou malé textové soubory, které se ukládají do vašeho prohlížeče. V nastavení prohlížeče můžete používání cookies kdykoli omezit nebo zcela zakázat. Pokud cookies vypnete, může dojít k omezení některých funkcí webu.",
      "Pokud na webu používám cookies pro marketingové účely nebo pokročilou analytiku, informuji vás o tom při první návštěvě pomocí lišty a mám možnost získat váš souhlas. Souhlas můžete kdykoli odvolat úpravou nastavení nebo změnou nastavení prohlížeče."
    ]
  },

  en: {
    brand1: "Jana Segelberg",
    brand2: "Shade & Scent",

    a11yHome: "Home",
    a11yMainNav: "Main navigation",
    a11yLangSwitcher: "Language switcher",
    a11yMenu: "Menu",

    // Header nav
    nav: ["How We Work", "Pricing", "Gallery", "Essences", "Contact"],

    // Hero
    heroSub: "Sheers · Curtains · Blinds · Curtain Rods Made to Measure",
    cta: "Book a Consultation",
    heroKicker: "Jana Segelberg · Interior Window Treatments",
    heroKickerSmall: "Prague · surrounding areas · interiors",
    heroPanelTitle: "Light, calm and detail",
    heroPanelText:
      "We design and deliver interior window treatments so the space feels natural, harmonious and works beautifully over time.",
    heroTitleMobile: "Curtains, drapes, blinds and tracks made to fit",
    heroLead: "We design window treatments around the room, the light and how the interior is used.",
    heroLeadMobile: "We design window treatments around the room, the light and how the interior works.",

    heroSlides: [
      { h1: "Sheers, curtains, blinds and curtain rods shaped around your space", bg: "assets/img/hero/hero-01.webp", pos: "center", posMobile: "center 35%" },
      { h1: "We design window treatments that bring calm, privacy and atmosphere into the interior", bg: "assets/img/hero/hero-02.webp", pos: "center", posMobile: "center 55%" },
      { h1: "Complete service from consultation to final installation", bg: "assets/img/hero/hero-03.webp", pos: "center", posMobile: "center 50%" }
    ],

    homeAboutH: "We design and deliver interior window treatments",
    homeAboutHMobile: "Window treatments shaped by the room",

    homeAbout: [
      "Window treatments are never an isolated element. We choose them in relation to the space, the materials and the way the interior is used, so the whole feels calm, balanced and assured."
    ],
    homeAboutMobile:
      "The right solution has to fit the room, the light and how the space is used during the day.",

    featureNoteTitle: "Design begins in the space itself",
    featureNoteTitleMobile: "Design begins in the space itself",
    featureNoteText:
      "We choose materials in real light, in the actual interior and with respect to its rhythm.",
    featureNoteTextMobile:
      "We choose materials directly in the interior and in real light.",
    featureImageAlt: "Fabric samples and materials",
    inspLeadMobile:
      "Well-designed window treatments shape light, privacy and the overall feeling of the interior.",
    homeAboutExtra:
      "We work with what truly matters in a space — light, proportion, the need for privacy, the way the interior is used and the softness of materials. It is not just about covering a window. It is about helping the space work better.",

    homeServicesTitle: "Solutions that hold both atmosphere and function",
    homeServicesLead:
      "Every layer has its role. The feeling of a space stands on detail, not on the number of elements.",
    homeServicesLeadMobile: "",

    homeAtmosTitle: "An interior changes not only in appearance. It changes in feeling.",
    homeLuxuryTitle: "A luxurious feeling does not come from showiness. It comes from confidence.",
    homeLuxuryLead: "You can see it in the result. In the proportion, the material and in how the room works every day.",
    homeProjectsLeadMobile: "",
    benefitDetailLabel: "Detail",
    homeProjectsTitle: "Completed projects",
    homeProjectsLead:
      "A selection of interiors where window treatments complete calm, softness and the right measure of light.",
    mobileProjectsCtaTitle: "Would you like a similar result?",
mobileProjectsCtaText:
  "We start with your space, the light in the interior and how the room should function throughout the day.",

mobileServicesCtaTitle: "Not sure what is right for your space?",
mobileServicesCtaText:
  "During the consultation, we choose the right solution based on light, privacy and how the interior is used.",

homeFinalCtaLocation:
  "Prague and surrounding areas. Consultation directly in your interior.",
    homeFaqTitle: "The essentials a client wants to know in advance",
    homeFinalCtaTitle: "First we look at your space. Only then do we design.",
    serviceCardCta: "View guide prices →",
    services: [
      { name: "Sheers", note: "Soften daylight, make the space feel warmer and add lightness." },
      { name: "Curtains", note: "Help with blackout, acoustics and the feeling of warmth and calm." },
      { name: "Blinds", note: "A practical solution for precise light control and a clean look." },
      { name: "Technical systems", note: "Tracks, curtain rods and solutions designed around the space." },
      { name: "Service", note: "Taking down, cleaning, steaming and rehanging our own installations." }
    ],
    serviceCardCta: "View guide prices →",

    inspH: "The Atmosphere of a Space",
    inspLead:
      "Well-designed window treatments change more than just the window.\nThey shape the light throughout the day, privacy in the evening and the overall feeling of the interior. The difference between a space without window treatments and one with a thoughtful solution is often greater than expected.",
    inspTags: [
      "Light · Space · Freedom",
      "Softness · Movement · Privacy",
      "Function · Quiet · Home"
    ],

    benefitsH: "Why clients choose us",
    benefits: [
      { name: "Individual design", note: "Every space has different light, proportions and needs. That is why every design is created specifically for the interior in question." },
      { name: "20 years of experience", note: "We know the materials, technical solutions and the details that define the final result." },
      { name: "Complete service", note: "From the first consultation through measuring and production to installation and final hanging." }
    ],

    benefitCardCta: "Find out more →",

    faqH: "Frequently Asked Questions",
    faq: [
      { q: "How does the consultation work?", a: "We come to you, look at the space, discuss your needs and recommend a suitable window treatment solution." },
      { q: "How long does the process take?", a: "Usually 2–8 weeks, depending on the scope of the project, the chosen materials and current availability." },
      { q: "Do you bring fabric samples to our home?", a: "Yes, we bring fabric samples directly to your space during the consultation so you can choose in real light and in the context of the interior." },
      { q: "Do you also supply tracks and curtain rods?", a: "Yes, we provide complete delivery including tracks, curtain rods, technical systems and installation." },
      { q: "Is it possible to do just one room?", a: "Yes. We design both complete interiors and individual rooms according to the client's specific needs." }
    ],

    homeCtaNote: "Prague and surrounding areas. Consultation directly in your interior. Design, production and installation made to measure.",

    homeTrust: [
      { value: "20+", label: "years of experience" },
      { value: "Individual design", label: "based on the space and the way it is used" },
      { value: "Complete service", label: "from design to installation" },
      { value: "Collaboration", label: "with architects and designers" }
    ],

    // Process
    processH: "How We Work",
    processLead:
      "From the first measurement to final styling. Every step has its own pace, purpose and precision.",
    processLeadMobile:
      "From measurement to final styling. Clear, step by step.",
    processQuoteTitle: "The result should feel natural",
    processShowDetail: "Show detail",
    processHideDetail: "Hide detail",
    steps: ["Consultation", "Design & Pricing", "Production", "Installation"],
    stepsTxt: [
      "We come to you, walk through the space on site and take precise measurements.\n\nWe discuss whether you expect privacy, blackout or a purely decorative function from the window treatments.\n\nWe show you fabric samples and recommend solutions that make sense in the space both technically and visually.\n\nAfter the consultation, you will have a clear idea of the available options and the direction the design will take.",
      "Based on the selected materials and technical solution, we prepare a quotation.\n\nThis serves as the starting point. If the price needs adjusting, we look together for alternatives in materials, technique or the overall composition of the solution.\n\nThe aim is to find the right balance between function, aesthetics and budget.\n\nBefore production begins, you know exactly what will be delivered and at what price.",
      "Once the quotation is approved and the deposit is paid, production begins.\n\nAt this stage, the textiles are made and all technical elements are prepared.\n\nAt the same time, we arrange the installation date so that it follows the completion of production smoothly.\n\nProduction usually takes several weeks depending on the scope of the project and the selected materials.",
      "We deliver the finished window treatments, install them professionally and hang the textiles with care.\n\nBoth sheers and curtains are steamed, styled and adjusted so that everything works visually as well as technically.\n\nOnce the work is finished, we tidy the space and hand it back ready to use.\n\nOn site, we explain the operation and recommend suitable maintenance so the window treatments continue to function as they should over time."
    ],
    processImgs: [
      "assets/img/process/process-01.webp",
      "assets/img/process/process-02.webp",
      "assets/img/process/process-03.webp",
      "assets/img/process/process-04.webp"
    ],
    processBridges: ["Direction grows from observation.", "Design turns into reality.", "Detail defines the result."],
    processMicroByStep: [
      "Light, proportions, rhythm of the day.",
      "Material, technique, harmony.",
      "Craft, precision, patience.",
      "Installation, finishing, calm."
    ],
    processBehindH: "What stands behind our work",
    processBehindCards: [
      {
        id: "individualni-navrh",
        title: "Individual design",
        p1: "Every space has different light, different proportions and a different rhythm throughout the day.",
        p2: "The design takes shape directly on site through observing the light, the layout of the space and the way you use the interior.",
        p3: "For us, individual design means finding the right choice together."
      },
      {
        id: "zkusenosti",
        title: "20 years of experience",
        p1: "Experience gives us perspective and confidence when making decisions.",
        p2: "We help you navigate the options and bring function and aesthetics into balance.",
        p3: "The result is a solution that makes sense not only visually, but also functionally and in the long term."
      },
      {
        id: "detail",
        title: "Precision and refinement in detail",
        p1: "Quality of workmanship and technical execution determine whether the window treatments will continue to function well and look good even years later.",
        p2: "It is in the details that the difference becomes visible between a solution that only looks good and one that truly stands the test of time.",
        p3: "Precision and detail are visible at first glance. This is where your expectations meet our experience."
      }
    ],
    processEnding: "The goal is for you to feel naturally and genuinely well in the space.",

 // Pricing
priceH: "What Our Window Treatments Cost",
pricingLead: "Guide prices and types of solutions to give you a clear idea before the consultation.",
pricingLeadMobile: "Indicative pricing for a quick overview before the consultation.",
pricingSectionTitle: "Price depends on the space, the material and the level of detail",
pricingOpenButton: "View guide prices",

pricingIntroMobile: [
  "Made-to-measure shading varies with window size, material and technical solution.",
  "Below you will find an indicative overview for a quick first impression."
],

pricingIntro: [
  "The price of made-to-measure window treatments varies depending on window size, material and the chosen solution.",
  "On this page, you will find guide prices for sheers, curtains, blinds, tracks and curtain rods so you can get an initial idea before the consultation.",
  "Every proposal is prepared individually according to the space, the light and the way the interior is used."
],

pricingDisclaimer:
  "The amounts shown are indicative scenarios for reference only. The exact design and quotation are always refined after an on-site consultation according to dimensions, selected materials and the technical solution.",
pricingDisclaimerMobile:
  "Prices are indicative. We prepare the exact proposal and quotation after the on-site consultation.",
openDetail: "Open detail",
writeMe: "Non-binding consultation",
close: "Close",
previous: "Previous",
next: "Next",
lightboxHint: "Browse the photos using the arrow keys or by clicking the buttons.",
mobileSwipeHint: "Swipe to see more",
mobileSwipeHintServices: "Swipe for more solutions",
mobileSwipeHintBenefits: "Swipe for more reasons",
mobileSwipeHintProjects: "Swipe for more projects",
mobileSwipeHintProcess: "Swipe for more principles",

pricingItems: [
  {
    key: "zaclon",
    title: "Sheers",
    img: "assets/img/pricing/pricing-01.webp",
    vibe: "The light remains. The space becomes softer and more welcoming.",
    micro: "Light, proportion, softness.",
    intro: "Sheers allow daylight to pass through while creating a basic level of privacy in the interior. An ideal solution for living rooms, bedrooms and large French windows.",
    modalLead: "Light textiles that soften daylight and bring privacy and lightness into the interior.",
    rangesTitle: "Guide prices",
    ranges: [
      { label: "small window (200 x 270cm)", value: "approx. CZK 3–16 thousand" },
      { label: "large window (500 x 290cm)", value: "approx. CZK 8–42 thousand" }
    ],
    rangesNote: "The guide price includes design according to the space, measuring, production, installation and final styling.",
    tiersTitle: "Types",
    tiers: [
      { name: "Basic lightweight voiles", note: "Airy fabrics with a lower purchase cost." },
      { name: "Mid-range category", note: "A balanced ratio of price, appearance and function." },
      { name: "Premium fabrics", note: "Exclusive texture and natural materials." }
    ]
  },
  {
    key: "zaves",
    title: "Curtains",
    img: "assets/img/pricing/pricing-02.webp",
    vibe: "They create privacy. They calm the evening. They protect the morning.",
    micro: "Material, quiet, comfort.",
    intro: "Curtains provide privacy, blackout and help regulate both light and temperature in the space. Suitable for bedrooms, living rooms and interiors where you want to achieve a strong sense of calm.",
    modalLead: "Textiles for greater privacy, light control and a calmer overall atmosphere in the space.",
    rangesTitle: "Guide prices",
    ranges: [
      { label: "small window (200 x 270cm)", value: "approx. CZK 6–21 thousand" },
      { label: "large window (500 x 290cm)", value: "approx. CZK 15–49 thousand" }
    ],
    rangesNote: "The guide price includes design according to the space, measuring, production, installation and final styling.",
    tiersTitle: "Types",
    tiers: [
      { name: "Decorative curtain", note: "Primarily for appearance and privacy." },
      { name: "Dim-out", note: "Softens the light, but does not create complete darkness." },
      { name: "Blackout", note: "Maximum blackout with partial thermal insulation." }
    ]
  },
  {
    key: "roleta",
    title: "Blinds",
    img: "assets/img/pricing/roleta-latkova.webp",
    vibe: "Clean lines. Function without compromise.",
    micro: "Light control, simplicity.",
    intro: "Blinds allow precise light control and offer a clean, minimalist solution without curtains. Suitable for kitchens, bathrooms, studies and modern interiors.",
    subtypes: [
      {
        key: "latkova",
        label: "Fabric blind",
        img: "assets/img/pricing/roleta-latkova.webp",
        micro: "Light control, simplicity.",
        intro: "Fabric blinds allow light to be regulated according to the selected material, from gentle shading to stronger blackout. A practical solution for everyday use.",
        rangesTitle: "Guide prices",
        ranges: [
          { label: "small window (130 x 200cm)", value: "approx. CZK 10–35 thousand / pc" },
          { label: "large window (350 x 300cm)", value: "approx. CZK 32–85 thousand / pc" }
        ],
        rangesNote: "The guide price includes design according to the space, measuring, production, installation and final styling.",
        tiersTitle: "Types",
        tiers: [
          { name: "Screen / daytime", note: "Light control and airiness." },
          { name: "Blackout", note: "More privacy and softened light." },
          { name: "Motorised", note: "More comfort, higher cost." }
        ]
      },
      {
        key: "rimska",
        label: "Roman blind",
        img: "assets/img/pricing/roleta-rimska.webp",
        micro: "A soft textile layer, decoration and calm.",
        intro: "Roman blinds combine the function of a blind with the look of a curtain. Suitable for interiors where you want to preserve the softness of textile without classic curtains.",
        rangesTitle: "Guide prices",
        ranges: [
          { label: "small window (110 x 150cm)", value: "approx. CZK 6–11 thousand / pc" },
          { label: "large window (180 x 250cm)", value: "approx. CZK 14–19 thousand / pc" }
        ],
        rangesNote: "The guide price includes design according to the space, measuring, production, installation and final styling.",
        tiersTitle: "Types",
        tiers: [
          { name: "In sheer fabrics", note: "Airiness and practicality." },
          { name: "In curtain fabrics", note: "Privacy and blackout." },
          { name: "Motorised", note: "More comfort, higher cost." }
        ]
      },
      {
        key: "plisse",
        label: "Pleated blind",
        img: "assets/img/pricing/roleta-plisse.webp",
        micro: "Precise dosing of light. Excellent for unusual window shapes.",
        intro: "Pleated blinds can be drawn from both the top and the bottom, allowing very precise light control. An ideal solution for unusual windows and specific situations.",
        rangesTitle: "Guide prices",
        ranges: [
          { label: "small window (80 x 100cm)", value: "approx. CZK 3.3–6 thousand / pc" },
          { label: "large window (120 x 220cm)", value: "approx. CZK 7–16 thousand / pc" }
        ],
        rangesNote: "The guide price includes design according to the space, measuring, production, installation and final styling.",
        tiersTitle: "Types",
        tiers: [
          { name: "Screen / daytime", note: "Light control and airiness." },
          { name: "Blackout", note: "More privacy and softened light." }
        ]
      }
    ]
  },
  {
    key: "systemy",
    title: "Tracks and curtain rods",
    img: "assets/img/pricing/systemy-kolejnice.webp",
    vibe: "The foundation that holds and guides everything.",
    micro: "Functional as well as decorative.",
    intro: "Tracks and curtain rods ensure both the correct function and the visual finish of the window treatments. We design them according to the space and the type of textile.",
    subtypes: [
      {
        key: "kolejnice",
        label: "Tracks",
        img: "assets/img/pricing/systemy-kolejnice.webp",
        micro: "A clean line. Function and precision.",
        intro: "Tracks for curtains and sheers provide a clean and functional window treatment solution. Suitable for ceilings, walls and unusual spaces, including curved options.",
        rangesTitle: "Guide prices",
        ranges: [
          { label: "small window (200 x 270cm)", value: "approx. CZK 1–13 thousand" },
          { label: "large window (500 x 290cm)", value: "approx. CZK 2.5–18 thousand" }
        ],
        rangesNote: "The guide price includes design according to the space, measuring, production, installation and final styling.",
        tiersTitle: "Types",
        tiers: [
          { name: "Straight", note: "A simple, clean solution." },
          { name: "Curved", note: "According to layout and spatial flow." },
          { name: "Motorised", note: "Comfort and automation." }
        ]
      },
      {
        key: "garnyze",
        label: "Curtain rods",
        img: "assets/img/pricing/systemy-garnyze.webp",
        micro: "Décor. A detail that remains visible.",
        intro: "Curtain rods are a visible interior element. We choose materials, colours and details so they work in harmony with the textile and the overall character of the space.",
        rangesTitle: "Guide prices",
        ranges: [
          { label: "small window (200 x 270cm)", value: "approx. CZK 1–13 thousand" },
          { label: "large window (500 x 290cm)", value: "approx. CZK 2.5–18 thousand" }
        ],
        rangesNote: "The guide price includes design according to the space, measuring, production, installation and final styling.",
        tiersTitle: "Types",
        tiers: [
          { name: "Classic", note: "Decorative solutions for flats and houses." },
          { name: "Designer", note: "A more distinctive material, finish or detail." },
          { name: "Individual solution", note: "Specific fixing, lengths and corner details." }
        ]
      }
    ]
  },
  {
    key: "servis",
    title: "Service and maintenance",
    img: "assets/img/pricing/pricing-05.webp",
    vibe: "Professional care in three steps.",
    micro: "Like new again.",
    intro: "We provide service for sheers and curtains from taking them down through washing or cleaning to rehanging and final finishing.",
    modalLead: "Regular care, cleaning and rehanging so your window treatments stay in excellent condition.",
    rangesTitle: "Guide prices by scope",
    ranges: [
      { label: "small window (200 x 270cm)", value: "approx. CZK 6–8 thousand" },
      { label: "large window (500 x 290cm)", value: "approx. CZK 17–20 thousand" }
    ],
    rangesNote: "The guide price includes both textile layers, meaning both the sheer and the curtain.",
    tiersTitle: "Types",
    tiers: [
      { name: "Standard maintenance", note: "Taking down, washing/cleaning, steaming and rehanging." },
      { name: "Large areas", note: "More panels and more demanding handling." },
      { name: "Unusual layouts / heights", note: "Special access, scaffolding/lift depending on the situation." }
    ],
    serviceOnlyNote: "We provide service only for our own installations."
  }
],
    // Gallery
    galleryH: "Completed Projects",
    galleryLead: "A selection of completed sheers, curtains, blinds and technical systems.",
    galleryLeadMobile: "A faster mobile overview of completed projects.",
    gallerySectionTitle: "Projects where window treatments do not feel extra. They simply feel right.",
    gallerySectionLead: "A selection of completed sheers, curtains, blinds and technical systems.",
    gallerySectionLeadMobile: "A selection of completed projects. Tap any photo to open it.",
    galleryOurWorkH: "Examples of our work",
    galleryOurWorkP: "Browse our projects featuring sheers, curtains, blinds, tracks and curtain rods in different types of interiors. Every solution is designed specifically for the space, the light and the way the room is used.",
    galleryShowAll: "View all projects →",
    galleryModalH: "Made-to-measure window treatments",
    galleryModalSub: "Explore the details of our sheers, curtains, blinds and technical systems.",
    galleryPartnersH: "We work with architects and designers",
    galleryPartnersP: "We often collaborate with architects and interior designers to refine the final form of the window treatments so they feel fully aligned with the space and the overall interior concept.",
    galleryVisitWeb: "Visit website →",

    galleryPartnersNotes: {
      onoje: "Architecture with a feel for atmosphere, material and detail. We bring in the final layer.",
      richter: "Collaboration on interiors where clean lines, function and calm matter.",
      epic: "An interior studio focused on atmosphere, function and detail. Together, we refine the final layer of window treatments so the space feels natural and harmonious.",
      broda: "Interior design focused on timelessness, spatial thinking and materials. We collaborate on projects where window treatments complete the calm and character of the interior."
    },

    // Essences
    essenceH: "Essences",
    essenceLead:
      "Fragrance gently complements the visual impression of a space. It helps shape an atmosphere connected to light, textile and the rhythm of the day. Selected essences are used as a subtle yet effective element of the overall experience of the interior.",
    essenceLeadMobile:
      "We see essential oils as a subtle atmospheric layer, not as the main topic of the interior.",
    essenceBoxH: "Essences in preparation",
    essenceBoxP:
      "Fragrances will become a separate layer connected to the space and its atmosphere.\n\nThey will be tuned to the needs and activities that take place within that interior.",
    essenceBoxFoot: "Coming soon",

    // Contact
    contactH: "Contact",
    contactLead: "Send us a message, a few photos of the space and we will get back to you with the next step.",
    contactLeadMobile: "Send us a message and a few photos of the space. We will follow up with the next step.",
    contactAddressLabel: "Address",
    contactFormTitle: "Enquiry",

contactFormIntro:
  "Describe your space and share photos. Together we’ll find a solution that works for your interior.",

contactName: "Full name",
contactEmail: "Email",
contactPhone: "Phone",
contactMessage: "Message",

contactPhotos: "Photos (optional)",
contactPhotosNote: "You can attach up to 5 photos.",

contactNextStepsTitle: "What happens next:",
contactNextSteps: [
  "We’ll suggest the next step",
  "We’ll arrange a consultation",
  "We’ll bring samples to your interior",
],

contactSubmit: "Send enquiry",
contactSending: "Sending...",

contactSuccess:
  "Thank you. Your message has been sent. We’ll get back to you with the next step.",
contactError:
  "Something went wrong. Please try again.",

uploadSelect: "Select files",
uploadEmpty: "No files selected",
uploadSelected: "file selected",
uploadSelectedFew: "files selected",
uploadSelectedMany: "files selected",

    // Footer
    footerContactH: "Contact",
    footerLegalH: "Legal & Information",
    footerTerms: "Terms and Conditions",
    footerPrivacy: "Privacy Policy",
    footerCookies: "Cookies",
    footerCta: "Write to me →",
    footerBlurb: "Design and delivery of made-to-measure interior window treatments.\nSheers · Curtains · Blinds · Curtain Rods · Technical Systems",
    rights: "All rights reserved.",

    // Terms / Privacy / Cookies pages
    termsH: "Terms and Conditions",
    termsIntro:
      "These terms and conditions govern the relationship between the seller and the customer when purchasing goods and services through this website. Please read them before completing your order.",
    termsSections: [
      {
        h: "I. Introductory Provisions",
        p:
          "The seller is the entrepreneur operating under the name or company name stated on this page and in the website footer, including registration number, VAT number and contact details. The customer is a natural or legal person who enters into a contract with the seller remotely through this website, by e-mail or by telephone."
      },
      {
        h: "II. Offer of Goods and Services",
        p:
          "This website presents mainly interior window treatment products, whether finished or made to order, complementary products such as essences and fragrances, and related services including consultation, design proposals and installation. For made-to-measure projects, the price is determined individually according to the specific parameters of the order."
      },
      {
        h: "III. Orders and Conclusion of Contract",
        p:
          "Goods or services may be ordered through the order form, by e-mail or by telephone. The contract is concluded when the seller confirms the order, usually by e-mail. For made-to-measure projects, the contract is concluded only after the customer has approved the specific quotation."
      },
      {
        h: "IV. Prices and Payment Terms",
        p:
          "Prices are stated including VAT where applicable and including any statutory fees unless stated otherwise. Payment may be made by bank transfer or by another method specified in the order. For made-to-measure projects, the seller may request a deposit, the amount and due date of which are stated in the quotation."
      },
      {
        h: "V. Delivery Terms",
        p:
          "Delivery time for finished goods is stated approximately for each product or in the order confirmation. For made-to-measure projects, it depends on the nature of the order, the selected materials and the agreed schedule. Goods are delivered by courier or handed over during personal installation."
      },
      {
        h: "VI. Rights Arising from Defective Performance (Complaints)",
        p:
          "The customer is obliged to inspect the goods upon receipt and report any visible defects without undue delay. Complaints may be submitted in writing or by e-mail to the contact details stated on the website. The seller will resolve the complaint without undue delay, no later than within 30 days of its submission, unless otherwise agreed with the customer."
      },
      {
        h: "VII. Consumer Right of Withdrawal",
        p:
          "If the customer is a consumer, they have the right to withdraw from a distance contract within 14 days of receipt of the goods unless a legal exception applies. This right does not apply in particular to goods made according to the customer’s wishes or for their personal use, for example curtains, sheers and window treatments made to specific dimensions and according to an approved design."
      },
      {
        h: "VIII. Out-of-Court Dispute Resolution",
        p:
          "In the event of a dispute between the seller and a consumer, the consumer may contact the Czech Trade Inspection Authority (www.coi.cz) as the body for out-of-court dispute resolution."
      },
      {
        h: "IX. Final Provisions",
        p:
          "Legal relations between the seller and the customer are governed by the laws of the Czech Republic. The current version of these terms and conditions is published on the seller’s website and may be updated from time to time."
      }
    ],

    privacyH: "Privacy Policy",
    privacyIntro:
      "This page explains how I process personal data in connection with enquiries, orders and the operation of this website.",
    privacySections: [
      { h: "Data Controller", p: "The controller of personal data is the entrepreneur stated in the contact details on this website (name / company name, address, registration number, VAT number, e-mail and phone)." },
      {
        h: "What data I process and for what purpose",
        p:
          "I process mainly identification and contact data such as name, surname, company name, e-mail, phone number and address, as well as data related to the enquiry and project, for example dimensions, photographs of windows and interiors, your requirements regarding the solution, and invoicing data including payment details.\n\nI process this data for the purpose of handling enquiries, concluding contracts, delivering goods and services, maintaining accounts, fulfilling legal obligations and protecting legal claims, for example in the case of a complaint or dispute."
      },
      {
        h: "Legal basis for processing",
        p:
          "The legal basis is primarily performance of a contract or steps taken before entering into a contract, compliance with legal obligations in the field of accounting and taxation, and legitimate interest in protecting legal claims. For possible marketing purposes such as newsletters, personal data would only be used with your consent or on the basis of legitimate interest if you are already my customer, always with a simple option to unsubscribe."
      },
      {
        h: "Retention period of personal data",
        p:
          "Data related to contracts and invoicing is retained for the period required by law, typically 10 years. Data from non-binding enquiries is retained only for the period necessary to handle the communication, usually no longer than 1 year if the enquiry does not lead to a contractual relationship."
      },
      {
        h: "Sharing personal data with third parties",
        p:
          "Personal data may be shared only to the necessary extent with an accountant or tax adviser, providers of IT and hosting services, carriers or installation partners if this is necessary for the project, and public authorities if required by law. Appropriate data processing agreements are concluded with these parties."
      },
      {
        h: "Your rights",
        p:
          "You have the right to access your personal data, have it corrected or completed, restrict its processing, request deletion where the legal conditions are met, obtain data portability and object to processing based on legitimate interest.\n\nIf you believe that personal data is being processed unlawfully, you also have the right to lodge a complaint with the Office for Personal Data Protection (www.uoou.cz)."
      },
      {
        h: "Interior photographs and reference images",
        p:
          "Photographs of your interior, windows and completed window treatments are used primarily for the design and execution of the project. For the use of photographs as references, for example in the project gallery, I will always ask for your explicit consent, or I will use them in a way that does not make you clearly identifiable."
      }
    ],

    cookiesH: "Cookies",
    cookiesP: [
      "This website uses cookies to ensure its basic functionality and, where applicable, to measure traffic anonymously and improve the user experience.",
      "Cookies are small text files stored in your browser. You can restrict or disable the use of cookies at any time in your browser settings. If you disable cookies, some functions of the website may be limited.",
      "If cookies are used on the website for marketing purposes or advanced analytics, you will be informed during your first visit by means of a banner and given the option to provide consent. You may withdraw your consent at any time by changing the settings or adjusting your browser settings."
    ]
  }
};

