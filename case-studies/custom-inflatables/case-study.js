document.querySelectorAll('.bars button').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.bars button').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    const detail = document.getElementById('month-detail');
    detail.replaceChildren();
    const label = document.createElement('b');
    label.textContent = `${button.dataset.month}: `;
    detail.append(label, document.createTextNode(button.dataset.detail));
  });
});
document.querySelectorAll('.image-tabs button').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.image-tabs button').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    const image = document.getElementById('concept-image');
    image.src = button.dataset.src;
    image.alt = button.dataset.alt;
  });
});
const viewer = document.getElementById('image-viewer');
document.querySelectorAll('figure > img, .quote-frame > img').forEach(image => {
  if (image.id === 'concept-image') return;
  const button = document.createElement('button');
  button.className = 'image-zoom';
  button.setAttribute('aria-label', `Enlarge image: ${image.alt}`);
  button.title = 'Enlarge image';
  image.replaceWith(button);
  button.append(image);
  button.addEventListener('click', () => {
    const large = viewer.querySelector('img');
    large.src = image.src;
    large.alt = image.alt;
    viewer.querySelector('p').textContent = image.closest('figure').querySelector('figcaption')?.textContent || image.alt;
    viewer.showModal();
  });
});
viewer.querySelector('button').addEventListener('click', () => viewer.close());
viewer.addEventListener('click', event => { if (event.target === viewer) viewer.close(); });
