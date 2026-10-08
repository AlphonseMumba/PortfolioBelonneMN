import { initGallery } from './gallery.js';
import { initDialogs } from './dialogs.js';
import { initContact } from './contact.js';

document.getElementById('theme-toggle')?.addEventListener('click', () => {
  const light = document.documentElement.classList.toggle('light-theme');
  try { localStorage.setItem('theme', light ? 'light' : 'dark'); } catch {}
});

const toggle = document.querySelector('.nav-toggle');
const menu = document.getElementById('menu');
toggle?.addEventListener('click', () => {
  toggle.setAttribute('aria-expanded', menu.classList.toggle('open'));
});

// Le PDF (et jsPDF) ne sont chargés qu'au premier clic.
document.addEventListener('click', async (e) => {
  const btn = e.target.closest('[data-download]');
  if (!btn) return;
  btn.disabled = true;
  try {
    const { downloadProject } = await import('./pdf.js');
    await downloadProject(btn.dataset.download);
  } catch {
    alert("Le PDF n'a pas pu être généré. Vérifiez votre connexion et réessayez.");
  } finally {
    btn.disabled = false;
  }
});

initGallery();
initDialogs();
initContact();
