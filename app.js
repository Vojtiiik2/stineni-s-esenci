const { useState, useEffect, useMemo, useRef } = React;
// ===== LIGHTBOX (nutné pro Gallery + zavírání v App) =====
function openLightbox(e, src) {
  if (e) e.preventDefault();

  const lb = document.getElementById("lb");
  const img = document.getElementById("lbimg");
  if (!lb || !img) return;

  img.src = src;
  lb.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  const lb = document.getElementById("lb");
  const img = document.getElementById("lbimg");
  if (!lb || !img) return;

  lb.classList.remove("open");
  img.src = "";
  document.body.style.overflow = "";
}

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

    return () => {
      io.disconnect(); // <- důležité proti „sekání“ při přepínání stránek
    };
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
  { h1: "Kde se světlo setká s emocí", bg: "assets/img/hero/hero-01.webp" },
  { h1: "Stínění, které dává domovu klid", bg: "assets/img/hero/hero-02.webp" },
  { h1: "Látka, světlo a detail v rovnováze", bg: "assets/img/hero/hero-03.webp" }
],




    homeAbout: [
  "Navrhujeme stínění tak, aby sedělo vašemu prostoru i tomu, jak v něm opravdu žijete. Nejde jen o látku a systém. Jde o světlo během dne, soukromí večer a pocit, který doma chcete mít.",
  "Každý detail ladíme podle vás. Respektujeme vaše potřeby a přizpůsobujeme se tomu, co je pro vás důležité. Někdo chce klid a měkké světlo, jiný funkční zatemnění nebo jednoduché řešení bez zbytečností. Vždy hledáme cestu, která dává smysl právě vám.",
  "Jsme Česká rodinná firma a zakládáme si na kvalitě a precizním provedení. Máme více než dvacet let zkušeností s látkami, šitím i technikou. Navrhujeme stínění na míru od první konzultace až po finální realizaci tak, aby výsledek fungoval dlouhodobě."
],




    servicesH: "Služby",
  services: [
  { name: "Záclony", note: "Lehkost, jemnost a útulnost." },
  { name: "Závěsy", note: "Estetika, teplo a soukromí." },
  { name: "Rolety", note: "Praktičnost a čisté linie." },
  { name: "Technické systémy", note: "Dekorativní a funkční řešení." },
  { name: "Servis", note: "Čištění, praní, žehlení." }
],
    benefitsH: "Proč s námi",
    benefits: [
      { name: "Individuální návrh", note: "Řešení vytvořené přesně pro váš prostor a vaše potřeby." },
      { name: "20 let zkušeností", note: "Znalost materiálů i technologií." },
      { name: "Preciznost a jemnost v detailu", note: "Preciznost v každém kroku." }
    ],

    faqH: "Často se ptáte",
    faq: [
      {
        q: "Jak probíhá konzultace?",
        a: "Přijedu k vám, podívám se na prostor, probereme vaše potřeby a zvolíme směr i materiály."
      },
      {
        q: "Jak dlouho trvá výroba?",
        a: "Obvykle 2–8 týdnů podle rozsahu zakázky a dostupnosti materiálů."
      },
      {
  q: "Mohu vidět vzorky?",
  a: "Ano, vzorky látek přivezu na osobní konzultaci přímo do vašeho prostoru. Zároveň je možné si vzorníky prohlédnout také v naší vzorkovně, vždy je ale nutné si schůzku předem domluvit."
},

      {
        q: "Montujete i kolejnice?",
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
  "Přijedeme za vámi, prostor si projdeme přímo na místě a vše přesně zaměříme.\n\nSpolečně probereme, co od stínění očekáváte, soukromí, zatemnění, nebo čistě dekorativní funkci.\n\nUkážeme vám vzorky látek a řekneme si, co je v daném prostoru vhodné a co by naopak nedávalo smysl po technické, funkční i vizuální stránce.\n\nPo setkání víte, jakým směrem se návrh bude ubírat, jaké typy stínění a materiálů připadají v úvahu.",

  "Na základě vybraných materiálů a technického systému připravíme cenovou nabídku. Ta slouží jako výchozí bod. Pokud je potřeba cenu upravit, hledáme společně alternativy, ať už v úpravě materiálů, techniky nebo skladby řešení. Naším cílem je vždy najít rovnováhu mezi kvalitou, funkčností a cenou.",

  "Po schválení rozpočtu a složení zálohy zahajujeme proces výroby.\n\nV průběhu jednotlivých fází zpracování současně plánujeme termín realizace.",

 "Hotové stínění přivezeme, odborně namontujeme a textil pečlivě pověsíme.\n\nZáclony i závěsy vyžehlíme, nadekorujeme a doladíme tak, aby vše fungovalo nejen vizuálně, ale i technicky.\n\nPo dokončení práce vždy uklidíme, prostor vám předáme čistý a připravený k používání.\n\nNa místě vám vysvětlíme ovládání všech prvků a doporučíme vám vhodnou údržbu textilu, aby stínění dlouhodobě fungovalo tak, jak má."

],


processImgs: [
  "assets/img/process/process-01.webp",
  "assets/img/process/process-02.webp",
  "assets/img/process/process-03.webp",
  "assets/img/process/process-04.webp"
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


// flag: poznáme, jestli změnu hashe udělalo naše go() (klik), nebo Back/Forward
let __navByGo = false;

function useRoute() {
  const getRoute = () => {
    const raw = window.location.hash || "#/";
    const clean = raw.startsWith("#") ? raw.slice(1) : raw; // "/pricing#zaclon?mode=center"
    const [path, rest] = clean.split("#");
    const anchorRaw = rest || "";

    // anchor může mít query: "zaclon?mode=center"
    const [anchor, qs] = anchorRaw.split("?");
    const params = new URLSearchParams(qs || "");
    const mode = params.get("mode") || ""; // "center" | ""

    return { path: path || "/", anchor: anchor || "", mode };
  };

  const [route, setRoute] = React.useState(getRoute);
  const isPopRef = React.useRef(false);

  React.useEffect(() => {
    const onHash = () => {
      const wasGo = __navByGo;
      __navByGo = false;

      // 1) nejdřív aktualizuj route (ať se vyrenderuje správná stránka)
      setRoute(getRoute());

      // 2) Back/Forward → až PO renderu obnov scroll a zablokuj smooth scroll
      if (!wasGo) {
        isPopRef.current = true;

        requestAnimationFrame(() => {
          const st = window.history.state || {};
          const y = typeof st.__scrollY === "number" ? st.__scrollY : 0;
          window.scrollTo({ top: y, behavior: "auto" });

          requestAnimationFrame(() => {
            isPopRef.current = false;
          });
        });
      }
    };

    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  React.useEffect(() => {
    // při Back/Forward restore nescrolluj sem (už jsme obnovili scrollY)
    if (isPopRef.current) return;

    requestAnimationFrame(() => {
      // bez anchor = top (header kliky)
      if (!route.anchor) {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      const el = document.getElementById(route.anchor);
      if (!el) {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      // homepage karty: střed, jinak start
      const blockPos = route.mode === "center" ? "center" : "start";
      el.scrollIntoView({ behavior: "smooth", block: blockPos });
    });
  }, [route.path, route.anchor, route.mode]);

  return route; // { path, anchor, mode }
}

function go(path = "/") {
  // uložit scroll pozici pro Back (do aktuální history entry)
  const st = window.history.state || {};
  window.history.replaceState({ ...st, __scrollY: window.scrollY }, "");

  __navByGo = true;

  let p = String(path || "/");
  if (p.startsWith("#")) p = p.slice(1);
  if (!p.startsWith("/")) p = "/" + p;

  window.location.hash = "#" + p;
}


const Header = ({ t, lang, setLang }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-30 border-b border-[var(--line)]/70 bg-white/70 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between reveal">
        {/* BRAND */}
        <div className="leading-4 cursor-pointer" onClick={() => go("/")}>
          <div
            className="script text-2xl -mb-0.5"
            style={{ color: "var(--brand-brown-dark)" }}
          >
            {t.brand2}
          </div>

          <div
            className="text-xs tracking-wide"
            style={{ color: "var(--brand-brown-light)" }}
          >
            {t.brand1}
          </div>
        </div>

        {/* NAV */}
        <nav className="hidden md:flex gap-6 text-sm font-semibold">
          {t.nav.map((label, i) => {
            const path = [
              "/process",
              "/pricing",
              "/gallery",
              "/finished",
              "/essences",
              "/contact"
            ][i];

            return (
              <button
                key={i}
                onClick={() => go(path)}
                className="relative group hover:text-[var(--text)]/90 text-[var(--text)]/75"
                type="button"
              >
                <span>{label}</span>
              </button>
            );
          })}
        </nav>

        {/* LANG */}
        <div className="flex gap-2">
          <button
            onClick={() => setLang("cs")}
            className={
              "px-3 py-1.5 text-sm rounded-lg border " +
              (lang === "cs" ? "border-[var(--sand)]" : "border-[var(--line)]")
            }
            type="button"
          >
            CZ
          </button>

          <button
            onClick={() => setLang("en")}
            className={
              "px-3 py-1.5 text-sm rounded-lg border " +
              (lang === "en" ? "border-[var(--sand)]" : "border-[var(--line)]")
            }
            type="button"
          >
            EN
          </button>
        </div>
      </div>
    </header>
  );
};

function Hero({ t, small = false, showCta = false, intervalMs = 8000, bg, title }) {
  const slides = t.heroSlides || [];
  const [index, setIndex] = React.useState(0);

  const [stage, setStage] = React.useState("show");
  const timerRef = React.useRef(null);

  React.useEffect(() => {
    if (small || slides.length < 2) return;

    const run = () => {
      setStage("exit");

      timerRef.current = setTimeout(() => {
        setIndex((i) => (i + 1) % slides.length);
        setStage("enter");

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
      <div
        className={
          "absolute inset-0 transition-all duration-1000 ease-in-out will-change-transform " +
          bgClass
        }
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,.25), rgba(0,0,0,.05)), url('${effectiveBg || ""}')`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/25"></div>

      <div className="relative max-w-6xl mx-auto px-4 w-full">
        <div
          className={
            "max-w-2xl text-white transition-all duration-700 ease-in-out will-change-transform " +
            textClass
          }
        >
          <h1 className="script text-5xl md:text-6xl mb-3">
            {title || slide.h1 || ""}
          </h1>

          <p className="text-lg opacity-95">{t.heroSub}</p>

          {!small && showCta && (
            <button
              onClick={() => go("/contact")}
              className="btn-cta inline-block mt-6 px-5 py-3 rounded-full bg-[var(--sand)] text-[var(--text)] font-bold border border-black/5"
              type="button"
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

      {/* ===== O NÁS ===== */}
      <section className="py-16 max-w-6xl mx-auto px-4 reveal">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="soft-shadow rounded-2xl overflow-hidden">
            <img
              src="assets/img/Onas/onas-01.webp"
              alt="Interiér"
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
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

      {/* ===== SLUŽBY ===== */}
      <section className="py-16 max-w-6xl mx-auto px-4 reveal">
        <h2 className="script text-4xl mb-8">{t.servicesH}</h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-6">
          {t.services.map((s, i) => {
            const hash = ["zaclon", "zaves", "roleta", "systemy", "servis"][i];

            return (
              <button
                key={i}
                onClick={() => go(`/pricing#${hash}?mode=center`)}
                className="service-card soft-shadow reveal text-left hover:translate-y-[-1px] transition flex flex-col"
                type="button"
              >
                <div className="text-lg font-semibold mb-2">{s.name}</div>

                <p className="text-[var(--muted)] text-sm leading-relaxed flex-grow flex items-center">
                  {s.note}
                </p>

                <div className="mt-3 text-xs tracking-widest text-[var(--muted)]">
                  Kolik zaplatíte →
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* ===== ATMOSFÉRA ===== */}
      <section className="py-16 max-w-6xl mx-auto px-4 reveal">
        <h2 className="script text-4xl mb-3">{t.inspH}</h2>

        <p className="text-[var(--text)]/80 text-lg md:text-xl leading-relaxed mb-6 max-w-3xl">
          Stejný prostor. Jiný pocit.
          <br />
          Rozdíl mezi oknem bez stínění, se záclonou a se závěsem je často větší,
          než čekáte.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[
            {
              src: "assets/img/atmosfera/atmosfera-01.webp",
              tags: "Světlo · Prostor · Svoboda"
            },
            {
              src: "assets/img/atmosfera/atmosfera-02.webp",
              tags: "Měkkost · Pohyb · Soukromí"
            },
            {
              src: "assets/img/atmosfera/atmosfera-03.webp",
              tags: "Hloubka · Ticho · Domov"
            }
          ].map((item, i) => (
            <div
              key={i}
              className="relative inspiration-img soft-shadow overflow-hidden"
            >
              <img
                src={item.src}
                alt={`Atmosféra interiéru ${i + 1}`}
                className="w-full h-full object-cover aspect-[4/3]"
                loading="lazy"
                decoding="async"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-transparent" />

              <div className="absolute bottom-3 left-4 text-xs tracking-wide text-white/90">
                {item.tags}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== PROČ S NÁMI ===== */}
      <section className="py-16 max-w-6xl mx-auto px-4 reveal">
        <h2 className="script text-4xl mb-8">{t.benefitsH}</h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {t.benefits.map((b, i) => {
            const hash = ["individualni-navrh", "zkusenosti", "detail"][i];

            return (
              <button
                key={i}
                onClick={() => go(`/process#${hash}?mode=center`)}
                className="benefit-card soft-shadow reveal text-left hover:translate-y-[-1px] transition flex flex-col"
                type="button"
              >
                <div className="text-lg font-semibold mb-2">{b.name}</div>

                <p className="text-[var(--muted)] text-sm leading-relaxed flex-grow flex items-center">
                  {b.note}
                </p>

                <div className="mt-3 text-xs tracking-widest text-[var(--muted)]">
                  Zjistit víc →
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-16 max-w-4xl mx-auto px-4 reveal">
        <h2 className="script text-4xl mb-6">{t.faqH}</h2>

        {t.faq.map((f, i) => (
          <div key={i} className="faq-item">
            <div className="font-semibold mb-1">{f.q}</div>
            <div className="text-[var(--muted)]">{f.a}</div>
          </div>
        ))}
      </section>

      {/* ===== CTA ===== */}
      <section className="py-16 max-w-4xl mx-auto px-4 reveal text-center">
        <button
          onClick={() => go("/contact")}
          className="btn-cta px-6 py-4 rounded-full bg-[var(--sand)] text-[var(--text)] font-bold border border-black/5 text-lg"
          type="button"
        >
          {t.cta}
        </button>

        <p className="text-sm text-[var(--muted)] mt-4">
          Praha a okolí. Konzultace u vás doma. Výroba obvykle 2–8 týdnů.
        </p>
      </section>
    </>
  );
}





function Process({ t }) {
  useReveal();

  const bgTop = "assets/img/hero/process-hero-v2.webp";

  const steps = t.steps || [];
  const texts = t.stepsTxt || [];
  const imgs = t.processImgs || [];

  const bridges = [
    "Z pozorování vzniká směr.",
    "Návrh se mění v realitu.",
    "Detail rozhoduje o výsledku."
  ];

  return (
    <>
      <Hero t={t} small bg={bgTop} title={t.processH} />

      <section className="max-w-6xl mx-auto px-4 py-16 reveal">
        {/* ===== HLAVIČKA ===== */}
        <div className="max-w-3xl mx-auto text-left md:text-center">
          <p className="text-[var(--muted)] text-lg"></p>
        </div>

        {/* ===== CYKLUS KROKŮ ===== */}
        <div className="mt-12 relative">
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-[var(--line)]/60" />

          <div className="space-y-8 md:space-y-10">
            {steps.map((title, i) => {
              const reverse = i % 2 === 1;
              const n = String(i + 1).padStart(2, "0");

              return (
                <React.Fragment key={i}>
                  <div
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

                      <div className="mt-4 inline-flex items-center gap-2 text-sm text-[var(--muted)]">
                        <span className="w-10 h-px bg-[var(--line)]" />
                        <span>
                          {i === 0 && "Světlo, proporce, rytmus dne."}
                          {i === 1 && "Materiál, technika, harmonie."}
                          {i === 2 && "Řemeslo, přesnost, trpělivost."}
                          {i === 3 && "Montáž, doladění, klid."}
                        </span>
                      </div>
                    </div>
                  </div>

                  {i < steps.length - 1 && (
                    <div className="reveal text-center py-2 md:py-3">
                      <div className="mx-auto w-24 h-px bg-[var(--line)]/80 mb-3" />
                      <p className="text-xs italic text-[var(--muted)]">
                        {bridges[i]}
                      </p>
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* ===== CO STOJÍ ZA NAŠÍ PRACÍ ===== */}
        <div className="max-w-5xl mx-auto px-4 py-16 reveal">
          <div className="text-left md:text-center">
            <h3 className="script text-3xl mb-6">Co stojí za naší prací</h3>
            <p className="text-[var(--muted)] max-w-3xl mx-auto">
            </p>
          </div>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <article
              id="individualni-navrh"
              className="rounded-2xl bg-white border border-[var(--line)] soft-shadow p-7 reveal scroll-mt-24 flex flex-col"
            >
              <h4 className="text-lg font-semibold mb-3">Individuální návrh</h4>

              <div className="flex-1 flex flex-col justify-between">
                <p className="text-[var(--muted)] leading-relaxed">
                  Každý prostor má jiné světlo, jiné proporce a jiný rytmus dne.
                </p>

                <p className="text-[var(--muted)] leading-relaxed mt-3">
                  Návrh vzniká až na místě z komunikace s vámi, z pozorování světla, z toho, jak prostor
                  používáte, a z toho, co od stínění opravdu očekáváte.
                </p>

                <p className="text-[var(--muted)] leading-relaxed mt-3">
                  Individuální návrh pro nás znamená společně najít správnou volbu.
                </p>
              </div>
            </article>

            <article
              id="zkusenosti"
              className="rounded-2xl bg-white border border-[var(--line)] soft-shadow p-7 reveal scroll-mt-24 flex flex-col"
            >
              <h4 className="text-lg font-semibold mb-3">20 let zkušeností</h4>

              <div className="flex-1 flex flex-col justify-between">
                <p className="text-[var(--muted)] leading-relaxed">
                  Zkušenosti nám dávají nadhled a jistotu při rozhodování.
                </p>

                <p className="text-[var(--muted)] leading-relaxed mt-3">
                  Pomáháme vám se zorientovat v možnostech a sladit funkčnost s estetikou.
                  
                </p>

                <p className="text-[var(--muted)] leading-relaxed mt-3">
                  Výsledkem není kompromis ale pocit jistoti, že zvolené řešení dává smysl právě pro vás a váš prostor.
                </p>
              </div>
            </article>

            <article
              id="detail"
              className="rounded-2xl bg-white border border-[var(--line)] soft-shadow p-7 reveal scroll-mt-24 flex flex-col"
            >
              <h4 className="text-lg font-semibold mb-3">Preciznost a jemnost v detailu</h4>

              <div className="flex-1 flex flex-col justify-between">
                <p className="text-[var(--muted)] leading-relaxed">
                  Kvalita zpracování a technické provedení rozhodují o tom, jestli stínění bude dlouhodobě fungovat a dobře vypadat i po letech.
                </p>

                <p className="text-[var(--muted)] leading-relaxed mt-3">
                  V detailech se ukazuje rozdíl mezi řešením, které jen dobře vypadá, a řešením, které obstojí v čase.
                </p>

                <p className="text-[var(--muted)] leading-relaxed mt-3">
                  Preciznost a detail je na první pohled viditelné, právě v nich se potkává vaše očekávání s naší zkušeností pracovat s materiály.
                </p>
              </div>
            </article>
          </div>
        </div>

        {/* ===== ZÁVĚREČNÁ TEČKA ===== */}
        <div className="max-w-3xl mx-auto mt-12 text-center text-[var(--muted)]">
          Cílem je, abyste se v prostoru cítili přirozeně a dobře.
        </div>
      </section>
    </>
  );
}



function Pricing({ t }) {
  useReveal();
  const [activeKey, setActiveKey] = useState(null);

  // ====== Modal lokálně ======
  function ModalLocal({ open, onClose, title, subtitle, children }) {
    useEffect(() => {
      if (!open) return;

      const onKey = (e) => {
        if (e.key === "Escape") onClose?.();
      };

      document.addEventListener("keydown", onKey);
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";

      return () => {
        document.removeEventListener("keydown", onKey);
        document.body.style.overflow = prev;
      };
    }, [open, onClose]);

    if (!open) return null;

    return (
      <div className="fixed inset-0 z-[999]">
        <div
          className="absolute inset-0 bg-black/50"
          onClick={onClose}
          aria-hidden="true"
        />
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <div
            role="dialog"
            aria-modal="true"
            aria-label={title}
            className="w-full max-w-4xl rounded-2xl bg-white border border-[var(--line)] soft-shadow overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 px-5 py-4 border-b border-[var(--line)]">
              <div>
                <div className="text-base font-semibold">{title}</div>
                {subtitle ? (
                  <div className="text-sm italic text-[var(--muted)] mt-1">
                    {subtitle}
                  </div>
                ) : null}
              </div>

              <button
                type="button"
                onClick={onClose}
                className="rounded-full px-3 py-1 text-sm border border-[var(--line)] hover:bg-[var(--bg2)] transition"
                aria-label="Zavřít"
              >
                Zavřít
              </button>
            </div>

            <div className="max-h-[78vh] overflow-y-auto">{children}</div>
          </div>
        </div>
      </div>
    );
  }

  // ====== Range "chips" ======
  function RangeChipsLocal({ items }) {
    return (
      <div className="grid gap-2">
        {items.map((r, i) => (
          <div
            key={i}
            className="flex items-center justify-between gap-4 rounded-xl bg-[var(--bg2)] px-4 py-3"
          >
            <div className="text-sm text-[var(--muted)]">{r.label}</div>
            <div className="text-sm font-semibold">{r.value}</div>
          </div>
        ))}
      </div>
    );
  }


  const bgTop =
  (t.priceImgs && t.priceImgs[0]) ||
  "assets/img/hero/pricing-hero.webp";

  const items = useMemo(
    () => [
      {
        key: "zaclon",
        title: "Záclony",
        img:
          (t.priceImgs && t.priceImgs[1]) ||
          "assets/img/pricing/pricing-01.webp",

        vibe: "Světlo zůstává. Prostor se zjemní. Soukromí se přidá.",
        micro: "Světlo, proporce, jemnost.",
        intro:
          "Lehká vrstva, která propouští denní světlo a zároveň vytváří základní pocit soukromí.",
        rangesTitle: "Orientačně (pro představu)",
        ranges: [
          { label: "1 běžné okno", value: "cca 8–18 tis. Kč" },
          { label: "větší okno", value: "cca 15–35 tis. Kč" },
          { label: "celá stěna", value: "cca 25–55 tis. Kč" }
        ],
        tiersTitle: "Cenové hladiny látek (orientačně)",
        tiers: [
          { name: "Základní lehké voály", note: "Vzdušné látky s nižší pořizovací cenou." },
          { name: "Střední kategorie", note: "Vyvážený poměr ceny, vzhledu a funkce." },
          { name: "Prémiové tkaniny", note: "Výraznější materiál, textura, vyšší gramáž." }
        ]
      },
      {
        key: "zaves",
        title: "Závěsy (dim-out / blackout)",
        img:
          (t.priceImgs && t.priceImgs[2]) ||
         "assets/img/pricing/pricing-02.webp",

        vibe: "Večer zklidní. Ráno ochrání. Prostor zútulní.",
        micro: "Materiál, ticho, komfort.",
        intro:
          "Pro soukromí, zútulnění a zatemnění. Rozdíl dělá typ zatemnění, gramáž a množství řasení.",
        rangesTitle: "Orientačně (pro představu)",
        ranges: [
          { label: "1 okno (dim-out)", value: "cca 12–28 tis. Kč" },
          { label: "větší plocha", value: "cca 22–45 tis. Kč" },
          { label: "blackout", value: "cca 30–65 tis. Kč" }
        ],
        tiersTitle: "Orientační přístup",
        tiers: [
          { name: "Dim-out", note: "Ztlumí světlo, ale úplnou tmu neudělá." },
          { name: "Blackout", note: "Maximální zatemnění – typicky ložnice." },
          { name: "Dekorační závěs", note: "Primárně vzhled a soukromí." }
        ]
      },
      {
        key: "roleta",
        title: "Rolety",
        img:
          (t.priceImgs && t.priceImgs[3]) ||
          "assets/img/pricing/pricing-03.webp",

        vibe: "Čisté linie. Funkce bez kompromisu.",
        micro: "Regulace světla, jednoduchost.",
        intro:
          "Praktické řešení s čistými liniemi. Cena se odvíjí od typu, rozměru a způsobu ovládání.",
        rangesTitle: "Orientačně (pro představu)",
        ranges: [
          { label: "standard", value: "cca 4–12 tis. Kč / ks" },
          { label: "větší rozměr", value: "cca 10–22 tis. Kč / ks" },
          { label: "motor / atyp", value: "cca 18–40+ tis. Kč / ks" }
        ],
        tiersTitle: "Typy (orientačně)",
        tiers: [
          { name: "Screen / denní", note: "Regulace světla, vzdušnost." },
          { name: "Zatemňovací", note: "Větší soukromí a tlumení světla." },
          { name: "Motor", note: "Komfort, ale vyšší náklady." }
        ]
      },
      {
        key: "systemy",
        title: "Technické systémy",
        img:
          (t.priceImgs && t.priceImgs[4]) ||
          "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1800&auto=format&fit=crop",
        vibe: "To, co není vidět – rozhoduje nejvíc.",
        micro: "Ticho chodu, přesnost.",
        intro:
          "Kolejnice, tyče, ohyby, více vrstev, motor. Cena se liší podle délky, tvaru a montáže.",
        rangesTitle: "Orientačně (pro představu)",
        ranges: [
          { label: "rovná kolejnice", value: "cca 2–8 tis. Kč" },
          { label: "delší / více vrstev", value: "cca 6–18 tis. Kč" },
          { label: "oblouk / motor", value: "cca 15–45+ tis. Kč" }
        ],
        tiersTitle: "Nejčastěji řešíme",
        tiers: [
          { name: "Rovné kolejnice", note: "Čisté řešení." },
          { name: "Ohýbané / atypy", note: "Na míru prostoru." },
          { name: "Motor", note: "Komfort bez šňůr." }
        ]
      },
      {
        key: "servis",
        title: "Servis",
        img:
          (t.priceImgs && t.priceImgs[5]) ||
          "https://images.unsplash.com/photo-1590698933947-a202b069a861?q=80&w=1800&auto=format&fit=crop",
        vibe: "Aby to fungovalo i za rok. A i za tři.",
        micro: "Úpravy, doladění, klid.",
        intro:
          "Úpravy, doplnění a opravy hotového stínění. Cena se odvíjí od rozsahu práce a času na místě.",
        rangesTitle: "Orientačně podle rozsahu",
        ranges: [
          { label: "drobná úprava", value: "cca 800–3 500 Kč" },
          { label: "servis + materiál", value: "cca 2 500–9 000 Kč" },
          { label: "větší zásah", value: "cca 7 000–20 000+ Kč" }
        ],
        tiersTitle: "Typicky pomůžeme s",
        tiers: [
          { name: "Úpravy a přešití", note: "Zkrácení, přizpůsobení, opravy." },
          { name: "Technické dořešení", note: "Jezdce, háčky, vedení." },
          { name: "Doplnění vrstev", note: "Když chcete přidat další funkci." }
        ]
      }
    ],
    [t]
  );

  const activeItem = activeKey ? items.find((i) => i.key === activeKey) : null;

  return (
    <>
      <Hero t={t} small bg={bgTop} title={t.priceH} />

      <section className="max-w-6xl mx-auto px-4 py-16 reveal">
        <div className="max-w-3xl mx-auto text-left md:text-center">
          <p className="text-[var(--muted)] text-lg">
          </p>
        </div>

        <div className="mt-12 space-y-8">
          {items.map((x) => (
            <section
  key={x.key}
  id={x.key}
  className="rounded-2xl bg-white border border-[var(--line)] soft-shadow overflow-hidden reveal scroll-mt-24"
>

              <div className="grid md:grid-cols-12 gap-0">
                <div className="md:col-span-5">
                  <img
                    src={x.img}
                    alt={x.title}
                    className="w-full object-cover aspect-[16/10] md:aspect-[16/9]"
                    loading="lazy"
                  />
                </div>

                <div className="md:col-span-7 p-5 md:p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold">{x.title}</h3>

                    <div className="mt-2 text-sm italic text-[var(--muted)]">
                      {x.vibe}
                    </div>

                    <div className="mt-4 inline-flex items-center gap-2 text-sm text-[var(--muted)]">
                      <span className="w-10 h-px bg-[var(--line)]" />
                      <span>{x.micro}</span>
                    </div>

                    <p
                      className="mt-4 text-[var(--muted)] text-sm leading-relaxed overflow-hidden"
                      style={{
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical"
                      }}
                    >
                      {x.intro}
                    </p>
                  </div>

                  <div className="mt-6">
                    <button
                      type="button"
                      onClick={() => setActiveKey(x.key)}
                      className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold border border-[var(--line)] bg-white hover:bg-[var(--bg2)] hover:border-[var(--sand)] transition"
                    >
                      Otevřít detail <span aria-hidden="true">→</span>
                    </button>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>

        <div className="max-w-3xl mx-auto mt-12 text-sm text-[var(--muted)] text-left md:text-center">
          Uvedené částky jsou orientační scénáře pro představu. Konkrétní návrh a rozpočet
          vždy upřesníme po konzultaci na místě podle rozměrů, zvolených materiálů a technického řešení.
        </div>
      </section>

      <ModalLocal
        open={!!activeItem}
        onClose={() => setActiveKey(null)}
        title={activeItem?.title || ""}
        subtitle={activeItem?.vibe || ""}
      >
        {activeItem && (
          <div className="p-5 md:p-6">
            <div className="grid md:grid-cols-12 gap-6 items-start">
              <div className="md:col-span-5">
                <div className="rounded-2xl overflow-hidden border border-[var(--line)] bg-white soft-shadow">
                  <img
                    src={activeItem.img}
                    alt={activeItem.title}
                    className="w-full object-cover aspect-[4/5] md:aspect-[3/4]"
                    style={{ objectPosition: "center" }}
                  />
                </div>
              </div>

              <div className="md:col-span-7 space-y-5">
                <div>
                  <div className="text-sm italic text-[var(--muted)]">
                    {activeItem.micro}
                  </div>
                  <p className="mt-2 text-[var(--muted)] text-sm leading-relaxed">
                    {activeItem.intro}
                  </p>
                </div>

                <div className="rounded-2xl border border-[var(--line)] bg-white px-4 py-4">
                  <div className="text-sm font-semibold">{activeItem.rangesTitle}</div>
                  <div className="mt-3">
                    <RangeChipsLocal items={activeItem.ranges} />
                  </div>
                </div>

                <div className="rounded-2xl border border-[var(--line)] bg-white px-4 py-4">
                  <div className="text-sm font-semibold">{activeItem.tiersTitle}</div>
                  <div className="grid sm:grid-cols-3 gap-4 mt-3">
                    {activeItem.tiers.map((t0, i) => (
                      <div key={i} className="rounded-xl bg-[var(--bg2)] px-4 py-3">
                        <div className="text-sm font-semibold">{t0.name}</div>
                        <div className="text-[var(--muted)] text-sm mt-1">{t0.note}</div>
                      </div>
                    ))}
                  </div>
                </div>

               <div className="pt-1 flex flex-wrap gap-3">
  <button
    type="button"
    onClick={() => {
      setActiveKey(null);
      go("/contact");
    }}
    className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold border border-[var(--line)] bg-white hover:bg-[var(--bg2)] hover:border-[var(--sand)] transition"
  >
    Napište mi <span aria-hidden="true">→</span>
  </button>

  <button
    type="button"
    onClick={() => setActiveKey(null)}
    className="rounded-full px-5 py-2.5 text-sm border border-[var(--line)] hover:bg-[var(--bg2)] transition"
  >
    Zavřít
  </button>
</div>

              </div>
            </div>
          </div>
        )}
      </ModalLocal>
    </>
  );
}


function Gallery({ t }) {
  useReveal();

  // ==== TVOJE REALIZACE (zatím ilustrační) ====
  const OUR_WORK = [
    "https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1505693416388-36a5ac3be353?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop"
  ];

  // ==== PARTNEŘI (ilustrační fotky, reálně sem dáš jejich realizace / vizualizace) ====
 const PARTNERS = [
  {
    name: "ono.je",
    url: "https://www.ono.je",
    note:
      "Architektura s citem pro atmosféru, materiál a detail. Dáváme tomu finální vrstvu.",
   images: [
  "assets/img/gallery/partners/onoje/ono-je-01.webp",
  "assets/img/gallery/partners/onoje/ono-je-02.webp",
  "assets/img/gallery/partners/onoje/ono-je-03.webp"
]

  },
  {
    name: "RichterDesign",
    url: "https://www.richterdesign.cz",
    note:
      "Spolupráce na interiérech, kde hraje roli čistota linií, funkce a klid prostoru.",
   images: [
  "assets/img/gallery/partners/richter/richter-01.webp",
  "assets/img/gallery/partners/richter/richter-02.webp",
  "assets/img/gallery/partners/richter/richter-03.webp"
]

  },
  {
    name: "Epic Interior Studio",
    url: "https://www.epicinteriorstudio.cz/",
    note:
      "Interiérové studio se zaměřením na atmosféru, funkci a detail. Společně ladíme finální vrstvu stínění tak, aby prostor působil přirozeně a harmonicky.",
   images: [
  "assets/img/gallery/partners/epic-interior-studio/epic-01.webp",
  "assets/img/gallery/partners/epic-interior-studio/epic-02.webp",
  "assets/img/gallery/partners/epic-interior-studio/epic-03.webp"
]

  }
];


  return (
    <>
      <Hero
        t={t}
        small
        title={t.galleryH}
        bg="assets/img/hero/gallery-hero.webp"
      />

      {/* ==== NAŠE PRÁCE ==== */}
      <section className="max-w-6xl mx-auto px-4 py-16 reveal">
        <div className="max-w-3xl">
          <h3 className="script text-3xl mb-3">Naše realizace</h3>
          <p className="text-[var(--muted)] text-sm leading-relaxed">
            Výběr projektů, kde řešíme světlo, látku a proporce prostoru. (Ukázky jsou zatím ilustrační.)
          </p>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {OUR_WORK.map((src, i) => (
            <a
              key={i}
              href={src}
              onClick={(e) => openLightbox(e, src)}
              className="group relative reveal"
            >
              <img
                src={src}
                className="w-full h-full object-cover rounded-xl aspect-[4/3] soft-shadow"
                loading="lazy"
                alt="Realizace"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition rounded-xl" />
            </a>
          ))}
        </div>
      </section>

      {/* ==== SPOLUPRACUJEME S ==== */}
      <section className="max-w-6xl mx-auto px-4 pb-20 reveal">
        <div className="max-w-3xl">
          <h3 className="script text-3xl mb-3">Spolupracujeme s</h3>
          <p className="text-[var(--muted)] text-sm leading-relaxed">
            Architekti a designéři, se kterými často ladíme finální vrstvu stínění. 
          </p>
        </div>

        <div className="mt-10 space-y-6">
          {PARTNERS.map((p, idx) => (
            <article
              key={idx}
              className="rounded-2xl border border-[var(--line)] bg-white soft-shadow overflow-hidden reveal"
            >
              <div className="grid md:grid-cols-12 gap-0">
                {/* TEXT */}
                <div className="md:col-span-5 p-6 flex flex-col justify-between">
                  <div>
                    <div className="text-xl font-semibold">{p.name}</div>
                    <p className="text-[var(--muted)] text-sm mt-2 leading-relaxed">
                      {p.note}
                    </p>
                  </div>

                  <div className="mt-5">
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold underline text-[var(--muted)] hover:text-black"
                    >
                      Navštívit web <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>

                {/* IMAGES */}
                <div className="md:col-span-7 p-4 md:p-5">
                  <div className="grid grid-cols-3 gap-3">
                    {p.images.map((img, i) => (
                      <a
                        key={i}
                        href={img}
                        onClick={(e) => openLightbox(e, img)}
                        className="group relative"
                      >
                        <img
                          src={img}
                          className="rounded-xl object-cover aspect-[4/3] w-full h-full"
                          loading="lazy"
                          alt={`${p.name} ukázka`}
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition rounded-xl" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </article>
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
    "https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1600&auto=format&fit=crop",
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

const bg = "assets/img/hero/finished-hero.webp";


  return (
    <>
      <Hero t={t} small bg={bg} title={t.finishedH} />

      <section className="max-w-6xl mx-auto px-4 py-16 reveal">
        <p className="text-[var(--muted)] max-w-3xl mb-8">
          Nabízíme několik základních typů hotového stínění, které umíme dále
          přizpůsobit vašemu prostoru. Každý typ má své optimální použití – od
          ložnicového zatemnění až po jemné vrstvení ve společenských místnostech.
        </p>

       <div className="max-w-4xl mx-auto mt-10">
  <div className="rounded-2xl border border-dashed border-[var(--line)] bg-[var(--bg2)] p-10 text-center soft-shadow">
    <h3 className="text-xl font-semibold mb-3">
      Hotová řešení připravujeme
    </h3>

    <p className="text-[var(--muted)] text-sm leading-relaxed max-w-2xl mx-auto">
      Nabídku hotových řešení stínění aktuálně připravujeme.
      <br /><br />
      Každý prostor řešíme individuálně – pokud vás zajímá,
      jaké řešení by dávalo smysl právě u vás,
      ozvěte se nám a připravíme návrh na míru.
    </p>

    <div className="mt-6">
      <button
        onClick={() => go("/contact")}
        className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold border border-[var(--line)] hover:bg-white transition"
      >
        Nezávazně se zeptat →
      </button>
    </div>

    <p className="text-xs text-[var(--muted)] mt-4">
      Hotová kolekce bude dostupná později
    </p>
  </div>
</div>

      </section>
    </>
  );
}

function Essences({ t }) {
  useReveal();

  const bg =
    "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1800&auto=format&fit=crop";

  return (
    <>
      <Hero t={t} small bg={bg} title={t.essenceH} />

      <section className="max-w-6xl mx-auto px-4 py-16 reveal">
        <p className="text-[var(--muted)] max-w-3xl mb-8">
          Vůně jemně doplňuje vizuální dojem z prostoru. Pomáhá dotvořit atmosféru,
          která se pojí se světlem, látkou i rytmem dne. Vybrané esence používáme
          jako nenápadný, ale výrazný prvek celkového vnímání interiéru.
        </p>

       <div className="max-w-3xl mx-auto mt-10">
  <div className="rounded-2xl border border-dashed border-[var(--line)] bg-[var(--bg2)] p-8 text-center soft-shadow">
    <h3 className="text-lg font-semibold mb-2">Esence připravujeme</h3>

    <p className="text-[var(--muted)] text-sm leading-relaxed">
      Vůně budou samostatnou kapitolou – navázanou na prostor,
      denní světlo a atmosféru interiéru.
      <br /><br />
      Aktuálně ladíme koncepci tak, aby esence nebyly jen „produktem“,
      ale přirozeným doplňkem celkového návrhu.
    </p>

    <p className="text-xs tracking-wide text-[var(--muted)] mt-4">
      Připravujeme pro vás
    </p>
  </div>
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
  title={t.contactH}
/>

      <section className="max-w-6xl mx-auto px-4 py-16 reveal">
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
  const { path } = useRoute();
  useReveal();

  const Page = useMemo(() => {
    switch (path) {
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
  }, [path, t]);

   return (
    <>
      <Header t={t} lang={lang} setLang={setLang} />

      <main className="pt-16">
        {Page}
      </main>

      <footer className="bg-[#222] text-[#ddd] mt-10 reveal">
        <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8">
          {/* BRAND */}
          <div>
            <div className="script text-2xl text-white">{t.brand2}</div>
            <div className="text-sm text-[#bdbdbd]">{t.brand1}</div>

            <p className="text-sm text-[#bdbdbd] mt-4 leading-relaxed">
              Návrh a realizace vnitřního stínění na míru.
              <br />
              Záclony · Závěsy · Rolety · Technické systémy
            </p>
          </div>

          {/* KONTAKT */}
          <div>
            <div className="text-white font-semibold mb-3">Kontakt</div>

            <div className="text-sm text-[#bdbdbd] space-y-2">
              <div>
                E-mail:{" "}
                <a
                  className="underline hover:text-white"
                  href="mailto:hello@janasegelberg.com"
                >
                  hello@janasegelberg.com
                </a>
              </div>

              <div>
                Telefon:{" "}
                <a className="underline hover:text-white" href="tel:+420724379309">
                  +420 724 379 309
                </a>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => go("/contact")}
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold border border-[#444] hover:border-[#666] hover:bg-[#2a2a2a] transition"
                >
                  Napište mi <span aria-hidden="true">→</span>
                </button>
              </div>
            </div>
          </div>

          {/* PRÁVNÍ */}
          <div>
            <div className="text-white font-semibold mb-3">Právní a informace</div>

            <div className="text-sm text-[#bdbdbd] space-y-2">
              <div>
                <button
                  type="button"
                  onClick={() => go("/terms")}
                  className="underline hover:text-white"
                >
                  Obchodní podmínky
                </button>
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => go("/privacy")}
                  className="underline hover:text-white"
                >
                  Ochrana osobních údajů
                </button>
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => go("/cookies")}
                  className="underline hover:text-white"
                >
                  Cookies
                </button>
              </div>

              <div className="pt-3 text-xs text-[#9a9a9a]">{t.rights}</div>
            </div>
          </div>
        </div>

        {/* spodní proužek */}
        <div className="border-t border-[#333]">
          <div className="max-w-6xl mx-auto px-4 py-4 text-xs text-[#9a9a9a] flex flex-col md:flex-row gap-2 md:items-center md:justify-between">
            <div>
              © {new Date().getFullYear()} {t.brand2} — {t.brand1}
            </div>
            <div>
              <button
                type="button"
                onClick={() => go("/")}
                className="underline hover:text-white"
              >
                Zpět na úvod
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* LIGHTBOX – tohle ti často při úpravách zmizí a pak se rozbije JSX */}
      <div
        id="lb"
        className="lb"
        onClick={closeLightbox}
        aria-hidden="true"
      >
        <button
          className="absolute top-5 right-6 text-white text-3xl"
          aria-label="Close"
          onClick={(e) => {
            e.stopPropagation();
            closeLightbox();
          }}
          type="button"
        >
          &times;
        </button>
        <img id="lbimg" alt="preview" />
      </div>
    </>
  );
}
// ===== MOUNT APP (NECHAT ÚPLNĚ DOLE) =====
const rootEl = document.getElementById("root");

if (!rootEl) {
  console.error('Chybí <div id="root"></div> v index.html');
} else {
  const root = ReactDOM.createRoot(rootEl);
  root.render(<App />);
}





