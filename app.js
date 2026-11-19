const logoPath = 'assets/elmori-logo-original.png';
const products = {
  cards: { title: 'Business cards', service: 'Business cards', kind: 'cards', desc: 'A considered first impression, in the palm of your hand.', details: 'Explore a ready-made direction or request a custom business card. Share your logo, contact details and preferred style; Elmori prepares a preview for your approval.' },
  flyers: { title: 'Flyers', service: 'Flyers', kind: 'flyers', desc: 'Clear, focused print for your next offer or announcement.', details: 'Promote a service, event or offer with a focused layout. Format, paper, quantity, price and production timing are confirmed for your project.' },
  rollups: { title: 'Roll-up banners', service: 'Roll-up banners', kind: 'rollups', desc: 'A strong presence for your space, event or presentation.', details: 'Present your business in a clear, readable vertical format. Artwork size and stand specifications are confirmed before production.' },
  brochures: { title: 'Brochures & catalogues', service: 'Brochures & catalogues', kind: 'brochures', desc: 'Your products and services, brought together beautifully.', details: 'Bring your story, services or product range into a coherent printed piece. Page count, format, copy and imagery are agreed before design begins.' },
  packaging: { title: 'Packaging', service: 'Packaging', kind: 'packaging', desc: 'Boxes, bags and thoughtful details with a shared identity.', details: 'Extend your visual identity to packaging and paper bags. Suitable formats, materials, dielines and production availability will be confirmed for each request.' },
  identity: { title: 'Brand identity', service: 'Brand identity', kind: 'identity', desc: 'A coherent identity, from your logo to your printed materials.', details: 'Build a consistent visual direction through logo design, typography, colour and stationery. The Elmori logo shown in this preview is the owner-supplied artwork, not a generated wordmark.' },
  video: { title: 'Video, motion & animation', service: 'Video, motion & animation', kind: 'identity', desc: 'Stories made for screens.', details: 'A reserved space for video, motion graphics and animation, including YouTube, TikTok and social content. The showreel and individual project pages are coming soon.' }
};
const serviceGroups = [
  ['Design & print', [['Business cards','cards'],['Flyers','flyers'],['Brochures & catalogues','brochures'],['Roll-up banners','rollups'],['Labels & stickers',null]]],
  ['Brand & stationery', [['Logo & visual identity','identity'],['Letterheads & envelopes','identity'],['Presentation folders','identity'],['Brand guidelines','identity']]],
  ['Packaging', [['Boxes & packaging','packaging'],['Paper shopping bags','packaging'],['Packaging labels',null]]],
  ['Digital & social', [['Posts & stories','digital'],['Digital banners','digital'],['YouTube & TikTok video','video'],['Motion & animation','video']]],
  ['Explore & plan', [['Template collection','templates'],['Selected work','work'],['Business starter packages',null],['Design guides',null]]],
  ['Help & information', [['How it works','process'],['Artwork preparation','artwork'],['Frequently asked questions','faq'],['Order tracking',null],['Terms & privacy',null]]]
];
const industries = ['Food & Hospitality','Construction & Trades','Beauty & Wellness','Health & Clinic','Real Estate & Home','Corporate & Professional','Industrial & Automotive','Creative & Media','Retail & Luxury','Education & Personal Brand'];
let selectedIndustry = industries[0];
function artwork(kind) {
  const img = `<img class="art-logo" src="${logoPath}" alt="Elmori Graphics official artwork" width="1650" height="467">`;
  if (kind === 'identity') return `<div class="identity-mark">${img}</div>`;
  const cls = {cards:'paper-card',flyers:'paper-flyer',rollups:'paper-rollup',brochures:'paper-book',packaging:'paper-box'}[kind] || 'paper-card';
  return `<div class="paper ${cls}">${img}${kind==='flyers'?'<div class="sample-lines" aria-hidden="true"><i></i><i></i><i></i></div>':''}</div>`;
}
function hydrateMockups(root=document) { root.querySelectorAll('.mockup[data-kind]').forEach(el => { el.innerHTML = artwork(el.dataset.kind); }); }
document.querySelector('#product-grid').innerHTML = Object.entries(products).filter(([id])=>id!=='video').map(([id,p])=>`<article class="product-card"><button data-product="${id}" aria-label="Explore ${p.title}"><div class="mockup" data-kind="${p.kind}"></div><div class="product-copy"><h3>${p.title}</h3><p>${p.desc}</p><span class="view">Explore product <span aria-hidden="true">→</span></span></div></button></article>`).join('');
document.querySelector('#service-directory').innerHTML = serviceGroups.map(([title,items])=>`<div class="directory-group"><h3>${title}</h3><ul>${items.map(([name,id])=>`<li><button ${id?`data-service="${id}"`:'disabled aria-disabled="true"'}>${name}${!id?'<span class="soon">Coming soon</span>':'<span aria-hidden="true">↗</span>'}</button></li>`).join('')}</ul></div>`).join('');
document.querySelector('#industry-list').innerHTML = industries.map((name,i)=>`<button data-industry="${i}" aria-pressed="${i===0}">${name}</button>`).join('');
hydrateMockups();
function renderTemplates() {
  const p=products[document.querySelector('#template-product').value];
  document.querySelector('#template-results').innerHTML = ['Classic','Signature','Editorial'].map(style=>`<button class="template-card" data-template="${style}"><div class="mockup" data-kind="${p.kind}"></div><span>${selectedIndustry} · ${style}</span><small>${p.title} · Layout concept</small></button>`).join('');
  hydrateMockups(document.querySelector('#template-results'));
}
renderTemplates();
document.querySelector('#template-product').addEventListener('change',renderTemplates);
const detailDialog=document.querySelector('#detail-dialog');
const requestDialog=document.querySelector('#request-dialog');
function showDetail(title,content) {
  document.querySelector('#dialog-content').innerHTML=`<p class="eyebrow">ELMORI · FROM DESIGN TO PRINT</p><h2>${title}</h2>${content}`;
  hydrateMockups(detailDialog);
  if(!detailDialog.open) detailDialog.showModal();
}
function showProduct(id) {
  const p=products[id];
  showDetail(p.title,`<div class="mockup" data-kind="${p.kind}"></div><p>${p.details}</p>${id==='video'?'<p class="notice">Showreel coming soon. No video is available in this concept preview.</p>':`<div class="dialog-links"><button data-browse="${id}">Browse layout concepts →</button></div>`}<button class="button" data-request="${p.service}">Discuss this project <span aria-hidden="true">↗</span></button><p class="local-note">Local concept preview. This opens a demonstration form; nothing is submitted.</p>`);
}
function openRequest(service,description='') {
  if(detailDialog.open) detailDialog.close();
  document.querySelector('#request-service').value=service;
  if(!document.querySelector('#request-service').value) document.querySelector('#request-service').value='Custom project';
  document.querySelector('#project-form textarea').value=description;
  document.querySelector('#request-summary').replaceChildren();
  requestDialog.showModal();
}
const infoContent={
  about:['From Design to Print.', '<p>Elmori Graphics brings graphic design, brand identity and printed materials into one consistent visual language.</p><p>The full studio introduction is being prepared. No client claims, awards or testimonials have been added to this preview.</p>'],
  contact:['Let’s connect.', '<p>Official website: <a href="https://elmori.ca">elmori.ca</a></p><p>Phone, email and location will be added after confirmation. Contact details shown in older mockups have not been treated as verified.</p><button class="button" data-request="Custom project">Preview a project request ↗</button>'],
  digital:['Digital & social design.', '<p>Posts, stories and banners that follow your visual identity across screens. Share the channels and formats you need; scope and delivery are confirmed for each project.</p><button class="button" data-request="Custom project">Discuss digital content ↗</button>'],
  artwork:['Prepare your artwork.', '<p>Start with your original logo, final text and the highest-quality images available. We will confirm the correct dimensions, bleed, colour requirements and export settings for the selected product.</p><p>Product-specific checklists are coming soon. Please do not assume one set of dimensions suits every printer or product.</p>']
};
function navigateSection(id) {
  if(detailDialog.open) detailDialog.close();
  const target=id==='faq'?document.querySelector('.faq'):document.getElementById(id);
  target?.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});
}
document.addEventListener('click',event=>{
  const el=event.target.closest('button,a'); if(!el) return;
  if(el.dataset.palette){setTheme(el.dataset.palette);return;}
  if(el.matches('.dialog-close')){el.closest('dialog').close();return;}
  if(el.dataset.product){showProduct(el.dataset.product);return;}
  if(el.dataset.request){openRequest(el.dataset.request);return;}
  if(el.dataset.info){const item=infoContent[el.dataset.info];showDetail(...item);return;}
  if(el.dataset.service){const id=el.dataset.service;if(products[id])showProduct(id);else if(infoContent[id])showDetail(...infoContent[id]);else navigateSection(id);return;}
  if(el.dataset.browse){const id=el.dataset.browse;if(['cards','flyers','brochures','rollups'].includes(id)){document.querySelector('#template-product').value=id;renderTemplates();navigateSection('templates');}else showDetail('Custom design direction','<p>For packaging and identity work, tell us what you need and we will help define a direction. A dedicated collection is being prepared.</p><button class="button" data-request="Custom project">Discuss your project ↗</button>');return;}
  if(el.dataset.industry!==undefined){selectedIndustry=industries[Number(el.dataset.industry)];document.querySelectorAll('[data-industry]').forEach(b=>b.setAttribute('aria-pressed',String(b===el)));renderTemplates();return;}
  if(el.dataset.template){const p=products[document.querySelector('#template-product').value];openRequest(p.service,`I am interested in the ${el.dataset.template} layout concept for ${selectedIndustry}.`);return;}
  if(el.matches('.menu-toggle')){const open=el.getAttribute('aria-expanded')!=='true';el.setAttribute('aria-expanded',String(open));document.querySelector('#main-nav').classList.toggle('open',open);return;}
  if(el.closest('#main-nav')){document.querySelector('#main-nav').classList.remove('open');document.querySelector('.menu-toggle').setAttribute('aria-expanded','false');}
});
document.querySelector('#project-form').addEventListener('submit',event=>{
  event.preventDefault();const data=new FormData(event.target);const summary=document.querySelector('#request-summary');summary.replaceChildren();
  const heading=document.createElement('strong');heading.textContent='Request preview — not sent';
  const text=document.createElement('p');text.textContent=`${data.get('name')} · ${data.get('email')} · ${data.get('service')}`;
  const description=document.createElement('p');description.textContent=data.get('description');
  const note=document.createElement('p');note.textContent='This demonstration does not transmit or store your details. A submission service will be connected before launch.';
  summary.append(heading,text,description,note);summary.scrollIntoView({block:'nearest'});
});
function setTheme(theme){document.documentElement.dataset.theme=theme;document.querySelectorAll('[data-palette]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.palette===theme)));}
setTheme(new URLSearchParams(location.search).get('theme')==='light'?'light':'dark');
function measureRibbon() {
  const {width, height} = document.querySelector('.ribbon').getBoundingClientRect();
  // Scale each curved end uniformly; only the connecting edge grows in width.
  const scale = Math.min(1, width / 600);
  const leftEnd = 84 * scale;
  const rightStart = width - 100 * scale;
  const slope = 12 * scale / Math.max(1, rightStart - leftEnd);
  const topLeft = 3 * scale;
  const topRight = 15 * scale;
  const path = [
    `M 0 ${68 * scale}`,
    `L ${25 * scale} ${28 * scale}`,
    `C ${38 * scale} ${7.2 * scale} ${55 * scale} ${topLeft - 29 * scale * slope} ${leftEnd} ${topLeft}`,
    `L ${rightStart} ${topRight}`,
    `C ${rightStart + 38 * scale} ${topRight + 38 * scale * slope} ${width - 35 * scale} ${20 * scale} ${width - 20 * scale} ${43 * scale}`,
    `L ${width} ${73.6667 * scale}`,
    `L ${width} ${height} L 0 ${height} Z`
  ].join(' ');
  document.querySelector('#ribbon-contour path').setAttribute('d', path);
  document.documentElement.style.setProperty('--ribbon-height', `${Math.ceil(height)}px`);
}
new ResizeObserver(measureRibbon).observe(document.querySelector('.ribbon'));measureRibbon();
