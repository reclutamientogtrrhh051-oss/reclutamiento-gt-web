const TALLY_URL='https://tally.so/r/mOzzok';

const menu=document.querySelector('.menu');
const nav=document.querySelector('nav');
if(menu&&nav){
  menu.addEventListener('click',()=>{
    const open=nav.style.display==='flex';
    nav.style.display=open?'none':'flex';
    if(!open){
      nav.style.position='absolute';nav.style.top='66px';nav.style.left='0';nav.style.right='0';nav.style.padding='20px';
      nav.style.background='#fff';nav.style.flexDirection='column';nav.style.borderBottom='1px solid #e5eaf1';
    }
  });
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{if(window.innerWidth<=800)nav.style.display='none'}));
}

function iniciarBuscador(){
  const search=document.getElementById('vacancySearch');
  const noResults=document.getElementById('noResults');
  if(search){
    search.addEventListener('input',()=>{
      const q=search.value.toLowerCase().trim();
      const cards=[...document.querySelectorAll('.vacancy-card')];
      let visible=0;
      cards.forEach(card=>{
        const match=card.textContent.toLowerCase().includes(q);
        card.style.display=match?'flex':'none';
        if(match)visible++;
      });
      if(noResults)noResults.hidden=visible!==0;
    });
  }
}

function crearBotonFlotante(){
  if(document.querySelector('.floating-apply'))return;
  const a=document.createElement('a');
  a.className='floating-apply';
  a.href=TALLY_URL;
  a.target='_blank';
  a.rel='noopener noreferrer';
  a.textContent='👉 SOLICITA TU PLAZA AQUÍ';
  a.setAttribute('aria-label','Solicita tu plaza aquí');
  document.body.appendChild(a);
}

const extra=document.createElement('script');
extra.src='vacantes-nuevas.js';
extra.onload=()=>{iniciarBuscador();crearBotonFlotante();};
document.body.appendChild(extra);