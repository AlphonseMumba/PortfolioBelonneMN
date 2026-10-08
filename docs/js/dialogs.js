// Fenêtres natives <dialog> : focus, touche Échap et retour du focus gérés par le navigateur.
export function initDialogs() {
  const testimonial = document.getElementById('testimonialModal');
  const lightbox = document.getElementById('lightbox');

  document.addEventListener('click', (e) => {
    const client = e.target.closest('.client-detail');
    if (client && testimonial) {
      const img = testimonial.querySelector('#modalClientImage');
      img.src = client.dataset.img;
      img.alt = `Portrait de ${client.dataset.name}`;
      testimonial.querySelector('#modalClientName').textContent = client.dataset.name;
      testimonial.querySelector('#modalClientTestimonial').textContent = client.dataset.text;
      return testimonial.showModal();
    }
    const photo = e.target.closest('.project-detail-image');
    if (photo && lightbox) {
      const img = lightbox.querySelector('#lightbox-image');
      img.src = photo.dataset.src;
      img.alt = photo.dataset.title;
      lightbox.querySelector('#lightbox-caption').textContent = photo.dataset.title;
      lightbox.querySelector('#lightbox-description').textContent = photo.dataset.desc;
      return lightbox.showModal();
    }
    if (e.target instanceof HTMLDialogElement) e.target.close(); // clic sur le fond
  });
}
