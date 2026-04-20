const { useEffect, useMemo, useState } = React;
const STR = window.STR || { cs: {}, en: {} };

const NAV_ROUTES = [
  { key: "process", path: "/process" },
  { key: "pricing", path: "/pricing" },
  { key: "gallery", path: "/gallery" },
  { key: "essence", path: "/essence" },
  { key: "contact", path: "/contact" },
];

const HERO_IMAGES = [
  "assets/img/hero/hero-01.webp",
  "assets/img/hero/hero-02.webp",
  "assets/img/hero/hero-03.webp",
];

const HOME_SERVICE_IMAGES = [
  "assets/img/pricing/pricing-01.webp",
  "assets/img/pricing/pricing-02.webp",
  "assets/img/pricing/roleta-rimska.webp",
  "assets/img/pricing/systemy-kolejnice.webp",
  "assets/img/pricing/pricing-05.webp",
];

const ATMOS_IMAGES = [
  "assets/img/atmosfera/atmosfera-01.webp",
  "assets/img/atmosfera/atmosfera-02.webp",
  "assets/img/atmosfera/atmosfera-03.webp",
];

const OUR_WORK = [
  "assets/img/gallery/our-work/ourwork-01.webp","assets/img/gallery/our-work/ourwork-02.webp","assets/img/gallery/our-work/ourwork-03-02.webp","assets/img/gallery/our-work/ourwork-04.webp","assets/img/gallery/our-work/ourwork-05.webp","assets/img/gallery/our-work/ourwork-06.webp","assets/img/gallery/our-work/ourwork-07.webp","assets/img/gallery/our-work/ourwork-08.webp","assets/img/gallery/our-work/ourwork-09.webp","assets/img/gallery/our-work/ourwork-10.webp","assets/img/gallery/our-work/ourwork-11.webp","assets/img/gallery/our-work/ourwork-12.webp","assets/img/gallery/our-work/ourwork-13.webp","assets/img/gallery/our-work/ourwork-14.webp","assets/img/gallery/our-work/ourwork-15.webp","assets/img/gallery/our-work/ourwork-16.webp","assets/img/gallery/our-work/ourwork-17.webp","assets/img/gallery/our-work/ourwork-18.webp","assets/img/gallery/our-work/ourwork-19.webp","assets/img/gallery/our-work/ourwork-20.webp","assets/img/gallery/our-work/ourwork-21.webp","assets/img/gallery/our-work/ourwork-22.webp","assets/img/gallery/our-work/ourwork-23.webp","assets/img/gallery/our-work/ourwork-24.webp","assets/img/gallery/our-work/ourwork-25.webp","assets/img/gallery/our-work/ourwork-26.webp","assets/img/gallery/our-work/ourwork-27.webp","assets/img/gallery/our-work/ourwork-28.webp","assets/img/gallery/our-work/ourwork-29.webp","assets/img/gallery/our-work/ourwork-30.webp","assets/img/gallery/our-work/ourwork-31.webp","assets/img/gallery/our-work/ourwork-32.webp","assets/img/gallery/our-work/ourwork-33.webp","assets/img/gallery/our-work/ourwork-34-2.webp","assets/img/gallery/our-work/ourwork-35.webp","assets/img/gallery/our-work/ourwork-36.webp","assets/img/gallery/our-work/ourwork-37.webp","assets/img/gallery/our-work/ourwork-38.webp","assets/img/gallery/our-work/ourwork-39.webp","assets/img/gallery/our-work/ourwork-40.webp","assets/img/gallery/our-work/ourwork-41.webp","assets/img/gallery/our-work/ourwork-42.webp","assets/img/gallery/our-work/ourwork-43.webp","assets/img/gallery/our-work/ourwork-44.webp","assets/img/gallery/our-work/ourwork-45.webp","assets/img/gallery/our-work/ourwork-46.webp","assets/img/gallery/our-work/ourwork-47.webp","assets/img/gallery/our-work/ourwork-48.webp","assets/img/gallery/our-work/ourwork-49.webp","assets/img/gallery/our-work/ourwork-50.webp","assets/img/gallery/our-work/ourwork-51.webp","assets/img/gallery/our-work/ourwork-52.webp","assets/img/gallery/our-work/ourwork-53.webp","assets/img/gallery/our-work/ourwork-54.webp","assets/img/gallery/our-work/ourwork-55.webp","assets/img/gallery/our-work/ourwork-56.webp","assets/img/gallery/our-work/ourwork-57.webp","assets/img/gallery/our-work/ourwork-58-2.webp","assets/img/gallery/our-work/ourwork-59-3.webp","assets/img/gallery/our-work/ourwork-60-3.webp","assets/img/gallery/our-work/ourwork-61.webp","assets/img/gallery/our-work/ourwork-62.webp","assets/img/gallery/our-work/ourwork-63.webp","assets/img/gallery/our-work/ourwork-64-3.webp","assets/img/gallery/our-work/ourwork-65.webp","assets/img/gallery/our-work/ourwork-66.webp","assets/img/gallery/our-work/ourwork-67.webp","assets/img/gallery/our-work/ourwork-68.webp","assets/img/gallery/our-work/ourwork-69.webp","assets/img/gallery/our-work/ourwork-70.webp","assets/img/gallery/our-work/ourwork-71.webp","assets/img/gallery/our-work/ourwork-72-2.webp","assets/img/gallery/our-work/ourwork-73.webp","assets/img/gallery/our-work/ourwork-74.webp","assets/img/gallery/our-work/ourwork-75.webp","assets/img/gallery/our-work/ourwork-76.webp","assets/img/gallery/our-work/ourwork-77.webp","assets/img/gallery/our-work/ourwork-78.webp","assets/img/gallery/our-work/ourwork-79.webp","assets/img/gallery/our-work/ourwork-80.webp","assets/img/gallery/our-work/ourwork-81.webp","assets/img/gallery/our-work/ourwork-82.webp","assets/img/gallery/our-work/ourwork-83.webp","assets/img/gallery/our-work/ourwork-84.webp","assets/img/gallery/our-work/ourwork-85.webp","assets/img/gallery/our-work/ourwork-86.webp","assets/img/gallery/our-work/ourwork-87.webp"
];

