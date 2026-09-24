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
document.querySelectorAll('.quote-views button').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.quote-views button').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    document.getElementById('quote-before').hidden = button.dataset.quoteView !== 'before';
    document.getElementById('quote-after').hidden = button.dataset.quoteView !== 'after';
  });
});
const viewer = document.getElementById('image-viewer');
document.querySelectorAll('.email-views button').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.email-views button').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    const image = document.getElementById('email-evidence');
    image.src = button.dataset.src;
    image.alt = button.dataset.alt;
    image.parentElement.setAttribute('aria-label', `Enlarge image: ${image.alt}`);
  });
});
document.querySelectorAll('figure > img, .board-image > img').forEach(image => {
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
