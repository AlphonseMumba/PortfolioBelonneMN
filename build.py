#!/usr/bin/env python3
"""Génère le site statique dans docs/ à partir de src/ et docs/data/*.json.  Usage : python3 build.py"""
import datetime, html, json, pathlib, re
R = pathlib.Path(__file__).parent; SRC, OUT = R/'src', R/'docs'
S = dict(URL='https://alphonsemumba.github.io/PortfolioBelonneMN/', EMAIL='belonnentima2@gmail.com', PHONE='+243 824 344 091', PHONE_TEL='+243824344091',
         ADDR='24 Novembre, Pierre Mulele, Gombe, Kinshasa', MAP='https://maps.app.goo.gl/py8X95rebAEcsqoX9',
         FB='https://www.facebook.com/belonne.mitombe', IG='https://www.instagram.com/belonnemitombe0007/', YEAR=datetime.date.today().year)
P = json.loads((OUT/'data/projects.json').read_text(encoding='utf-8'))
C = json.loads((OUT/'data/clients.json').read_text(encoding='utf-8'))
e = lambda s: html.escape(str(s), quote=True)
fill = lambda s, d: re.sub(r'\{\{(\w+)\}\}', lambda m: str(d.get(m.group(1), m.group(0))), s)
pic = lambda src, alt, w, h: f'<img src="{src}" alt="{e(alt)}" width="{w}" height="{h}" loading="lazy" decoding="async">'
NAV = [('index.html', 'Accueil', 'home'), ('project.html', 'Projets', 'project'), ('about.html', 'À propos', 'about'), ('contact.html', 'Contact', 'contact')]
THEME = "<script>try{var t=localStorage.getItem('theme');if(t==='light'||(!t&&matchMedia('(prefers-color-scheme: light)').matches))document.documentElement.classList.add('light-theme')}catch(e){}</script>"
TDLG = '<dialog id="testimonialModal" class="dlg" aria-labelledby="modalClientName"><form method="dialog"><button class="dlg-close" aria-label="Fermer">&times;</button></form><img id="modalClientImage" alt=""><h3 id="modalClientName"></h3><p id="modalClientTestimonial"></p></dialog>'
LDLG = '<dialog id="lightbox" class="dlg dlg-wide" aria-label="Aperçu de la photo"><form method="dialog"><button class="dlg-close" aria-label="Fermer">&times;</button></form><img id="lightbox-image" alt=""><h3 id="lightbox-caption"></h3><p id="lightbox-description"></p></dialog>'
LAYOUT = '''<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{{title}}</title>
<meta name="description" content="{{desc}}">
<link rel="canonical" href="{{url}}">
<meta name="theme-color" content="#2a2a2a">
<meta property="og:type" content="website"><meta property="og:locale" content="fr_FR"><meta property="og:title" content="{{title}}"><meta property="og:description" content="{{desc}}"><meta property="og:url" content="{{url}}"><meta property="og:image" content="{{og}}">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='.9em' font-size='90'%3E📷%3C/text%3E%3C/svg%3E">
{{theme}}
<link rel="stylesheet" href="css/style.css">
<script type="module" src="js/main.js"></script>
{{extra}}
</head>
<body data-page="{{page}}">
<a class="skip-link" href="#main">Aller au contenu</a>
<div class="container">
{{header}}
<main id="main">
{{content}}
</main>
</div>
{{footer}}
{{dialogs}}
</body>
</html>
'''
def nav(cur): return ''.join(f'<li><a href="{h}"{" aria-current=\"page\"" if k == cur else ""}>{t}</a></li>' for h, t, k in NAV)
def gallery():
    items = ''.join(f'<div class="gallery-image">{pic(i["link"], i["title"], i["w"], i["h"])}</div>' for p in P for i in p['images'])
    return ('<section class="gallery-section"><h2 class="section-title">Quelques Moments Capturés</h2><div class="gallery-container">'
            f'<div class="gallery" id="gallery" role="region" aria-roledescription="carrousel" aria-label="Galerie de photos">{items}</div>'
            '<div class="gallery-controls"><button type="button" class="gallery-control prev-btn" aria-label="Photo précédente">‹</button>'
            '<button type="button" class="gallery-control next-btn" aria-label="Photo suivante">›</button></div></div>'
            '<a href="project.html" class="btn">Voir Plus</a></section>')
