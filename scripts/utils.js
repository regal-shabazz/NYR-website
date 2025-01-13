export function setDynamicBackground(element, imageUrls, interval = 7000) {
  let currentImageIndex = 0;

  function changeBackgroundImage() {
    element.style.backgroundImage = `url(${imageUrls[currentImageIndex]})`;
    currentImageIndex = (currentImageIndex + 1) % imageUrls.length;
  }

  setInterval(changeBackgroundImage, interval);
  changeBackgroundImage(); // Initial call to set the first image
}

export function getImages() {
  const basePath = './assets/images/'; // Base path for images
  const imageFiles = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'image4.jpg',
    'image5.jpg',
    'image6.jpg',
    'image7.jpg',
    'image8.jpg',
    'image9.jpg',
    'image10.jpg'
  ];
  
  return imageFiles.map(file => `${basePath}${file}`);
}