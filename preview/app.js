const businesses=[
 {name:'Soda La Carreta',cat:'comidas',icon:'🍲',desc:'Sabores guanacastecos preparados con cariño.',tag:'Comidas · ★ 4.8'},
 {name:'Manos de Liberia',cat:'arte',icon:'🎨',desc:'Artesanía, diseño y piezas hechas a mano.',tag:'Arte · ★ 4.9'},
 {name:'Aventura Pampa',cat:'turismo',icon:'☼',desc:'Experiencias únicas para conocer Guanacaste.',tag:'Turismo · ★ 4.7'},
 {name:'Soluciones CR',cat:'servicios',icon:'🛠',desc:'Servicios profesionales para tu hogar y negocio.',tag:'Servicios · ★ 4.6'},
 {name:'Dulce Momento',cat:'comidas',icon:'🍰',desc:'Postres artesanales para celebrar lo especial.',tag:'Comidas · ★ 4.9'},
 {name:'Ruta del Sol',cat:'turismo',icon:'🏝',desc:'Tours, playas y naturaleza con guías locales.',tag:'Turismo · ★ 4.8'}
];
const grid=document.querySelector('#businessGrid'),empty=document.querySelector('#empty'),search=document.querySelector('#search');
function render(filter='all',query=''){const q=query.toLowerCase();const list=businesses.filter(x=>(filter==='all'||x.cat===filter)&&(!q||x.name.toLowerCase().includes(q)||x.desc.toLowerCase().includes(q)));grid.innerHTML=list.map(x=>`<article class="business-card" data-action="business"><div class="business-image">${x.icon}</div><div class="business-info"><h3>${x.name}</h3><p>${x.desc}</p><span class="tag">${x.tag}</span></div></article>`).join('');empty.classList.toggle('hidden',list.length>0)}
render();
document.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('.category').forEach(x=>x.classList.remove('active'));if(b.classList.contains('category'))b.classList.add('active');render(b.dataset.filter,search.value)}));
search.addEventListener('input',()=>render(document.querySelector('.category.active')?.dataset.filter||'all',search.value));
document.querySelectorAll('[data-scroll]').forEach(b=>b.addEventListener('click',()=>document.getElementById(b.dataset.scroll).scrollIntoView()));
document.addEventListener('click',e=>{const action=e.target.closest('[data-action]')?.dataset.action;if(action)toast(action==='cart'?'Tu carrito está vacío':action==='business'?'Pronto podrás publicar tu emprendimiento':'Función de acceso lista para conectar');});
function toast(text){const t=document.querySelector('#toast');t.textContent=text;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2400)}