def testimonials():
    t = ''.join(f'<div class="testimonial">{pic(c["image"], "Portrait de " + c["name"], c["w"], c["h"])}<div class="testimonial-action">'
                f'<button type="button" class="client-detail btn-link" data-name="{e(c["name"])}" data-img="{e(c["image"])}" data-text="{e(c["testimonial"])}">Voir plus</button></div></div>' for c in C)
    return f'<section class="testimonials"><h2 class="section-title">Retours et Avis de Nos Clients</h2><div class="testimonials-container">{t}</div></section>'
def dl(p): return f'<button type="button" class="btn btn-download" data-download="{p["id"]}">Télécharger (PDF)</button>'
def cards():
    return ''.join(f'<article class="project-card"><div class="project-image">{pic(p["images"][0]["link"], p["name"], p["images"][0]["w"], p["images"][0]["h"])}</div>'
                   f'<div class="project-info"><h3>{e(p["name"])}</h3><div class="project-date">{e(p["date"])}</div><a href="{p["slug"]}.html" class="btn">Voir le projet</a> {dl(p)}</div></article>' for p in P)
def detail(p):
    figs = ''.join(f'<button type="button" class="project-detail-image" data-src="{i["link"]}" data-title="{e(i["title"])}" data-desc="{e(i["description"])}">'
                   f'{pic(i["link"], i["title"], i["w"], i["h"])}<span class="image-overlay">{e(i["title"])}</span></button>' for i in p['images'])
    d = f'<p>{e(p["description"])}</p>' if p['description'] else ''
    return (f'<section class="project-detail"><div class="project-detail-header"><h1>{e(p["name"])}</h1><p class="project-date">{e(p["date"])}</p>{d}</div>'
            f'<div class="project-detail-gallery">{figs}</div></section><div class="see-more"><a href="project.html" class="btn">Retour aux projets</a> {dl(p)}</div>')
def render(fname, title, desc, page, content, extra=''):
    dlg = (TDLG if 'client-detail' in content else '') + (LDLG if 'project-detail-image' in content else '')
    d = dict(S, title=e(title), desc=e(desc), url=S['URL'] + ('' if fname == 'index.html' else fname), og=S['URL'] + 'img/profile/profile1.webp', theme=THEME, extra=extra,
             page=page, header=fill((SRC/'partials/header.html').read_text(encoding='utf-8'), {'nav': nav(page)}), footer=fill((SRC/'partials/footer.html').read_text(encoding='utf-8'), S),
             content=fill(content, dict(S, gallery=gallery(), testimonials=testimonials(), projects=cards())), dialogs=dlg)
    (OUT/fname).write_text(fill(LAYOUT, d), encoding='utf-8')
LD = {"@context": "https://schema.org", "@type": "Photographer", "name": "Belonne Mitombe Ntima", "url": S['URL'], "telephone": S['PHONE_TEL'], "email": S['EMAIL'],
      "image": S['URL'] + 'img/profile/profile1.webp', "address": {"@type": "PostalAddress", "streetAddress": "24 Novembre, Pierre Mulele, Gombe", "addressLocality": "Kinshasa", "addressCountry": "CD"}, "sameAs": [S['FB'], S['IG']]}
files = []
for f in sorted((SRC/'pages').glob('*.html')):
    raw = f.read_text(encoding='utf-8'); m = re.match(r'<!--(.*?)-->\n', raw); meta = json.loads(m.group(1))
    render(f.name, meta['title'], meta['desc'], meta['page'], raw[m.end():], f'<script type="application/ld+json">{json.dumps(LD, ensure_ascii=False)}</script>' if meta['page'] == 'home' else '')
    files.append(f.name)
for p in P:
    desc = (p['description'][:150] if p['description'] else f"Série photographique « {p['name']} » par Belonne Mitombe, photographe à Kinshasa.")
    render(p['slug'] + '.html', f"{p['name']} – Belonne Mitombe", desc, 'project', detail(p)); files.append(p['slug'] + '.html')
today = datetime.date.today().isoformat()
(OUT/'sitemap.xml').write_text('<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + ''.join(
    f'  <url><loc>{S["URL"] + ("" if f == "index.html" else f)}</loc><lastmod>{today}</lastmod></url>\n' for f in files) + '</urlset>\n', encoding='utf-8')
(OUT/'robots.txt').write_text(f'User-agent: *\nAllow: /\nSitemap: {S["URL"]}sitemap.xml\n'); (OUT/'.nojekyll').write_text('')
print(len(files), 'pages générées')
