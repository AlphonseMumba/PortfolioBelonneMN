export function initContact() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  const status = document.getElementById('form-status');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.disabled = true;
    status.textContent = 'Envoi en cours…';
    try {
      const res = await fetch(form.action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } });
      if (!res.ok) throw new Error(res.status);
      form.reset();
      status.textContent = 'Merci ! Votre message a bien été envoyé.';
    } catch {
      status.textContent = "L'envoi a échoué. Réessayez ou écrivez directement par e-mail.";
    } finally {
      btn.disabled = false;
    }
  });
}
