// i18n.js
// Globální překlady: STR.cs + STR.en
// app.js si bere překlady přes useLang() -> t = STR[lang]

window.STR = {
  cs: {
    brand1: "Jana Segelberg",
    brand2: "Stínění s esencí",

    // Header nav
  nav: ["Jak pracujeme", "Kolik zaplatíte", "Galerie", "Esence", "Kontakt"],

    // Hero
   heroSub: "Záclony · Závěsy · Rolety · Garnýže na míru",
cta: "Domluvit konzultaci",

heroSlides: [
  { h1: "Záclony, závěsy, rolety a garnýže podle vašeho prostoru", bg: "assets/img/hero/hero-01.webp", pos: "center", posMobile: "center 35%" },
  { h1: "Navrhujeme stínění, které dává interiéru klid, soukromí a atmosféru", bg: "assets/img/hero/hero-02.webp", pos: "center", posMobile: "center 55%" },
  { h1: "Kompletní realizace od konzultace po finální montáž", bg: "assets/img/hero/hero-03.webp", pos: "center", posMobile: "center 50%" }
],


    // Home
   homeAboutH: "Navrhujeme a realizujeme vnitřní stínění",
homeAbout: [
  "Pomáháme vytvářet interiéry, ve kterých světlo, soukromí a atmosféra fungují v rovnováze. Navrhujeme záclony, závěsy, rolety, garnýže a technické systémy tak, aby odpovídaly prostoru i tomu, jak v něm skutečně žijete.",
  "Jsme česká rodinná firma s více než 20 lety zkušeností. Zajišťujeme kompletní servis od konzultace a zaměření přes výběr materiálů a šití až po montáž a finální dekorování."
],

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
  { value: "20+", label: "let zkušeností" },
  { value: "Individuální návrh", label: "podle prostoru a způsobu využití" },
  { value: "Kompletní servis", label: "od návrhu po montáž" },
  { value: "Spolupráce", label: "s architekty a designéry" }
],



    // Process
    processH: "Jak pracujeme",
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
        p3: "Výsledkem je řešení, které dává smysl nejen vizuálně, ale i funkčně a dlouhodobě.",
      },
      {
        id: "detail",
        title: "Preciznost a jemnost v detailu",
        p1: "Kvalita zpracování a technické provedení rozhodují o tom, jestli stínění bude dlouhodobě fungovat a dobře vypadat i po letech.",
        p2: "V detailech se ukazuje rozdíl mezi řešením, které jen dobře vypadá, a řešením, které obstojí v čase.",
        p3: "Preciznost a detail jsou viditelné na první pohled, právě v nich se potkává vaše očekávání s naší zkušeností.",
      }
    ],
    processEnding: "Cílem je, abyste se v prostoru cítili přirozeně a dobře.",

    // Pricing
   priceH: "Kolik stojí stínění od nás",
    
    
    pricingIntro: [
  "Cena stínění na míru se liší podle velikosti oken, typu materiálu a zvoleného řešení.",
  "Na této stránce najdete orientační ceny záclon, závěsů, rolet, kolejnic a garnýží, abyste si mohli udělat představu ještě před konzultací.",
  "Každý návrh připravujeme individuálně podle prostoru, světla a způsobu využití interiéru."
],


    pricingDisclaimer:
      "Uvedené částky jsou orientační scénáře pro představu. Konkrétní návrh a rozpočet vždy upřesníme po konzultaci na místě podle rozměrů, zvolených materiálů a technického řešení.",
    openDetail: "Otevřít detail",
    writeMe: "Nezávazná konzultace",
    close: "Zavřít",


   pricingItems: [
  {
    key: "zaclon",
    title: "Záclony",
    img: "assets/img/pricing/pricing-01.webp",
    vibe: "Světlo zůstává. Prostor se zjemní a zútulní.",
    micro: "Světlo, proporce, jemnost.",
    intro: "Záclony propouští denní světlo a zároveň vytváří základní soukromí v interiéru. Ideální řešení pro obývací pokoje, ložnice i velká francouzská okna.",
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
    essenceBoxH: "Esence připravujeme",
    essenceBoxP:
      "Vůně budou samostatnou kapitolou navázanou na prostor a atmosféru v něm.\n\nEsence budou laděny tak, aby odpovídaly potřebám a aktivitám vykonávaným v daném prostoru.",
    essenceBoxFoot: "Připravujeme pro vás",

    // Contact
    contactH: "Kontakt",
    name: "Jméno",
    email: "E-mail",
    message: "Zpráva",
    send: "Odeslat",
    contactHowH: "Jak to probíhá",
    contactHow: [
      "Pošlete krátkou zprávu a případně fotografie oken či prostoru.",
      "Ozvu se vám s návrhem termínu konzultace.",
      "Na místě společně doladíme řešení, které pro vás připravím."
    ],
   contactNote: "",
contactFullName: "Jméno a příjmení",
contactPhone: "Kontakt (telefon)",
contactPhotos: "Fotografie (volitelné)",
    

    // Footer
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

  // Header nav
  nav: ["How We Work", "Pricing", "Gallery", "Essences", "Contact"],

  // Hero
  heroSub: "Sheers · Curtains · Blinds · Curtain Rods",
  cta: "Book a Consultation",

  heroSlides: [
    { h1: "Sheers, curtains, blinds and curtain rods designed for your space", bg: "assets/img/hero/hero-01.webp", pos: "center", posMobile: "center 35%" },
    { h1: "We design window treatments that bring calm, privacy and atmosphere into the interior", bg: "assets/img/hero/hero-02.webp", pos: "center", posMobile: "center 55%" },
    { h1: "A complete service from consultation to final installation", bg: "assets/img/hero/hero-03.webp", pos: "center", posMobile: "center 50%" }
  ],

  // Home
  homeAboutH: "We design and install interior window treatments",
  homeAbout: [
    "We create interiors where light, privacy and atmosphere feel naturally balanced. We design sheers, curtains, blinds, curtain rods and technical systems so they suit both the space itself and the way you actually live in it.",
    "We are a Czech family business with more than 20 years of experience. We provide a complete service from consultation and measuring through material selection and sewing to installation and final styling."
  ],

  servicesH: "What we design and deliver",
  services: [
    { name: "Sheers", note: "Soften daylight, add privacy and bring lightness to the space." },
    { name: "Curtains", note: "Help with blackout, acoustics and the feeling of warmth and calm." },
    { name: "Blinds", note: "A practical solution for precise light control and a clean look." },
    { name: "Technical systems", note: "Tracks, curtain rods and solutions designed around the space." },
    { name: "Service", note: "Taking down, cleaning, steaming and rehanging our installations." }
  ],
  serviceCardCta: "View guide prices →",

  inspH: "The Atmosphere of a Space",
  inspLead:
    "Well-designed window treatments change more than just the window.\nThey shape the light during the day, privacy in the evening and the overall feel of the interior. The difference between a space without window treatments and one with a thoughtfully designed solution is often greater than you expect.",
  inspTags: [
    "Light · Space · Freedom",
    "Softness · Movement · Privacy",
    "Function · Quiet · Home"
  ],

  benefitsH: "Why clients choose us",
  benefits: [
    { name: "Individual design", note: "Every space has different light, proportions and needs. That is why each design is created specifically for the interior in question." },
    { name: "20 years of experience", note: "We know the materials, technical solutions and details that make all the difference." },
    { name: "Complete service", note: "From the first consultation through measuring and production to installation and final styling." }
  ],
  benefitCardCta: "Learn more →",

  faqH: "Frequently Asked Questions",
  faq: [
    { q: "How does the consultation work?", a: "We come to you, look at the space, discuss your needs and recommend a suitable window treatment solution." },
    { q: "How long does the process take?", a: "Usually 2–8 weeks, depending on the scope of the project, the materials selected and current availability." },
    { q: "Do you bring fabric samples to the consultation?", a: "Yes, we bring fabric samples directly to your space so you can choose in real light and in the context of the interior." },
    { q: "Do you also supply tracks and curtain rods?", a: "Yes, we provide complete delivery including tracks, curtain rods, technical systems and installation." },
    { q: "Is it possible to do just one room?", a: "Yes. We design both full interiors and individual rooms, depending on the client’s specific needs." }
  ],

  homeCtaNote: "Prague and surrounding areas. Consultation in your interior. Design, production and installation tailored to the space.",

  homeTrust: [
    { value: "20+", label: "years of experience" },
    { value: "Individual design", label: "based on the space and how it is used" },
    { value: "Complete service", label: "from design to installation" },
    { value: "Collaboration", label: "with architects and designers" }
  ],

  // Process
  processH: "How We Work",
  steps: ["Consultation", "Design & Quotation", "Production", "Installation"],
  stepsTxt: [
    "We visit you on site, walk through the space together and take precise measurements.\n\nWe discuss what you expect from the window treatments, whether that is privacy, blackout or a purely decorative function.\n\nWe present fabric samples and recommend solutions that make sense in the space both technically and visually.\n\nAfter the consultation, you will have a clear understanding of the possible directions and how the design will move forward.",
    "Based on the selected materials and technical solution, we prepare a quotation.\n\nThis serves as the starting point. If the budget needs adjusting, we work together to explore alternatives in materials, technical elements or the composition of the overall solution.\n\nThe goal is to find the right balance between function, aesthetics and budget.\n\nBefore production begins, you know exactly what will be delivered and at what cost.",
    "Once the quotation is approved and the deposit is paid, we begin production.\n\nAt this stage, the textiles are made and all technical elements are prepared.\n\nAt the same time, we arrange the installation date so that it follows the completion of production smoothly.\n\nProduction usually takes several weeks, depending on the scope of the project and the selected materials.",
    "We deliver the finished window treatments, install them professionally and carefully dress the textiles.\n\nBoth sheers and curtains are steamed, styled and adjusted so that everything works beautifully both visually and technically.\n\nOnce the installation is complete, we tidy the space and leave it ready to be used.\n\nOn site, we explain how everything works and recommend suitable care so that the treatments continue to perform as they should over time."
  ],
  processImgs: [
    "assets/img/process/process-01.webp",
    "assets/img/process/process-02.webp",
    "assets/img/process/process-03.webp",
    "assets/img/process/process-04.webp"
  ],
  processBridges: ["Observation becomes direction.", "Design turns into reality.", "Detail shapes the result."],
  processMicroByStep: [
    "Light, proportions, daily rhythm.",
    "Material, hardware, harmony.",
    "Craft, precision, patience.",
    "Installation, finishing, calm."
  ],
  processBehindH: "What stands behind our work",
  processBehindCards: [
    {
      id: "individualni-navrh",
      title: "Individual design",
      p1: "Every space has different light, different proportions and its own rhythm throughout the day.",
      p2: "Each design takes shape on site through observing the light, understanding the layout and seeing how you actually use the space.",
      p3: "For us, individual design means finding the right solution together."
    },
    {
      id: "zkusenosti",
      title: "20 years of experience",
      p1: "Experience gives us perspective and confidence when making decisions.",
      p2: "We help you navigate the options and bring together function and aesthetics.",
      p3: "The result is a solution that makes sense not only visually, but also functionally and over the long term."
    },
    {
      id: "detail",
      title: "Precision and refinement in detail",
      p1: "Quality of workmanship and technical execution determine whether window treatments will function well and continue to look beautiful for years to come.",
      p2: "It is in the details that the difference becomes clear between a solution that simply looks good and one that truly stands the test of time.",
      p3: "Precision and detail are visible at first glance. They are where your expectations meet our experience."
    }
  ],
  processEnding: "The goal is for you to feel naturally at ease in the space.",

  // Pricing
  priceH: "Pricing",
  pricingIntro: [
    "The price of window treatments depends on the size of the windows, the type of material and the chosen solution.",
    "On this page, you will find guide prices for sheers, curtains, blinds, tracks and curtain rods so you can get an idea before the consultation.",
    "Each proposal is prepared individually according to the space, the light and the way the interior is used."
  ],

  pricingDisclaimer:
    "The amounts shown are indicative examples for guidance only. A specific proposal and quotation are always confirmed after an on-site consultation, based on dimensions, selected materials and the technical solution.",
  openDetail: "Open details",
  writeMe: "Book a Consultation",
  close: "Close",

  pricingItems: [
    {
      key: "zaclon",
      title: "Sheers",
      img: "assets/img/pricing/pricing-01.webp",
      vibe: "The light remains. The space becomes softer and more inviting.",
      micro: "Light, proportion, softness.",
      intro: "Sheers allow daylight to pass through while creating a basic level of privacy in the interior. An ideal solution for living rooms, bedrooms and large French windows.",
      rangesTitle: "Guide prices",
      ranges: [
        { label: "small window (200 x 270cm)", value: "approx. CZK 3–16k" },
        { label: "large window (500 x 290cm)", value: "approx. CZK 8–42k" }
      ],
      rangesNote: "Guide prices include design according to the space, measuring, production, installation and final styling.",
      tiersTitle: "Types",
      tiers: [
        { name: "Lightweight voiles", note: "Airy fabrics with a lower entry price." },
        { name: "Mid-range", note: "A balanced combination of price, look and function." },
        { name: "Premium fabrics", note: "Exclusive texture and natural materials." }
      ]
    },
    {
      key: "zaves",
      title: "Curtains",
      img: "assets/img/pricing/pricing-02.webp",
      vibe: "They create privacy. They quiet the evening. They protect the morning.",
      micro: "Material, quiet, comfort.",
      intro: "Curtains provide privacy, blackout and help regulate both light and temperature in the space. Suitable for bedrooms, living rooms and interiors where you want to create a sense of complete calm.",
      rangesTitle: "Guide prices",
      ranges: [
        { label: "small window (200 x 270cm)", value: "approx. CZK 6–21k" },
        { label: "large window (500 x 290cm)", value: "approx. CZK 15–49k" }
      ],
      rangesNote: "Guide prices include design according to the space, measuring, production, installation and final styling.",
      tiersTitle: "Types",
      tiers: [
        { name: "Decorative curtain", note: "Focused primarily on appearance and privacy." },
        { name: "Dim-out", note: "Softens the light, but does not create full darkness." },
        { name: "Blackout", note: "Maximum darkening with partial thermal insulation." }
      ]
    },
    {
      key: "roleta",
      title: "Blinds",
      img: "assets/img/pricing/roleta-latkova.webp",
      vibe: "Clean lines. Function without compromise.",
      micro: "Light control, simplicity.",
      intro: "Blinds allow precise control of light and offer a clean, minimalist solution without curtains. Suitable for kitchens, bathrooms, studies and modern interiors.",
      subtypes: [
        {
          key: "latkova",
          label: "Roller blind",
          img: "assets/img/pricing/roleta-latkova.webp",
          micro: "Light control, simplicity.",
          intro: "Roller blinds allow you to regulate light according to the chosen fabric, from soft shading to more pronounced darkening. A practical solution for everyday use.",
          rangesTitle: "Guide prices",
          ranges: [
            { label: "small window (130 x 200cm)", value: "approx. CZK 10–35k / pc" },
            { label: "large window (350 x 300cm)", value: "approx. CZK 32–85k / pc" }
          ],
          rangesNote: "Guide prices include design according to the space, measuring, production, installation and final styling.",
          tiersTitle: "Types",
          tiers: [
            { name: "Screen / daytime", note: "Light control with an airy feel." },
            { name: "Blackout", note: "Greater privacy and stronger light reduction." },
            { name: "Motorised", note: "More comfort, at a higher cost." }
          ]
        },
        {
          key: "rimska",
          label: "Roman blind",
          img: "assets/img/pricing/roleta-rimska.webp",
          micro: "A soft textile layer, decoration and calm.",
          intro: "Roman blinds combine the function of a blind with the look of a curtain. Suitable for interiors where you want to keep the softness of textiles without using classic curtains.",
          rangesTitle: "Guide prices",
          ranges: [
            { label: "small window (110 x 150cm)", value: "approx. CZK 6–11k / pc" },
            { label: "large window (180 x 250cm)", value: "approx. CZK 14–19k / pc" }
          ],
          rangesNote: "Guide prices include design according to the space, measuring, production, installation and final styling.",
          tiersTitle: "Types",
          tiers: [
            { name: "In sheer fabrics", note: "Airy and practical." },
            { name: "In curtain fabrics", note: "Privacy and darkening." },
            { name: "Motorised", note: "More comfort, at a higher cost." }
          ]
        },
        {
          key: "plisse",
          label: "Pleated blind",
          img: "assets/img/pricing/roleta-plisse.webp",
          micro: "Precise light control. Ideal for unusual window shapes.",
          intro: "Pleated blinds can be adjusted from both the top and the bottom, allowing precise control of light. An ideal solution for non-standard windows and specific situations.",
          rangesTitle: "Guide prices",
          ranges: [
            { label: "small window (80 x 100cm)", value: "approx. CZK 3.3–6k / pc" },
            { label: "large window (120 x 220cm)", value: "approx. CZK 7–16k / pc" }
          ],
          rangesNote: "Guide prices include design according to the space, measuring, production, installation and final styling.",
          tiersTitle: "Types",
          tiers: [
            { name: "Screen / daytime", note: "Light control with an airy feel." },
            { name: "Blackout", note: "Greater privacy and stronger light reduction." }
          ]
        }
      ]
    },
    {
      key: "systemy",
      title: "Tracks and curtain rods",
      img: "assets/img/pricing/systemy-kolejnice.webp",
      vibe: "The foundation that supports and guides everything.",
      micro: "Functional and decorative.",
      intro: "Tracks and curtain rods ensure both the proper function and the visual finish of the window treatments. We design them according to the space and the type of textile.",
      subtypes: [
        {
          key: "kolejnice",
          label: "Tracks",
          img: "assets/img/pricing/systemy-kolejnice.webp",
          micro: "A clean line. Function and precision.",
          intro: "Tracks for sheers and curtains create a clean and functional window treatment solution. Suitable for ceilings, walls and unusual layouts, including curved versions.",
          rangesTitle: "Guide prices",
          ranges: [
            { label: "small window (200 x 270cm)", value: "approx. CZK 1–13k" },
            { label: "large window (500 x 290cm)", value: "approx. CZK 2.5–18k" }
          ],
          rangesNote: "Guide prices include design according to the space, measuring, production, installation and final styling.",
          tiersTitle: "Types",
          tiers: [
            { name: "Straight", note: "A simple and clean solution." },
            { name: "Curved", note: "Designed to follow the layout of the space." },
            { name: "Motorised", note: "Comfort and automation." }
          ]
        },
        {
          key: "garnyze",
          label: "Curtain rods",
          img: "assets/img/pricing/systemy-garnyze.webp",
          micro: "Décor. A detail that remains visible.",
          intro: "Curtain rods form a visible part of the interior. We select materials, finishes and details so that they work in harmony with the textile and the overall character of the space.",
          rangesTitle: "Guide prices",
          ranges: [
            { label: "small window (200 x 270cm)", value: "approx. CZK 1–13k" },
            { label: "large window (500 x 290cm)", value: "approx. CZK 2.5–18k" }
          ],
          rangesNote: "Guide prices include design according to the space, measuring, production, installation and final styling.",
          tiersTitle: "Types",
          tiers: [
            { name: "Classic", note: "Decorative solutions for flats and houses." },
            { name: "Design", note: "A stronger material, finish or visual detail." },
            { name: "Individual solution", note: "Specific fixing methods, lengths and corner details." }
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
      intro: "We provide complete care for sheers and curtains, from taking them down through washing or professional cleaning to rehanging and final finishing.",
      rangesTitle: "Guide prices by scope",
      ranges: [
        { label: "small window (200 x 270cm)", value: "approx. CZK 6–8k" },
        { label: "large window (500 x 290cm)", value: "approx. CZK 17–20k" }
      ],
      rangesNote: "Guide prices include both textile layers, meaning both the sheer and the curtain.",
      tiersTitle: "Types",
      tiers: [
        { name: "Standard care", note: "Taking down, washing/cleaning, steaming and rehanging." },
        { name: "Large installations", note: "More textile panels and more demanding handling." },
        { name: "Unusual layouts / heights", note: "Special access, scaffolding or lift equipment depending on the situation." }
      ],
      serviceOnlyNote: "We provide service only for our own installations."
    }
  ],

  // Gallery
  galleryH: "Gallery",
  galleryOurWorkH: "Examples of our work",
  galleryOurWorkP: "Browse selected projects featuring sheers, curtains, blinds, tracks and curtain rods across a range of interiors. Each solution is designed according to the space, the light and the way the room is used.",
  galleryShowAll: "Show all projects →",
  galleryModalH: "Our work",
  galleryModalSub: "Browse the details of our sheers, curtains, blinds and technical systems.",
  galleryPartnersH: "We collaborate with architects and designers",
  galleryPartnersP: "We often work alongside architects and interior designers to fine-tune the final form of the window treatments so they feel fully aligned with both the space and the overall interior concept.",
  galleryVisitWeb: "Visit website →",

  galleryPartnersNotes: {
    onoje: "Architecture with a feel for atmosphere, material and detail. We bring in the final layer.",
    richter: "Collaboration on interiors where clean lines, function and a sense of calm matter.",
    epic: "An interior studio focused on atmosphere, function and detail. Together, we refine the final layer of window treatments so the space feels natural and harmonious.",
    broda: "Interior design focused on timelessness, spatial thinking and materials. We collaborate on projects where window treatments complete the calm and character of the interior."
  },

  // Essences
  essenceH: "Essences",
  essenceLead:
    "Scent gently completes the visual impression of a space. It helps shape an atmosphere connected with light, fabric and the rhythm of the day. We use selected essences as a subtle yet effective part of how an interior is experienced.",
  essenceBoxH: "Essences are coming",
  essenceBoxP:
    "Scents will become a dedicated layer connected to the space and the atmosphere within it.\n\nThe essences will be chosen to reflect the needs and activities associated with each room.",
  essenceBoxFoot: "Coming soon",

  // Contact
  contactH: "Contact",
  name: "Name",
  email: "Email",
  message: "Message",
  send: "Send",
  contactHowH: "How it works",
  contactHow: [
    "Send a short message and, if possible, include photos of the windows or the space.",
    "I will get back to you with a suggested consultation date.",
    "On site, we will refine the solution together and I will prepare a proposal for you."
  ],
  contactNote: "",
  contactFullName: "Full name",
  contactPhone: "Phone",
  contactPhotos: "Photos (optional)",

  // Footer
  footerContactH: "Contact",
  footerLegalH: "Legal & Information",
  footerTerms: "Terms & Conditions",
  footerPrivacy: "Privacy Policy",
  footerCookies: "Cookies",
  footerCta: "Message me →",
  footerBlurb: "Design and installation of interior window treatments.\nSheers · Curtains · Blinds · Curtain Rods · Technical Systems",
  rights: "All rights reserved.",

  // Terms / Privacy / Cookies pages
  termsH: "Terms & Conditions",
  termsIntro:
    "These terms and conditions govern the relationship between the seller and the customer when purchasing goods and services through this website. Please read them before completing an order.",
  termsSections: [
    {
      h: "I. Introductory Provisions",
      p:
        "The seller is the business entity operating under the name or company listed on this page and in the website footer (including business ID, VAT ID and contact details). The customer is an individual or legal entity entering into a distance contract with the seller through this website, by email or by phone."
    },
    {
      h: "II. Offer of Goods and Services",
      p:
        "The website primarily presents interior window treatments made to order, supplementary products (such as essences and scents), and related services including consultations, design proposals and installation. For individual projects, the price is set according to the specific parameters of the order."
    },
    {
      h: "III. Order and Conclusion of Contract",
      p:
        "Goods or services may be ordered through the order form, by email or by phone. The contract is concluded at the moment the seller confirms the order, usually by email. For individual projects, the contract is concluded only after the customer approves the specific quotation."
    },
    {
      h: "IV. Price and Payment Terms",
      p:
        "Prices are stated including VAT if the seller is a VAT payer, and including any statutory fees unless stated otherwise. Payment may be made by bank transfer or by another method specified in the order. For individual projects, the seller may require a deposit, the amount and due date of which are stated in the quotation."
    },
    {
      h: "V. Delivery Terms",
      p:
        "The delivery time for goods is stated as an estimate for individual products or in the order confirmation. For individual projects, it depends on the scope of the project, the selected materials and the agreed schedule. Goods are either delivered by a carrier or handed over during on-site installation."
    },
    {
      h: "VI. Rights Arising from Defective Performance (Complaints)",
      p:
        "The customer is required to inspect the goods upon receipt and report any visible defects without undue delay. Complaints may be submitted in writing or by email to the contact details listed on the website. The seller will resolve the complaint without undue delay, no later than within 30 days of submission, unless agreed otherwise with the customer."
    },
    {
      h: "VII. Consumer Right of Withdrawal",
      p:
        "If the customer is a consumer, they have the right to withdraw from a distance contract within 14 days of receiving the goods, unless an exception applies by law. This right does not apply in particular to goods made according to the customer’s specifications or for their personal use, such as curtains, sheers and window treatments made to specific dimensions and according to an approved design."
    },
    {
      h: "VIII. Out-of-Court Dispute Resolution",
      p:
        "In the event of a dispute between the seller and a consumer, the consumer may contact the Czech Trade Inspection Authority (www.coi.cz) as the out-of-court dispute resolution body."
    },
    {
      h: "IX. Final Provisions",
      p:
        "Legal relationships between the seller and the customer are governed by the laws of the Czech Republic. The current version of these terms is published on the seller’s website and may be updated from time to time."
    }
  ],

  privacyH: "Privacy Policy",
  privacyIntro:
    "This page explains how personal data is processed in connection with enquiries, orders and the operation of this website.",
  privacySections: [
    { h: "Data Controller", p: "The data controller is the business entity listed in the contact details on this website (name / company name, address, business ID, VAT ID, email and phone)." },
    {
      h: "What Data Is Processed and Why",
      p:
        "We primarily process identification and contact details (name, company name, email, phone number and address), as well as enquiry and project-related data (for example dimensions, photos of windows and interiors, and your requirements) and invoicing data, including payment-related information.\n\nWe process this data in order to handle enquiries, conclude contracts, deliver goods and services, maintain accounting records, comply with legal obligations and protect legal claims, for example in the event of a complaint or dispute."
    },
    {
      h: "Legal Basis for Processing",
      p:
        "The legal basis is primarily the performance of a contract or steps taken prior to entering into a contract, compliance with legal obligations relating to accounting and taxation, and the legitimate interest in protecting legal claims. For marketing purposes, such as newsletters, personal data would be used only with your consent or on the basis of legitimate interest if you are an existing customer, always with a simple option to unsubscribe."
    },
    {
      h: "Data Retention Period",
      p:
        "Contract and invoicing data is retained for the period required by law, typically 10 years. Data from non-binding enquiries is retained only for as long as necessary to handle the communication, usually no longer than 1 year unless a contractual relationship follows."
    },
    {
      h: "Sharing Personal Data with Third Parties",
      p:
        "Personal data may be shared only to the extent necessary with accountants or tax advisers, IT and hosting providers, carriers or installation partners where required for project delivery, and with public authorities where required by law. Appropriate data processing agreements are in place with such parties."
    },
    {
      h: "Your Rights",
      p:
        "You have the right to access your personal data, request its correction or completion, restrict its processing, request its erasure where legal conditions are met, obtain data portability, and object to processing based on legitimate interest.\n\nIf you believe that your personal data is being processed unlawfully, you also have the right to lodge a complaint with the Czech Office for Personal Data Protection (www.uoou.cz)."
    },
    {
      h: "Interior Photos and Reference Images",
      p:
        "Photos of your interior, windows and completed window treatments are used primarily for the design and delivery of your project. Before using any photos as references, for example in a gallery, we will always ask for your explicit consent or use the photos in a way that does not allow you to be clearly identified."
    }
  ],

  cookiesH: "Cookies",
  cookiesP: [
    "This website uses cookies that are necessary for its basic functionality and may also be used for anonymous traffic measurement and improving the user experience.",
    "Cookies are small text files stored in your browser. You can limit or disable cookies at any time in your browser settings. If cookies are disabled, some website functions may not work properly.",
    "If cookies are used for marketing purposes or advanced analytics, you will be informed on your first visit through a banner and asked for consent where required. You may withdraw your consent at any time by changing the settings or adjusting your browser configuration."
  ]
}
};

