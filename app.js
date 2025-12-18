const { useState, useEffect, useMemo, useRef } = React;
const MAIN_HERO =
  "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?q=80&w=1800&auto=format&fit=crop";

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("reveal-visible");
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => io.observe(el));
  }, []);
}

const STR = {
  cs: {
    brand1: "Jana Segelberg",
    brand2: "Stínění s esencí",
    nav: ["Jak pracujeme", "Kolik zaplatíte", "Galerie", "Hotové stínění", "Esence", "Kontakt"],
    heroH1: "Kde se světlo setká s emocí",
    heroSub: "Záclony · Závěsy · Rolety · Esence",
    cta: "Kontaktujte nás",
    heroSlides: [
  {
    h1: "Kde se světlo setká s emocí",
    bg: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?q=80&w=1800&auto=format&fit=crop"
  },
  {
    h1: "Stínění, které dává domovu klid",
    bg: "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1800&auto=format&fit=crop"
  },
  {
    h1: "Látka, světlo a detail v rovnováze",
    bg: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1800&auto=format&fit=crop"
  }
],



    homeAbout: [
  "Navrhujeme stínění tak, aby sedělo vašemu prostoru i tomu, jak v něm opravdu žijete. Nejde jen o látku a systém. Jde o světlo během dne, soukromí večer a pocit, který doma chcete mít.",
  "Každý detail ladíme podle vás. Respektujeme vaše potřeby a preference a přizpůsobujeme se tomu, co je pro vás důležité. Někdo chce klid a měkké světlo, jiný funkční zatemnění nebo jednoduché řešení bez zbytečností. Vždy hledáme cestu, která dává smysl právě vám.",
  "Jsme rodinná firma a na práci je to znát. Dáváme si záležet a komunikujeme na rovinu. Máme více než dvacet let zkušeností s látkami, šitím i technikou a chceme, aby výsledek fungoval dlouhodobě, nejen první den."
],




    servicesH: "Služby",
  services: [
  { name: "Záclony", note: "Lehkost, jemnost a útulnost." },
  { name: "Závěsy", note: "Estetika, teplo a soukromí." },
  { name: "Rolety", note: "Praktičnost a čisté linie." },
  { name: "Technické systémy", note: "Dekorativní a funkční řešení." },
  { name: "Servis", note: "Údržba textilu." }
],
    benefitsH: "Proč s námi",
    benefits: [
      { name: "Individuální návrh", note: "Řešení vytvořené přesně pro váš prostor a vaše potřeby." },
      { name: "20 let zkušeností", note: "Znalost materiálů i technologií." },
      { name: "Jemnost detailu", note: "Preciznost v každém kroku." }
    ],

    faqH: "Často se ptáte",
    faq: [
      {
        q: "Jak probíhá konzultace?",
        a: "Přijedu k vám, podívám se na prostor, probereme vaše potřeby a zvolíme směr i materiály."
      },
      {
        q: "Jak dlouho trvá výroba?",
        a: "Obvykle 4–8 týdnů podle rozsahu zakázky a dostupnosti materiálů."
      },
      {
        q: "Mohu vidět vzorky?",
        a: "Ano, vzorky látek přivezu na osobní konzultaci přímo do vašeho prostoru."
      },
      {
        q: "Montujete i kolejnice a systémy?",
        a: "Ano, zajišťujeme kompletní dodání včetně techniky a montáže."
      }
    ],

    inspH: "Atmosféra",

    priceH: "Kolik zaplatíte",
    priceP:
      "Ceny jsou orientační; závisí na materiálu, rozměrech a typu systému. Rámec sdělím na první schůzce.",

    processH: "Jak pracujeme",

   steps: ["Konzultace", "Návrh řešení", "Příprava & výroba", "Realizace"],
stepsTxt: [
  "Poznáme váš prostor, světlo a to, co od stínění očekáváte.",
  "Vybereme vhodné látky a techniku, navrhneme konkrétní řešení a harmonogram.",
  "Zaměření, šití a technické zpracování na míru včetně přípravy montáže.",
  "Montáž, doladění a finální atmosféra, aby vše fungovalo dlouhodobě."
],
    
processIntro:
  "Čtyři kroky. Jeden celek. V každém je prostor pro návrat a doladění detailu.",

processImgs: [
  // 01 Konzultace – světlo / okno
  "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1600&auto=format&fit=crop",
  // 02 Návrh řešení – látka / detail
  "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1600&auto=format&fit=crop",
  // 03 Příprava & výroba – řemeslo
  "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop",
  // 04 Realizace – hotový klid / interiér
  "https://images.unsplash.com/photo-1505693416388-36a5ac3be353?q=80&w=1600&auto=format&fit=crop"
],


    finishedH: "Hotové stínění",
    finished: [
      { name: "Blackout", note: "Úplné zatemnění – ideální do ložnic a projekčních místností." },
      { name: "Záclona (Voál)", note: "Lehkost, která propouští světlo a zachovává soukromí." },
      { name: "Dekorační závěs", note: "Dodává prostoru hloubku a charakter." },
      { name: "Kombinované stínění", note: "Spojuje praktické i estetické vrstvy." },
      { name: "Technické stínění", note: "Minimalistické a funkční řešení." },
      { name: "Individuální řešení", note: "Na míru prostoru i atmosféře." }
    ],

    essenceH: "Esence",
    essences: [
      { name: "Vanilka", note: "Hřejivá, uklidňující – ložnice, čtecí kout." },
      { name: "Peppermint", note: "Čistý, svěží – pracovna, kuchyně." },
      { name: "Citrus", note: "Lehký, radostný – obývák, koupelna." },
      { name: "Levandule", note: "Uvolňuje – ložnice, wellness." },
      { name: "Rozmarýn", note: "Čistí a posiluje – vstup, kuchyně." },
      { name: "Eukalyptus", note: "Osvěžuje dech – koupelna." },
      { name: "Sezónní", note: "Měsíční speciál – mění se automaticky." }
    ],

    galleryH: "Galerie",
    contactH: "Kontakt",
    name: "Jméno",
    email: "E-mail",
    message: "Zpráva",
    send: "Odeslat",
    rights: "Všechna práva vyhrazena."
  }
};

