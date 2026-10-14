const menu = document.querySelector('.menu');
const navigation = document.querySelector('#navigation');
function closeMenu() { navigation?.classList.remove('open'); menu?.setAttribute('aria-expanded', 'false'); menu?.setAttribute('aria-label', 'Abrir menú'); }
menu?.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; navigation.classList.toggle('open', open); menu.setAttribute('aria-expanded', String(open)); menu.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú'); });
navigation?.addEventListener('click', (event) => { if (event.target.closest('a')) closeMenu(); });
document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && menu?.getAttribute('aria-expanded') === 'true') { closeMenu(); menu.focus(); } });
const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();
const player = document.querySelector('#youtube-player');
const videoButtons = document.querySelectorAll('[data-video]');
videoButtons.forEach((button) => button.addEventListener('click', () => {
  const { video, title, type } = button.dataset;
  if (!player || !/^[\w-]{11}$/.test(video)) return;
  player.src = `https://www.youtube-nocookie.com/embed/${video}?rel=0&autoplay=1`;
  player.title = `Sound de Barrio - ${title}`;
  document.querySelector('#current-video-title').textContent = title;
  document.querySelector('#current-video-type').textContent = type;
  document.querySelector('#youtube-fallback').href = `https://www.youtube.com/watch?v=${video}`;
  videoButtons.forEach((item) => { const selected = item === button; item.classList.toggle('selected', selected); item.setAttribute('aria-pressed', String(selected)); });
}));
