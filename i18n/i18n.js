// i18n.js
// Globální překlady: STR.cs + STR.en
// app.js si bere překlady přes useLang() -> t = STR[lang]

window.STR = {
  cs: {
    brand1: "Jana Segelberg",
    brand2: "Stínění s esencí",

    // Header nav
    nav: ["Jak pracujeme", "Kolik zaplatíte", "Galerie", "Hotové stínění", "Esence", "Kontakt"],

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


    
    // Finished
    finishedH: "Hotové stínění",
    finishedBoxH: "Hotová řešení připravujeme",
    finishedBoxP:
      "Nabídku hotových řešení stínění aktuálně připravujeme.\n\nKaždý prostor řešíme individuálně. Pokud vás zajímá, jaké řešení by dávalo smysl právě u vás, ozvěte se nám a připravíme návrh na míru.",
    finishedBoxBtn: "Nezávazně se zeptat →",
    finishedBoxFoot: "Hotová kolekce bude dostupná později",

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

    nav: ["How we work", "Pricing", "Gallery", "Ready-made", "Essences", "Contact"],

   heroSub: "Sheers · Curtains · Blinds · Custom curtain rods",
cta: "Arrange a consultation",

heroSlides: [
  { h1: "Custom sheers, curtains, blinds and curtain rods", bg: "assets/img/hero/hero-01.webp", pos: "center", posMobile: "center 35%" },
  { h1: "We design window treatments that bring calm, privacy and atmosphere to the interior", bg: "assets/img/hero/hero-02.webp", pos: "center", posMobile: "center 55%" },
  { h1: "Complete service from consultation to final installation", bg: "assets/img/hero/hero-03.webp", pos: "center", posMobile: "center 50%" }
],
    
   homeAboutH: "We design and deliver custom interior window treatments",
homeAbout: [
  "We help create interiors where light, privacy and atmosphere work in balance. We design sheers, curtains, blinds, curtain rods and technical systems so they suit both the space and the way you actually live in it.",
  "We are a Czech family business with more than 20 years of experience. We provide a complete service from consultation and measuring through material selection and sewing to installation and final styling."
],
    
    servicesH: "What we design and deliver",
services: [
  { name: "Sheers", note: "Soften daylight, add privacy and lighten the space." },
  { name: "Curtains", note: "Help with blackout, acoustics and the feeling of warmth and calm." },
  { name: "Blinds", note: "A practical solution for precise light control and a clean look." },
  { name: "Technical systems", note: "Tracks, curtain rods and solutions designed for the space." },
  { name: "Service", note: "Taking down, cleaning, ironing and rehanging our installations." }
],
serviceCardCta: "View guide prices →",

    inspH: "Atmosphere of the space",
inspLead:
  "Well-designed window treatments change more than just the window.\nThey affect the light during the day, privacy in the evening and the overall impression of the interior. The difference between a space without window treatments and a thoughtfully designed solution is often greater than you expect.",
    inspTags: [
      "Light · Space · Freedom",
      "Softness · Movement · Privacy",
      "Function · Silence · Home"
    ],

    benefitsH: "Why clients choose us",
benefits: [
  { name: "Tailored design", note: "Every space has different light, proportions and needs. That is why every design is created specifically for the given interior." },
  { name: "20 years of experience", note: "We know the materials, technical solutions and details that determine the result." },
  { name: "Complete service", note: "From the first consultation through measuring and production to installation and final hanging." }
],
    benefitCardCta: "Learn more →",

    faqH: "Frequently asked questions",
faq: [
  { q: "How does the consultation work?", a: "We come to you, look at the space, discuss your needs and recommend a suitable window treatment solution." },
  { q: "How long does the project take?", a: "Usually 2–8 weeks depending on the scope of the project, selected materials and availability." },
  { q: "Will you bring fabric samples to our home?", a: "Yes, we bring fabric samples to the personal consultation directly in your space so you can choose in real light and in the context of the interior." },
  { q: "Do you also supply tracks and curtain rods?", a: "Yes, we provide complete delivery including tracks, curtain rods, technical systems and installation." },
  { q: "Is it possible to do just one room?", a: "Yes. We design both entire interiors and individual rooms according to the client’s specific needs." }
],
   homeCtaNote: "Prague and surrounding area. Consultation directly in your interior. Tailor-made design, production and installation.",

homeTrust: [
  { value: "20+", label: "years of experience" },
  { value: "Tailored design", label: "based on the space and how it is used" },
  { value: "Complete service", label: "from design to installation" },
  { value: "Collaboration", label: "with architects and designers" }
],
    processH: "How we work",
    steps: ["Consultation", "Design proposal", "Preparation & production", "Installation"],
   stepsTxt: [
  "We visit you on site, review the space together, and take precise measurements.\n\nWe discuss what you expect from the window treatments whether privacy, blackout functionality, or purely decorative elements.\n\nWe present fabric samples and advise you on what works best in the space, as well as what might not make sense from a technical, functional, or visual perspective.\n\nAfter the meeting, you will have a clear understanding of the direction of the proposal and which types of window treatments and materials are most suitable.",
  "Based on the selected materials and technical system, we prepare a price quotation. This serves as a starting point for further discussion. If adjustments are needed, we work together to explore alternatives, whether by modifying materials, technical solutions, or the overall composition of the design. Our goal is always to find the right balance between quality, functionality, and price.",
  "Once the budget is approved and the deposit is paid, we begin the production process.\n\nDuring the individual phases of the process, we simultaneously plan the implementation timeline.",
  "We deliver the finished window treatments, professionally install them, and carefully hang all textiles.\n\nBoth sheer curtains and drapes are steamed, styled, and adjusted so that everything works perfectly not only visually, but also technically.\n\nAfter completing the installation, we always tidy up the space and leave it clean and ready for use.\n\nOn site, we will explain how to operate all elements and recommend proper textile care so that the window treatments function beautifully for years to come."
],
    processImgs: [
      "assets/img/process/process-01.webp",
      "assets/img/process/process-02.webp",
      "assets/img/process/process-03.webp",
      "assets/img/process/process-04.webp"
    ],
    processBridges: ["Observation becomes direction.", "Design turns into reality.", "Detail decides the result."],
    processMicroByStep: [
      "Light, proportions, daily rhythm.",
      "Material, hardware, harmony.",
      "Craft, accuracy, patience.",
      "Installation, finishing, calm."
    ],
    processBehindH: "What stands behind our work?",
   processBehindCards: [
  {
    id: "individualni navrh",
    title: "Individual Design",
    p1: "Every space has different light, different proportions, and its own rhythm throughout the day.",
    p2: "Each design takes shape on site through conversation with you by observing the light, understanding how you use the space, and learning what you truly expect from your window treatments.",
    p3: "For us, an individual design means working together to find the solution that fits your space best."
  },
  {
    id: "zkusenosti",
    title: "20 Years of Experience",
    p1: "Our experience gives us perspective and confidence when making decisions.",
    p2: "We help you navigate the many possibilities and bring together functionality and aesthetics.",
    p3: "The result is not a compromise, but the confidence that the chosen solution truly makes sense for you and your space."
  },
  {
    id: "detail",
    title: "Precision and Attention to Detail",
    p1: "The quality of craftsmanship and technical execution determines whether window treatments will function well and continue to look beautiful for years to come.",
    p2: "It is in the details that the difference becomes clear between a solution that simply looks good and one that truly stands the test of time.",
    p3: "Precision and attention to detail are visible at first glance. It is here that your expectations meet our experience in working with materials."
  }
],
    processEnding: "The goal is for you to feel naturally comfortable in your space.",

    priceH: "Pricing",
    pricingDisclaimer:
      "These amounts are illustrative ranges. A specific proposal and budget will always be confirmed after an on site consultation based on measurements, chosen materials and technical solution.",
    openDetail: "Open details",
    writeMe: "Message me",
    close: "Close",

    pricingItems: [
      {
        key: "zaclon",
        title: "Sheers",
        img: "assets/img/pricing/pricing-01.webp",
        vibe: "Light stays. The space becomes softer and cozier.",
        micro: "Light, proportions, softness.",
        intro: "A light layer that lets daylight in while providing a basic feeling of privacy.",
        rangesTitle: "Estimated (for orientation)",
        ranges: [
          { label: "small window (200 × 270 cm)", value: "approx. CZK 3k–16k" },
          { label: "large window (500 × 290 cm)", value: "approx. CZK 8k–42k" }
        ],
        rangesNote: "Estimated price includes fabric, workmanship and small haberdashery.",
        tiersTitle: "Types",
        tiers: [
          { name: "Basic light voiles", note: "Airy fabrics with lower acquisition cost." },
          { name: "Mid range", note: "Balanced ratio of price, look and function." },
          { name: "Premium fabrics", note: "Exclusive texture, natural materials." }
        ]
      },
      {
        key: "zaves",
        title: "Curtains",
        img: "assets/img/pricing/pricing-02.webp",
        vibe: "Creates privacy. Calms the evening. Protects in the morning.",
        micro: "Material, silence, comfort.",
        intro: "A heavier layer that provides full privacy and light reduction / blackout options.",
        rangesTitle: "Estimated (for orientation)",
        ranges: [
          { label: "small window (200 × 270 cm)", value: "approx. CZK 6k–21k" },
          { label: "large window (500 × 290 cm)", value: "approx. CZK 15k–49k" }
        ],
        rangesNote: "Estimated price includes fabric, workmanship and small haberdashery.",
        tiersTitle: "Types",
        tiers: [
          { name: "Decorative curtain", note: "Primarily look and privacy." },
          { name: "Dim-out", note: "Reduces light, but not complete darkness." },
          { name: "Blackout", note: "Maximum light blocking, partial thermal insulation." }
        ]
      },
      {
        key: "roleta",
        title: "Blinds",
        img: "assets/img/pricing/roleta-latkova.webp",
        vibe: "Clean lines. Function without compromise.",
        micro: "Light control, simplicity.",
        intro: "A practical solution with clean lines. Great for kitchens, bathrooms, and home offices/workspaces.",
        subtypes: [
          {
            key: "latkova",
            label: "Fabric roller blind",
            img: "assets/img/pricing/roleta-latkova.webp",
            micro: "Light control, simplicity.",
            intro: "A practical solution with clean lines. Great for kitchens, bathrooms, and home offices/workspaces.",
            rangesTitle: "Estimated (for orientation)",
            ranges: [
              { label: "small window (130 × 200 cm)", value: "approx. CZK 10k–35k / pc" },
              { label: "large window (350 × 300 cm)", value: "approx. CZK 32k–85k / pc" }
            ],
            tiersTitle: "Types",
            tiers: [
              { name: "Screen / daylight", note: "Light control and airiness." },
              { name: "Blackout", note: "More privacy and light reduction." },
              { name: "Motorized", note: "Comfort, higher cost." }
            ]
          },
          {
            key: "rimska",
            label: "Roman blind",
            img: "assets/img/pricing/roleta-rimska.webp",
            micro: "Soft textile layer, décor and calm.",
            intro: "A textile blind with a curtain like character. Great when you want a soft look and a clean shape without long sheers or curtains.",
            rangesTitle: "Estimated (for orientation)",
            ranges: [
              { label: "small window (110 × 150 cm)", value: "approx. CZK 6k–11k / pc" },
              { label: "large window (180 × 250 cm)", value: "approx. CZK 14k–19k / pc" }
            ],
            tiersTitle: "Types",
            tiers: [
              { name: "Sheer fabrics", note: "Airy, practical." },
              { name: "Curtain fabrics", note: "Privacy, dimming/blackout." },
              { name: "Motorized", note: "Comfort, higher cost." }
            ]
          },
          {
            key: "plisse",
            label: "Pleated blind (Plissé)",
            img: "assets/img/pricing/roleta-plisse.webp",
            micro: "Precise light control. Great for atypical windows.",
            intro: "A pleated blind suitable also for non standard window shapes. It can shade from top or bottom and allows very precise control of light.",
            rangesTitle: "Estimated (for orientation)",
            ranges: [
              { label: "small window (80 × 100 cm)", value: "approx. CZK 3.3k–6k / pc" },
              { label: "large window (120 × 220 cm)", value: "approx. CZK 7k–16k / pc" }
            ],
            tiersTitle: "Types",
            tiers: [
              { name: "Screen / daylight", note: "Light control and airiness." },
              { name: "Blackout", note: "More privacy and light reduction." }
            ]
          }
        ]
      },
      {
        key: "systemy",
        title: "Technical systems",
        img: "assets/img/pricing/systemy-kolejnice.webp",
        vibe: "The foundation that controls everything.",
        micro: "Functional and decorative.",
        intro: "Tracks, rods, bends, motors—solutions for every interior.",
        subtypes: [
          {
            key: "kolejnice",
            label: "Tracks",
            img: "assets/img/pricing/systemy-kolejnice.webp",
            micro: "Clean line. Function and precision.",
            intro: "Tracks are minimal and versatile, straight or bent, ceiling or wall mounted, manual or motorized.",
            rangesTitle: "Estimated (for orientation)",
            ranges: [
              { label: "small window (200 × 270 cm)", value: "approx. CZK 1k–13k" },
              { label: "large window (500 × 290 cm)", value: "approx. CZK 2.5k–18k" }
            ],
            tiersTitle: "Types",
            tiers: [
              { name: "Straight", note: "Simple, clean solution." },
              { name: "Bent", note: "Made to measure for the layout." },
              { name: "Motorized", note: "Comfort and automation." }
            ]
          },
          {
            key: "garnyze",
            label: "Rods",
            img: "assets/img/pricing/systemy-garnyze.webp",
            micro: "Décor. A visible design detail.",
            intro: "Rods are a visible part of the interior. We choose materials, finishes and end caps to match the fabric and the space.",
            rangesTitle: "Estimated (for orientation)",
            ranges: [
              { label: "small window (200 × 270 cm)", value: "approx. CZK 1k–13k" },
              { label: "large window (500 × 290 cm)", value: "approx. CZK 2.5k–18k" }
            ],
            tiersTitle: "Types",
            tiers: [
              { name: "Classic", note: "Decorative solutions for apartments and houses." },
              { name: "Design", note: "More distinctive material, finish, detail." },
              { name: "Custom", note: "Specific mounts, lengths, corners." }
            ]
          }
        ]
      },
      {
        key: "servis",
        title: "Service",
        img: "assets/img/pricing/pricing-05.webp",
        vibe: "Professional care in three steps.",
        micro: "Like new again.",
        intro: "Taking down textiles, washing/cleaning, rehanging and ironing/steaming.",
        rangesTitle: "Estimated by scope",
        ranges: [
          { label: "small window (200 × 270 cm)", value: "approx. CZK 6k–8k" },
          { label: "large window (500 × 290 cm)", value: "approx. CZK 17k–20k" }
        ],
        rangesNote: "Estimated price includes both textile layers, sheers and curtains.",
        tiersTitle: "Types",
        tiers: [
          { name: "Standard maintenance", note: "Take down, wash/clean, iron/steam and rehang." },
          { name: "Large areas", note: "More panels, more demanding handling." },
          { name: "Atypical / heights", note: "Special access, scaffolding/lift as needed." }
        ],
        serviceOnlyNote: "We provide service only for our own installations."
      }
    ],

   // Gallery
galleryH: "Gallery",
galleryOurWorkH: "Our projects",
galleryOurWorkP: "A selection of projects where we work with light, fabric and spatial proportions.",
galleryShowAll: "Show all →",
galleryModalH: "Our projects",
galleryModalSub: "Browse photos, you can scroll down.",
galleryPartnersH: "We collaborate with",
galleryPartnersP: "Architects and designers we often work with to fine tune the final layer of window treatments.",
galleryVisitWeb: "Visit website →",

galleryPartnersNotes: {
  onoje: "Architecture with a feel for atmosphere, materials, and detail. We add the final layer.",
  richter: "Collaboration on interiors where clean lines, function, and a calm atmosphere matter.",
  epic: "An interior studio focused on atmosphere, function, and detail. Together we fine tune the final layer of shading so the space feels natural and harmonious.",
  broda: "Interior design focused on timeless solutions, space planning, and materials. We collaborate on projects where shading completes the calm and character of the interior."
},

        
    finishedH: "Ready-made",
    finishedBoxH: "Ready-made solutions are coming",
    finishedBoxP:
      "We are currently preparing a ready-made selection.\n\nEvery space is handled individually. If you’d like to know what would make sense for your home or project, message us and we’ll prepare a tailored proposal.",
    finishedBoxBtn: "Ask us — no obligation →",
    finishedBoxFoot: "The ready-made collection will be available later",

    essenceH: "Essences",
    essenceLead:
      "Scent gently complements the visual impression of a space. It helps shape an atmosphere connected with light, fabric and the rhythm of the day. We use selected essences as a subtle but effective part of how an interior is experienced.",
    essenceBoxH: "Essences are coming",
    essenceBoxP:
      "Scents will become a dedicated chapter connected to the space and its atmosphere.\n\nWe will tune essences to match the needs and activities in each room.",
    essenceBoxFoot: "Preparing for you",

    contactH: "Contact",
    name: "Name",
    email: "Email",
    message: "Message",
    send: "Send",
    contactHowH: "How it works",
    contactHow: [
      "Send a short message and optionally photos of your windows or space.",
      "I will reply with suggested consultation dates.",
      "On site, we fine-tune the solution and I prepare a tailored proposal."
    ],
   contactNote: "",
contactFullName: "Full name",
contactPhone: "Phone",
contactPhotos: "Photos (optional)",

    footerContactH: "Contact",
    footerLegalH: "Legal",
    footerTerms: "Terms & Conditions",
    footerPrivacy: "Privacy Policy",
    footerCookies: "Cookies",
    footerCta: "Message me →",
   footerBlurb: "Custom design and installation of interior window treatments.\nSheers · Curtains · Blinds · Curtain rods · Technical systems",
    rights: "All rights reserved.",

    termsH: "Terms & Conditions",
    termsIntro:
      "These terms and conditions govern the relationship between the seller and the customer when purchasing goods and services through this website. Please read them before completing an order.",
    termsSections: [
      {
        h: "I. Introductory provisions",
        p:
          "The seller is the business entity operating under the name or company listed on this page and in the website footer (including business ID, VAT ID, and contact details). The customer is an individual or legal entity entering into a distance contract with the seller via this website, email or phone."
      },
      {
        h: "II. Offer of goods and services",
        p:
          "The website primarily presents ready-made or custom-made interior window treatments, supplementary products (e.g., essences and scents), and related services such as consultations, design proposals and installation. For made-to-measure projects, the price is set individually based on specific parameters."
      },
      {
        h: "III. Order and contract conclusion",
        p:
          "Goods or services can be ordered via the order form, email or phone. The contract is concluded at the moment the seller confirms the order, typically by email. For made-to-measure projects, the contract is concluded only after the customer approves the specific quotation."
      },
      {
        h: "IV. Price and payment terms",
        p:
          "Prices are stated including VAT if the seller is a VAT payer, and including any statutory fees unless stated otherwise. Payment can be made by bank transfer or by another method specified in the order. For made-to-measure projects, the seller may require a deposit; the amount and due date are specified in the quotation."
      },
      {
        h: "V. Delivery terms",
        p:
          "The delivery time for ready-made goods is stated as an estimate for individual products or in the order confirmation. For made-to-measure projects it depends on the scope, selected materials and agreed schedule. Goods are delivered by a carrier or handed over during on-site installation."
      },
      {
        h: "VI. Claims (defects and complaints)",
        p:
          "The customer must inspect the goods upon receipt and report any apparent defects without undue delay. A complaint may be submitted in writing or by email to the contacts listed on the website. The seller will handle the complaint without undue delay, no later than within 30 days from submission unless agreed otherwise."
      },
      {
        h: "VII. Withdrawal from contract for consumers",
        p:
          "If the customer is a consumer, they have the right to withdraw from a distance contract within 14 days of receiving the goods unless an exception applies by law. This right does not apply in particular to goods made to the customer’s specifications or for their personal use (for example curtains, sheers and window treatments made to specific measurements and according to an approved design)."
      },
      {
        h: "VIII. Out-of-court dispute resolution",
        p:
          "In the event of a dispute between the seller and a consumer, the consumer may contact the Czech Trade Inspection Authority (www.coi.cz) as the out-of-court dispute resolution body."
      },
      {
        h: "IX. Final provisions",
        p:
          "Legal relationships between the seller and the customer are governed by the laws of the Czech Republic. The current version of these terms is published on the seller’s website and may be updated from time to time."
      }
    ],

    privacyH: "Privacy Policy",
    privacyIntro:
      "This page explains how personal data is processed in connection with inquiries, orders and the operation of this website.",
    privacySections: [
      { h: "Data controller", p: "The data controller is the business entity listed in the contact details on this website (name/company, address, business ID, VAT ID, email, phone)." },
      {
        h: "What data we process and why",
        p:
          "We primarily process identification and contact details (name, company name, email, phone, address), as well as inquiry/project data (e.g., measurements, photos of windows/interior, your requirements) and invoicing data including payment-related information.\n\nWe process the data in order to handle inquiries, conclude contracts, deliver goods and services, keep accounting records and comply with legal obligations, and to protect legal claims (e.g., in case of complaints or disputes)."
      },
      {
        h: "Legal basis",
        p:
          "The legal basis is mainly the performance of a contract or steps taken prior to entering into a contract, compliance with legal obligations related to accounting and taxes, and the legitimate interest in protecting legal claims. For marketing (e.g., newsletters), we would use personal data only with your consent or based on legitimate interest if you are our customer, always with an easy opt-out option."
      },
      {
        h: "Data retention",
        p:
          "Contract and invoicing data is kept for the period required by law (typically 10 years). Data from non-binding inquiries is kept only as long as necessary to handle communication, usually no longer than 1 year unless a contractual relationship arises."
      },
      {
        h: "Sharing with third parties",
        p:
          "We share personal data only to the necessary extent with accountants or tax advisors, IT/hosting providers, carriers or installation partners if needed for project delivery, and public authorities when required by law. We have appropriate data processing agreements in place with such parties."
      },
      {
        h: "Your rights",
        p:
          "You have the right to access your personal data, rectify or complete it, restrict processing, request erasure (when legal conditions are met), data portability, and to object to processing based on legitimate interest.\n\nIf you believe your data is being processed unlawfully, you also have the right to lodge a complaint with the Czech Office for Personal Data Protection (www.uoou.cz)."
      },
      {
        h: "Interior photos and reference images",
        p:
          "Photos of your interior, windows and installed treatments are used primarily for designing and delivering your project. We will always ask for your explicit consent before using any photos as references (e.g., in a gallery), or we will use photos in a way that does not allow you to be clearly identified."
      }
    ],

    cookiesH: "Cookies",
    cookiesP: [
      "This website uses cookies that are necessary for basic functionality and may also be used for anonymous traffic measurement and improving the user experience.",
      "Cookies are small text files stored in your browser. You can limit or disable cookies at any time in your browser settings. If cookies are disabled, some website functions may not work properly.",
      "If we use cookies for marketing purposes or advanced analytics, we will inform you on your first visit via a banner and request your consent where required. You can withdraw your consent at any time by adjusting settings or your browser configuration."
    ]
  }
};