STR.en = STR.cs;

function useLang() {
  const [lang, setLang] = useState(() => localStorage.getItem("lang") || "cs");
  useEffect(() => {
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);
  return { lang, setLang, t: STR[lang] };
}

function useRoute() {
  const [route, setRoute] = useState(() => location.hash.replace("#", "") || "/");
  useEffect(() => {
    const onHash = () => setRoute(location.hash.replace("#", "") || "/");
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);
  return { route };
}

function go(path) {
  location.hash = path;
}

const Header = ({ t, lang, setLang }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-30 border-b border-[var(--line)]/70 bg-white/70 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between reveal">
        <div className="leading-4 cursor-pointer" onClick={() => go("/")}>
          <div className="script text-2xl -mb-0.5">{t.brand1}</div>
          <div className="text-xs tracking-wide text-[var(--muted)]">{t.brand2}</div>
        </div>

        <nav className="hidden md:flex gap-6 text-sm font-semibold">
          {t.nav.map((label, i) => {
            const path = ["/process", "/pricing", "/gallery", "/finished", "/essences", "/contact"][i];
            return (
              <button
                key={i}
                onClick={() => go(path)}
                className="relative group hover:text-[var(--text)]/90 text-[var(--text)]/75"
              >
                <span>{label}</span>
              </button>
            );
          })}
        </nav>

        <div className="flex gap-2">
          <button
            onClick={() => setLang("cs")}
            className={
              "px-3 py-1.5 text-sm rounded-lg border " +
              (lang === "cs" ? "border-[var(--sand)]" : "border-[var(--line)]")
            }
          >
            CZ
          </button>
          <button
            onClick={() => setLang("en")}
            className={
              "px-3 py-1.5 text-sm rounded-lg border " +
              (lang === "en" ? "border-[var(--sand)]" : "border-[var(--line)]")
            }
          >
            EN
          </button>
        </div>
      </div>
    </header>
  );
};

function Hero({ t, small = false, showCta = false, intervalMs = 8000, bg }) {
  const slides = t.heroSlides || [];
  const [index, setIndex] = useState(0);

  // "stage" řídí animaci: enter -> show -> exit
  const [stage, setStage] = useState("show");
  const timerRef = useRef(null);

  useEffect(() => {
    if (small || slides.length < 2) return;

    const run = () => {
      // Exit animace (odjíždí doleva)
      setStage("exit");

      // po době exitu přepneme slide a dáme enter
      timerRef.current = setTimeout(() => {
        setIndex((i) => (i + 1) % slides.length);
        setStage("enter");

        // po krátké době enteru přejdeme do show
        timerRef.current = setTimeout(() => {
          setStage("show");
        }, 40);
      }, 650);
    };

    const id = setInterval(run, intervalMs);
    return () => {
      clearInterval(id);
      clearTimeout(timerRef.current);
    };
  }, [small, slides.length, intervalMs]);

  const slide = slides[index] || {};
const effectiveBg = small && bg ? bg : slide.bg;


  // Pozice pro slide efekt
 const bgClass =
  stage === "exit"
    ? "opacity-0 scale-[1.03]"
    : "opacity-100 scale-100";

  const textClass =
  stage === "exit"
    ? "opacity-0 translate-y-2"
    : "opacity-100 translate-y-0";

  return (
    <section
      className={
        (small ? "min-h-[42vh]" : "min-h-[92vh]") +
        " relative flex items-center overflow-hidden"
      }
    >
     {/* SLIDE background */}
<div
  className={
    "absolute inset-0 transition-all duration-1000 ease-in-out will-change-transform " +
    bgClass
  }
  style={{
   backgroundImage: `linear-gradient(to right, rgba(0,0,0,.25), rgba(0,0,0,.05)), url('${effectiveBg}')`,
    backgroundSize: "cover",
    backgroundPosition: "center"
  }}
/>



      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/25"></div>

      {/* SLIDE text */}
      <div className="relative max-w-6xl mx-auto px-4 w-full">
  <div
    className={
      "max-w-2xl text-white transition-all duration-700 ease-in-out will-change-transform " +
      textClass
    }
  >
    <h1 className="script text-5xl md:text-6xl mb-3">{slide.h1}</h1>
    <p className="text-lg opacity-95">{t.heroSub}</p>

    {!small && showCta && (
      <button
        onClick={() => go("/contact")}
        className="btn-cta inline-block mt-6 px-5 py-3 rounded-full bg-[var(--sand)] text-[var(--text)] font-bold border border-black/5"
      >
        {t.cta}
      </button>
    )}
  </div>
</div>
    </section>
  );
}



function Home({ t }) {
  useReveal();

  return (
    <>
  <Hero t={t} showCta intervalMs={8000} />


      <section className="py-16 max-w-6xl mx-auto px-4 reveal">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="soft-shadow rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="script text-4xl mb-4">O nás</h2>
            {t.homeAbout.map((p, idx) => (
              <p
                key={idx}
                className={
                  "text-[var(--muted)] text-lg leading-relaxed" +
                  (idx > 0 ? " mt-4" : "")
                }
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 max-w-6xl mx-auto px-4 reveal">
        <h2 className="script text-4xl mb-8">{t.servicesH}</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-6">
          {t.services.map((s, i) => (
            <div key={i} className="service-card soft-shadow reveal">
              <div className="text-lg font-semibold mb-1">{s.name}</div>
              <p className="text-[var(--muted)] text-sm leading-relaxed">
                {s.note}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 max-w-6xl mx-auto px-4 reveal">
        <h2 className="script text-4xl mb-8">{t.benefitsH}</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {t.benefits.map((b, i) => (
            <div key={i} className="benefit-card soft-shadow reveal">
              <div className="text-lg font-semibold mb-2">{b.name}</div>
              <p className="text-[var(--muted)] text-sm leading-relaxed">
                {b.note}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 max-w-4xl mx-auto px-4 reveal text-center">
        <button
          onClick={() => go("/contact")}
          className="btn-cta px-6 py-4 rounded-full bg-[var(--sand)] text-[var(--text)] font-bold border border-black/5 text-lg"
        >
          {t.cta}
        </button>
      </section>

      <section className="py-16 max-w-4xl mx-auto px-4 reveal">
        <h2 className="script text-4xl mb-6">{t.faqH}</h2>
        {t.faq.map((f, i) => (
          <div key={i} className="faq-item">
            <div className="font-semibold mb-1">{f.q}</div>
            <div className="text-[var(--muted)]">{f.a}</div>
          </div>
        ))}
      </section>

      <section className="py-16 max-w-6xl mx-auto px-4 reveal">
        <h2 className="script text-4xl mb-8">{t.inspH}</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[
            "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1600&auto=format&fit=crop"
          ].map((src, i) => (
            <div key={i} className="inspiration-img soft-shadow overflow-hidden">
              <img
                src={src}
                className="w-full h-full object-cover aspect-[4/3]"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function Process({ t }) {
  useReveal();

  const bgTop = (t.processImgs && t.processImgs[0]) || 
    "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1800&auto=format&fit=crop";

  const steps = t.steps || [];
  const texts = t.stepsTxt || [];
  const imgs = t.processImgs || [];

  return (
    <>
      <Hero t={t} small bg={bgTop} />

      <section className="max-w-6xl mx-auto px-4 py-16 reveal">
        <div className="max-w-3xl mx-auto text-left md:text-center">
          <h2 className="script text-4xl mb-4">{t.processH}</h2>
          <p className="text-[var(--muted)] text-lg">
            {t.processIntro ||
              "Čtyři kroky. Jeden celek. V každém je prostor pro návrat a doladění detailu."}
          </p>
        </div>

        <div className="mt-12 space-y-8">
          {steps.map((title, i) => {
            const reverse = i % 2 === 1;
            const n = String(i + 1).padStart(2, "0");

            return (
              <div
                key={i}
                className={
                  "grid md:grid-cols-2 gap-8 items-center reveal " +
                  (reverse ? "md:[&>*:first-child]:order-2" : "")
                }
              >
                {/* IMAGE */}
                <div className="soft-shadow rounded-2xl overflow-hidden bg-white border border-[var(--line)]">
                  <img
                    src={imgs[i] || bgTop}
                    alt={title}
                    className="w-full h-full object-cover aspect-[16/10] md:aspect-[16/9]"
                    loading="lazy"
                  />
                </div>

                {/* TEXT */}
                <div className="max-w-xl">
                  <div className="text-xs tracking-widest text-[var(--muted)] mb-2">
                    {n}
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">{title}</h3>
                  <p className="text-[var(--muted)] text-base leading-relaxed">
                    {texts[i]}
                  </p>

                  {/* malý "detail" řádek – drží premium pocit */}
                  <div className="mt-4 inline-flex items-center gap-2 text-sm text-[var(--muted)]">
                    <span className="w-10 h-px bg-[var(--line)]"></span>
                    <span>
                      {i === 0 && "Světlo, proporce, rytmus dne."}
                      {i === 1 && "Materiál, technika, harmonie."}
                      {i === 2 && "Řemeslo, přesnost, trpělivost."}
                      {i === 3 && "Montáž, doladění, klid."}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="max-w-3xl mx-auto mt-12 text-center text-[var(--muted)]">
          Cílem je, abyste se v prostoru cítili přirozeně a klidně – bez kompromisů
          mezi estetikou a praktičností.
        </div>
      </section>
    </>
  );
}


function Pricing({ t }) {
  useReveal();

  const details = [
    "Ideální, když chcete jemné denní světlo, ale zachovat si soukromí.",
    "Pro večerní zatemnění, akustický komfort a pocit útulna.",
    "Technické zázemí, které drží celé řešení elegantně a spolehlivě."
  ];

  return (
    <>
      <Hero
        t={t}
        small
        bg="https://images.unsplash.com/photo-1549187774-b4e9b0445b41?q=80&w=1800&auto=format&fit=crop"
      />
      <section className="max-w-6xl mx-auto px-4 py-16 reveal">
        <h2 className="script text-4xl mb-4">{t.priceH}</h2>
        <p className="text-[var(--muted)] max-w-3xl">{t.priceP}</p>

        <div className="mt-8 grid md:grid-cols-3 gap-4">
          {["Voile / Záclona", "Závěs (blackout/dim-out)", "Kolejnice / systém"].map(
            (name, i) => (
              <div
                key={i}
                className="rounded-2xl bg-white border border-[var(--line)] p-6 soft-shadow reveal"
              >
                <div className="font-semibold mb-2">{name}</div>
                <div className="text-sm text-[var(--muted)] mb-2">
                  Cena na míru po zaměření • materiál, rozměr, ušití
                </div>
                <div className="text-sm text-[var(--muted)]">
                  {details[i]}
                </div>
              </div>
            )
          )}
        </div>

        <div className="mt-10 max-w-3xl text-sm text-[var(--muted)]">
          <div className="font-semibold mb-2">Co ovlivňuje cenu</div>
          <ul className="list-disc pl-5 space-y-1">
            <li>typ a kvalita zvoleného materiálu, jeho gramáž a údržba,</li>
            <li>rozměry oken a výška montáže,</li>
            <li>náročnost technického řešení (ohyby, střešní okna, kombinace vrstev).</li>
          </ul>
        </div>
      </section>
    </>
  );
}

function Gallery({ t }) {
  useReveal();

  const GALLERY = [
    "https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1542326237-94b1c5a538d6?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1521783988139-893ce3cdb4e8?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1493666438817-866a91353ca9?q=80&w=1600&auto=format&fit=crop"
  ];

  return (
    <>
      <Hero
        t={t}
        small
        bg="https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1800&auto=format&fit=crop"
      />

      <section className="max-w-6xl mx-auto px-4 py-16 reveal">
        <h2 className="script text-4xl mb-4">{t.galleryH}</h2>
        <p className="text-[var(--muted)] max-w-3xl mb-8">
          Výběr realizací, kde hraje roli světlo, látka a proporce prostoru.
          Fotografie průběžně obměňujeme podle aktuálních projektů.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {GALLERY.map((src, i) => (
            <a
              key={i}
              href={src}
              className="relative group reveal"
              onClick={(e) => openLightbox(e, src)}
            >
              <img
                src={src}
                className="rounded-xl soft-shadow w-full h-full object-cover aspect-[4/3]"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition rounded-xl"></div>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}

function Finished({ t }) {
  useReveal();

  const IMGS = [
    "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1521783988139-893ce3cdb4e8?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1484100356142-db6ab6244067?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop"
  ];

  const uses = [
    "Silné zatemnění pro klidný, nerušený spánek.",
    "Jemné denní světlo s pocitem lehkosti.",
    "Dekorativní vrstva, která prostoru dodá výraz.",
    "Spojení praktičnosti a estetiky v jedné kompozici.",
    "Řešení pro velká okna, kanceláře či atypické prostory.",
    "Pro projekty, kde je potřeba jít za běžné standardy."
  ];

  const idealFor = [
    "Ideální pro ložnice, dětské pokoje a projekční místnosti.",
    "Vhodné do obývacích pokojů, kuchyní a společných prostor.",
    "Nejlépe funguje v obývacích pokojích, jídelnách a reprezentativních místnostech.",
    "Vhodné tam, kde potřebujete scénovat světlo během dne i večera.",
    "Doporučeno pro minimalistické interiéry a moderní architekturu.",
    "Pro interiéry s konkrétním zadáním a specifickými požadavky."
  ];

  return (
    <>
      <Hero
        t={t}
        small
        bg="https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1800&auto=format&fit=crop"
      />

      <section className="max-w-6xl mx-auto px-4 py-16 reveal">
        <h2 className="script text-4xl mb-4">{t.finishedH}</h2>
        <p className="text-[var(--muted)] max-w-3xl mb-8">
          Nabízíme několik základních typů hotového stínění, které umíme dále
          přizpůsobit vašemu prostoru. Každý typ má své optimální použití – od
          ložnicového zatemnění až po jemné vrstvení ve společenských
          místnostech.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {t.finished.map((f, i) => (
            <div
              key={i}
              className="rounded-2xl border border-[var(--line)] p-4 soft-shadow reveal bg-gradient-to-b from-white to-[var(--bg2)] flex flex-col"
            >
              <img
                src={IMGS[i]}
                className="w-full h-36 object-cover rounded-xl mb-3"
              />
              <div className="text-base font-semibold mb-1">{f.name}</div>
              <p className="text-[var(--muted)] text-sm mb-2">{f.note}</p>
              <p className="text-[var(--muted)] text-xs mb-1">{uses[i]}</p>
              <p className="text-[var(--muted)] text-xs">{idealFor[i]}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function Essences({ t }) {
  useReveal();

  return (
    <>
      <Hero
        t={t}
        small
        bg="https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1800&auto=format&fit=crop"
      />

      <section className="max-w-6xl mx-auto px-4 py-16 reveal">
        <h2 className="script text-4xl mb-4">{t.essenceH}</h2>
        <p className="text-[var(--muted)] max-w-3xl mb-8">
          Vůně jemně doplňuje vizuální dojem z prostoru. Pomáhá dotvořit atmosféru,
          která se pojí se světlem, látkou i rytmem dne. Vybrané esence
          používáme jako nenápadný, ale výrazný prvek celkového vnímání interiéru.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {t.essences.map((e, i) => (
            <div
              key={i}
              className="rounded-2xl border border-[var(--line)] p-6 soft-shadow reveal bg-gradient-to-b from-white to-[var(--bg2)]"
            >
              <h3 className="text-base font-semibold">{e.name}</h3>
              <p className="text-[var(--muted)] mt-2 text-sm">{e.note}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function Contact({ t }) {
  useReveal();

  return (
    <>
      <Hero
        t={t}
        small
        bg="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1800&auto=format&fit=crop"
      />

      <section className="max-w-6xl mx-auto px-4 py-16 reveal">
        <h2 className="script text-4xl mb-6">{t.contactH}</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <p>
              <strong>{t.name}</strong>
              <br />
              Jana Segelberg
            </p>

            <p className="mt-3">
              <strong>E-mail</strong>
              <br />
              <a
                href="mailto:hello@janasegelberg.com"
                className="underline"
              >
                hello@janasegelberg.com
              </a>
            </p>

            <p className="mt-3">
              <strong>Telefon</strong>
              <br />
              <a href="tel:+420724379309" className="underline">
                +420 724 379 309
              </a>
            </p>

            <div className="text-[var(--muted)] text-sm mt-6 space-y-2">
              <div className="font-semibold">Jak to probíhá</div>
              <ol className="list-decimal pl-5 space-y-1">
                <li>Pošlete krátkou zprávu a případně fotografie oken či prostoru.</li>
                <li>Ozvu se vám s návrhem termínu konzultace.</li>
                <li>Na místě společně doladíme řešení, které pro vás připravím.</li>
              </ol>
            </div>

            <p className="text-[var(--muted)] text-sm mt-4">
              Po schválení vizuálu je možné napojit formulář na systém pro
              zpracování poptávek a potvrzení termínů.
            </p>
          </div>

          <form className="rounded-2xl bg-white border border-[var(--line)] p-6 soft-shadow reveal">
            <div className="grid gap-4">
              <label className="text-sm">
                {t.name}
                <input
                  className="mt-1 w-full border rounded-lg px-3 py-2 border-[var(--line)]"
                  required
                />
              </label>

              <label className="text-sm">
                {t.email}
                <input
                  type="email"
                  className="mt-1 w-full border rounded-lg px-3 py-2 border-[var(--line)]"
                  required
                />
              </label>

              <label className="text-sm">
                {t.message}
                <textarea
                  rows="5"
                  className="mt-1 w-full border rounded-lg px-3 py-2 border-[var(--line)]"
                  required
                ></textarea>
              </label>

              <label className="text-sm">
                Fotografie (volitelné)
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  className="mt-1 w-full border rounded-lg px-3 py-2 border-[var(--line)] bg-white"
                />
              </label>

              <button
                type="button"
                className="btn-cta px-5 py-3 rounded-full bg-[var(--sand)] text-[var(--text)] font-bold border border-black/5"
              >
                {t.send}
              </button>

              <p className="text-[var(--muted)] text-sm">
                * Demo formulář – bez odesílání.
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

/* ---------- NOVÉ STRÁNKY: VOP, GDPR, COOKIES ---------- */

function Terms() {
  useReveal();
  return (
    <section className="max-w-4xl mx-auto px-4 py-16 reveal">
      <h2 className="script text-4xl mb-6">Obchodní podmínky</h2>
      <p className="text-[var(--muted)] mb-4 text-sm">
        Tyto obchodní podmínky upravují vztah mezi prodávajícím a zákazníkem při nákupu
        zboží a služeb prostřednictvím těchto webových stránek. Doporučuji vám je před
        dokončením objednávky pročíst.
      </p>

      <h3 className="font-semibold mt-4 mb-1 text-base">I. Úvodní ustanovení</h3>
      <p className="text-[var(--muted)] text-sm mb-3">
        Prodávajícím je podnikatel působící pod jménem nebo obchodní firmou uvedenou
        na této stránce a v patičce webu (včetně IČO, DIČ a kontaktních údajů). Zákazníkem
        je fyzická nebo právnická osoba, která uzavírá smlouvu s prodávajícím na dálku,
        prostřednictvím těchto webových stránek, e-mailu nebo telefonu.
      </p>

      <h3 className="font-semibold mt-4 mb-1 text-base">II. Nabídka zboží a služeb</h3>
      <p className="text-[var(--muted)] text-sm mb-3">
        Na webu jsou prezentovány zejména hotové nebo zakázkově vyráběné prvky vnitřního
        stínění, doplňkové produkty (např. esence a vůně) a související služby, jako jsou
        konzultace, návrh řešení a montáž. U zakázek na míru je cena stanovována individuálně
        podle konkrétních parametrů zakázky.
      </p>

      <h3 className="font-semibold mt-4 mb-1 text-base">III. Objednávka a uzavření smlouvy</h3>
      <p className="text-[var(--muted)] text-sm mb-3">
        Zboží nebo služby lze objednat prostřednictvím objednávkového formuláře, e-mailem
        nebo telefonicky. Smlouva je uzavřena okamžikem potvrzení objednávky ze strany
        prodávajícího, a to zpravidla e-mailem. U zakázek na míru dochází k uzavření smlouvy
        až po schválení konkrétní cenové nabídky zákazníkem.
      </p>

      <h3 className="font-semibold mt-4 mb-1 text-base">IV. Cena a platební podmínky</h3>
      <p className="text-[var(--muted)] text-sm mb-3">
        Ceny jsou uvedeny včetně DPH, je-li prodávající plátcem DPH, a včetně případných
        zákonných poplatků, není-li uvedeno jinak. Cena může být uhrazena převodem na účet
        prodávajícího nebo jiným způsobem uvedeným v objednávce. U zakázek na míru si
        prodávající může vyžádat zálohu, jejíž výše a splatnost jsou uvedeny v nabídce.
      </p>

      <h3 className="font-semibold mt-4 mb-1 text-base">V. Dodací podmínky</h3>
      <p className="text-[var(--muted)] text-sm mb-3">
        Dodací lhůta hotového zboží je uvedena orientačně u jednotlivých produktů nebo v
        potvrzení objednávky. U zakázek na míru závisí na povaze zakázky, zvolených
        materiálech a domluveném harmonogramu. Zboží je doručováno dopravcem nebo
        předáno při osobní montáži.
      </p>

      <h3 className="font-semibold mt-4 mb-1 text-base">
        VI. Práva z vadného plnění (reklamace)
      </h3>
      <p className="text-[var(--muted)] text-sm mb-3">
        Zákazník je povinen po převzetí zboží zkontrolovat jeho stav a případné zjevné
        vady bez zbytečného odkladu reklamovat. Reklamace může být uplatněna písemně
        nebo e-mailem na kontakty uvedené na webu. Prodávající vyřídí reklamaci bez
        zbytečného odkladu, nejpozději do 30 dnů od jejího uplatnění, pokud se se
        zákazníkem nedohodne jinak.
      </p>

      <h3 className="font-semibold mt-4 mb-1 text-base">
        VII. Odstoupení od smlouvy u spotřebitelů
      </h3>
      <p className="text-[var(--muted)] text-sm mb-3">
        Je-li zákazník spotřebitelem, má při nákupu na dálku právo odstoupit od smlouvy
        do 14 dnů od převzetí zboží, není-li zákonem stanovena výjimka. Toto právo se
        nevztahuje zejména na zboží vyrobené podle přání zákazníka nebo pro jeho osobní
        potřebu (například závěsy, záclony a stínění šité na konkrétní míru a dle schváleného
        návrhu).
      </p>

      <h3 className="font-semibold mt-4 mb-1 text-base">
        VIII. Mimosoudní řešení sporů
      </h3>
      <p className="text-[var(--muted)] text-sm mb-3">
        V případě sporu mezi prodávajícím a spotřebitelem se může spotřebitel obrátit na
        Českou obchodní inspekci (www.coi.cz) jako subjekt mimosoudního řešení sporů.
      </p>

      <h3 className="font-semibold mt-4 mb-1 text-base">IX. Závěrečná ustanovení</h3>
      <p className="text-[var(--muted)] text-sm mb-3">
        Právní vztahy mezi prodávajícím a zákazníkem se řídí právním řádem České republiky.
        Aktuální znění těchto obchodních podmínek je zveřejněno na webových stránkách
        prodávajícího a může být průběžně aktualizováno.
      </p>
    </section>
  );
}

function Privacy() {
  useReveal();
  return (
    <section className="max-w-4xl mx-auto px-4 py-16 reveal">
      <h2 className="script text-4xl mb-6">Ochrana osobních údajů</h2>
      <p className="text-[var(--muted)] text-sm mb-4">
        Na této stránce najdete informace o tom, jak zpracovávám osobní údaje v souvislosti
        s poptávkami, objednávkami a fungováním těchto webových stránek.
      </p>

      <h3 className="font-semibold mt-4 mb-1 text-base">Správce osobních údajů</h3>
      <p className="text-[var(--muted)] text-sm mb-3">
        Správcem osobních údajů je podnikatel uvedený v kontaktních údajích na těchto
        stránkách (jméno / název, adresa, IČO, DIČ, e-mail, telefon).
      </p>

      <h3 className="font-semibold mt-4 mb-1 text-base">
        Jaké údaje zpracovávám a za jakým účelem
      </h3>
      <p className="text-[var(--muted)] text-sm mb-3">
        Zpracovávám zejména identifikační a kontaktní údaje (jméno, příjmení, název firmy,
        e-mail, telefon, adresu), dále údaje o poptávce a zakázce (např. rozměry, fotografie
        oken a interiéru, vaše požadavky na řešení) a fakturační údaje včetně platebních
        údajů.
      </p>
      <p className="text-[var(--muted)] text-sm mb-3">
        Údaje zpracovávám za účelem vyřízení poptávky, uzavření smlouvy, dodání zboží a
        služeb, vedení účetnictví a plnění zákonných povinností, případně ochrany svých
        právních nároků (např. při reklamaci nebo sporu).
      </p>

      <h3 className="font-semibold mt-4 mb-1 text-base">Právní základ zpracování</h3>
      <p className="text-[var(--muted)] text-sm mb-3">
        Právním základem je zejména plnění smlouvy nebo jednání před uzavřením smlouvy,
        splnění právních povinností v oblasti účetnictví a daní a oprávněný zájem na
        ochraně právních nároků. Pro případný marketing (např. zasílání newsletteru) bych
        osobní údaje používala pouze s vaším souhlasem nebo na základě oprávněného
        zájmu, pokud jste mým zákazníkem, a vždy s možností jednoduchého odhlášení.
      </p>

      <h3 className="font-semibold mt-4 mb-1 text-base">
        Doba uchování osobních údajů
      </h3>
      <p className="text-[var(--muted)] text-sm mb-3">
        Údaje související se smlouvou a fakturací uchovávám po dobu stanovenou právními
        předpisy (typicky 10 let). Údaje z nezávazných poptávek uchovávám po dobu
        nezbytně nutnou k vyřízení komunikace, obvykle nejdéle 1 rok, pokud z poptávky
        nevznikne smluvní vztah.
      </p>

      <h3 className="font-semibold mt-4 mb-1 text-base">
        Předávání osobních údajů třetím stranám
      </h3>
      <p className="text-[var(--muted)] text-sm mb-3">
        Osobní údaje mohu předat pouze v nezbytném rozsahu účetnímu nebo daňovému
        poradci, poskytovatelům IT a hostingových služeb, dopravcům nebo montážním
        partnerům, pokud je to nutné pro realizaci zakázky, a orgánům veřejné moci,
        pokud to vyžaduje zákon. S těmito subjekty mám uzavřeny odpovídající smlouvy
        o zpracování osobních údajů.
      </p>

      <h3 className="font-semibold mt-4 mb-1 text-base">Vaše práva</h3>
      <p className="text-[var(--muted)] text-sm mb-3">
        Máte právo na přístup k osobním údajům, jejich opravu nebo doplnění, omezení
        zpracování, výmaz (pokud jsou splněny zákonné podmínky), přenositelnost údajů
        a právo vznést námitku proti zpracování založenému na oprávněném zájmu.
      </p>
      <p className="text-[var(--muted)] text-sm mb-3">
        Pokud se domníváte, že dochází k neoprávněnému zpracování osobních údajů, máte
        také právo podat stížnost u Úřadu pro ochranu osobních údajů (www.uoou.cz).
      </p>

      <h3 className="font-semibold mt-4 mb-1 text-base">
        Fotografie interiéru a referenční snímky
      </h3>
      <p className="text-[var(--muted)] text-sm mb-3">
        Fotografie vašeho interiéru, oken a realizovaného stínění slouží primárně k
        návrhu a realizaci zakázky. Pro použití fotografií jako referencí (např. v galerii
        realizací) vždy požádám o váš výslovný souhlas nebo fotografie používám tak, aby
        nebylo možné vás jednoznačně identifikovat.
      </p>
    </section>
  );
}

function CookiesPage() {
  useReveal();
  return (
    <section className="max-w-4xl mx-auto px-4 py-16 reveal">
      <h2 className="script text-4xl mb-6">Cookies</h2>
      <p className="text-[var(--muted)] text-sm mb-3">
        Tyto webové stránky používají soubory cookies, které slouží k zajištění jejich
        základní funkčnosti, případně k anonymnímu měření návštěvnosti a zlepšování
        uživatelského prostředí.
      </p>
      <p className="text-[var(--muted)] text-sm mb-3">
        Cookies jsou malé textové soubory, které se ukládají do vašeho prohlížeče. V
        nastavení prohlížeče můžete používání cookies kdykoli omezit nebo zcela zakázat.
        Pokud cookies vypnete, může dojít k omezení některých funkcí webu.
      </p>
      <p className="text-[var(--muted)] text-sm mb-3">
        Pokud na webu používám cookies pro marketingové účely nebo pokročilou analytiku,
        informuji vás o tom při první návštěvě pomocí lišty a mám možnost získat váš
        souhlas. Souhlas můžete kdykoli odvolat úpravou nastavení nebo změnou nastavení
        prohlížeče.
      </p>
    </section>
  );
}

function App() {
  const { lang, setLang, t } = useLang();
  const { route } = useRoute();
  useReveal();

  const Page = useMemo(() => {
    switch (route) {
      case "/process":
        return <Process t={t} />;
      case "/pricing":
        return <Pricing t={t} />;
      case "/gallery":
        return <Gallery t={t} />;
      case "/finished":
        return <Finished t={t} />;
      case "/essences":
        return <Essences t={t} />;
      case "/contact":
        return <Contact t={t} />;
      case "/terms":
        return <Terms />;
      case "/privacy":
        return <Privacy />;
      case "/cookies":
        return <CookiesPage />;
      default:
        return <Home t={t} />;
    }
  }, [route, t]);

  return (
    <>
      <Header t={t} lang={lang} setLang={setLang} />
      <main className="pt-16">{Page}</main>

      <footer className="bg-[#222] text-[#ddd] mt-10 reveal">
        <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-6">
          <div>
            <div className="script text-2xl">{t.brand1}</div>
            <div className="text-sm text-[#bdbdbd]">{t.brand2}</div>
          </div>

          <div className="grid gap-2 text-sm text-[#bdbdbd]">
            <div className="font-semibold">Osobní přístup</div>
            <div>Řešení na míru vašemu stylu.</div>
            <div className="font-semibold mt-3">Prémiová kvalita</div>
            <div>Pečlivé zpracování detailů.</div>
            <div className="font-semibold mt-3">Ověřená odbornost</div>
            <div>Dvacet let zkušeností.</div>
          </div>

          <div className="text-sm text-[#bdbdbd] flex flex-col gap-2">
            <p>
              &copy; 2025 {t.brand1}. {t.rights}
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => go("/terms")}
                className="underline text-xs hover:text-white"
              >
                Obchodní podmínky
              </button>
              <button
                onClick={() => go("/privacy")}
                className="underline text-xs hover:text-white"
              >
                Ochrana osobních údajů
              </button>
              <button
                onClick={() => go("/cookies")}
                className="underline text-xs hover:text-white"
              >
                Cookies
              </button>
            </div>
          </div>
        </div>
      </footer>

      <div id="lb" className="lb" onClick={closeLightbox} aria-hidden="true">
        <button
          className="absolute top-5 right-6 text-white text-3xl"
          aria-label="Close"
          onClick={closeLightbox}
        >
          &times;
        </button>
        <img id="lbimg" alt="preview" />
      </div>
    </>
  );
}

function openLightbox(e, src) {
  e.preventDefault();
  const lb = document.getElementById("lb");
  const img = document.getElementById("lbimg");
  img.src = src;
  lb.style.display = "flex";
}

function closeLightbox() {
  document.getElementById("lb").style.display = "none";
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);






