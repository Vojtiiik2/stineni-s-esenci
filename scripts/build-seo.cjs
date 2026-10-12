/* Rebuild static pages after editing app.js or i18n/i18n.js: node scripts/build-seo.cjs */
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const root = path.resolve(__dirname, '..');
const read = p => fs.readFileSync(path.join(root, p), 'utf8');
const compiler = { console, TextEncoder, TextDecoder, setTimeout, clearTimeout };
vm.createContext(compiler);
vm.runInContext(read('scripts/vendor/babel-7.26.10.js'), compiler);
const code = compiler.Babel.transform(read('app.js'), { presets: ['react'], comments: true }).code;
fs.writeFileSync(path.join(root, 'app.compiled.js'), code + '\n');
const origin = 'https://stinenisesenci.cz';
const pages = {
 '/': ['Záclony, závěsy a rolety na míru v Praze | Stínění s esencí', 'Záclony, závěsy, rolety a garnýže na míru v Praze a okolí. Výběr látek, zaměření, šití a montáž. Domluvte si nezávaznou konzultaci s Janou Segelberg.', 'Made-to-measure curtains and blinds in Prague | Stínění s esencí', 'Made-to-measure curtains, blinds and curtain tracks in Prague and the surrounding area. Fabric selection, measuring, sewing and installation.'],
 '/process': ['Jak pracujeme: návrh, šití a montáž stínění | Stínění s esencí', 'Jak probíhá realizace záclon, závěsů a rolet na míru. Konzultace ve vašem interiéru, výběr materiálů, zaměření, výroba a finální montáž v Praze a okolí.', 'Our process: design, sewing and installation | Stínění s esencí', 'Discover our process for made-to-measure curtains and blinds: consultation, fabric selection, measuring, production and installation.'],
 '/pricing': ['Orientační ceny záclon, závěsů a rolet | Stínění s esencí', 'Orientační ceny záclon, závěsů, rolet a technických systémů na míru. Prohlédněte si možnosti řešení a domluvte si individuální návrh a rozpočet.', 'Curtains and blinds: indicative prices | Stínění s esencí', 'Explore indicative prices for bespoke curtains, blinds and curtain tracks. Contact us for an individual design and quotation.'],
 '/gallery': ['Realizace záclon, závěsů a stínění | Stínění s esencí', 'Fotografie našich realizací záclon, závěsů a vnitřního stínění. Inspirace pro váš interiér a přehled partnerů, se kterými pracujeme.', 'Curtain and blind projects | Stínění s esencí', 'Browse photographs of our curtain and interior shading projects, find inspiration for your home and discover our partners.'],
 '/essence': ['Esence a atmosféra interiéru | Stínění s esencí', 'Světlo, textil a vůně jako součást atmosféry vašeho interiéru. Seznamte se s esencemi, které doplňují naši práci s prostorem.', 'Essences and interior atmosphere | Stínění s esencí', 'Light, textiles and fragrance as part of your interior atmosphere. Discover the essences that complement our work with interiors.'],
 '/contact': ['Kontakt a konzultace stínění v Praze | Jana Segelberg', 'Domluvte si nezávaznou konzultaci záclon, závěsů a rolet na míru v Praze a okolí. Jana Segelberg: +420 724 379 309, info@stinenisesenci.cz.', 'Contact and shading consultation in Prague | Jana Segelberg', 'Arrange a consultation for bespoke curtains and blinds in Prague and the surrounding area. Jana Segelberg: +420 724 379 309, info@stinenisesenci.cz.'],
 '/terms': ['Obchodní podmínky | Stínění s esencí', 'Obchodní podmínky společnosti Stínění s esencí.', 'Terms and conditions | Stínění s esencí', 'Terms and conditions for Stínění s esencí.'],
 '/privacy': ['Ochrana osobních údajů | Stínění s esencí', 'Informace o zpracování a ochraně osobních údajů na webu Stínění s esencí.', 'Privacy policy | Stínění s esencí', 'Information about personal data processing and privacy at Stínění s esencí.'],
 '/cookies': ['Cookies | Stínění s esencí', 'Informace o používání cookies na webu Stínění s esencí.', 'Cookies | Stínění s esencí', 'Information about cookies on the Stínění s esencí website.']
};
const url = (route, lang) => (lang === 'en' ? '/en' : '') + (route === '/' ? '/' : route + '/');
const esc = s => s.replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;');
const template = read('scripts/page-template.html');
const coreRoutes = Object.keys(pages).slice(0, 6);
const entries = [];
for (const lang of ['cs', 'en']) for (const [route, meta] of Object.entries(pages)) {
 const publicPath = url(route, lang);
 const sandbox = {
  console, TextEncoder, TextDecoder, setTimeout, clearTimeout,
  window: { __PRERENDER__: true, location: {pathname: publicPath, hash:'', search:''}, innerWidth:1280 },
  document: { documentElement: {lang} }, localStorage: {getItem: () => null}
 };
 sandbox.self = sandbox;
 vm.createContext(sandbox);
 for (const file of ['assets/vendor/react-18.3.1.min.js', 'scripts/vendor/react-dom-server-18.3.1.js', 'i18n/i18n.js']) vm.runInContext(read(file), sandbox);
 vm.runInContext(code, sandbox);
 const markup = vm.runInContext('ReactDOMServer.renderToString(React.createElement(App))', sandbox);
 const title = meta[lang === 'en' ? 2 : 0], description = meta[lang === 'en' ? 3 : 1];
 const graph = [
  {'@type':'Organization','@id':origin+'/#organization', name:'Stínění s esencí', url:origin+'/', logo:origin+'/assets/img/logo/Logo-symbol.svg', telephone:'+420724379309', email:'info@stinenisesenci.cz', areaServed:['Praha','Okolí Prahy']},
  {'@type':'WebSite','@id':origin+'/#website', url:origin+'/', name:'Stínění s esencí', publisher:{'@id':origin+'/#organization'}, inLanguage:['cs','en']},
  {'@type':route === '/contact' ? 'ContactPage' : route === '/gallery' ? 'CollectionPage' : 'WebPage', '@id':origin+publicPath+'#webpage', url:origin+publicPath, name:title, description, inLanguage:lang, isPartOf:{'@id':origin+'/#website'}, about:{'@id':origin+'/#organization'}}
 ];
 let html = template.replaceAll('{{LANG}}', lang).replaceAll('{{TITLE}}', esc(title)).replaceAll('{{DESCRIPTION}}', esc(description)).replaceAll('{{URL}}', origin+publicPath).replaceAll('{{CS_URL}}', origin+url(route,'cs')).replaceAll('{{EN_URL}}', origin+url(route,'en')).replace('{{CONTENT}}',markup).replace('{{SCHEMA}}',JSON.stringify({'@context':'https://schema.org','@graph':graph}).replace(/</g,'\\u003c'));
 const hero = markup.match(/background-image:url\(([^)]+)\)/);
 if (hero) html = html.replace('href="assets/img/hero/hero-01.webp"', 'href="'+hero[1]+'"');
 const dest = path.join(root, publicPath, 'index.html');
 fs.mkdirSync(path.dirname(dest), {recursive:true});fs.writeFileSync(dest, html);
 if (coreRoutes.includes(route)) entries.push(`  <url><loc>${origin+publicPath}</loc><xhtml:link rel="alternate" hreflang="cs" href="${origin+url(route,'cs')}"/><xhtml:link rel="alternate" hreflang="en" href="${origin+url(route,'en')}"/><xhtml:link rel="alternate" hreflang="x-default" href="${origin+url(route,'cs')}"/></url>`);
}
fs.writeFileSync(path.join(root,'sitemap.xml'), '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n'+entries.join('\n')+'\n</urlset>\n');
console.log('Built 18 static pages, app.compiled.js and sitemap.xml.');
