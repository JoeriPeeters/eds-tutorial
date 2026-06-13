import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  const rows = [...block.children];

  const imageDiv = rows[0]?.firstElementChild;
  const textDiv = rows[1]?.firstElementChild;
  const reverseDiv = rows[2]?.firstElementChild;

  const imageOnRight = reverseDiv?.textContent.trim().toLowerCase() === 'true';

  const picture = imageDiv?.querySelector('picture');
  if (picture) {
    const img = picture.querySelector('img');
    if (img) picture.replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }]));
  }

  block.innerHTML = '';

  const media = document.createElement('div');
  media.className = 'teaser-media';
  if (imageDiv) media.append(imageDiv.querySelector('picture') ?? imageDiv.firstElementChild ?? imageDiv);

  const text = document.createElement('div');
  text.className = 'teaser-text';
  if (textDiv) text.append(...textDiv.childNodes);

  if (imageOnRight) {
    block.append(text, media);
    block.classList.add('teaser-image-right');
  } else {
    block.append(media, text);
  }
}
