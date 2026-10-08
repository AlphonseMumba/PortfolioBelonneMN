export function initGallery() {
  const root = document.getElementById('gallery');
  if (!root) return;
  const items = [...root.children];
  const n = items.length;
  let index = 0;
  const place = (k, cls) => {
    const el = items[(k + n) % n];
    el.className = `gallery-image ${cls}`;
    el.hidden = false;
  };
  const render = () => {
    items.forEach((el) => { el.className = 'gallery-image'; el.hidden = true; });
    place(index, 'center');
    if (n > 1) place(index - 1, 'left');
    if (n > 2) place(index + 1, 'right');
  };
  document.querySelector('.prev-btn')?.addEventListener('click', () => { index = (index - 1 + n) % n; render(); });
  document.querySelector('.next-btn')?.addEventListener('click', () => { index = (index + 1) % n; render(); });
  render();
}
