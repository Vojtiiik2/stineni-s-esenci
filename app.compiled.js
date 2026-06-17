const {
  useEffect,
  useMemo,
  useState
} = React;
const STR = window.STR || {
  cs: {},
  en: {}
};
const NAV_ROUTES = [{
  key: "process",
  path: "/process"
}, {
  key: "pricing",
  path: "/pricing"
}, {
  key: "gallery",
  path: "/gallery"
}, {
  key: "essence",
  path: "/essence"
}, {
  key: "contact",
  path: "/contact"
}];
const HERO_IMAGES = ["assets/img/hero/hero-01.webp", "assets/img/hero/hero-02.webp", "assets/img/hero/hero-03.webp"];
const HOME_SERVICE_IMAGES = ["assets/img/pricing/pricing-01-v2.webp", "assets/img/pricing/pricing-02-v2.webp", "assets/img/pricing/roleta-rimska-01.webp", "assets/img/pricing/pricing-04-v2.webp", "assets/img/pricing/pricing-05-v2.webp"];
const ATMOS_IMAGES = ["assets/img/atmosfera/atmosfera-01.webp", "assets/img/atmosfera/atmosfera-02.webp", "assets/img/atmosfera/atmosfera-03.webp"];
const OUR_WORK = ["assets/img/gallery/our-work/ourwork-01.webp", "assets/img/gallery/our-work/ourwork-02.webp", "assets/img/gallery/our-work/ourwork-03-03.webp", "assets/img/gallery/our-work/ourwork-04.webp", "assets/img/gallery/our-work/ourwork-05-01.webp", "assets/img/gallery/our-work/ourwork-06.webp", "assets/img/gallery/our-work/ourwork-07.webp", "assets/img/gallery/our-work/ourwork-08.webp", "assets/img/gallery/our-work/ourwork-09.webp", "assets/img/gallery/our-work/ourwork-10.webp", "assets/img/gallery/our-work/ourwork-11.webp", "assets/img/gallery/our-work/ourwork-12.webp", "assets/img/gallery/our-work/ourwork-13.webp", "assets/img/gallery/our-work/ourwork-14.webp", "assets/img/gallery/our-work/ourwork-15.webp", "assets/img/gallery/our-work/ourwork-16.webp", "assets/img/gallery/our-work/ourwork-17.webp", "assets/img/gallery/our-work/ourwork-18.webp", "assets/img/gallery/our-work/ourwork-19.webp", "assets/img/gallery/our-work/ourwork-20.webp", "assets/img/gallery/our-work/ourwork-21.webp", "assets/img/gallery/our-work/ourwork-22.webp", "assets/img/gallery/our-work/ourwork-23.webp", "assets/img/gallery/our-work/ourwork-24.webp", "assets/img/gallery/our-work/ourwork-25.webp", "assets/img/gallery/our-work/ourwork-26.webp", "assets/img/gallery/our-work/ourwork-27.webp", "assets/img/gallery/our-work/ourwork-28.webp", "assets/img/gallery/our-work/ourwork-29.webp", "assets/img/gallery/our-work/ourwork-30.webp", "assets/img/gallery/our-work/ourwork-31.webp", "assets/img/gallery/our-work/ourwork-32.webp", "assets/img/gallery/our-work/ourwork-33.webp", "assets/img/gallery/our-work/ourwork-34-2.webp", "assets/img/gallery/our-work/ourwork-35.webp", "assets/img/gallery/our-work/ourwork-36.webp", "assets/img/gallery/our-work/ourwork-37.webp", "assets/img/gallery/our-work/ourwork-38.webp", "assets/img/gallery/our-work/ourwork-39.webp", "assets/img/gallery/our-work/ourwork-40.webp", "assets/img/gallery/our-work/ourwork-41.webp", "assets/img/gallery/our-work/ourwork-42.webp", "assets/img/gallery/our-work/ourwork-43.webp", "assets/img/gallery/our-work/ourwork-44.webp", "assets/img/gallery/our-work/ourwork-45.webp", "assets/img/gallery/our-work/ourwork-46.webp", "assets/img/gallery/our-work/ourwork-47.webp", "assets/img/gallery/our-work/ourwork-48.webp", "assets/img/gallery/our-work/ourwork-49.webp", "assets/img/gallery/our-work/ourwork-50.webp", "assets/img/gallery/our-work/ourwork-51.webp", "assets/img/gallery/our-work/ourwork-52.webp", "assets/img/gallery/our-work/ourwork-53.webp", "assets/img/gallery/our-work/ourwork-54.webp", "assets/img/gallery/our-work/ourwork-55.webp", "assets/img/gallery/our-work/ourwork-56.webp", "assets/img/gallery/our-work/ourwork-57.webp", "assets/img/gallery/our-work/ourwork-58-2.webp", "assets/img/gallery/our-work/ourwork-59-3.webp", "assets/img/gallery/our-work/ourwork-60-3.webp", "assets/img/gallery/our-work/ourwork-61.webp", "assets/img/gallery/our-work/ourwork-62.webp", "assets/img/gallery/our-work/ourwork-63.webp", "assets/img/gallery/our-work/ourwork-64-3.webp", "assets/img/gallery/our-work/ourwork-65.webp", "assets/img/gallery/our-work/ourwork-66.webp", "assets/img/gallery/our-work/ourwork-67.webp", "assets/img/gallery/our-work/ourwork-68.webp", "assets/img/gallery/our-work/ourwork-69.webp", "assets/img/gallery/our-work/ourwork-70.webp", "assets/img/gallery/our-work/ourwork-71.webp", "assets/img/gallery/our-work/ourwork-72-2.webp", "assets/img/gallery/our-work/ourwork-73.webp", "assets/img/gallery/our-work/ourwork-74.webp", "assets/img/gallery/our-work/ourwork-75.webp", "assets/img/gallery/our-work/ourwork-76.webp", "assets/img/gallery/our-work/ourwork-77.webp", "assets/img/gallery/our-work/ourwork-78.webp", "assets/img/gallery/our-work/ourwork-79.webp", "assets/img/gallery/our-work/ourwork-80.webp", "assets/img/gallery/our-work/ourwork-81.webp", "assets/img/gallery/our-work/ourwork-82.webp", "assets/img/gallery/our-work/ourwork-83.webp", "assets/img/gallery/our-work/ourwork-84.webp", "assets/img/gallery/our-work/ourwork-85.webp", "assets/img/gallery/our-work/ourwork-86.webp", "assets/img/gallery/our-work/ourwork-87.webp"];
const PARTNERS = [{
  key: "onoje",
  name: "ono.je",
  url: "https://www.ono.je",
  images: ["assets/img/gallery/partners/onoje/ono-je-01.webp", "assets/img/gallery/partners/onoje/ono-je-02.webp", "assets/img/gallery/partners/onoje/ono-je-03.webp"]
}, {
  key: "richter",
  name: "RichterDesign",
  url: "https://www.richterdesign.cz",
  images: ["assets/img/gallery/partners/richter/richter-01.webp", "assets/img/gallery/partners/richter/richter-02.webp", "assets/img/gallery/partners/richter/richter-03.webp"]
}, {
  key: "epic",
  name: "Epic Interior Studio",
  url: "https://www.epicinteriorstudio.cz/",
  images: ["assets/img/gallery/partners/epic-interior-studio/epic-01.webp", "assets/img/gallery/partners/epic-interior-studio/epic-02.webp", "assets/img/gallery/partners/epic-interior-studio/epic-03.webp"]
}, {
  key: "broda",
  name: "Broda interiér",
  url: "https://brodainterier.cz/",
  images: ["assets/img/gallery/partners/broda/broda-01.webp", "assets/img/gallery/partners/broda/broda-02.webp", "assets/img/gallery/partners/broda/broda-03.webp"]
}];
const CONTACT_WEBHOOK = "https://hook.eu1.make.com/o1lk627xrpjl8d6exq9sh5yrplr58sw8";
function normalizePath(path) {
  const cleaned = String(path || "/").replace(/^#/, "").split("?")[0].split("&")[0].replace(/\/+$/, "");
  return cleaned && cleaned.startsWith("/") ? cleaned : "/";
}
function getInitialPath() {
  return normalizePath(window.location.hash.replace(/^#/, "") || "/");
}
function buildHashUrl(path) {
  const target = normalizePath(path);
  const {
    pathname,
    search
  } = window.location;
  return `${pathname}${search}#${target}`;
}
function go(path, options = {}) {
  const target = normalizePath(path);
  const current = getInitialPath();
  const force = !!options.force;
  const native = !!options.native;
  const nextHash = `#${target}`;
  if (current === target) {
    window.scrollTo({
      top: 0,
      behavior: force ? "auto" : "smooth"
    });
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
    window.scrollTo({
      top: 0,
      behavior: "auto"
    });
  });
}
function useRoute() {
  const [route, setRoute] = useState(getInitialPath());
  useEffect(() => {
    const onHash = () => {
      setRoute(getInitialPath());
      requestAnimationFrame(() => {
        window.scrollTo({
          top: 0,
          behavior: "auto"
        });
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
  return {
    lang,
    setLang,
    t: STR[lang] || STR.cs
  };
}
function useReveal(route, lang) {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll(".reveal"));
    nodes.forEach(n => n.classList.remove("visible"));
    const obs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      });
    }, {
      threshold: 0.08,
      rootMargin: "0px 0px -8% 0px"
    });
    nodes.forEach(n => obs.observe(n));
    requestAnimationFrame(() => {
      nodes.forEach(n => {
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
  const getValue = () => typeof window !== "undefined" ? window.innerWidth <= breakpoint : false;
  const [isMobile, setIsMobile] = useState(getValue);
  useEffect(() => {
    const onResize = () => setIsMobile(getValue());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [breakpoint]);
  return isMobile;
}
function MobileScrollHint({
  t,
  label
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "mobile-scroll-hint",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("span", null, label || t.mobileSwipeHint), /*#__PURE__*/React.createElement("i", null));
}
function Header({
  t,
  lang,
  setLang,
  route,
  menuOpen,
  setMenuOpen
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const navLabels = t.nav || [];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("header", {
    className: `site-header ${isScrolled ? "scrolled" : ""}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "shell site-header-inner"
  }, /*#__PURE__*/React.createElement("a", {
    href: buildHashUrl("/"),
    className: "brand",
    "aria-label": t.a11yHome,
    onClick: e => {
      e.preventDefault();
      setMenuOpen(false);
      go("/", {
        force: true,
        native: true
      });
    },
    onTouchEnd: e => {
      e.preventDefault();
      setMenuOpen(false);
      go("/", {
        force: true,
        native: true
      });
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/img/logo/Logo-symbol.svg",
    alt: "Logo"
  }), /*#__PURE__*/React.createElement("span", {
    className: "brand-text"
  }, /*#__PURE__*/React.createElement("small", null, t.brand1), /*#__PURE__*/React.createElement("strong", null, t.brand2))), /*#__PURE__*/React.createElement("nav", {
    className: "header-nav",
    "aria-label": t.a11yMainNav
  }, NAV_ROUTES.map((item, index) => /*#__PURE__*/React.createElement("button", {
    key: item.path,
    className: `header-link ${route === item.path ? "active" : ""}`,
    onClick: () => go(item.path)
  }, navLabels[index] || item.key))), /*#__PURE__*/React.createElement("div", {
    className: "header-actions"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lang-switch",
    "aria-label": t.a11yLangSwitcher
  }, /*#__PURE__*/React.createElement("button", {
    className: lang === "cs" ? "active" : "",
    onClick: () => setLang("cs")
  }, "CZ"), /*#__PURE__*/React.createElement("button", {
    className: lang === "en" ? "active" : "",
    onClick: () => setLang("en")
  }, "EN")), /*#__PURE__*/React.createElement("button", {
    className: "button button-primary",
    onClick: () => go("/contact")
  }, t.cta), /*#__PURE__*/React.createElement("button", {
    className: `icon-button ${menuOpen ? "open" : ""}`,
    onClick: () => setMenuOpen(s => !s),
    "aria-label": t.a11yMenu
  }, /*#__PURE__*/React.createElement("span", null))))), /*#__PURE__*/React.createElement("div", {
    className: `mobile-drawer ${menuOpen ? "open" : ""}`
  }, /*#__PURE__*/React.createElement("nav", null, NAV_ROUTES.map((item, index) => /*#__PURE__*/React.createElement("button", {
    key: item.path,
    className: "header-link",
    onClick: () => {
      setMenuOpen(false);
      go(item.path);
    }
  }, navLabels[index] || item.key))), /*#__PURE__*/React.createElement("button", {
    className: "button button-primary",
    onClick: () => {
      setMenuOpen(false);
      go("/contact");
    }
  }, t.cta)));
}
function Hero({
  t,
  title,
  lead,
  image,
  small = false
}) {
  const [active, setActive] = useState(0);
  const isEn = (document.documentElement.lang || "cs") === "en";
  const isMobile = useIsMobile(820);
  useEffect(() => {
    if (small) return;
    const id = window.setInterval(() => setActive(v => (v + 1) % HERO_IMAGES.length), 5200);
    return () => window.clearInterval(id);
  }, [small]);
  const slides = small ? [image] : HERO_IMAGES;
  const heroTitle = small ? title : isMobile ? t.heroTitleMobile || t.heroSlides && t.heroSlides[0] && t.heroSlides[0].h1 : t.heroSlides && t.heroSlides[0] && t.heroSlides[0].h1;
  const heroLead = small ? lead : isMobile ? t.heroLeadMobile || t.heroLead || (Array.isArray(t.homeAbout) ? t.homeAbout[0] : t.homeAbout) : t.heroLead || (Array.isArray(t.homeAbout) ? t.homeAbout[0] : t.homeAbout);
  return /*#__PURE__*/React.createElement("section", {
    className: `hero ${small ? "small" : ""}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-slides"
  }, slides.map((src, index) => /*#__PURE__*/React.createElement("div", {
    key: src,
    className: `hero-slide ${index === (small ? 0 : active) ? "active" : ""}`,
    style: {
      backgroundImage: `url(${src})`
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "hero-overlay"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero-vignette"
  }), /*#__PURE__*/React.createElement("div", {
    className: "shell hero-content"
  }, small ? /*#__PURE__*/React.createElement("div", {
    className: "page-hero-copy reveal visible"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-kicker"
  }, t.heroKickerSmall), /*#__PURE__*/React.createElement("span", {
    className: "script"
  }, isMobile ? t.heroScriptMobile || t.heroScript || t.brand2 : t.heroScript || t.brand2), /*#__PURE__*/React.createElement("h1", {
    className: "display h2"
  }, title), lead && /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, lead)) : /*#__PURE__*/React.createElement("div", {
    className: "hero-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-copy reveal visible"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-kicker"
  }, t.heroKicker), /*#__PURE__*/React.createElement("span", {
    className: "script"
  }, t.heroScript || t.brand2), /*#__PURE__*/React.createElement("h1", {
    className: "display h1"
  }, heroTitle), heroLead ? /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, heroLead) : null, /*#__PURE__*/React.createElement("div", {
    className: "hero-actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "button button-primary",
    onClick: () => go("/contact")
  }, t.cta), /*#__PURE__*/React.createElement("a", {
    href: buildHashUrl("/gallery"),
    className: "button button-ghost",
    onClick: e => {
      e.preventDefault();
      go("/gallery", {
        force: true,
        native: true
      });
    },
    onTouchEnd: e => {
      e.preventDefault();
      go("/gallery", {
        force: true,
        native: true
      });
    }
  }, t.heroSecondaryCta))), !isMobile && /*#__PURE__*/React.createElement("div", {
    className: "hero-panel reveal visible"
  }, /*#__PURE__*/React.createElement("strong", null, t.heroSub), /*#__PURE__*/React.createElement("span", {
    className: "script"
  }, t.heroPanelTitle), /*#__PURE__*/React.createElement("p", null, t.heroPanelText)))));
}
function TrustBand({
  t
}) {
  const isMobile = useIsMobile(820);
  if (isMobile) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "trust-band"
  }, /*#__PURE__*/React.createElement("div", {
    className: "shell trust-grid"
  }, (t.homeTrust || []).map(item => /*#__PURE__*/React.createElement("div", {
    className: "trust-card reveal",
    key: item.label + item.value
  }, /*#__PURE__*/React.createElement("strong", null, item.value), /*#__PURE__*/React.createElement("span", null, item.label), /*#__PURE__*/React.createElement("small", null, item.detail || item.label)))));
}
function Home({
  t
}) {
  const isEn = (document.documentElement.lang || "cs") === "en";
  const isMobile = useIsMobile(820);
  const featuredWorks = [{
    src: OUR_WORK[0],
    cols: "span 2"
  }, {
    src: OUR_WORK[1],
    cols: "span 4"
  }, {
    src: OUR_WORK[5],
    cols: "span 2"
  }, {
    src: OUR_WORK[2],
    cols: "span 3"
  }, {
    src: OUR_WORK[3],
    cols: "span 3"
  }, {
    src: OUR_WORK[4],
    cols: "span 2"
  }];
  const mobileFeaturedWorks = featuredWorks.slice(0, 4);
  const aboutMainBase = Array.isArray(t.homeAbout) ? t.homeAbout[0] : t.homeAbout;
  const aboutHeading = isMobile ? t.homeAboutHMobile || t.homeAboutH : t.homeAboutH;
  const aboutMain = isMobile ? t.homeAboutMobile || aboutMainBase : aboutMainBase;
  const aboutExtra = isMobile ? "" : t.homeAboutExtra;
  const featureNoteTitle = isMobile ? t.featureNoteTitleMobile || t.featureNoteTitle : t.featureNoteTitle;
  const featureNoteText = isMobile ? t.featureNoteTextMobile || t.featureNoteText : t.featureNoteText;
  const atmosLead = isMobile ? t.inspLeadMobile || t.inspLead : t.inspLead;
  const servicesLead = isMobile ? t.homeServicesLeadMobile ?? t.homeServicesLead : t.homeServicesLead;
  const benefitsLead = isMobile ? t.homeLuxuryLeadMobile ?? t.homeLuxuryLead : t.homeLuxuryLead;
  const projectsLead = isMobile ? t.homeProjectsLeadMobile ?? "" : t.homeCtaLocation;
  const finalCtaNote = isMobile ? t.homeFinalCtaLocation : t.homeCtaNote;
  const benefitsToShow = isMobile ? (t.benefits || []).slice(0, 3) : t.benefits || [];
  const faqToShow = isMobile ? (t.faq || []).slice(0, 3) : t.faq || [];
  const worksToShow = isMobile ? mobileFeaturedWorks : featuredWorks;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hero, {
    t: t
  }), /*#__PURE__*/React.createElement(TrustBand, {
    t: t
  }), /*#__PURE__*/React.createElement("section", {
    className: "section home-feature"
  }, /*#__PURE__*/React.createElement("div", {
    className: "shell grid-2 feature-split"
  }, /*#__PURE__*/React.createElement("div", {
    className: "feature-media reveal"
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/img/Onas/onas-04.webp",
    alt: t.featureImageAlt
  }), /*#__PURE__*/React.createElement("div", {
    className: "feature-note"
  }, /*#__PURE__*/React.createElement("span", {
    className: "script"
  }, featureNoteTitle), /*#__PURE__*/React.createElement("div", null, featureNoteText))), /*#__PURE__*/React.createElement("div", {
    className: "feature-copy reveal"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "display h2"
  }, aboutHeading), /*#__PURE__*/React.createElement("p", {
    className: "copy home-about-main"
  }, aboutMain), !!aboutExtra && /*#__PURE__*/React.createElement("p", {
    className: "copy home-about-extra"
  }, aboutExtra), /*#__PURE__*/React.createElement("div", {
    className: "home-feature-actions",
    style: {
      marginTop: 24,
      display: "flex",
      gap: 14,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "button button-primary",
    onClick: () => go("/process")
  }, t.processH), /*#__PURE__*/React.createElement("button", {
    className: "button button-secondary",
    onClick: () => go("/pricing")
  }, t.priceH))))), /*#__PURE__*/React.createElement("section", {
    className: "section section-tight home-services"
  }, /*#__PURE__*/React.createElement("div", {
    className: "shell"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-header reveal"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "display h2"
  }, t.homeServicesTitle), servicesLead ? /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, servicesLead) : null), isMobile && /*#__PURE__*/React.createElement(MobileScrollHint, {
    t: t,
    label: t.mobileSwipeHintServices
  }), /*#__PURE__*/React.createElement("div", {
    className: "grid-3 home-services-grid"
  }, (t.services || []).map((service, index) => /*#__PURE__*/React.createElement("article", {
    className: "card service-card reveal",
    key: service.name,
    onClick: () => {
      localStorage.setItem("openPricingIndex", String(index));
      go("/pricing");
    },
    style: {
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "service-card-top"
  }, /*#__PURE__*/React.createElement("h3", null, service.name), /*#__PURE__*/React.createElement("p", null, service.note)), /*#__PURE__*/React.createElement("div", {
    className: "service-card-media"
  }, /*#__PURE__*/React.createElement("img", {
    src: HOME_SERVICE_IMAGES[index] || HOME_SERVICE_IMAGES[0],
    alt: service.name
  })), /*#__PURE__*/React.createElement("div", {
    className: "service-card-foot"
  }, t.serviceCardCta)))))), /*#__PURE__*/React.createElement("section", {
    className: "section section-tight home-atmos"
  }, /*#__PURE__*/React.createElement("div", {
    className: "shell"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-header reveal"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "display h2"
  }, t.homeAtmosTitle), /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, atmosLead)), /*#__PURE__*/React.createElement("div", {
    className: "atmos-grid home-atmos-grid"
  }, ATMOS_IMAGES.map((src, index) => /*#__PURE__*/React.createElement("figure", {
    className: "atmos-card reveal",
    key: src
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: isEn ? `Interior atmosphere ${index + 1}` : `Atmosféra interiéru ${index + 1}`
  }), /*#__PURE__*/React.createElement("figcaption", null, (t.inspTags || [])[index])))))), /*#__PURE__*/React.createElement("section", {
    className: "section section-tight home-benefits"
  }, /*#__PURE__*/React.createElement("div", {
    className: "shell"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-header reveal"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "display h2"
  }, t.homeLuxuryTitle), benefitsLead ? /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, benefitsLead) : null), isMobile && /*#__PURE__*/React.createElement(MobileScrollHint, {
    t: t,
    label: t.mobileSwipeHintBenefits
  }), /*#__PURE__*/React.createElement("div", {
    className: "grid-3 home-benefits-grid"
  }, benefitsToShow.map(item => /*#__PURE__*/React.createElement("article", {
    className: "card benefit-card reveal",
    key: item.name,
    onClick: () => {
      localStorage.setItem("openProcessSection", "behind");
      go("/process");
    },
    style: {
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "script"
  }, t.benefitDetailLabel), /*#__PURE__*/React.createElement("h3", null, item.name), /*#__PURE__*/React.createElement("p", null, item.note)))))), /*#__PURE__*/React.createElement("section", {
    className: "section section-tight home-projects"
  }, /*#__PURE__*/React.createElement("div", {
    className: "shell"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-header reveal"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "display h2"
  }, t.homeProjectsTitle), projectsLead ? /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, projectsLead) : null), isMobile && /*#__PURE__*/React.createElement(MobileScrollHint, {
    t: t,
    label: t.mobileSwipeHintProjects
  }), /*#__PURE__*/React.createElement("div", {
    className: "gallery-grid-home home-projects-grid reveal"
  }, worksToShow.map((item, index) => /*#__PURE__*/React.createElement("button", {
    type: "button",
    key: item.src,
    className: "gallery-item-home",
    style: isMobile ? undefined : {
      gridColumn: item.cols
    },
    onClick: () => openGalleryLightbox(index, worksToShow.map(w => w.src))
  }, /*#__PURE__*/React.createElement("img", {
    src: item.src,
    alt: isEn ? `Project ${index + 1}` : `Realizace ${index + 1}`
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24
    },
    className: "reveal home-projects-cta"
  }, /*#__PURE__*/React.createElement("a", {
    href: buildHashUrl("/gallery"),
    className: "button button-secondary",
    onClick: e => {
      e.preventDefault();
      go("/gallery", {
        force: true,
        native: true
      });
    },
    onTouchEnd: e => {
      e.preventDefault();
      go("/gallery", {
        force: true,
        native: true
      });
    }
  }, t.galleryShowAll)))), /*#__PURE__*/React.createElement("section", {
    className: "section section-tight home-faq"
  }, /*#__PURE__*/React.createElement("div", {
    className: "shell"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-header reveal"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "display h2"
  }, t.homeFaqTitle)), /*#__PURE__*/React.createElement(Faq, {
    items: faqToShow
  }))), /*#__PURE__*/React.createElement("section", {
    className: "section home-final-cta"
  }, /*#__PURE__*/React.createElement("div", {
    className: "shell accent-surface card card-inner reveal"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "display h2"
  }, t.homeFinalCtaTitle), /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, finalCtaNote), /*#__PURE__*/React.createElement("div", {
    className: "home-final-cta-actions",
    style: {
      marginTop: 28,
      display: "flex",
      gap: 14,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "button button-primary",
    onClick: () => go("/contact")
  }, t.cta), /*#__PURE__*/React.createElement("button", {
    className: "button button-secondary",
    onClick: () => go("/process")
  }, t.processH)))));
}
function Process({
  t
}) {
  const isEn = (document.documentElement.lang || "cs") === "en";
  const isMobile = useIsMobile(820);
  const [openStep, setOpenStep] = React.useState(null);
  React.useEffect(() => {
    const target = localStorage.getItem("openProcessSection");
    if (target !== "behind") return;
    requestAnimationFrame(() => {
      const el = document.getElementById("process-behind");
      if (el) {
        el.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
    localStorage.removeItem("openProcessSection");
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hero, {
    t: t,
    small: true,
    image: "assets/img/hero/process-hero-v3.webp",
    title: t.processH,
    lead: (isMobile ? t.processLeadMobile : t.processLead) || (isEn ? "From the first measurement to final styling. Every step has its own pace and reason." : "Od prvního zaměření po finální dekorování. Každý krok má svůj důvod.")
  }), /*#__PURE__*/React.createElement("section", {
    className: "section process-mobile-compact"
  }, /*#__PURE__*/React.createElement("div", {
    className: "shell steps"
  }, (t.steps || []).map((step, index) => {
    const stepText = (t.stepsTxt || [])[index];
    const lines = Array.isArray(stepText) ? stepText : typeof stepText === "string" ? [stepText] : [];
    const preview = lines[0] || "";
    const rest = lines.slice(1);
    const isOpen = openStep === index;
    return /*#__PURE__*/React.createElement("article", {
      className: `card step-card reveal ${index % 2 === 1 ? "reverse" : ""} ${isOpen ? "is-open" : ""}`,
      key: step
    }, /*#__PURE__*/React.createElement("div", {
      className: "step-media"
    }, /*#__PURE__*/React.createElement("img", {
      src: (t.processImgs || [])[index],
      alt: step
    })), /*#__PURE__*/React.createElement("div", {
      className: "step-content"
    }, /*#__PURE__*/React.createElement("div", {
      className: "step-index"
    }, "0", index + 1, " / 04"), /*#__PURE__*/React.createElement("h3", null, step), /*#__PURE__*/React.createElement("div", {
      className: "script"
    }, (t.processBridges || [])[index] || (t.processMicroByStep || [])[index]), preview && /*#__PURE__*/React.createElement("p", null, preview), rest.length > 0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: `step-extra ${isOpen ? "open" : ""}`
    }, rest.map((line, i) => /*#__PURE__*/React.createElement("p", {
      key: i
    }, line))), /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "step-toggle",
      onClick: () => setOpenStep(isOpen ? null : index)
    }, isOpen ? t.processHideDetail : t.processShowDetail))));
  }))), /*#__PURE__*/React.createElement("section", {
    className: "section section-tight",
    id: "process-behind"
  }, /*#__PURE__*/React.createElement("div", {
    className: "shell"
  }, isMobile && /*#__PURE__*/React.createElement(MobileScrollHint, {
    t: t,
    label: t.mobileSwipeHintProcess
  }), /*#__PURE__*/React.createElement("div", {
    className: "process-cards process-cards-mobile-swipe"
  }, (t.processBehindCards || []).map(card => /*#__PURE__*/React.createElement("article", {
    className: "card process-card reveal",
    key: card.id
  }, /*#__PURE__*/React.createElement("h3", null, card.title), card.text ? /*#__PURE__*/React.createElement("p", null, card.text) : /*#__PURE__*/React.createElement(React.Fragment, null, card.p1 && /*#__PURE__*/React.createElement("p", null, card.p1), card.p2 && /*#__PURE__*/React.createElement("p", null, card.p2), card.p3 && /*#__PURE__*/React.createElement("p", null, card.p3))))), /*#__PURE__*/React.createElement("div", {
    className: "quote-panel process-quote-panel reveal",
    style: {
      marginTop: 22
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "script"
  }, t.processQuoteTitle), /*#__PURE__*/React.createElement("p", null, t.processEnding), t.processCTAHelper && /*#__PURE__*/React.createElement("p", {
    className: "cta-helper"
  }, t.processCTAHelper)), /*#__PURE__*/React.createElement("button", {
    className: "button button-ghost",
    onClick: () => go("/contact")
  }, t.writeMe)))));
}
function Pricing({
  t,
  openPricing
}) {
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
      targetItem = items.find(item => item.key === pendingKey) || null;
    }
    if (targetItem) {
      requestAnimationFrame(() => {
        openPricing(targetItem);
      });
    }
    localStorage.removeItem("openPricingIndex");
    localStorage.removeItem("openPricingKey");
  }, [t, openPricing]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hero, {
    t: t,
    small: true,
    image: "assets/img/hero/pricing-hero.webp",
    title: t.priceH,
    lead: isMobile ? t.pricingLeadMobile || t.pricingLead : t.pricingLead
  }), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "shell"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-header reveal"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "display h2"
  }, t.pricingSectionTitle), /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, (isMobile ? t.pricingIntroMobile || (t.pricingIntro || []).slice(0, 2) : t.pricingIntro || []).join(" "))), /*#__PURE__*/React.createElement("div", {
    className: "pricing-grid"
  }, (t.pricingItems || []).map(item => /*#__PURE__*/React.createElement("article", {
    id: item.key,
    className: "card price-card reveal",
    key: item.key
  }, /*#__PURE__*/React.createElement("div", {
    className: "price-media",
    style: {
      cursor: "pointer"
    },
    onClick: () => openPricing(item)
  }, /*#__PURE__*/React.createElement("img", {
    src: item.img,
    alt: item.title
  })), /*#__PURE__*/React.createElement("div", {
    className: "price-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "price-topline"
  }, item.micro), /*#__PURE__*/React.createElement("div", {
    className: "price-title"
  }, /*#__PURE__*/React.createElement("h3", null, item.title), /*#__PURE__*/React.createElement("span", {
    className: "script"
  }, item.vibe)), /*#__PURE__*/React.createElement("p", null, item.intro), /*#__PURE__*/React.createElement("div", {
    className: "price-actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "button button-secondary",
    onClick: () => openPricing(item)
  }, t.pricingOpenButton), /*#__PURE__*/React.createElement("button", {
    className: "button button-primary",
    onClick: () => go("/contact")
  }, t.writeMe)))))), /*#__PURE__*/React.createElement("div", {
    className: "card card-inner reveal",
    style: {
      marginTop: 22
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, isMobile ? t.pricingDisclaimerMobile || t.pricingDisclaimer : t.pricingDisclaimer)))));
}
function Gallery({
  t
}) {
  const isEn = (document.documentElement.lang || "cs") === "en";
  const isMobile = useIsMobile(820);
  const [ratios, setRatios] = React.useState({});
  const [perRow, setPerRow] = React.useState(typeof window !== "undefined" && window.innerWidth <= 768 ? 2 : 3);
  React.useEffect(() => {
    const onResize = () => {
      setPerRow(window.innerWidth <= 768 ? 2 : 3);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  React.useEffect(() => {
    if (!isMobile) return;
    const forceGalleryVisible = () => {
      document.querySelectorAll(".ow-rows, .ow-row-page, .ow-card-page, .partner-card").forEach(node => {
        node.classList.add("visible");
      });
    };
    const rafId = requestAnimationFrame(forceGalleryVisible);
    const t1 = window.setTimeout(forceGalleryVisible, 120);
    const t2 = window.setTimeout(forceGalleryVisible, 320);
    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [isMobile, perRow]);
  const chunk = (arr, size) => {
    const out = [];
    for (let i = 0; i < arr.length; i += size) {
      out.push(arr.slice(i, i + size));
    }
    return out;
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hero, {
    t: t,
    small: true,
    image: "assets/img/hero/gallery-hero.webp",
    title: t.galleryH,
    lead: isMobile ? t.galleryLeadMobile || t.galleryLead : t.galleryLead
  }), /*#__PURE__*/React.createElement("section", {
    className: "section section-tight"
  }, /*#__PURE__*/React.createElement("div", {
    className: "shell"
  }, /*#__PURE__*/React.createElement("div", {
    className: isMobile ? "section-header visible" : "section-header reveal visible"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "display h2"
  }, t.gallerySectionTitle), /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, isMobile ? t.gallerySectionLeadMobile || t.gallerySectionLead : t.gallerySectionLead)), /*#__PURE__*/React.createElement("div", {
    className: isMobile ? "ow-rows visible" : "ow-rows reveal visible"
  }, chunk(OUR_WORK, perRow).map((row, rIdx) => /*#__PURE__*/React.createElement("div", {
    className: "ow-row-page",
    key: rIdx
  }, row.map((src, i) => {
    const absoluteIndex = rIdx * perRow + i;
    const grow = ratios[absoluteIndex] || 1.6;
    return /*#__PURE__*/React.createElement("button", {
      type: "button",
      key: src,
      className: "ow-card-page",
      style: {
        flexGrow: grow
      },
      onClick: () => openGalleryLightbox(absoluteIndex, OUR_WORK)
    }, /*#__PURE__*/React.createElement("img", {
      src: src,
      alt: isEn ? `Project ${absoluteIndex + 1}` : `Realizace ${absoluteIndex + 1}`,
      className: "ow-img-page",
      loading: isMobile ? absoluteIndex < 24 ? "eager" : "lazy" : absoluteIndex < 6 ? "eager" : "lazy",
      fetchPriority: absoluteIndex < (isMobile ? 10 : 3) ? "high" : "auto",
      decoding: isMobile && absoluteIndex < 24 ? "sync" : "async",
      onLoad: e => {
        const img = e.currentTarget;
        const w = img.naturalWidth || 1;
        const h = img.naturalHeight || 1;
        const ratio = Math.max(0.7, Math.min(3.2, w / h));
        setRatios(prev => prev[absoluteIndex] ? prev : {
          ...prev,
          [absoluteIndex]: ratio
        });
      }
    }));
  })))))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "shell"
  }, /*#__PURE__*/React.createElement("div", {
    className: isMobile ? "section-header visible" : "section-header reveal visible"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "display h2"
  }, t.galleryPartnersH || (isEn ? "We work with architects and designers" : "Spolupráce s architekty a designéry")), /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, t.galleryPartnersP)), /*#__PURE__*/React.createElement("div", {
    className: "partner-grid"
  }, PARTNERS.map(partner => /*#__PURE__*/React.createElement("article", {
    className: isMobile ? "card partner-card visible" : "card partner-card reveal visible",
    key: partner.key
  }, /*#__PURE__*/React.createElement("h3", null, partner.name), /*#__PURE__*/React.createElement("p", null, (t.galleryPartnersNotes || {})[partner.key]), /*#__PURE__*/React.createElement("div", {
    className: "partner-photos"
  }, partner.images.map((src, idx) => /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: `${partner.name} ${idx + 1}`,
    key: src
  }))), /*#__PURE__*/React.createElement("a", {
    className: "partner-link",
    href: partner.url,
    target: "_blank",
    rel: "noreferrer"
  }, t.galleryVisitWeb)))))));
}
function Essence({
  t
}) {
  const isMobile = useIsMobile(820);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hero, {
    t: t,
    small: true,
    image: "assets/img/hero/essence-hero.webp",
    title: t.essenceH,
    lead: isMobile ? t.essenceLeadMobile || t.essenceLead : t.essenceLead
  }), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "shell"
  }, /*#__PURE__*/React.createElement("div", {
    className: "essence-box reveal"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "display h2"
  }, t.essenceBoxH), /*#__PURE__*/React.createElement("div", {
    className: "script"
  }, t.essenceBoxFoot), /*#__PURE__*/React.createElement("p", null, t.essenceBoxP)))));
}
function Contact({
  t
}) {
  const isMobile = useIsMobile(820);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [files, setFiles] = useState([]);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState({
    kind: "",
    text: ""
  });
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
    setStatus({
      kind: "",
      text: ""
    });
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
        text: t.contactError || "Odeslání se nepodařilo. Zkontrolujte formulář a zkuste to znovu."
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
      files.forEach(file => fd.append("files", file, file.name));
      await fetch(CONTACT_WEBHOOK, {
        method: "POST",
        body: fd,
        mode: "no-cors"
      });
      setForm({
        name: "",
        email: "",
        phone: "",
        message: ""
      });
      setFiles([]);
      setTouched(false);
      setStatus({
        kind: "success",
        text: t.contactSuccess
      });
    } catch (err) {
      setStatus({
        kind: "error",
        text: t.contactError
      });
    } finally {
      setSending(false);
    }
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hero, {
    t: t,
    small: true,
    image: "assets/img/hero/contact-hero02.webp",
    title: t.contactH,
    lead: isMobile ? t.contactLeadMobile || t.contactLead : t.contactLead
  }), /*#__PURE__*/React.createElement("section", {
    className: "section contact-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "shell contact-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "reveal contact-sidebar"
  }, /*#__PURE__*/React.createElement("article", {
    className: "card contact-card",
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("h3", null, "Jana Segelberg"), /*#__PURE__*/React.createElement("div", {
    className: "contact-list"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, t.contactEmail), /*#__PURE__*/React.createElement("a", {
    href: "mailto:info@stinenisesenci.cz"
  }, "info@stinenisesenci.cz")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, t.contactPhone), /*#__PURE__*/React.createElement("a", {
    href: "tel:+420724379309"
  }, "+420 724 379 309")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, t.contactAddressLabel), /*#__PURE__*/React.createElement("p", null, "Navr\xE1tilova 1334/16", /*#__PURE__*/React.createElement("br", null), "110 00 Praha 1")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "I\u010CO / DI\u010C"), /*#__PURE__*/React.createElement("p", null, "61289345", /*#__PURE__*/React.createElement("br", null), "CZ7259060062"))), /*#__PURE__*/React.createElement("div", {
    className: "contact-steps"
  }, /*#__PURE__*/React.createElement("strong", null, t.contactHowH), /*#__PURE__*/React.createElement("ol", null, (t.contactHow || []).map((item, idx) => /*#__PURE__*/React.createElement("li", {
    key: idx
  }, item))))), /*#__PURE__*/React.createElement("article", {
    className: "card contact-card"
  }, /*#__PURE__*/React.createElement("h3", null, "Segelberg & Co. s.r.o."), /*#__PURE__*/React.createElement("p", {
    style: {
      lineHeight: 1.9,
      color: "var(--muted)",
      margin: 0
    }
  }, "Sarajevsk\xE1 1051/10", /*#__PURE__*/React.createElement("br", null), "120 00 Praha 2", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), "I\u010CO 08619263", /*#__PURE__*/React.createElement("br", null), "DI\u010C CZ08619263"))), /*#__PURE__*/React.createElement("article", {
    className: "card contact-card contact-form-card reveal",
    id: "contact-form"
  }, /*#__PURE__*/React.createElement("h3", null, t.contactFormTitle), /*#__PURE__*/React.createElement("p", {
    className: "form-note contact-form-intro"
  }, t.contactFormIntro), /*#__PURE__*/React.createElement("form", {
    onSubmit: handleSubmit,
    className: "contact-form"
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, t.contactName), /*#__PURE__*/React.createElement("input", {
    name: "name",
    type: "text",
    required: true,
    value: form.name,
    onChange: e => setForm({
      ...form,
      name: e.target.value
    }),
    onBlur: () => setTouched(true),
    className: touched && !nameOk ? "input-error" : ""
  })), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, t.contactEmail), /*#__PURE__*/React.createElement("input", {
    name: "email",
    type: "email",
    required: true,
    value: form.email,
    onChange: e => setForm({
      ...form,
      email: e.target.value
    }),
    onBlur: () => setTouched(true),
    className: touched && !emailOk ? "input-error" : ""
  })), /*#__PURE__*/React.createElement("div", {
    className: "field full"
  }, /*#__PURE__*/React.createElement("label", null, t.contactPhone), /*#__PURE__*/React.createElement("input", {
    name: "phone",
    type: "tel",
    required: true,
    value: form.phone,
    onChange: e => setForm({
      ...form,
      phone: e.target.value
    }),
    onBlur: () => setTouched(true),
    className: touched && !phoneOk ? "input-error" : ""
  })), /*#__PURE__*/React.createElement("div", {
    className: "field full"
  }, /*#__PURE__*/React.createElement("label", null, t.contactMessage), /*#__PURE__*/React.createElement("textarea", {
    name: "message",
    rows: "6",
    required: true,
    value: form.message,
    onChange: e => setForm({
      ...form,
      message: e.target.value
    }),
    onBlur: () => setTouched(true),
    className: touched && !messageOk ? "input-error" : ""
  })), /*#__PURE__*/React.createElement("div", {
    className: "field full"
  }, /*#__PURE__*/React.createElement("label", null, t.contactPhotos), /*#__PURE__*/React.createElement("label", {
    className: "upload-field"
  }, /*#__PURE__*/React.createElement("input", {
    name: "files",
    type: "file",
    accept: "image/*",
    multiple: true,
    onChange: handleFilesChange
  }), /*#__PURE__*/React.createElement("span", {
    className: "upload-button"
  }, t.uploadSelect), /*#__PURE__*/React.createElement("span", {
    className: "upload-text"
  }, getUploadText())), /*#__PURE__*/React.createElement("small", null, t.contactPhotosNote))), /*#__PURE__*/React.createElement("div", {
    className: "contact-next-steps"
  }, /*#__PURE__*/React.createElement("p", null, t.contactNextStepsTitle), /*#__PURE__*/React.createElement("ul", null, (t.contactNextSteps || []).map((item, idx) => /*#__PURE__*/React.createElement("li", {
    key: idx
  }, item)))), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    disabled: !canSend || sending,
    className: `contact-submit ${canSend && !sending ? "is-active" : "is-disabled"}`
  }, sending ? t.contactSending : t.contactSubmit), status.text && /*#__PURE__*/React.createElement("div", {
    className: `status ${status.kind}`
  }, status.text))))));
}
function LegalPage({
  t,
  kind
}) {
  const map = {
    terms: {
      title: t.termsH,
      intro: t.termsIntro,
      sections: t.termsSections,
      image: "assets/img/hero/process-hero-v3.webp"
    },
    privacy: {
      title: t.privacyH,
      intro: t.privacyIntro,
      sections: t.privacySections,
      image: "assets/img/hero/contact-hero02.webp"
    },
    cookies: {
      title: t.cookiesH,
      intro: (t.cookiesP || [])[0] || "",
      sections: (t.cookiesP || []).slice(1).map((p, idx) => ({
        h: `0${idx + 1}`,
        p
      })),
      image: "assets/img/hero/finished-hero.webp"
    }
  };
  const data = map[kind];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hero, {
    t: t,
    small: true,
    image: data.image,
    title: data.title,
    lead: data.intro
  }), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "shell legal-wrap"
  }, (data.sections || []).map((section, idx) => /*#__PURE__*/React.createElement("article", {
    className: "card legal-card reveal",
    key: section.h + idx
  }, /*#__PURE__*/React.createElement("h3", null, section.h), /*#__PURE__*/React.createElement("p", null, section.p))))));
}
function Footer({
  t
}) {
  return /*#__PURE__*/React.createElement("footer", {
    className: "footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "shell footer-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer-brand"
  }, /*#__PURE__*/React.createElement("a", {
    href: buildHashUrl("/"),
    className: "brand",
    onClick: e => {
      e.preventDefault();
      go("/", {
        force: true,
        native: true
      });
    },
    onTouchEnd: e => {
      e.preventDefault();
      go("/", {
        force: true,
        native: true
      });
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/img/logo/Logo-symbol.svg",
    alt: "Logo"
  }), /*#__PURE__*/React.createElement("span", {
    className: "brand-text"
  }, /*#__PURE__*/React.createElement("small", null, t.brand1), /*#__PURE__*/React.createElement("strong", null, t.brand2))), /*#__PURE__*/React.createElement("p", null, t.footerBlurb)), /*#__PURE__*/React.createElement("div", {
    className: "footer-col"
  }, /*#__PURE__*/React.createElement("h4", null, t.footerContactH), /*#__PURE__*/React.createElement("div", {
    className: "footer-links"
  }, /*#__PURE__*/React.createElement("a", {
    href: "mailto:info@stinenisesenci.cz"
  }, "info@stinenisesenci.cz"), /*#__PURE__*/React.createElement("a", {
    href: "tel:+420724379309"
  }, "+420 724 379 309"), /*#__PURE__*/React.createElement("button", {
    onClick: () => go("/contact")
  }, t.footerCta))), /*#__PURE__*/React.createElement("div", {
    className: "footer-col"
  }, /*#__PURE__*/React.createElement("h4", null, t.footerLegalH), /*#__PURE__*/React.createElement("div", {
    className: "footer-links"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => go("/terms")
  }, t.footerTerms), /*#__PURE__*/React.createElement("button", {
    onClick: () => go("/privacy")
  }, t.footerPrivacy), /*#__PURE__*/React.createElement("button", {
    onClick: () => go("/cookies")
  }, t.footerCookies)))), /*#__PURE__*/React.createElement("div", {
    className: "shell footer-bottom"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 ", new Date().getFullYear(), " ", t.brand2), /*#__PURE__*/React.createElement("span", null, t.rights)));
}
function Faq({
  items
}) {
  const [open, setOpen] = useState(0);
  return /*#__PURE__*/React.createElement("div", {
    className: "faq-list"
  }, items.map((item, idx) => {
    const isOpen = idx === open;
    return /*#__PURE__*/React.createElement("article", {
      className: "faq-item reveal",
      key: item.q
    }, /*#__PURE__*/React.createElement("button", {
      className: "faq-trigger",
      onClick: () => setOpen(isOpen ? -1 : idx)
    }, /*#__PURE__*/React.createElement("span", null, item.q), /*#__PURE__*/React.createElement("span", null, isOpen ? "−" : "+")), isOpen && /*#__PURE__*/React.createElement("div", {
      className: "faq-answer"
    }, item.a));
  }));
}
let externalOpenLightbox = null;
function openGalleryLightbox(index, images) {
  if (typeof externalOpenLightbox === "function") externalOpenLightbox(index, images);
}
function PricingModal({
  t,
  item,
  onClose
}) {
  const initial = item?.subtypes?.[0]?.key || item?.key || "";
  const [activeSubtype, setActiveSubtype] = useState(initial);
  useEffect(() => {
    document.body.classList.add("modal-open");
    return () => document.body.classList.remove("modal-open");
  }, []);
  useEffect(() => {
    if (item?.subtypes?.length) setActiveSubtype(item.subtypes[0].key);else setActiveSubtype(item?.key || "");
  }, [item]);
  if (!item) return null;
  const detail = item.subtypes?.length ? item.subtypes.find(sub => sub.key === activeSubtype) || item.subtypes[0] : item;
  return /*#__PURE__*/React.createElement("div", {
    className: "modal-backdrop",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-panel",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-header"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, item.title)), /*#__PURE__*/React.createElement("button", {
    className: "modal-close",
    onClick: onClose
  }, t.close)), /*#__PURE__*/React.createElement("div", {
    className: "modal-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-image"
  }, /*#__PURE__*/React.createElement("img", {
    src: detail.img || item.img,
    alt: detail.label || item.title
  })), /*#__PURE__*/React.createElement("div", {
    className: "modal-copy"
  }, /*#__PURE__*/React.createElement("div", {
    className: "script"
  }, detail.micro || item.micro), item.subtypes?.length ? /*#__PURE__*/React.createElement("div", {
    className: "modal-subtabs"
  }, item.subtypes.map(sub => /*#__PURE__*/React.createElement("button", {
    key: sub.key,
    className: `chip ${activeSubtype === sub.key ? "active" : ""}`,
    onClick: () => setActiveSubtype(sub.key)
  }, sub.label))) : null, /*#__PURE__*/React.createElement("p", {
    className: "copy"
  }, detail.intro), /*#__PURE__*/React.createElement("div", {
    className: "range-list"
  }, (detail.ranges || []).map(range => /*#__PURE__*/React.createElement("div", {
    className: "range-item",
    key: range.label
  }, /*#__PURE__*/React.createElement("strong", null, range.label), /*#__PURE__*/React.createElement("span", null, range.value)))), /*#__PURE__*/React.createElement("p", {
    className: "copy"
  }, detail.rangesNote), /*#__PURE__*/React.createElement("div", {
    className: "tier-list"
  }, (detail.tiers || []).map(tier => /*#__PURE__*/React.createElement("div", {
    className: "tier-item",
    key: tier.name
  }, /*#__PURE__*/React.createElement("strong", null, tier.name), /*#__PURE__*/React.createElement("span", null, tier.note)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "button button-primary",
    onClick: () => {
      onClose();
      go("/contact");
    }
  }, t.writeMe)))))));
}
function Lightbox({
  state,
  setState,
  t
}) {
  const isEn = (document.documentElement.lang || "cs") === "en";
  useEffect(() => {
    if (!state.open) return;
    document.body.classList.add("modal-open");
    const onKey = e => {
      if (e.key === "Escape") setState(s => ({
        ...s,
        open: false
      }));
      if (e.key === "ArrowRight") setState(s => ({
        ...s,
        index: (s.index + 1) % s.images.length
      }));
      if (e.key === "ArrowLeft") setState(s => ({
        ...s,
        index: (s.index - 1 + s.images.length) % s.images.length
      }));
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", onKey);
    };
  }, [state.open, state.images.length, setState]);
  if (!state.open) return null;
  const src = state.images[state.index];
  return /*#__PURE__*/React.createElement("div", {
    className: "modal-backdrop",
    onClick: () => setState(s => ({
      ...s,
      open: false
    }))
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-panel lightbox",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-header",
    style: {
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, isEn ? `Project ${state.index + 1}` : `Realizace ${state.index + 1}`), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "rgba(255,255,255,.72)"
    }
  }, t.lightboxHint)), /*#__PURE__*/React.createElement("button", {
    className: "modal-close",
    onClick: () => setState(s => ({
      ...s,
      open: false
    }))
  }, t.close)), /*#__PURE__*/React.createElement("div", {
    className: "lightbox-stage"
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: isEn ? `Project ${state.index + 1}` : `Realizace ${state.index + 1}`
  })), /*#__PURE__*/React.createElement("div", {
    className: "lightbox-nav"
  }, /*#__PURE__*/React.createElement("button", {
    className: "button button-secondary",
    onClick: () => setState(s => ({
      ...s,
      index: (s.index - 1 + s.images.length) % s.images.length
    }))
  }, t.previous), /*#__PURE__*/React.createElement("button", {
    className: "button button-primary",
    onClick: () => setState(s => ({
      ...s,
      index: (s.index + 1) % s.images.length
    }))
  }, t.next))));
}
function App() {
  const route = useRoute();
  const {
    lang,
    setLang,
    t
  } = useLang();
  const [menuOpen, setMenuOpen] = useState(false);
  const [pricingItem, setPricingItem] = useState(null);
  const [lightbox, setLightbox] = useState({
    open: false,
    index: 0,
    images: []
  });
  useReveal(route, lang);
  useEffect(() => setMenuOpen(false), [route]);
  useEffect(() => {
    externalOpenLightbox = (index, images) => setLightbox({
      open: true,
      index,
      images
    });
    return () => {
      externalOpenLightbox = null;
    };
  }, []);
  let page = null;
  if (route === "/") page = /*#__PURE__*/React.createElement(Home, {
    t: t
  });else if (route === "/process") page = /*#__PURE__*/React.createElement(Process, {
    t: t
  });else if (route === "/pricing") page = /*#__PURE__*/React.createElement(Pricing, {
    t: t,
    openPricing: setPricingItem
  });else if (route === "/gallery") page = /*#__PURE__*/React.createElement(Gallery, {
    key: `gallery-${route}-${lang}`,
    t: t
  });else if (route === "/essence") page = /*#__PURE__*/React.createElement(Essence, {
    t: t
  });else if (route === "/contact") page = /*#__PURE__*/React.createElement(Contact, {
    t: t
  });else if (route === "/terms") page = /*#__PURE__*/React.createElement(LegalPage, {
    t: t,
    kind: "terms"
  });else if (route === "/privacy") page = /*#__PURE__*/React.createElement(LegalPage, {
    t: t,
    kind: "privacy"
  });else if (route === "/cookies") page = /*#__PURE__*/React.createElement(LegalPage, {
    t: t,
    kind: "cookies"
  });else page = /*#__PURE__*/React.createElement(Home, {
    t: t
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, {
    t: t,
    lang: lang,
    setLang: setLang,
    route: route,
    menuOpen: menuOpen,
    setMenuOpen: setMenuOpen
  }), /*#__PURE__*/React.createElement("main", {
    className: `route-${(route || "/").replace(/[^a-z0-9]+/gi, "-")}`
  }, page), /*#__PURE__*/React.createElement(Footer, {
    t: t
  }), pricingItem && /*#__PURE__*/React.createElement(PricingModal, {
    t: t,
    item: pricingItem,
    onClose: () => setPricingItem(null)
  }), /*#__PURE__*/React.createElement(Lightbox, {
    state: lightbox,
    setState: setLightbox,
    t: t
  }));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
