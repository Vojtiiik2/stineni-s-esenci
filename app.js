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
      io.disconnect(); // proti „sekání“ při přepínání stránek
    };
  }, []);
}

// ✅ STR se načítá z i18n.js (window.STR)
const STR = window.STR || { cs: {}, en: {} };

function useLang() {
  const [lang, setLang] = useState(() => localStorage.getItem("lang") || "cs");

  useEffect(() => {
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const t = STR[lang] || STR.cs || {};
  return { lang, setLang, t };
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
  const [menuOpen, setMenuOpen] = React.useState(false);

  // zamkni scroll pozadí, když je menu otevřené
  React.useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [menuOpen]);

  const navPaths = ["/process", "/pricing", "/gallery", "/finished", "/essences", "/contact"];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-30 border-b border-[var(--line)]/70 bg-white/70 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          {/* BRAND (klik → home) */}
          <button
            type="button"
            onClick={() => go("/")}
            className="brand-wrap"
            aria-label="Go to home"
            style={{
              background: "transparent",
              border: 0,
              padding: 0,
              cursor: "pointer",
              textAlign: "left"
            }}
          >
            <img
              src="assets/img/logo/Logo-symbol.svg"
              alt={`${t.brand2} – logo`}
              className="brand-logo"
              loading="lazy"
              decoding="async"
            />

            <div>
              <div className="script text-2xl text-[var(--brand-brown-dark)] leading-none">
                {t.brand2}
              </div>
              <div className="text-sm text-[var(--brand-brown-light)] leading-none">
                {t.brand1}
              </div>
            </div>
          </button>

          {/* NAV (desktop) */}
          <nav className="hidden md:flex gap-6 text-sm font-semibold">
            {(t.nav || []).map((label, i) => (
              <button
                key={i}
                onClick={() => go(navPaths[i])}
                className="relative group hover:text-[var(--text)]/90 text-[var(--text)]/75"
                type="button"
              >
                <span>{label}</span>
              </button>
            ))}
          </nav>

          {/* RIGHT ACTIONS */}
          <div className="flex items-center gap-2">
            {/* Telefon */}
            <a
              href="tel:+420724379309"
              className="inline-flex items-center gap-2 px-3 py-1.5 text-sm rounded-lg border border-[var(--line)] text-[var(--text)] hover:bg-[var(--bg2)] hover:border-[var(--sand)] transition"
              aria-label="Zavolat +420 724 379 309"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
                aria-hidden="true"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 
                19.8 19.8 0 0 1-8.63-3.07 
                19.5 19.5 0 0 1-6-6 
                19.8 19.8 0 0 1-3.07-8.67 
                A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 
                12.3 12.3 0 0 0 .7 2.81 
                2 2 0 0 1-.45 2.11L8.09 9.91 
                a16 16 0 0 0 6 6l1.27-1.27 
                a2 2 0 0 1 2.11-.45 
                12.3 12.3 0 0 0 2.81.7 
                A2 2 0 0 1 22 16.92z" />
              </svg>
              <span className="hidden lg:inline">+420&nbsp;724&nbsp;379&nbsp;309</span>
            </a>

            {/* CZ/EN – desktop */}
            <div className="hidden md:flex items-center gap-2">
              <button
                onClick={() => setLang("cs")}
                className={
                  "px-3 py-1.5 text-sm rounded-lg border transition " +
                  (lang === "cs"
                    ? "border-[var(--sand)] bg-[var(--bg2)]"
                    : "border-[var(--line)] hover:bg-[var(--bg2)]")
                }
                type="button"
              >
                CZ
              </button>
              <button
                onClick={() => setLang("en")}
                className={
                  "px-3 py-1.5 text-sm rounded-lg border transition " +
                  (lang === "en"
                    ? "border-[var(--sand)] bg-[var(--bg2)]"
                    : "border-[var(--line)] hover:bg-[var(--bg2)]")
                }
                type="button"
              >
                EN
              </button>
            </div>

            {/* Hamburger – mobile */}
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="md:hidden px-3 py-1.5 text-sm rounded-lg border border-[var(--line)] hover:bg-[var(--bg2)] transition"
              aria-label="Open menu"
            >
              ☰
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU OVERLAY */}
      {menuOpen && (
        <div className="fixed inset-0 z-[999]">
          {/* backdrop */}
          <button
            type="button"
            className="absolute inset-0 bg-black/35"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          />

          {/* panel */}
          <div
            className="absolute top-0 right-0 h-full bg-white shadow-xl border-l border-[var(--line)] w-[62%] max-w-sm min-w-[320px]"
            style={{ paddingTop: "calc(env(safe-area-inset-top, 0px) + 12px)" }}
          >
            <div className="px-4 pb-4">
              <div className="flex items-center justify-between">
                <div className="font-semibold">Menu</div>
                <button
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  className="px-3 py-1.5 text-sm rounded-lg border border-[var(--line)] hover:bg-[var(--bg2)] transition"
                >
                  {t.close}
                </button>
              </div>

              <div className="mt-4 grid gap-3">
                {(t.nav || []).map((label, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => {
                      setMenuOpen(false);
                      go(navPaths[i]);
                    }}
                    className="w-full text-left px-4 py-4 rounded-2xl border border-[var(--line)] bg-white hover:bg-[var(--bg2)] transition font-semibold"
                  >
                    {label}
                  </button>
                ))}

                {/* LANGUAGE – mobile only */}
                <div className="rounded-2xl border border-[var(--line)] bg-white p-4">
                  <div className="text-xs tracking-widest text-[var(--muted)] mb-3">LANG</div>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setLang("cs")}
                      className={
                        "rounded-xl border px-4 py-3 font-semibold transition " +
                        (lang === "cs"
                          ? "border-[var(--sand)] bg-[var(--bg2)]"
                          : "border-[var(--line)] bg-white hover:bg-[var(--bg2)]")
                      }
                    >
                      CZ
                    </button>
                    <button
                      type="button"
                      onClick={() => setLang("en")}
                      className={
                        "rounded-xl border px-4 py-3 font-semibold transition " +
                        (lang === "en"
                          ? "border-[var(--sand)] bg-[var(--bg2)]"
                          : "border-[var(--line)] bg-white hover:bg-[var(--bg2)]")
                      }
                    >
                      EN
                    </button>
                  </div>
                </div>

                <a
  href="tel:+420724379309"
  className="w-full text-center px-4 py-4 rounded-2xl border border-[var(--line)] bg-[var(--bg2)] hover:border-[var(--sand)] transition font-semibold"
  onClick={() => setMenuOpen(false)}
>
  {lang === "cs" ? "Zavolat" : "Call"} +420 724 379 309
</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

function Hero({ t, small = false, showCta = false, intervalMs = 8000, bg, title }) {
  const slides = t.heroSlides || [];
  const [index, setIndex] = React.useState(0);
  const [stage, setStage] = React.useState("show");
  const timerRef = React.useRef(null);

  const [isMobile, setIsMobile] = React.useState(() =>
    window.matchMedia ? window.matchMedia("(max-width: 768px)").matches : false
  );

  React.useEffect(() => {
    if (!window.matchMedia) return;
    const mq = window.matchMedia("(max-width: 768px)");
    const onChange = () => setIsMobile(mq.matches);

    if (mq.addEventListener) mq.addEventListener("change", onChange);
    else mq.addListener(onChange);

    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", onChange);
      else mq.removeListener(onChange);
    };
  }, []);

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

  const bgPos = isMobile ? slide.posMobile || slide.pos || "center" : slide.pos || "center";

  const bgClass = stage === "exit" ? "opacity-0 scale-[1.03]" : "opacity-100 scale-100";
  const textClass = stage === "exit" ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0";

  return (
    <section
      className={
        (small ? "min-h-[42vh]" : "min-h-[60svh] md:min-h-[92vh]") +
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
          backgroundPosition: bgPos
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-black/20"></div>

      <div className="relative max-w-6xl mx-auto px-4 w-full">
        <div
          className={
            "max-w-2xl text-white transition-all duration-700 ease-in-out will-change-transform " +
            textClass
          }
        >
         <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-3 max-w-3xl">
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

    {/* TRUST BLOK */}
    <section className="py-10 max-w-6xl mx-auto px-4 reveal">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {(t.homeTrust || []).map((item, i) => (
          <div
            key={i}
            className="rounded-2xl border border-[var(--line)] bg-white soft-shadow px-5 py-5 text-center"
          >
            <div className="text-2xl md:text-3xl font-semibold text-[var(--brand-brown-dark)]">
              {item.value}
            </div>
            <div className="text-sm text-[var(--muted)] mt-1">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* dál pokračuje tvůj původní obsah */}

      {/* ===== ABOUT ===== */}
     <section className="py-16 max-w-6xl mx-auto px-4 reveal">
  <div className="grid md:grid-cols-2 gap-8 items-center">
    <div className="soft-shadow rounded-2xl overflow-hidden">
      <img
        src="assets/img/Onas/onas-01.webp"
        alt="Interior"
        className="w-full h-full object-cover"
        loading="lazy"
        decoding="async"
      />
    </div>

    <div>
      <h2 className="text-3xl md:text-4xl font-semibold leading-tight mb-4">{t.homeAboutH}</h2>
      {(t.homeAbout || []).map((p, idx) => (
        <p
          key={idx}
          className={"text-[var(--muted)] text-lg leading-relaxed" + (idx > 0 ? " mt-4" : "")}
        >
          {p}
        </p>
      ))}
    </div>
  </div>
</section>

{/* ===== SERVICES ===== */}
<section className="py-16 max-w-6xl mx-auto px-4 reveal">
  <h2 className="text-3xl md:text-4xl font-semibold leading-tight mb-8">{t.servicesH}</h2>

  <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-6">
    {(t.services || []).map((s, i) => {
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
            {t.serviceCardCta}
          </div>
        </button>
      );
    })}
  </div>
</section>

{/* ===== ATMOSPHERE ===== */}
<section className="py-16 max-w-6xl mx-auto px-4 reveal">
  <h2 className="script text-4xl mb-3">{t.inspH}</h2>

  <p className="text-[var(--text)]/80 text-lg md:text-xl leading-relaxed mb-6 max-w-3xl whitespace-pre-line">
    {t.inspLead}
  </p>

  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
    {[
      { src: "assets/img/atmosfera/atmosfera-01.webp", tags: (t.inspTags || [])[0] || "" },
      { src: "assets/img/atmosfera/atmosfera-02.webp", tags: (t.inspTags || [])[1] || "" },
      { src: "assets/img/atmosfera/atmosfera-03.webp", tags: (t.inspTags || [])[2] || "" }
    ].map((item, i) => (
      <div key={i} className="relative inspiration-img soft-shadow overflow-hidden">
        <img
          src={item.src}
          alt={`Atmosphere ${i + 1}`}
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

{/* ===== BENEFITS ===== */}
<section className="py-16 max-w-6xl mx-auto px-4 reveal">
  <h2 className="text-3xl md:text-4xl font-semibold leading-tight mb-8">{t.benefitsH}</h2>

  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
    {(t.benefits || []).map((b, i) => {
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
            {t.benefitCardCta}
          </div>
        </button>
      );
    })}
  </div>
</section>

      {/* ===== FAQ ===== */}
     <section className="py-16 max-w-4xl mx-auto px-4 reveal">
  <h2 className="text-3xl md:text-4xl font-semibold leading-tight mb-6">{t.faqH}</h2>

        {(t.faq || []).map((f, i) => (
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

        <p className="text-sm text-[var(--muted)] mt-4">{t.homeCtaNote}</p>
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
  const bridges = t.processBridges || [];

  return (
    <>
      <Hero t={t} small bg={bgTop} title={t.processH} />

      <section className="max-w-6xl mx-auto px-4 py-16 reveal">
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
                    <div className="soft-shadow rounded-2xl overflow-hidden bg-white border border-[var(--line)]">
                      <img
                        src={imgs[i] || bgTop}
                        alt={title}
                        className="w-full h-full object-cover aspect-[16/10] md:aspect-[16/9]"
                        loading="lazy"
                      />
                    </div>

                    <div className="max-w-xl">
                      <div className="text-xs tracking-widest text-[var(--muted)] mb-2">
                        {n}
                      </div>

                      <h3 className="text-2xl font-semibold mb-2">{title}</h3>

                      <p className="text-[var(--muted)] text-base leading-relaxed whitespace-pre-line">
                        {texts[i]}
                      </p>

                      <div className="mt-4 inline-flex items-center gap-2 text-sm text-[var(--muted)]">
                        <span className="w-10 h-px bg-[var(--line)]" />
                        <span>{(t.processMicroByStep || [])[i] || ""}</span>
                      </div>
                    </div>
                  </div>

                  {i < steps.length - 1 && (
                    <div className="reveal text-center py-2 md:py-3">
                      <div className="mx-auto w-24 h-px bg-[var(--line)]/80 mb-3" />
                      <p className="text-xs italic text-[var(--muted)]">
                        {bridges[i] || ""}
                      </p>
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 py-16 reveal">
          <div className="text-left md:text-center">
            <h3 className="script text-3xl mb-6">{t.processBehindH}</h3>
          </div>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {(t.processBehindCards || []).map((c) => (
              <article
                key={c.id}
                id={c.id}
                className="rounded-2xl bg-white border border-[var(--line)] soft-shadow p-7 reveal scroll-mt-24 flex flex-col"
              >
                <h4 className="text-lg font-semibold mb-3">{c.title}</h4>

                <div className="flex-1 flex flex-col justify-between">
                  <p className="text-[var(--muted)] leading-relaxed">{c.p1}</p>
                  <p className="text-[var(--muted)] leading-relaxed mt-3">{c.p2}</p>
                  <p className="text-[var(--muted)] leading-relaxed mt-3">{c.p3}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto mt-12 text-center text-[var(--muted)]">
          {t.processEnding}
        </div>
      </section>
    </>
  );
}

function Pricing({ t }) {
  useReveal();
  const [activeKey, setActiveKey] = useState(null);
  const [roletaTypeIdx, setRoletaTypeIdx] = useState(0);
  const [systemyTypeIdx, setSystemyTypeIdx] = useState(0);

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
        <div className="absolute inset-0 bg-black/50" onClick={onClose} aria-hidden="true" />
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
                  <div className="text-sm italic text-[var(--muted)] mt-1">{subtitle}</div>
                ) : null}
              </div>

              <button
                type="button"
                onClick={onClose}
                className="rounded-full px-3 py-1 text-sm border border-[var(--line)] hover:bg-[var(--bg2)] transition"
                aria-label="Close"
              >
                {t.close}
              </button>
            </div>

            <div className="max-h-[78vh] overflow-y-auto">{children}</div>
          </div>
        </div>
      </div>
    );
  }

  function RangeChipsLocal({ items }) {
    return (
      <div className="grid gap-2">
        {(items || []).map((r, i) => (
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

  const bgTop = "assets/img/hero/pricing-hero.webp";
  const items = useMemo(() => t.pricingItems || [], [t]);

  const activeItem = activeKey ? items.find((i) => i.key === activeKey) : null;

  const currentItem =
    activeItem?.key === "roleta"
      ? activeItem.subtypes?.[roletaTypeIdx] || activeItem.subtypes?.[0] || activeItem
      : activeItem?.key === "systemy"
        ? activeItem.subtypes?.[systemyTypeIdx] || activeItem.subtypes?.[0] || activeItem
        : activeItem;

  return (
    <>
      <Hero t={t} small bg={bgTop} title={t.priceH} />

      <section className="max-w-6xl mx-auto px-4 py-16 reveal">
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

                    <div className="mt-2 text-sm italic text-[var(--muted)]">{x.vibe}</div>

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
                      onClick={() => {
                        setActiveKey(x.key);
                        if (x.key === "roleta") setRoletaTypeIdx(0);
                        if (x.key === "systemy") setSystemyTypeIdx(0);
                      }}
                      className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold border border-[var(--line)] bg-white hover:bg-[var(--bg2)] hover:border-[var(--sand)] transition"
                    >
                      {t.openDetail} <span aria-hidden="true">→</span>
                    </button>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>

        <div className="max-w-3xl mx-auto mt-12 text-sm text-[var(--muted)] text-left md:text-center">
          {t.pricingDisclaimer}
        </div>
      </section>

      <ModalLocal
        open={!!activeItem}
        onClose={() => setActiveKey(null)}
        title={
          activeItem?.key === "roleta" || activeItem?.key === "systemy"
            ? `${activeItem?.title || ""} — ${currentItem?.label || ""}`
            : activeItem?.title || ""
        }
        subtitle={activeItem?.vibe || ""}
      >
        {activeItem && currentItem && (
          <div className="p-5 md:p-6">
            <div className="grid md:grid-cols-12 gap-6 items-start">
              <div className="md:col-span-5">
                <div className="rounded-2xl overflow-hidden border border-[var(--line)] bg-white soft-shadow">
                  <img
                    src={currentItem?.img || activeItem.img}
                    alt={currentItem?.label || activeItem.title}
                    className="w-full object-cover aspect-[4/5] md:aspect-[3/4]"
                    style={{ objectPosition: "center" }}
                  />
                </div>
              </div>

              <div className="md:col-span-7 space-y-5">
                <div>
                  <div className="text-sm italic text-[var(--muted)]">{currentItem.micro}</div>

                  {(activeItem?.key === "roleta" || activeItem?.key === "systemy") && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {(activeItem.subtypes || []).map((st, idx) => {
                        const isActive =
                          activeItem.key === "roleta"
                            ? roletaTypeIdx === idx
                            : systemyTypeIdx === idx;

                        const onPick = () => {
                          if (activeItem.key === "roleta") setRoletaTypeIdx(idx);
                          if (activeItem.key === "systemy") setSystemyTypeIdx(idx);
                        };

                        return (
                          <button
                            key={st.key}
                            type="button"
                            onClick={onPick}
                            className={
                              "px-3 py-1.5 rounded-full text-sm border transition " +
                              (isActive
                                ? "border-[var(--sand)] bg-[var(--bg2)] font-semibold"
                                : "border-[var(--line)] hover:bg-[var(--bg2)]")
                            }
                          >
                            {st.label}
                          </button>
                        );
                      })}
                    </div>
                  )}

                  <p className="mt-2 text-[var(--muted)] text-sm leading-relaxed">{currentItem.intro}</p>
                </div>

                <div className="rounded-2xl border border-[var(--line)] bg-white px-4 py-4">
                  <div className="text-sm font-semibold">{currentItem.rangesTitle}</div>
                  <div className="mt-3">
                    <RangeChipsLocal items={currentItem.ranges} />
                  </div>
                  {currentItem.rangesNote ? (
                    <p className="mt-3 text-xs text-[var(--muted)] leading-relaxed">
                      {currentItem.rangesNote}
                    </p>
                  ) : null}
                </div>

                {activeItem?.key === "servis" ? (
                  <div className="mt-3 rounded-xl border border-[var(--line)] bg-[var(--bg2)] px-4 py-3">
                    <div className="flex items-center gap-2 text-sm font-semibold">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--sand)]" />
                      {activeItem.serviceOnlyNote}
                    </div>
                  </div>
                ) : (
                  <div className="rounded-2xl border border-[var(--line)] bg-white px-4 py-4">
                    <div className="text-sm font-semibold">{currentItem.tiersTitle}</div>

                    <div className="grid sm:grid-cols-3 gap-4 mt-3">
                      {(currentItem.tiers || []).map((t0, i) => (
                        <div
                          key={i}
                          className="rounded-xl bg-[var(--bg2)] px-4 py-3 flex flex-col h-full"
                        >
                          <div className="text-sm font-semibold leading-snug min-h-[2.6rem]">
                            {t0.name}
                          </div>
                          <div className="text-[var(--muted)] text-sm mt-1 leading-relaxed flex-1 flex items-end">
                            <span>{t0.note}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="pt-1 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setActiveKey(null);
                      go("/contact");
                    }}
                    className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold border border-[var(--line)] bg-white hover:bg-[var(--bg2)] hover:border-[var(--sand)] transition"
                  >
                    {t.writeMe} <span aria-hidden="true">→</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveKey(null)}
                    className="rounded-full px-5 py-2.5 text-sm border border-[var(--line)] hover:bg-[var(--bg2)] transition"
                  >
                    {t.close}
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

  const OUR_WORK = [
    "assets/img/gallery/our-work/ourwork-01.webp",
    "assets/img/gallery/our-work/ourwork-02.webp",
    "assets/img/gallery/our-work/ourwork-03.webp",
    "assets/img/gallery/our-work/ourwork-04.webp",
    "assets/img/gallery/our-work/ourwork-05.webp",
    "assets/img/gallery/our-work/ourwork-06.webp",
    "assets/img/gallery/our-work/ourwork-07.webp",
    "assets/img/gallery/our-work/ourwork-08.webp",
    "assets/img/gallery/our-work/ourwork-09.webp",
    "assets/img/gallery/our-work/ourwork-10.webp",
    "assets/img/gallery/our-work/ourwork-11.webp",
    "assets/img/gallery/our-work/ourwork-12.webp",
    "assets/img/gallery/our-work/ourwork-13.webp",
    "assets/img/gallery/our-work/ourwork-14.webp",
    "assets/img/gallery/our-work/ourwork-15.webp",
    "assets/img/gallery/our-work/ourwork-16.webp",
    "assets/img/gallery/our-work/ourwork-17.webp",
    "assets/img/gallery/our-work/ourwork-18.webp",
    "assets/img/gallery/our-work/ourwork-19.webp",
    "assets/img/gallery/our-work/ourwork-20.webp",
    "assets/img/gallery/our-work/ourwork-21.webp",
    "assets/img/gallery/our-work/ourwork-22.webp",
    "assets/img/gallery/our-work/ourwork-23.webp",
    "assets/img/gallery/our-work/ourwork-24.webp",
    "assets/img/gallery/our-work/ourwork-25.webp",
    "assets/img/gallery/our-work/ourwork-26.webp",
    "assets/img/gallery/our-work/ourwork-27.webp",
    "assets/img/gallery/our-work/ourwork-28.webp",
    "assets/img/gallery/our-work/ourwork-29.webp",
    "assets/img/gallery/our-work/ourwork-30.webp",
    "assets/img/gallery/our-work/ourwork-31.webp",
    "assets/img/gallery/our-work/ourwork-32.webp",
    "assets/img/gallery/our-work/ourwork-33.webp",
    "assets/img/gallery/our-work/ourwork-34-2.webp",
    "assets/img/gallery/our-work/ourwork-35.webp",
    "assets/img/gallery/our-work/ourwork-36.webp",
    "assets/img/gallery/our-work/ourwork-37.webp",
    "assets/img/gallery/our-work/ourwork-38.webp",
    "assets/img/gallery/our-work/ourwork-39.webp",
    "assets/img/gallery/our-work/ourwork-40.webp",
    "assets/img/gallery/our-work/ourwork-41.webp",
    "assets/img/gallery/our-work/ourwork-42.webp",
    "assets/img/gallery/our-work/ourwork-43.webp",
    "assets/img/gallery/our-work/ourwork-44.webp",
    "assets/img/gallery/our-work/ourwork-45.webp",
    "assets/img/gallery/our-work/ourwork-46.webp",
    "assets/img/gallery/our-work/ourwork-47.webp",
    "assets/img/gallery/our-work/ourwork-48.webp",
    "assets/img/gallery/our-work/ourwork-49.webp",
    "assets/img/gallery/our-work/ourwork-50.webp",
    "assets/img/gallery/our-work/ourwork-51.webp",
    "assets/img/gallery/our-work/ourwork-52.webp",
    "assets/img/gallery/our-work/ourwork-53.webp",
    "assets/img/gallery/our-work/ourwork-54.webp",
    "assets/img/gallery/our-work/ourwork-55.webp",
    "assets/img/gallery/our-work/ourwork-56.webp",
    "assets/img/gallery/our-work/ourwork-57.webp",
    "assets/img/gallery/our-work/ourwork-58-2.webp",
    "assets/img/gallery/our-work/ourwork-59-3.webp",
    "assets/img/gallery/our-work/ourwork-60-3.webp",
    "assets/img/gallery/our-work/ourwork-61.webp",
    "assets/img/gallery/our-work/ourwork-62.webp",
    "assets/img/gallery/our-work/ourwork-63.webp",
    "assets/img/gallery/our-work/ourwork-64-3.webp",
    "assets/img/gallery/our-work/ourwork-65.webp",
    "assets/img/gallery/our-work/ourwork-66.webp",
    "assets/img/gallery/our-work/ourwork-67.webp",
    "assets/img/gallery/our-work/ourwork-68.webp",
    "assets/img/gallery/our-work/ourwork-69.webp",
    "assets/img/gallery/our-work/ourwork-70.webp",
    "assets/img/gallery/our-work/ourwork-71.webp",
    "assets/img/gallery/our-work/ourwork-72-2.webp",
    "assets/img/gallery/our-work/ourwork-73.webp",
    "assets/img/gallery/our-work/ourwork-74.webp",
    "assets/img/gallery/our-work/ourwork-75.webp",
    "assets/img/gallery/our-work/ourwork-76.webp",
    "assets/img/gallery/our-work/ourwork-77.webp",
    "assets/img/gallery/our-work/ourwork-78.webp",
    "assets/img/gallery/our-work/ourwork-79.webp",
    "assets/img/gallery/our-work/ourwork-80.webp",
    "assets/img/gallery/our-work/ourwork-81.webp",
    "assets/img/gallery/our-work/ourwork-82.webp",
    "assets/img/gallery/our-work/ourwork-83.webp",
    "assets/img/gallery/our-work/ourwork-84.webp",
    "assets/img/gallery/our-work/ourwork-85.webp",
    "assets/img/gallery/our-work/ourwork-86.webp",
    "assets/img/gallery/our-work/ourwork-87.webp"
  ];

  const PARTNERS = [
    {
      key: "onoje",
      name: "ono.je",
      url: "https://www.ono.je",
      images: [
        "assets/img/gallery/partners/onoje/ono-je-01.webp",
        "assets/img/gallery/partners/onoje/ono-je-02.webp",
        "assets/img/gallery/partners/onoje/ono-je-03.webp"
      ]
    },
    {
      key: "richter",
      name: "RichterDesign",
      url: "https://www.richterdesign.cz",
      images: [
        "assets/img/gallery/partners/richter/richter-01.webp",
        "assets/img/gallery/partners/richter/richter-02.webp",
        "assets/img/gallery/partners/richter/richter-03.webp"
      ]
    },
    {
      key: "epic",
      name: "Epic Interior Studio",
      url: "https://www.epicinteriorstudio.cz/",
      images: [
        "assets/img/gallery/partners/epic-interior-studio/epic-01.webp",
        "assets/img/gallery/partners/epic-interior-studio/epic-02.webp",
        "assets/img/gallery/partners/epic-interior-studio/epic-03.webp"
      ]
    },
    {
      key: "broda",
      name: "Broda interiér",
      url: "https://brodainterier.cz/",
      images: [
        "assets/img/gallery/partners/broda/broda-01.webp",
        "assets/img/gallery/partners/broda/broda-02.webp",
        "assets/img/gallery/partners/broda/broda-03.webp"
      ]
    }
  ];

  const [ourWorkOpen, setOurWorkOpen] = React.useState(false);
  const [ratios, setRatios] = React.useState({});
  const [perRow, setPerRow] = React.useState(
    typeof window !== "undefined" && window.innerWidth <= 768 ? 2 : 3
  );

  // NOVÉ: custom lightbox jen pro OUR_WORK
  const [ourWorkLightboxOpen, setOurWorkLightboxOpen] = React.useState(false);
  const [ourWorkLightboxIndex, setOurWorkLightboxIndex] = React.useState(0);
  const touchStartXRef = React.useRef(0);
  const touchEndXRef = React.useRef(0);

  React.useEffect(() => {
    const onResize = () => setPerRow(window.innerWidth <= 768 ? 2 : 3);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = ourWorkOpen || ourWorkLightboxOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [ourWorkOpen, ourWorkLightboxOpen]);

  // NOVÉ: klávesnice pro lightbox
  React.useEffect(() => {
    if (!ourWorkLightboxOpen) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        setOurWorkLightboxOpen(false);
      } else if (e.key === "ArrowLeft") {
        setOurWorkLightboxIndex((prev) =>
          prev === 0 ? OUR_WORK.length - 1 : prev - 1
        );
      } else if (e.key === "ArrowRight") {
        setOurWorkLightboxIndex((prev) =>
          prev === OUR_WORK.length - 1 ? 0 : prev + 1
        );
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [ourWorkLightboxOpen, OUR_WORK.length]);

  const chunk = (arr, size) => {
    const out = [];
    for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
    return out;
  };

  // NOVÉ: helpery pro Our Work lightbox
  const openOurWorkLightbox = (e, index) => {
    e.preventDefault();
    setOurWorkLightboxIndex(index);
    setOurWorkLightboxOpen(true);
  };

  const closeOurWorkLightbox = () => {
    setOurWorkLightboxOpen(false);
  };

  const showPrevOurWork = () => {
    setOurWorkLightboxIndex((prev) =>
      prev === 0 ? OUR_WORK.length - 1 : prev - 1
    );
  };

  const showNextOurWork = () => {
    setOurWorkLightboxIndex((prev) =>
      prev === OUR_WORK.length - 1 ? 0 : prev + 1
    );
  };

  const onTouchStartOurWork = (e) => {
    touchStartXRef.current = e.changedTouches[0].clientX;
  };

  const onTouchEndOurWork = (e) => {
    touchEndXRef.current = e.changedTouches[0].clientX;
    const diff = touchStartXRef.current - touchEndXRef.current;

    if (Math.abs(diff) < 40) return;

    if (diff > 0) {
      showNextOurWork();
    } else {
      showPrevOurWork();
    }
  };

  return (
    <>
      <Hero t={t} small title={t.galleryH} bg="assets/img/hero/gallery-hero.webp" />

      <section className="max-w-6xl mx-auto px-4 py-16 reveal">
        <div className="flex items-end justify-between gap-4">
          <div className="max-w-3xl">
            <h3 className="script text-3xl mb-3">{t.galleryOurWorkH}</h3>
            <p className="text-[var(--muted)] text-sm leading-relaxed">{t.galleryOurWorkP}</p>
          </div>

          <button
            type="button"
            onClick={() => setOurWorkOpen(true)}
            className="hidden md:inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold border border-[var(--line)] bg-white hover:bg-[var(--bg2)] hover:border-[var(--sand)] transition"
          >
            {t.galleryShowAll}
          </button>
        </div>

        <div className="mt-8 ourwork-strip">
          {OUR_WORK.slice(0, 6).map((src, i) => (
            <a
              key={i}
              href={src}
              onClick={(e) => openOurWorkLightbox(e, i)}
              className="ourwork-item group relative"
            >
              <img
                src={src}
                alt={`Work ${i + 1}`}
                className="ourwork-img soft-shadow"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition rounded-xl" />
            </a>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setOurWorkOpen(true)}
          className="mt-6 md:hidden w-full inline-flex justify-center items-center gap-2 rounded-2xl px-4 py-4 text-sm font-semibold border border-[var(--line)] bg-white hover:bg-[var(--bg2)] hover:border-[var(--sand)] transition"
        >
          {t.galleryShowAll}
        </button>
      </section>

      {ourWorkOpen && (
        <div className="ow-modal">
          <button
            type="button"
            className="ow-backdrop"
            onClick={() => setOurWorkOpen(false)}
            aria-label="Close"
          />

          <div className="ow-panel" role="dialog" aria-modal="true">
            <div className="ow-head">
              <div>
                <div className="ow-title">{t.galleryModalH}</div>
                <div className="ow-sub">{t.galleryModalSub}</div>
              </div>

              <button type="button" onClick={() => setOurWorkOpen(false)} className="ow-close">
                {t.close}
              </button>
            </div>

            <div className="ow-body">
              <div className="ow-rows">
                {chunk(OUR_WORK, perRow).map((row, rIdx) => (
                  <div className="ow-row" key={rIdx}>
                    {row.map((src, i) => {
                      const absoluteIndex = rIdx * perRow + i;
                      const grow = ratios[absoluteIndex] || 1.6;
                      return (
                        <a
                          key={src}
                          href={src}
                          onClick={(e) => openOurWorkLightbox(e, absoluteIndex)}
                          className="ow-card group"
                          style={{ flexGrow: grow }}
                        >
                          <img
                            src={src}
                            alt={`Work ${absoluteIndex + 1}`}
                            className="ow-img"
                            loading="lazy"
                            decoding="async"
                            onLoad={(e) => {
                              const img = e.currentTarget;
                              const w = img.naturalWidth || 1;
                              const h = img.naturalHeight || 1;
                              const ratio = Math.max(0.7, Math.min(3.2, w / h));
                              setRatios((prev) =>
                                prev[absoluteIndex] ? prev : { ...prev, [absoluteIndex]: ratio }
                              );
                            }}
                          />
                          <div className="ow-hover" />
                        </a>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* NOVÉ: lightbox jen pro Our Work */}
      {ourWorkLightboxOpen && (
        <div className="owlb-modal" role="dialog" aria-modal="true">
          <button
            type="button"
            className="owlb-backdrop"
            onClick={closeOurWorkLightbox}
            aria-label="Close"
          />

          <div className="owlb-panel">
            <button
              type="button"
              className="owlb-close"
              onClick={closeOurWorkLightbox}
              aria-label="Close"
            >
              ×
            </button>

            <button
              type="button"
              className="owlb-arrow owlb-arrow-left"
              onClick={showPrevOurWork}
              aria-label="Previous image"
            >
              ‹
            </button>

            <div
              className="owlb-stage"
              onTouchStart={onTouchStartOurWork}
              onTouchEnd={onTouchEndOurWork}
            >
              <img
                src={OUR_WORK[ourWorkLightboxIndex]}
                alt={`Work ${ourWorkLightboxIndex + 1}`}
                className="owlb-img"
                loading="eager"
                decoding="async"
              />
            </div>

            <button
              type="button"
              className="owlb-arrow owlb-arrow-right"
              onClick={showNextOurWork}
              aria-label="Next image"
            >
              ›
            </button>

            <div className="owlb-counter">
              {ourWorkLightboxIndex + 1} / {OUR_WORK.length}
            </div>
          </div>
        </div>
      )}

      <section className="max-w-6xl mx-auto px-4 pb-20 reveal">
        <div className="max-w-3xl">
          <h3 className="script text-3xl mb-3">{t.galleryPartnersH}</h3>
          <p className="text-[var(--muted)] text-sm leading-relaxed">{t.galleryPartnersP}</p>
        </div>

        <div className="mt-10 space-y-6">
          {PARTNERS.map((p, idx) => (
            <article
              key={idx}
              className="rounded-2xl border border-[var(--line)] bg-white soft-shadow overflow-hidden reveal"
            >
              <div className="grid md:grid-cols-12 gap-0">
                <div className="md:col-span-5 p-6 flex flex-col justify-between">
                  <div>
                    <div className="text-xl font-semibold">{p.name}</div>
                    <p className="text-[var(--muted)] text-sm mt-2 leading-relaxed">
                      {(t.galleryPartnersNotes && t.galleryPartnersNotes[p.key]) || ""}
                    </p>
                  </div>

                  <div className="mt-5">
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold underline text-[var(--muted)] hover:text-black"
                    >
                      {t.galleryVisitWeb}
                    </a>
                  </div>
                </div>

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
                          alt={`${p.name} preview`}
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
  const bg = "assets/img/hero/finished-hero.webp";

  return (
    <>
      <Hero t={t} small bg={bg} title={t.finishedH} />

      <section className="max-w-6xl mx-auto px-4 py-16 reveal">
        <div className="max-w-4xl mx-auto mt-10">
          <div className="rounded-2xl border border-dashed border-[var(--line)] bg-[var(--bg2)] p-10 text-center soft-shadow">
            <h3 className="text-xl font-semibold mb-3">{t.finishedBoxH}</h3>

            <p className="text-[var(--muted)] text-sm leading-relaxed max-w-2xl mx-auto whitespace-pre-line">
              {t.finishedBoxP}
            </p>

            <div className="mt-6">
              <button
                onClick={() => go("/contact")}
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold border border-[var(--line)] hover:bg-white transition"
              >
                {t.finishedBoxBtn}
              </button>
            </div>

            <p className="text-xs text-[var(--muted)] mt-4">{t.finishedBoxFoot}</p>
          </div>
        </div>
      </section>
    </>
  );
}

function Essences({ t }) {
  useReveal();
  const bg = "assets/img/hero/essence-hero.webp";

  return (
    <>
      <Hero t={t} small bg={bg} title={t.essenceH} />

      <section className="max-w-6xl mx-auto px-4 py-16 reveal">
        <p className="text-[var(--muted)] max-w-3xl mb-8 mx-auto text-center">{t.essenceLead}</p>

        <div className="max-w-3xl mx-auto mt-10">
          <div className="rounded-2xl border border-dashed border-[var(--line)] bg-[var(--bg2)] p-8 text-center soft-shadow">
            <h3 className="text-lg font-semibold mb-2">{t.essenceBoxH}</h3>

            <p className="text-[var(--muted)] text-sm leading-relaxed whitespace-pre-line">
              {t.essenceBoxP}
            </p>

            <p className="text-xs tracking-wide text-[var(--muted)] mt-4">{t.essenceBoxFoot}</p>
          </div>
        </div>
      </section>
    </>
  );
}
function Contact({ t }) {
  useReveal();

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [touched, setTouched] = React.useState(false);

  const [sending, setSending] = React.useState(false);
  const [statusMsg, setStatusMsg] = React.useState("");
  const [statusKind, setStatusKind] = React.useState(""); // "", "success", "error"
  const [showModal, setShowModal] = React.useState(false);

  const [files, setFiles] = React.useState([]);

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  const phoneOk = phone.trim().length >= 6;
  const nameOk = name.trim().length >= 2;
  const messageOk = message.trim().length >= 5;

  const canSend = nameOk && emailOk && phoneOk && messageOk;

  const SCRIPT_URL = "https://hook.eu1.make.com/o1lk627xrpjl8d6exq9sh5yrplr58sw8";

  // ✅ limity (max 5 fotek)
  const MAX_FILES = 5;

  // ✅ komprese = rychlejší upload do Make/Drive
  const MAX_EDGE = 1600;       // px
  const JPEG_QUALITY = 0.75;   // 0..1
  const MAX_TOTAL_MB = 12;     // bezpečně nízko

  function bytesToMB(b) {
    return b / (1024 * 1024);
  }

  async function compressImage(file) {
    if (!file.type.startsWith("image/")) return file;

    try {
      const img = await createImageBitmap(file);

      let w = img.width;
      let h = img.height;

      const scale = Math.min(1, MAX_EDGE / Math.max(w, h));
      w = Math.round(w * scale);
      h = Math.round(h * scale);

      const canvas = document.createElement("canvas");
      canvas.width = w;
      canvas.height = h;

      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, w, h);

      const blob = await new Promise((resolve) =>
        canvas.toBlob(resolve, "image/jpeg", JPEG_QUALITY)
      );

      if (!blob) return file;

      const safeName = file.name.replace(/\.[^.]+$/, "") + ".jpg";
      return new File([blob], safeName, { type: "image/jpeg" });
    } catch {
      return file;
    }
  }

  function handleFilesChange(e) {
    const picked = Array.from(e.target.files || []);
    if (!picked.length) return;

    setStatusMsg("");
    setStatusKind("");

    // vezmeme max 5 (záměrně NE “přidávání”, ať je to jednoduché a předvídatelné)
    const limited = picked.slice(0, MAX_FILES);

    if (picked.length > MAX_FILES) {
      setStatusKind("error");
      setStatusMsg(`Můžeš nahrát maximálně ${MAX_FILES} fotografií.`);
    }

    setFiles(limited);

    // umožní znovu vybrat stejné soubory
    e.target.value = "";
  }

  function removeFile(idx) {
    setFiles((prev) => prev.filter((_, i) => i !== idx));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setTouched(true);
    setStatusMsg("");
    setStatusKind("");
    setShowModal(false);

    if (!canSend || sending) return;

    try {
      setSending(true);

      const selected = files.slice(0, MAX_FILES);

      const compressed = [];
      for (const f of selected) {
        compressed.push(await compressImage(f));
      }

      const totalBytes = compressed.reduce((s, f) => s + (f?.size || 0), 0);
      if (bytesToMB(totalBytes) > MAX_TOTAL_MB) {
        throw new Error(
          `Přílohy jsou moc velké (${bytesToMB(totalBytes).toFixed(1)} MB). Zkus vybrat méně fotek nebo menší.`
        );
      }

      const fd = new FormData();
      fd.append("name", name.trim());
      fd.append("email", email.trim());
      fd.append("phone", phone.trim());
      fd.append("message", message.trim());
      fd.append("filesCount", String(compressed.length));

      // ✅ posíláme opakovaně pod stejným názvem "files" → Make z toho umí udělat array
      compressed.forEach((f) => {
        fd.append("files", f, f.name);
      });

      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 180000); // 180s

      // ✅ no-cors = obejde CORS u Make webhooku
      await fetch(SCRIPT_URL, {
        method: "POST",
        body: fd,
        mode: "no-cors",
        signal: controller.signal
      });

      clearTimeout(timeout);

      // no-cors = odpověď je opaque → neověřujeme res.ok
      setStatusKind("success");
      setStatusMsg("Děkuji! Zpráva byla odeslána.");
      setShowModal(true);

      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setFiles([]);
      setTouched(false);

      setTimeout(() => setShowModal(false), 2200);
    } catch (err) {
      console.error(err);
      setStatusKind("error");
      setStatusMsg(
        err?.name === "AbortError"
          ? "Odeslání trvalo moc dlouho. Zkuste to prosím znovu."
          : `Nepodařilo se odeslat: ${String(err?.message || err)}`
      );
      setShowModal(true);
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      <Hero t={t} small bg="assets/img/hero/contact-hero01.webp" title={t.contactH} />

      <section className="max-w-6xl mx-auto px-4 py-16 reveal">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="order-1">
            <p>
              <strong>{t.name}</strong>
              <br />
              Jana Segelberg
            </p>

            <p className="mt-3">
              <strong>{t.email}</strong>
              <br />
              <a href="mailto:info@stinenisesenci.cz" className="underline">
                info@stinenisesenci.cz
              </a>
            </p>

            <p className="mt-3">
              <strong>{t.contactPhone}</strong>
              <br />
              <a href="tel:+420724379309" className="underline">
                +420 724 379 309
              </a>
            </p>

            <div className="text-[var(--muted)] text-sm mt-6 space-y-2">
              <div className="font-semibold">{t.contactHowH}</div>
              <ol className="list-decimal pl-5 space-y-1">
                {(t.contactHow || []).map((x, i) => (
                  <li key={i}>{x}</li>
                ))}
              </ol>
            </div>

            <p className="text-[var(--muted)] text-sm mt-4">{t.contactNote}</p>

            {/* Firemní údaje – desktop */}
            <div className="hidden md:block mt-6 space-y-6 text-sm">
              <div className="rounded-2xl border border-[var(--line)] bg-white p-6 soft-shadow">
                <div className="font-semibold text-base mb-2">Jana Segelberg</div>
                <div className="text-[var(--muted)] leading-relaxed">
                  Navrátilova 1334/16
                  <br />
                  110 00 Praha 1
                  <br />
                  <br />
                  IČO 61289345
                  <br />
                  DIČ CZ7259060062
                </div>
              </div>

              <div className="rounded-2xl border border-[var(--line)] bg-white p-6 soft-shadow">
                <div className="font-semibold text-base mb-2">Segelberg &amp; Co. s.r.o.</div>
                <div className="text-[var(--muted)] leading-relaxed">
                  Sarajevská 1051/10
                  <br />
                  120 00 Praha 2
                  <br />
                  <br />
                  IČO 08619263
                  <br />
                  DIČ CZ08619263
                </div>
              </div>
            </div>
          </div>

          <form
            className="order-2 rounded-2xl bg-white border border-[var(--line)] p-6 soft-shadow reveal"
            onSubmit={handleSubmit}
          >
            <div className="grid gap-4">
              <label className="text-sm">
                {t.contactFullName}
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onBlur={() => setTouched(true)}
                  className={
                    "mt-1 w-full border rounded-lg px-3 py-2 border-[var(--line)] " +
                    (touched && !nameOk ? "border-red-400" : "")
                  }
                  required
                />
              </label>

              <label className="text-sm">
                {t.email}
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={() => setTouched(true)}
                  className={
                    "mt-1 w-full border rounded-lg px-3 py-2 border-[var(--line)] " +
                    (touched && !emailOk ? "border-red-400" : "")
                  }
                  required
                />
              </label>

              <label className="text-sm">
                {t.contactPhone}
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  onBlur={() => setTouched(true)}
                  className={
                    "mt-1 w-full border rounded-lg px-3 py-2 border-[var(--line)] " +
                    (touched && !phoneOk ? "border-red-400" : "")
                  }
                  required
                />
              </label>

              <label className="text-sm">
                {t.message}
                <textarea
                  rows="5"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onBlur={() => setTouched(true)}
                  className={
                    "mt-1 w-full border rounded-lg px-3 py-2 border-[var(--line)] " +
                    (touched && !messageOk ? "border-red-400" : "")
                  }
                  required
                />
              </label>

              <label className="text-sm">
                {t.contactPhotos}
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleFilesChange}
                  className="mt-1 w-full border rounded-lg px-3 py-2 border-[var(--line)] bg-white"
                />
              </label>

              {files.length > 0 && (
                <div className="text-sm text-[var(--muted)]">
                  <div className="font-semibold mb-2">Vybrané fotografie:</div>
                  <ul className="space-y-1">
                    {files.map((f, idx) => (
                      <li
                        key={`${f.name}-${f.size}-${f.lastModified}`}
                        className="flex items-center justify-between gap-3"
                      >
                        <span className="truncate">{f.name}</span>
                        <button
                          type="button"
                          onClick={() => removeFile(idx)}
                          className="text-xs underline hover:opacity-80"
                        >
                          Odebrat
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <button
                type="submit"
                disabled={!canSend || sending}
                className={
                  "px-5 py-3 rounded-full font-bold border border-black/5 transition " +
                  "bg-[var(--sand)] text-[var(--text)] hover:brightness-95 " +
                  (!canSend || sending ? "opacity-50 cursor-not-allowed" : "")
                }
              >
                {sending ? "Odesílám…" : statusKind === "success" ? "Odesláno" : t.send}
              </button>

              {statusMsg && <p className="text-sm mt-2">{statusMsg}</p>}

              <p className="text-[var(--muted)] text-sm">{t.contactDemo}</p>
            </div>
          </form>

          {/* Firemní údaje – mobil */}
          <div className="order-3 md:hidden mt-0 space-y-6 text-sm">
            <div className="rounded-2xl border border-[var(--line)] bg-white p-6 soft-shadow">
              <div className="font-semibold text-base mb-2">Jana Segelberg</div>
              <div className="text-[var(--muted)] leading-relaxed">
                Navrátilova 1334/16
                <br />
                110 00 Praha 1
                <br />
                <br />
                IČO 61289345
                <br />
                DIČ CZ7259060062
              </div>
            </div>

            <div className="rounded-2xl border border-[var(--line)] bg-white p-6 soft-shadow">
              <div className="font-semibold text-base mb-2">Segelberg &amp; Co. s.r.o.</div>
              <div className="text-[var(--muted)] leading-relaxed">
                Sarajevská 1051/10
                <br />
                120 00 Praha 2
                <br />
                <br />
                IČO 08619263
                <br />
                DIČ CZ08619263
              </div>
            </div>
          </div>
        </div>
      </section>

      {showModal && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/40 px-4"
          onClick={() => setShowModal(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="w-full max-w-md rounded-2xl bg-white p-6 soft-shadow border border-[var(--line)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-lg font-semibold mb-2">
              {statusKind === "success" ? "Odesláno" : "Něco se nepovedlo"}
            </div>
            <p className="text-sm text-[var(--muted)]">
              {statusKind === "success"
                ? "Děkujeme! Ozveme se vám co nejdříve."
                : statusMsg}
            </p>

            <div className="pt-4 flex justify-end">
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold border border-[var(--line)] hover:bg-black/5 transition"
                onClick={() => setShowModal(false)}
              >
                Zavřít
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
function Terms({ t }) {
  useReveal();
  return (
    <section className="max-w-4xl mx-auto px-4 py-16 reveal">
      <h2 className="script text-4xl mb-6">{t.termsH}</h2>
      <p className="text-[var(--muted)] mb-4 text-sm">{t.termsIntro}</p>

      {(t.termsSections || []).map((s, i) => (
        <React.Fragment key={i}>
          <h3 className="font-semibold mt-4 mb-1 text-base">{s.h}</h3>
          <p className="text-[var(--muted)] text-sm mb-3">{s.p}</p>
        </React.Fragment>
      ))}
    </section>
  );
}

function Privacy({ t }) {
  useReveal();
  return (
    <section className="max-w-4xl mx-auto px-4 py-16 reveal">
      <h2 className="script text-4xl mb-6">{t.privacyH}</h2>
      <p className="text-[var(--muted)] text-sm mb-4">{t.privacyIntro}</p>

      {(t.privacySections || []).map((s, i) => (
        <React.Fragment key={i}>
          <h3 className="font-semibold mt-4 mb-1 text-base">{s.h}</h3>
          <p className="text-[var(--muted)] text-sm mb-3 whitespace-pre-line">{s.p}</p>
        </React.Fragment>
      ))}
    </section>
  );
}

function CookiesPage({ t }) {
  useReveal();
  return (
    <section className="max-w-4xl mx-auto px-4 py-16 reveal">
      <h2 className="script text-4xl mb-6">{t.cookiesH}</h2>
      {(t.cookiesP || []).map((p, i) => (
        <p key={i} className="text-[var(--muted)] text-sm mb-3">
          {p}
        </p>
      ))}
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
        return <Terms t={t} />;
      case "/privacy":
        return <Privacy t={t} />;
      case "/cookies":
        return <CookiesPage t={t} />;
      default:
        return <Home t={t} />;
    }
  }, [path, t]);

  return (
    <>
      <Header t={t} lang={lang} setLang={setLang} />

      <main className="pt-16">{Page}</main>

      <footer className="bg-[#222] text-[#ddd] mt-10 reveal">
        <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8">
          {/* BRAND */}
          <div className="footer-brand">
            <img
              src="assets/img/logo/Logo-symbol.svg"
              alt={`${t.brand2} – logo`}
              className="footer-logo"
              loading="lazy"
              decoding="async"
            />

            <div>
              <div className="script text-2xl text-white">{t.brand2}</div>
              <div className="text-sm text-[#bdbdbd]">{t.brand1}</div>

              <p className="text-sm text-[#bdbdbd] mt-4 leading-relaxed whitespace-pre-line">
                {t.footerBlurb}
              </p>
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <div className="text-white font-semibold mb-3">{t.footerContactH}</div>

            <div className="text-sm text-[#bdbdbd] space-y-2">
              <div>
                {t.email}:{" "}
                <a className="underline hover:text-white" href="mailto:hello@janasegelberg.com">
                 info@stinenisesenci.cz
                </a>
              </div>

              <div>
                {t.contactPhone}:{" "}
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
                  {t.footerCta}
                </button>
              </div>
            </div>
          </div>

          {/* LEGAL */}
          <div>
            <div className="text-white font-semibold mb-3">{t.footerLegalH}</div>

            <div className="text-sm text-[#bdbdbd] space-y-2">
              <div>
                <button type="button" onClick={() => go("/terms")} className="underline hover:text-white">
                  {t.footerTerms}
                </button>
              </div>

              <div>
                <button type="button" onClick={() => go("/privacy")} className="underline hover:text-white">
                  {t.footerPrivacy}
                </button>
              </div>

              <div>
                <button type="button" onClick={() => go("/cookies")} className="underline hover:text-white">
                  {t.footerCookies}
                </button>
              </div>

              <div className="pt-3 text-xs text-[#9a9a9a]">{t.rights}</div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#333]">
          <div className="max-w-6xl mx-auto px-4 py-4 text-xs text-[#9a9a9a] flex flex-col md:flex-row gap-2 md:items-center md:justify-between">
            <div>
              © {new Date().getFullYear()} {t.brand2} — {t.brand1}
            </div>
          </div>
        </div>
      </footer>

      {/* LIGHTBOX */}
      <div id="lb" className="lb" onClick={closeLightbox} aria-hidden="true">
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
  console.error('Missing <div id="root"></div> in index.html');
} else {
  const root = ReactDOM.createRoot(rootEl);
  root.render(<App />);
}