const PARTNERS = [
  {
    key: "onoje",
    name: "ono.je",
    url: "https://www.ono.je",
    images: [
      "assets/img/gallery/partners/onoje/ono-je-01.webp",
      "assets/img/gallery/partners/onoje/ono-je-02.webp",
      "assets/img/gallery/partners/onoje/ono-je-03.webp",
    ],
  },
  {
    key: "richter",
    name: "RichterDesign",
    url: "https://www.richterdesign.cz",
    images: [
      "assets/img/gallery/partners/richter/richter-01.webp",
      "assets/img/gallery/partners/richter/richter-02.webp",
      "assets/img/gallery/partners/richter/richter-03.webp",
    ],
  },
  {
    key: "epic",
    name: "Epic Interior Studio",
    url: "https://www.epicinteriorstudio.cz/",
    images: [
      "assets/img/gallery/partners/epic-interior-studio/epic-01.webp",
      "assets/img/gallery/partners/epic-interior-studio/epic-02.webp",
      "assets/img/gallery/partners/epic-interior-studio/epic-03.webp",
    ],
  },
  {
    key: "broda",
    name: "Broda interiér",
    url: "https://brodainterier.cz/",
    images: [
      "assets/img/gallery/partners/broda/broda-01.webp",
      "assets/img/gallery/partners/broda/broda-02.webp",
      "assets/img/gallery/partners/broda/broda-03.webp",
    ],
  },
];

const CONTACT_WEBHOOK = "https://hook.eu1.make.com/o1lk627xrpjl8d6exq9sh5yrplr58sw8";

function normalizePath(path) {
  const cleaned = String(path || "/")
    .replace(/^#/, "")
    .split("?")[0]
    .split("&")[0]
    .replace(/\/+$/, "");

  return cleaned && cleaned.startsWith("/") ? cleaned : "/";
}

function getInitialPath() {
  return normalizePath(window.location.hash.replace(/^#/, "") || "/");
}

function buildHashUrl(path) {
  const target = normalizePath(path);
  const { pathname, search } = window.location;
  return `${pathname}${search}#${target}`;
}

function go(path, options = {}) {
  const target = normalizePath(path);
  const current = getInitialPath();
  const force = !!options.force;
  const native = !!options.native;
  const nextHash = `#${target}`;

  if (current === target) {
    window.scrollTo({ top: 0, behavior: force ? "auto" : "smooth" });

    if (!force) return;

    if (window.location.hash !== nextHash) {
      window.location.hash = nextHash;
    } else {
      window.dispatchEvent(new Event("hashchange"));
    }

    return;
  }

  if (native) {
    window.location.href = buildHashUrl(target);
    return;
  }

  window.location.hash = nextHash;

  requestAnimationFrame(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  });
}

function useRoute() {
  const [route, setRoute] = useState(getInitialPath());

useEffect(() => {
  const onHash = () => {
    setRoute(getInitialPath());

    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: "auto" });
    });
  };

  window.addEventListener("hashchange", onHash);
  return () => window.removeEventListener("hashchange", onHash);
}, []);
  return route;
}

function useLang() {
  const [lang, setLang] = useState(localStorage.getItem("lang") || "cs");
  useEffect(() => {
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);
  return { lang, setLang, t: STR[lang] || STR.cs };
}

function useReveal(route, lang) {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll(".reveal"));

    nodes.forEach((n) => n.classList.remove("visible"));

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    nodes.forEach((n) => obs.observe(n));

    requestAnimationFrame(() => {
      nodes.forEach((n) => {
        const rect = n.getBoundingClientRect();
        const vh = window.innerHeight || document.documentElement.clientHeight;
        if (rect.top < vh * 0.92) {
          n.classList.add("visible");
        }
      });
    });

    return () => obs.disconnect();
  }, [route, lang]);
}

