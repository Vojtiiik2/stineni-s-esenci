# Technické SEO – nasazení a další úpravy

## Nasazení na stávající GitHub Pages

Nahrajte celý obsah této složky do kořene stejného repozitáře, ve kterém už běží stinenisesenci.cz. Nahraďte původní soubory. Nahrajte také nové složky process, pricing, gallery, essence, contact, terms, privacy, cookies a en a soubor .nojekyll. CNAME se nemění. Není potřeba měnit hosting ani DNS.

Po publikování otevřete přímo https://stinenisesenci.cz/contact/ a obnovte stránku. Zkontrolujte také mobilní menu, galerie, cenové detaily, přepnutí CZ/EN a starý odkaz https://stinenisesenci.cz/#/contact.

V Google Search Console odešlete sitemapu https://stinenisesenci.cz/sitemap.xml. Pokud už je odeslaná, obsah se aktualizuje na stejné adrese. Zkontrolujte úvodní stránku a nové adresy pomocí Kontroly URL a případně požádejte o indexování. Indexování ani vyšší pozice nejsou zaručené.

## Co bylo změněno

- Skutečné adresy a statické HTML pro devět stávajících stránek v češtině i angličtině.
- Obsah přímo v HTML, nikoli jen prázdný kontejner závislý na JavaScriptu. Interaktivní funkce zůstávají v Reactu.
- Navigační odkazy v HTML, vlastní titulky a popisy, canonical, vzájemné hreflang a x-default odkazy.
- Sitemap pro šest hlavních stránek v obou jazycích. Právní stránky mají vlastní adresy a canonical, nejsou hlavním cílem sitemap.
- JSON-LD Organization, WebSite a WebPage/ContactPage/CollectionPage podle existujících údajů. Žádné vymyšlené recenze nebo adresy.
- Kompatibilita starých adres s # pomocí přechodu na skutečnou adresu. GitHub Pages neumí serverový redirect fragmentu, protože část za # server vůbec nedostává.
- Místní, přesně verzované React knihovny: načítání už nezávisí na externím unpkg.
- Preload hlavního obrázku podle stránky; opravený odkaz na neexistující favicon použitím původního loga.
- Stránka 404 s noindex; canonical pro digitální vizitku /connect/.
- Odstraněny dvě duplicitní překladové položky, beze změny jejich výsledné hodnoty.

CSS je totožné s původní verzí. Viditelné texty, obrázky, inline styly a třídy rozložení byly porovnány pro devět stránek, oba jazyky a mobilní i desktopovou šířku (36 kombinací). Úpravy nebyly vizuálně ověřeny v prohlížeči, protože v pracovním prostředí nebyl dostupný funkční prohlížeč. Doporučená kontrola po nasazení je uvedena výše.

## Další editace

Zdroj vzhledu a chování zůstává app.js, texty jsou v i18n/i18n.js a CSS ve style.css. Po úpravě app.js, překladů nebo HTML šablony spusťte z kořene projektu:

```sh
node scripts/build-seo.cjs
```

Skript používá přibalené build knihovny, nepotřebuje npm install. Vytvoří app.compiled.js, všech 18 HTML stránek a sitemap.xml. Tyto soubory nahrajte spolu s upravenými zdroji. Ruční úpravy v generovaných index.html by další sestavení přepsalo. Metadata jednotlivých stránek jsou v scripts/build-seo.cjs, společná HTML hlavička v scripts/page-template.html. Soubor 404.html a digitální vizitka connect/index.html se editují samostatně.

Doména a nasazení v kořeni jsou záměrně nastavené pro stinenisesenci.cz; pro testování používejte místní server v kořeni projektu, například python -m http.server 8000. Testovací GitHub adresa s názvem repozitáře v URL není cílem této konfigurace.

## Rozsah

Tato aktualizace upravuje technické SEO stávajícího obsahu. Nepřidává nové texty, stránky jednotlivých služeb ani kampaně. Statistiky Search Console a Google firemní profil se spravují samostatně. Formulář a jeho Make endpoint nebyly měněny ani použity k odeslání testovací zprávy; jeho potvrzení při no-cors stále neověřuje úspěšné zpracování serverem.
