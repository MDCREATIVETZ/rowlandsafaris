const menuButton=document.querySelector('.menu-toggle');
const menu=document.querySelector('.nav-menu');
if(menuButton&&menu){menuButton.addEventListener('click',()=>{const open=menu.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));document.body.classList.toggle('menu-open',open)});menu.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{menu.classList.remove('open');document.body.classList.remove('menu-open');menuButton.setAttribute('aria-expanded','false')}));}
document.querySelectorAll('[data-year]').forEach(item=>item.textContent=new Date().getFullYear());

const lightbox=document.querySelector('.lightbox');
if(lightbox){const lightboxImage=lightbox.querySelector('img');const closeLightbox=()=>{lightbox.classList.remove('open');lightboxImage.src='';document.body.style.overflow=''};document.querySelectorAll('.gallery-item').forEach(item=>item.addEventListener('click',()=>{const image=item.querySelector('img');lightboxImage.src=image.src;lightboxImage.alt=image.alt;lightbox.classList.add('open');document.body.style.overflow='hidden'}));lightbox.querySelector('.lightbox-close').addEventListener('click',closeLightbox);lightbox.addEventListener('click',event=>{if(event.target===lightbox)closeLightbox()});document.addEventListener('keydown',event=>{if(event.key==='Escape')closeLightbox()});}

const tripForm=document.querySelector('#trip-form');
if(tripForm){tripForm.addEventListener('submit',event=>{event.preventDefault();const data=new FormData(tripForm);const lines=[`Hello Rowland Safaris, my name is ${data.get('name')}.`,`Email: ${data.get('email')}`,`Country: ${data.get('country')||'Not provided'}`,`Travel date: ${data.get('date')||'Flexible'}`,`Travellers: ${data.get('travellers')}`,`Interest: ${data.get('interest')}`,`Accommodation: ${data.get('style')}`,`Message: ${data.get('message')||'Please help me plan my trip.'}`];window.open(`https://wa.me/255798769867?text=${encodeURIComponent(lines.join('\n'))}`,'_blank','noopener');});}

const contactForm=document.querySelector('#contact-form');
if(contactForm){contactForm.addEventListener('submit',event=>{event.preventDefault();const data=new FormData(contactForm);const text=`Hello Rowland Safaris, I am ${data.get('name')}.\nEmail: ${data.get('email')}\nSubject: ${data.get('subject')}\nMessage: ${data.get('message')}`;window.open(`https://wa.me/255798769867?text=${encodeURIComponent(text)}`,'_blank','noopener');});}