function useIsMobile(breakpoint = 820) {
  const getValue = () =>
    typeof window !== "undefined" ? window.innerWidth <= breakpoint : false;

  const [isMobile, setIsMobile] = useState(getValue);

  useEffect(() => {
    const onResize = () => setIsMobile(getValue());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [breakpoint]);

  return isMobile;
}

function MobileScrollHint({ t, label }) {
  return (
    <div className="mobile-scroll-hint" aria-hidden="true">
      <span>{label || t.mobileSwipeHint}</span>
      <i />
    </div>
  );
}

function Header({ t, lang, setLang, route, menuOpen, setMenuOpen }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLabels = t.nav || [];

  return (
    <>
      <header className={`site-header ${isScrolled ? "scrolled" : ""}`}>
        <div className="shell site-header-inner">
          <a
            href={buildHashUrl("/")}
            className="brand"
            aria-label={t.a11yHome}
            onClick={(e) => {
              e.preventDefault();
              setMenuOpen(false);
              go("/", { force: true, native: true });
            }}
            onTouchEnd={(e) => {
              e.preventDefault();
              setMenuOpen(false);
              go("/", { force: true, native: true });
            }}
          >
            <img src="assets/img/logo/Logo-symbol.svg" alt="Logo" />
            <span className="brand-text">
              <small>{t.brand1}</small>
              <strong>{t.brand2}</strong>
            </span>
          </a>

          <nav className="header-nav" aria-label={t.a11yMainNav}>
            {NAV_ROUTES.map((item, index) => (
              <button
                key={item.path}
                className={`header-link ${route === item.path ? "active" : ""}`}
                onClick={() => go(item.path)}
              >
                {navLabels[index] || item.key}
              </button>
            ))}
          </nav>

          <div className="header-actions">
            <div className="lang-switch" aria-label={t.a11yLangSwitcher}>
              <button className={lang === "cs" ? "active" : ""} onClick={() => setLang("cs")}>CZ</button>
              <button className={lang === "en" ? "active" : ""} onClick={() => setLang("en")}>EN</button>
            </div>
            <button className="button button-primary" onClick={() => go("/contact")}>{t.cta}</button>
            <button
              className={`icon-button ${menuOpen ? "open" : ""}`}
              onClick={() => setMenuOpen((s) => !s)}
              aria-label={t.a11yMenu}
            >
              <span />
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-drawer ${menuOpen ? "open" : ""}`}>
        <nav>
          {NAV_ROUTES.map((item, index) => (
            <button
              key={item.path}
              className="header-link"
              onClick={() => {
                setMenuOpen(false);
                go(item.path);
              }}
            >
              {navLabels[index] || item.key}
            </button>
          ))}
        </nav>
        <button className="button button-primary" onClick={() => { setMenuOpen(false); go("/contact"); }}>
          {t.cta}
        </button>
      </div>
    </>
  );
}

function Hero({ t, title, lead, image, small = false }) {
  const [active, setActive] = useState(0);
  const isEn = (document.documentElement.lang || "cs") === "en";
  const isMobile = useIsMobile(820);

  useEffect(() => {
    if (small) return;
    const id = window.setInterval(() => setActive((v) => (v + 1) % HERO_IMAGES.length), 5200);
    return () => window.clearInterval(id);
  }, [small]);

  const slides = small ? [image] : HERO_IMAGES;
  const heroTitle = small
    ? title
    : (isMobile ? (t.heroTitleMobile || (t.heroSlides && t.heroSlides[0] && t.heroSlides[0].h1)) : (t.heroSlides && t.heroSlides[0] && t.heroSlides[0].h1));
  const heroLead = small
    ? lead
    : (isMobile
        ? (t.heroLeadMobile || t.heroLead || (Array.isArray(t.homeAbout) ? t.homeAbout[0] : t.homeAbout))
        : (t.heroLead || (Array.isArray(t.homeAbout) ? t.homeAbout[0] : t.homeAbout)));

  return (
    <section className={`hero ${small ? "small" : ""}`}>
      <div className="hero-slides">
        {slides.map((src, index) => (
          <div
            key={src}
            className={`hero-slide ${index === (small ? 0 : active) ? "active" : ""}`}
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
      </div>
      <div className="hero-overlay" />
      <div className="hero-vignette" />
      <div className="shell hero-content">
        {small ? (
          <div className="page-hero-copy reveal visible">
            <div className="hero-kicker">{t.heroKickerSmall}</div>
            <span className="script">{(isMobile ? (t.heroScriptMobile || t.heroScript || t.brand2) : (t.heroScript || t.brand2))}</span>
            <h1 className="display h2">{title}</h1>
            {lead && <p className="lead">{lead}</p>}
          </div>
        ) : (
          <div className="hero-grid">
            <div className="hero-copy reveal visible">
              <div className="hero-kicker">{t.heroKicker}</div>
            <span className="script">{t.heroScript || t.brand2}</span>
              <h1 className="display h1">{heroTitle}</h1>
              {heroLead ? <p className="lead">{heroLead}</p> : null}
              <div className="hero-actions">
                <button className="button button-primary" onClick={() => go("/contact")}>{t.cta}</button>
                <a
                  href={buildHashUrl("/gallery")}
                  className="button button-ghost"
                  onClick={(e) => {
                    e.preventDefault();
                    go("/gallery", { force: true, native: true });
                  }}
                  onTouchEnd={(e) => {
                    e.preventDefault();
                    go("/gallery", { force: true, native: true });
                  }}
                >
                  {t.galleryH}
                </a>
              </div>
            </div>
            {!isMobile && (
              <div className="hero-panel reveal visible">
                <strong>{t.heroSub}</strong>
                <span className="script">{t.heroPanelTitle}</span>
                <p>
                  {t.heroPanelText}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

function TrustBand({ t }) {
  const isMobile = useIsMobile(820);
  if (isMobile) return null;

  return (
    <div className="trust-band">
      <div className="shell trust-grid">
        {(t.homeTrust || []).map((item) => (
          <div className="trust-card reveal" key={item.label + item.value}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
            <small>{item.detail || item.label}</small>
          </div>
        ))}
      </div>
    </div>
  );
}

function Home({ t }) {
  const isEn = (document.documentElement.lang || "cs") === "en";
  const isMobile = useIsMobile(820);

  const featuredWorks = [
    { src: OUR_WORK[0], cols: "span 2" },
    { src: OUR_WORK[1], cols: "span 4" },
    { src: OUR_WORK[5], cols: "span 2" },
    { src: OUR_WORK[2], cols: "span 3" },
    { src: OUR_WORK[3], cols: "span 3" },
    { src: OUR_WORK[4], cols: "span 2" },
  ];

  const mobileFeaturedWorks = featuredWorks.slice(0, 4);

  const aboutMainBase =
    Array.isArray(t.homeAbout) ? t.homeAbout[0] : t.homeAbout;

  const aboutHeading = isMobile ? (t.homeAboutHMobile || t.homeAboutH) : t.homeAboutH;
  const aboutMain = isMobile ? (t.homeAboutMobile || aboutMainBase) : aboutMainBase;
  const aboutExtra = isMobile
    ? ""
    : t.homeAboutExtra;
  const featureNoteTitle = isMobile ? (t.featureNoteTitleMobile || t.featureNoteTitle) : t.featureNoteTitle;
  const featureNoteText = isMobile ? (t.featureNoteTextMobile || t.featureNoteText) : t.featureNoteText;

  const atmosLead = isMobile ? (t.inspLeadMobile || t.inspLead) : t.inspLead;
  const servicesLead = isMobile ? (t.homeServicesLeadMobile ?? t.homeServicesLead) : t.homeServicesLead;
  const benefitsLead = isMobile ? (t.homeLuxuryLeadMobile ?? t.homeLuxuryLead) : t.homeLuxuryLead;
  const projectsLead = isMobile ? (t.homeProjectsLeadMobile ?? "") : t.homeCtaLocation;
  const finalCtaNote = isMobile ? t.homeFinalCtaLocation : t.homeCtaNote;

  const benefitsToShow = isMobile ? (t.benefits || []).slice(0, 3) : (t.benefits || []);
  const faqToShow = isMobile ? (t.faq || []).slice(0, 3) : (t.faq || []);
  const worksToShow = isMobile ? mobileFeaturedWorks : featuredWorks;

  return (
    <>
      <Hero t={t} />
      <TrustBand t={t} />

      <section className="section home-feature">
        <div className="shell grid-2 feature-split">
          <div className="feature-media reveal">
            <img
              src="assets/img/Onas/onas-01.webp"
              alt={t.featureImageAlt}
            />
            <div className="feature-note">
              <span className="script">
                {featureNoteTitle}
              </span>
              <div>
                {featureNoteText}
              </div>
            </div>
          </div>

          <div className="feature-copy reveal">
            <h2 className="display h2">{aboutHeading}</h2>

            <p className="copy home-about-main">{aboutMain}</p>

            {!!aboutExtra && (
              <p className="copy home-about-extra">{aboutExtra}</p>
            )}

            <div
              className="home-feature-actions"
              style={{ marginTop: 24, display: "flex", gap: 14, flexWrap: "wrap" }}
            >
              <button className="button button-primary" onClick={() => go("/process")}>
                {t.processH}
              </button>
              <button className="button button-secondary" onClick={() => go("/pricing")}>
                {t.priceH}
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-tight home-services">
        <div className="shell">
          <div className="section-header reveal">
            <h2 className="display h2">
              {t.homeServicesTitle}
            </h2>
            {servicesLead ? (
              <p className="lead">
                {servicesLead}
              </p>
            ) : null}
          </div>

          {isMobile && <MobileScrollHint t={t} label={t.mobileSwipeHintServices} />}

          <div className="grid-3 home-services-grid">
            {(t.services || []).map((service, index) => (
              <article
                className="card service-card reveal"
                key={service.name}
                onClick={() => {
                  localStorage.setItem("openPricingIndex", String(index));
                  go("/pricing");
                }}
                style={{ cursor: "pointer" }}
              >
                <div className="service-card-top">
                  <h3>{service.name}</h3>
                  <p>{service.note}</p>
                </div>

                <div className="service-card-media">
                  <img
                    src={HOME_SERVICE_IMAGES[index] || HOME_SERVICE_IMAGES[0]}
                    alt={service.name}
                  />
                </div>

                <div className="service-card-foot">{t.serviceCardCta}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tight home-atmos">
        <div className="shell">
          <div className="section-header reveal">
            <h2 className="display h2">
              {t.homeAtmosTitle}
            </h2>
            <p className="lead">{atmosLead}</p>
          </div>

          <div className="atmos-grid home-atmos-grid">
            {ATMOS_IMAGES.map((src, index) => (
              <figure className="atmos-card reveal" key={src}>
                <img
                  src={src}
                  alt={isEn ? `Interior atmosphere ${index + 1}` : `Atmosféra interiéru ${index + 1}`}
                />
                <figcaption>{(t.inspTags || [])[index]}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tight home-benefits">
        <div className="shell">
          <div className="section-header reveal">
            <h2 className="display h2">
              {t.homeLuxuryTitle}
            </h2>
            {benefitsLead ? <p className="lead">{benefitsLead}</p> : null}
          </div>

          {isMobile && <MobileScrollHint t={t} label={t.mobileSwipeHintBenefits} />}

          <div className="grid-3 home-benefits-grid">
            {benefitsToShow.map((item) => (
              <article
                className="card benefit-card reveal"
                key={item.name}
                onClick={() => {
                  localStorage.setItem("openProcessSection", "behind");
                  go("/process");
                }}
                style={{ cursor: "pointer" }}
              >
                <div className="script">{t.benefitDetailLabel}</div>
                <h3>{item.name}</h3>
                <p>{item.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tight home-projects">
        <div className="shell">
          <div className="section-header reveal">
            <h2 className="display h2">
              {t.homeProjectsTitle}
            </h2>
            {projectsLead ? <p className="lead">{projectsLead}</p> : null}
          </div>

          {isMobile && <MobileScrollHint t={t} label={t.mobileSwipeHintProjects} />}

          <div className="gallery-grid-home home-projects-grid reveal">
            {worksToShow.map((item, index) => (
              <button
                type="button"
                key={item.src}
                className="gallery-item-home"
                style={isMobile ? undefined : { gridColumn: item.cols }}
                onClick={() => openGalleryLightbox(index, worksToShow.map((w) => w.src))}
              >
                <img
                  src={item.src}
                  alt={isEn ? `Project ${index + 1}` : `Realizace ${index + 1}`}
                />
              </button>
            ))}
          </div>

          <div style={{ marginTop: 24 }} className="reveal home-projects-cta">
            <a
              href={buildHashUrl("/gallery")}
              className="button button-secondary"
              onClick={(e) => {
                e.preventDefault();
                go("/gallery", { force: true, native: true });
              }}
              onTouchEnd={(e) => {
                e.preventDefault();
                go("/gallery", { force: true, native: true });
              }}
            >
              {t.galleryShowAll}
            </a>
          </div>
        </div>
      </section>

      <section className="section section-tight home-faq">
        <div className="shell">
          <div className="section-header reveal">
            <h2 className="display h2">
              {t.homeFaqTitle}
            </h2>
          </div>
          <Faq items={faqToShow} />
        </div>
      </section>

      <section className="section home-final-cta">
        <div className="shell accent-surface card card-inner reveal">
          <h2 className="display h2">
            {t.homeFinalCtaTitle}
          </h2>
          <p className="lead">{finalCtaNote}</p>
          <div
            className="home-final-cta-actions"
            style={{ marginTop: 28, display: "flex", gap: 14, flexWrap: "wrap" }}
          >
            <button className="button button-primary" onClick={() => go("/contact")}>
              {t.cta}
            </button>
            <button className="button button-secondary" onClick={() => go("/process")}>
              {t.processH}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

function Process({ t }) {
  const isEn = (document.documentElement.lang || "cs") === "en";
  const isMobile = useIsMobile(820);
  const [openStep, setOpenStep] = React.useState(null);

  React.useEffect(() => {
    const target = localStorage.getItem("openProcessSection");
    if (target !== "behind") return;

    requestAnimationFrame(() => {
      const el = document.getElementById("process-behind");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });

    localStorage.removeItem("openProcessSection");
  }, []);

  return (
    <>
      <Hero
        t={t}
        small
        image="assets/img/hero/process-hero-v2.webp"
        title={t.processH}
        lead={
          (isMobile ? t.processLeadMobile : t.processLead) ||
          (isEn
            ? "From the first measurement to final styling. Every step has its own pace and reason."
            : "Od prvního zaměření po finální dekorování. Každý krok má svůj důvod.")
        }
      />

      <section className="section process-mobile-compact">
        <div className="shell steps">
          {(t.steps || []).map((step, index) => {
            const stepText = (t.stepsTxt || [])[index];
            const lines = Array.isArray(stepText)
              ? stepText
              : typeof stepText === "string"
              ? [stepText]
              : [];

            const preview = lines[0] || "";
            const rest = lines.slice(1);
            const isOpen = openStep === index;

            return (
              <article
                className={`card step-card reveal ${index % 2 === 1 ? "reverse" : ""} ${isOpen ? "is-open" : ""}`}
                key={step}
              >
                <div className="step-media">
                  <img src={(t.processImgs || [])[index]} alt={step} />
                </div>

                <div className="step-content">
                  <div className="step-index">0{index + 1} / 04</div>
                  <h3>{step}</h3>

                  <div className="script">
                    {(t.processBridges || [])[index] || (t.processMicroByStep || [])[index]}
                  </div>

                  {preview && <p>{preview}</p>}

                  {rest.length > 0 && (
                    <>
                      <div className={`step-extra ${isOpen ? "open" : ""}`}>
                        {rest.map((line, i) => (
                          <p key={i}>{line}</p>
                        ))}
                      </div>

                      <button
                        type="button"
                        className="step-toggle"
                        onClick={() => setOpenStep(isOpen ? null : index)}
                      >
                        {isOpen
                          ? t.processHideDetail : t.processShowDetail}
                      </button>
                    </>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section section-tight" id="process-behind">
        <div className="shell">
          {isMobile && <MobileScrollHint t={t} label={t.mobileSwipeHintProcess} />}

          <div className="process-cards process-cards-mobile-swipe">
            {(t.processBehindCards || []).map((card) => (
              <article className="card process-card reveal" key={card.id}>
                <h3>{card.title}</h3>

                {card.text ? (
                  <p>{card.text}</p>
                ) : (
                  <>
                    {card.p1 && <p>{card.p1}</p>}
                    {card.p2 && <p>{card.p2}</p>}
                    {card.p3 && <p>{card.p3}</p>}
                  </>
                )}
              </article>
            ))}
          </div>

          <div className="quote-panel process-quote-panel reveal" style={{ marginTop: 22 }}>
            <div>
              <span className="script">
                {t.processQuoteTitle}
              </span>

              <p>{t.processEnding}</p>

              {t.processCTAHelper && <p className="cta-helper">{t.processCTAHelper}</p>}
            </div>

            <button className="button button-ghost" onClick={() => go("/contact")}>
              {t.writeMe}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
function Pricing({ t, openPricing }) {
  const isEn = (document.documentElement.lang || "cs") === "en";
  const isMobile = useIsMobile(820);

  React.useEffect(() => {
    const items = t.pricingItems || [];

    const pendingIndexRaw = localStorage.getItem("openPricingIndex");
    const pendingKey = localStorage.getItem("openPricingKey");

    let targetItem = null;

    if (pendingIndexRaw !== null) {
      const pendingIndex = Number(pendingIndexRaw);
      if (!Number.isNaN(pendingIndex) && items[pendingIndex]) {
        targetItem = items[pendingIndex];
      }
    }

    if (!targetItem && pendingKey) {
      targetItem = items.find((item) => item.key === pendingKey) || null;
    }

    if (targetItem) {
      requestAnimationFrame(() => {
        openPricing(targetItem);
      });
    }

    localStorage.removeItem("openPricingIndex");
    localStorage.removeItem("openPricingKey");
  }, [t, openPricing]);

  return (
    <>
      <Hero
        t={t}
        small
        image="assets/img/hero/pricing-hero.webp"
        title={t.priceH}
        lead={isMobile ? (t.pricingLeadMobile || t.pricingLead) : t.pricingLead}
      />

      <section className="section">
        <div className="shell">
          <div className="section-header reveal">
            <h2 className="display h2">
              {t.pricingSectionTitle}
            </h2>
            <p className="lead">{(isMobile ? (t.pricingIntroMobile || (t.pricingIntro || []).slice(0, 2)) : (t.pricingIntro || [])).join(" ")}</p>
          </div>

          <div className="pricing-grid">
            {(t.pricingItems || []).map((item) => (
              <article
                id={item.key}
                className="card price-card reveal"
                key={item.key}
              >
                <div
                  className="price-media"
                  style={{ cursor: "pointer" }}
                  onClick={() => openPricing(item)}
                >
                  <img src={item.img} alt={item.title} />
                </div>

                <div className="price-body">
                  <div className="price-topline">{item.micro}</div>

                  <div className="price-title">
                    <h3>{item.title}</h3>
                    <span className="script">{item.vibe}</span>
                  </div>

                  <p>{item.intro}</p>

                  <div className="price-actions">
                    <button
                      className="button button-secondary"
                      onClick={() => openPricing(item)}
                    >
                      {t.pricingOpenButton}
                    </button>

                    <button
                      className="button button-primary"
                      onClick={() => go("/contact")}
                    >
                      {t.writeMe}
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="card card-inner reveal" style={{ marginTop: 22 }}>
            <p className="lead">{isMobile ? (t.pricingDisclaimerMobile || t.pricingDisclaimer) : t.pricingDisclaimer}</p>
          </div>
        </div>
      </section>
    </>
  );
}

function Gallery({ t }) {
  const isEn = (document.documentElement.lang || "cs") === "en";
  const isMobile = useIsMobile(820);
  const [ratios, setRatios] = React.useState({});
  const [perRow, setPerRow] = React.useState(
    typeof window !== "undefined" && window.innerWidth <= 768 ? 2 : 3
  );

  React.useEffect(() => {
    const onResize = () => {
      setPerRow(window.innerWidth <= 768 ? 2 : 3);
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const chunk = (arr, size) => {
    const out = [];
    for (let i = 0; i < arr.length; i += size) {
      out.push(arr.slice(i, i + size));
    }
    return out;
  };

  return (
    <>
      <Hero
        t={t}
        small
        image="assets/img/hero/gallery-hero.webp"
        title={t.galleryH}
        lead={isMobile ? (t.galleryLeadMobile || t.galleryLead) : t.galleryLead}
      />

      <section className="section section-tight">
        <div className="shell">
          <div className="section-header reveal visible">
            <h2 className="display h2">
              {t.gallerySectionTitle}
            </h2>
            <p className="lead">
              {isMobile ? (t.gallerySectionLeadMobile || t.gallerySectionLead) : t.gallerySectionLead}
            </p>
          </div>

          <div className="ow-rows reveal visible">
            {chunk(OUR_WORK, perRow).map((row, rIdx) => (
              <div className="ow-row-page" key={rIdx}>
                {row.map((src, i) => {
                  const absoluteIndex = rIdx * perRow + i;
                  const grow = ratios[absoluteIndex] || 1.6;

                  return (
                    <button
                      type="button"
                      key={src}
                      className="ow-card-page"
                      style={{ flexGrow: grow }}
                      onClick={() => openGalleryLightbox(absoluteIndex, OUR_WORK)}
                    >
                     <img
  src={src}
  alt={isEn ? `Project ${absoluteIndex + 1}` : `Realizace ${absoluteIndex + 1}`}
  className="ow-img-page"
  loading={isMobile ? (absoluteIndex < 18 ? "eager" : "lazy") : (absoluteIndex < 6 ? "eager" : "lazy")}
  fetchPriority={absoluteIndex < (isMobile ? 6 : 3) ? "high" : "auto"}
  decoding="async"
  onLoad={(e) => {
    const img = e.currentTarget;
    const w = img.naturalWidth || 1;
    const h = img.naturalHeight || 1;
    const ratio = Math.max(0.7, Math.min(3.2, w / h));

    setRatios((prev) =>
      prev[absoluteIndex]
        ? prev
        : { ...prev, [absoluteIndex]: ratio }
    );
  }}
/>
                    </button>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="section-header reveal visible">
            <h2 className="display h2">{t.galleryPartnersH || (isEn ? "We work with architects and designers" : "Spolupráce s architekty a designéry")}</h2>
            <p className="lead">{t.galleryPartnersP}</p>
          </div>

          <div className="partner-grid">
            {PARTNERS.map((partner) => (
              <article className="card partner-card reveal visible" key={partner.key}>
                <h3>{partner.name}</h3>
                <p>{(t.galleryPartnersNotes || {})[partner.key]}</p>

                <div className="partner-photos">
                  {partner.images.map((src, idx) => (
                    <img
                      src={src}
                      alt={`${partner.name} ${idx + 1}`}
                      key={src}
                    />
                  ))}
                </div>

                <a
                  className="partner-link"
                  href={partner.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {t.galleryVisitWeb}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Essence({ t }) {
  const isMobile = useIsMobile(820);
  return (
    <>
      <Hero t={t} small image="assets/img/hero/essence-hero.webp" title={t.essenceH} lead={isMobile ? (t.essenceLeadMobile || t.essenceLead) : t.essenceLead} />
      <section className="section">
        <div className="shell">
          <div className="essence-box reveal">
            <h2 className="display h2">{t.essenceBoxH}</h2>
            <div className="script">{t.essenceBoxFoot}</div>
            <p>{t.essenceBoxP}</p>
          </div>
        </div>
      </section>
    </>
  );
}

function Contact({ t }) {
  const isMobile = useIsMobile(820);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [files, setFiles] = useState([]);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState({ kind: "", text: "" });
  const [touched, setTouched] = useState(false);

  const nameOk = form.name.trim().length >= 2;
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim());
  const phoneOk = form.phone.trim().length >= 6;
  const messageOk = form.message.trim().length >= 5;
  const canSend = nameOk && emailOk && phoneOk && messageOk;

  function handleFilesChange(e) {
    setFiles(Array.from(e.target.files || []).slice(0, 5));
  }

  function getUploadText() {
    if (files.length === 0) return t.uploadEmpty;
    if (files.length === 1) return `1 ${t.uploadSelected}`;
    if (files.length >= 2 && files.length <= 4) return `${files.length} ${t.uploadSelectedFew}`;
    return `${files.length} ${t.uploadSelectedMany}`;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setTouched(true);
    setStatus({ kind: "", text: "" });

    const name = form.name.trim();
    const email = form.email.trim();
    const phone = form.phone.trim();
    const message = form.message.trim();

    const validName = name.length >= 2;
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const validPhone = phone.length >= 6;
    const validMessage = message.length >= 5;

    if (!validName || !validEmail || !validPhone || !validMessage || sending) {
      setStatus({
        kind: "error",
        text: t.contactError || "Odeslání se nepodařilo. Zkontrolujte formulář a zkuste to znovu.",
      });
      return;
    }

    setSending(true);

    try {
      const fd = new FormData();
      fd.append("name", name);
      fd.append("email", email);
      fd.append("phone", phone);
      fd.append("message", message);
      fd.append("filesCount", String(files.length));
      files.forEach((file) => fd.append("files", file, file.name));

      await fetch(CONTACT_WEBHOOK, {
        method: "POST",
        body: fd,
        mode: "no-cors",
      });

      setForm({ name: "", email: "", phone: "", message: "" });
      setFiles([]);
      setTouched(false);
      setStatus({
        kind: "success",
        text: t.contactSuccess,
      });
    } catch (err) {
      setStatus({
        kind: "error",
        text: t.contactError,
      });
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      <Hero
        t={t}
        small
        image="assets/img/hero/contact-hero01.webp"
        title={t.contactH}
        lead={isMobile ? (t.contactLeadMobile || t.contactLead) : t.contactLead}
      />

      <section className="section contact-section">
        <div className="shell contact-grid">
          <div className="reveal contact-sidebar">
            <article className="card contact-card" style={{ marginBottom: 20 }}>
              <h3>Jana Segelberg</h3>

              <div className="contact-list">
                <div>
                  <strong>{t.contactEmail}</strong>
                  <a href="mailto:info@stinenisesenci.cz">info@stinenisesenci.cz</a>
                </div>

                <div>
                  <strong>{t.contactPhone}</strong>
                  <a href="tel:+420724379309">+420 724 379 309</a>
                </div>

                <div>
                  <strong>{t.contactAddressLabel}</strong>
                  <p>
                    Navrátilova 1334/16
                    <br />
                    110 00 Praha 1
                  </p>
                </div>

                <div>
                  <strong>IČO / DIČ</strong>
                  <p>
                    61289345
                    <br />
                    CZ7259060062
                  </p>
                </div>
              </div>

              <div className="contact-steps">
                <strong>{t.contactHowH}</strong>
                <ol>
                  {(t.contactHow || []).map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ol>
              </div>
            </article>

            <article className="card contact-card">
              <h3>Segelberg &amp; Co. s.r.o.</h3>
              <p style={{ lineHeight: 1.9, color: "var(--muted)", margin: 0 }}>
                Sarajevská 1051/10
                <br />
                120 00 Praha 2
                <br />
                <br />
                IČO 08619263
                <br />
                DIČ CZ08619263
              </p>
            </article>
          </div>

          <article className="card contact-card contact-form-card reveal" id="contact-form">
            <h3>{t.contactFormTitle}</h3>

            <p className="form-note contact-form-intro">
              {t.contactFormIntro}
            </p>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-grid">
                <div className="field">
                  <label>{t.contactName}</label>
                  <input
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    onBlur={() => setTouched(true)}
                    className={touched && !nameOk ? "input-error" : ""}
                  />
                </div>

                <div className="field">
                  <label>{t.contactEmail}</label>
                  <input
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    onBlur={() => setTouched(true)}
                    className={touched && !emailOk ? "input-error" : ""}
                  />
                </div>

                <div className="field full">
                  <label>{t.contactPhone}</label>
                  <input
                    name="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    onBlur={() => setTouched(true)}
                    className={touched && !phoneOk ? "input-error" : ""}
                  />
                </div>

                <div className="field full">
                  <label>{t.contactMessage}</label>
                  <textarea
                    name="message"
                    rows="6"
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    onBlur={() => setTouched(true)}
                    className={touched && !messageOk ? "input-error" : ""}
                  />
                </div>

                <div className="field full">
                  <label>{t.contactPhotos}</label>

                  <label className="upload-field">
                    <input
                      name="files"
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={handleFilesChange}
                    />
                    <span className="upload-button">{t.uploadSelect}</span>
                    <span className="upload-text">{getUploadText()}</span>
                  </label>

                  <small>{t.contactPhotosNote}</small>
                </div>
              </div>

              <div className="contact-next-steps">
                <p>{t.contactNextStepsTitle}</p>
                <ul>
                  {(t.contactNextSteps || []).map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              <button
                type="submit"
                disabled={!canSend || sending}
                className={`contact-submit ${canSend && !sending ? "is-active" : "is-disabled"}`}
              >
                {sending ? t.contactSending : t.contactSubmit}
              </button>

              {status.text && <div className={`status ${status.kind}`}>{status.text}</div>}
            </form>
          </article>
        </div>
      </section>
    </>
  );
}

function LegalPage({ t, kind }) {
  const map = {
    terms: {
      title: t.termsH,
      intro: t.termsIntro,
      sections: t.termsSections,
      image: "assets/img/hero/process-hero-v2.webp",
    },
    privacy: {
      title: t.privacyH,
      intro: t.privacyIntro,
      sections: t.privacySections,
      image: "assets/img/hero/contact-hero01.webp",
    },
    cookies: {
      title: t.cookiesH,
      intro: (t.cookiesP || [])[0] || "",
      sections: (t.cookiesP || []).slice(1).map((p, idx) => ({ h: `0${idx + 1}`, p })),
      image: "assets/img/hero/finished-hero.webp",
    },
  };

  const data = map[kind];

  return (
    <>
      <Hero t={t} small image={data.image} title={data.title} lead={data.intro} />
      <section className="section">
        <div className="shell legal-wrap">
          {(data.sections || []).map((section, idx) => (
            <article className="card legal-card reveal" key={section.h + idx}>
              <h3>{section.h}</h3>
              <p>{section.p}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function Footer({ t }) {
  return (
    <footer className="footer">
      <div className="shell footer-grid">
        <div className="footer-brand">
          <a
            href={buildHashUrl("/")}
            className="brand"
            onClick={(e) => {
              e.preventDefault();
              go("/", { force: true, native: true });
            }}
            onTouchEnd={(e) => {
              e.preventDefault();
              go("/", { force: true, native: true });
            }}
          >
            <img src="assets/img/logo/Logo-symbol.svg" alt="Logo" />
            <span className="brand-text">
              <small>{t.brand1}</small>
              <strong>{t.brand2}</strong>
            </span>
          </a>
          <p>{t.footerBlurb}</p>
        </div>
        <div className="footer-col">
          <h4>{t.footerContactH}</h4>
          <div className="footer-links">
            <a href="mailto:info@stinenisesenci.cz">info@stinenisesenci.cz</a>
            <a href="tel:+420724379309">+420 724 379 309</a>
            <button onClick={() => go("/contact")}>{t.footerCta}</button>
          </div>
        </div>
        <div className="footer-col">
          <h4>{t.footerLegalH}</h4>
          <div className="footer-links">
            <button onClick={() => go("/terms")}>{t.footerTerms}</button>
            <button onClick={() => go("/privacy")}>{t.footerPrivacy}</button>
            <button onClick={() => go("/cookies")}>{t.footerCookies}</button>
          </div>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© {new Date().getFullYear()} {t.brand2}</span>
        <span>{t.rights}</span>
      </div>
    </footer>
  );
}

function Faq({ items }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="faq-list">
      {items.map((item, idx) => {
        const isOpen = idx === open;
        return (
          <article className="faq-item reveal" key={item.q}>
            <button className="faq-trigger" onClick={() => setOpen(isOpen ? -1 : idx)}>
              <span>{item.q}</span>
              <span>{isOpen ? "−" : "+"}</span>
            </button>
            {isOpen && <div className="faq-answer">{item.a}</div>}
          </article>
        );
      })}
    </div>
  );
}

let externalOpenLightbox = null;
function openGalleryLightbox(index, images) {
  if (typeof externalOpenLightbox === "function") externalOpenLightbox(index, images);
}

function PricingModal({ t, item, onClose }) {
  const initial = item?.subtypes?.[0]?.key || item?.key || "";
  const [activeSubtype, setActiveSubtype] = useState(initial);

  useEffect(() => {
    document.body.classList.add("modal-open");
    return () => document.body.classList.remove("modal-open");
  }, []);

  useEffect(() => {
    if (item?.subtypes?.length) setActiveSubtype(item.subtypes[0].key);
    else setActiveSubtype(item?.key || "");
  }, [item]);

  if (!item) return null;

  const detail = item.subtypes?.length
    ? item.subtypes.find((sub) => sub.key === activeSubtype) || item.subtypes[0]
    : item;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-panel" onClick={(e) => e.stopPropagation()}>
      <div className="modal-header">
  <div>
    <h3>{item.title}</h3>
  </div>
  <button className="modal-close" onClick={onClose}>{t.close}</button>
</div>
        <div className="modal-body">
          <div className="modal-grid">
            <div className="modal-image">
              <img src={detail.img || item.img} alt={detail.label || item.title} />
            </div>

            <div className="modal-copy">
              <div className="script">{detail.micro || item.micro}</div>

              {item.subtypes?.length ? (
                <div className="modal-subtabs">
                  {item.subtypes.map((sub) => (
                    <button
                      key={sub.key}
                      className={`chip ${activeSubtype === sub.key ? "active" : ""}`}
                      onClick={() => setActiveSubtype(sub.key)}
                    >
                      {sub.label}
                    </button>
                  ))}
                </div>
              ) : null}

              <p className="copy">{detail.intro}</p>

              <div className="range-list">
                {(detail.ranges || []).map((range) => (
                  <div className="range-item" key={range.label}>
                    <strong>{range.label}</strong>
                    <span>{range.value}</span>
                  </div>
                ))}
              </div>

              <p className="copy">{detail.rangesNote}</p>

              <div className="tier-list">
                {(detail.tiers || []).map((tier) => (
                  <div className="tier-item" key={tier.name}>
                    <strong>{tier.name}</strong>
                    <span>{tier.note}</span>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: 18 }}>
                <button
                  className="button button-primary"
                  onClick={() => {
                    onClose();
                    go("/contact");
                  }}
                >
                  {t.writeMe}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function Lightbox({ state, setState, t }) {
  const isEn = (document.documentElement.lang || "cs") === "en";

  useEffect(() => {
    if (!state.open) return;
    document.body.classList.add("modal-open");
    const onKey = (e) => {
      if (e.key === "Escape") setState((s) => ({ ...s, open: false }));
      if (e.key === "ArrowRight") setState((s) => ({ ...s, index: (s.index + 1) % s.images.length }));
      if (e.key === "ArrowLeft") setState((s) => ({ ...s, index: (s.index - 1 + s.images.length) % s.images.length }));
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", onKey);
    };
  }, [state.open, state.images.length, setState]);

  if (!state.open) return null;

  const src = state.images[state.index];

  return (
    <div className="modal-backdrop" onClick={() => setState((s) => ({ ...s, open: false }))}>
      <div className="modal-panel lightbox" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header" style={{ color: "#fff" }}>
          <div>
            <h3>{isEn ? `Project ${state.index + 1}` : `Realizace ${state.index + 1}`}</h3>
            <p style={{ color: "rgba(255,255,255,.72)" }}>
              {t.lightboxHint}
            </p>
          </div>
          <button className="modal-close" onClick={() => setState((s) => ({ ...s, open: false }))}>
            {t.close}
          </button>
        </div>
        <div className="lightbox-stage">
          <img src={src} alt={isEn ? `Project ${state.index + 1}` : `Realizace ${state.index + 1}`} />
        </div>
        <div className="lightbox-nav">
          <button
            className="button button-secondary"
            onClick={() => setState((s) => ({ ...s, index: (s.index - 1 + s.images.length) % s.images.length }))}
          >
            {t.previous}
          </button>
          <button
            className="button button-primary"
            onClick={() => setState((s) => ({ ...s, index: (s.index + 1) % s.images.length }))}
          >
            {t.next}
          </button>
        </div>
      </div>
    </div>
  );
}

function App() {
  const route = useRoute();
  const { lang, setLang, t } = useLang();
  const [menuOpen, setMenuOpen] = useState(false);
  const [pricingItem, setPricingItem] = useState(null);
  const [lightbox, setLightbox] = useState({ open: false, index: 0, images: [] });

 useReveal(route, lang);

  useEffect(() => setMenuOpen(false), [route]);

  useEffect(() => {
    externalOpenLightbox = (index, images) => setLightbox({ open: true, index, images });
    return () => { externalOpenLightbox = null; };
  }, []);

  let page = null;
  if (route === "/") page = <Home t={t} />;
  else if (route === "/process") page = <Process t={t} />;
  else if (route === "/pricing") page = <Pricing t={t} openPricing={setPricingItem} />;
  else if (route === "/gallery") page = <Gallery key={`gallery-${route}-${lang}`} t={t} />;
  else if (route === "/essence") page = <Essence t={t} />;
  else if (route === "/contact") page = <Contact t={t} />;
  else if (route === "/terms") page = <LegalPage t={t} kind="terms" />;
  else if (route === "/privacy") page = <LegalPage t={t} kind="privacy" />;
  else if (route === "/cookies") page = <LegalPage t={t} kind="cookies" />;
  else page = <Home t={t} />;

  return (
    <>
      <Header t={t} lang={lang} setLang={setLang} route={route} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main className={`route-${(route || "/").replace(/[^a-z0-9]+/gi, "-")}`}>{page}</main>
      <Footer t={t} />
      {pricingItem && <PricingModal t={t} item={pricingItem} onClose={() => setPricingItem(null)} />}
      <Lightbox state={lightbox} setState={setLightbox} t={t} />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);







