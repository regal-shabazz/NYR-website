import { getImages } from '../scripts/utils.js';

export function loadGallerySection() {
  const images = getImages(); // Dynamically fetch images

  const gallerySection = document.createElement('section');
  gallerySection.classList.add('gallery');
  
  gallerySection.innerHTML = `
    <div class="container">
      <h2>Gallery</h2>
      <div class="gallery-content">
        <div class="gallery-row row-top">
          ${images.map((img, index) => `<img src="${img}" alt="Gallery Image ${index + 1}" />`).join('')}
        </div>
        <div class="gallery-row row-bottom">
          ${images.map((img, index) => `<img src="${img}" alt="Gallery Image ${index + 1}" />`).join('')}
        </div>
      </div>
      <button class="view-gallery-btn">View Gallery</button>
    </div>
  `;
  
  document.getElementById("main-content").appendChild(gallerySection);

  addGalleryHoverEffect();
}

function addGalleryHoverEffect() {
  const galleryContent = document.querySelector('.gallery-content');
  const topRow = document.querySelector('.row-top');
  const bottomRow = document.querySelector('.row-bottom');

  galleryContent.addEventListener('mouseenter', () => {
    topRow.style.animationPlayState = 'running';
    bottomRow.style.animationPlayState = 'running';
  });

  galleryContent.addEventListener('mouseleave', () => {
    topRow.style.animationPlayState = 'paused';
    bottomRow.style.animationPlayState = 'paused';
  });
}