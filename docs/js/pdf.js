const JSPDF_URL = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js';

const loadScript = (src) => new Promise((ok, ko) => {
  if (window.jspdf) return ok();
  document.head.append(Object.assign(document.createElement('script'), { src, onload: ok, onerror: ko }));
});

const toJpeg = (url) => new Promise((ok, ko) => {
  const img = new Image();
  img.onload = () => {
    const c = Object.assign(document.createElement('canvas'), { width: img.naturalWidth, height: img.naturalHeight });
    c.getContext('2d').drawImage(img, 0, 0);
    ok({ data: c.toDataURL('image/jpeg', 0.8), w: c.width, h: c.height });
  };
  img.onerror = ko;
  img.src = url;
});

export async function downloadProject(id) {
  const [, projects] = await Promise.all([loadScript(JSPDF_URL), fetch('data/projects.json').then((r) => r.json())]);
  const p = projects.find((x) => x.id === id);
  if (!p) return;
  const doc = new window.jspdf.jsPDF();
  doc.setFontSize(22);
  doc.text(doc.splitTextToSize(p.name.toUpperCase(), 170), 20, 30);
  doc.setFontSize(12);
  doc.text(`Date : ${p.date}`, 20, 60);
  doc.text('Photographe : Belonne Mitombe', 20, 70);
  if (p.description) {
    doc.setFontSize(11);
    doc.text(doc.splitTextToSize(p.description, 170), 20, 90);
  }
  for (const im of p.images) {
    doc.addPage();
    const pic = await toJpeg(im.link);
    const k = Math.min(170 / pic.w, 150 / pic.h);
    doc.addImage(pic.data, 'JPEG', 20, 20, pic.w * k, pic.h * k);
    doc.setFontSize(13);
    doc.text(im.title, 20, pic.h * k + 32);
    doc.setFontSize(10);
    doc.text(doc.splitTextToSize(im.description || '', 170), 20, pic.h * k + 42);
  }
  doc.save(`${p.slug}.pdf`);
}
