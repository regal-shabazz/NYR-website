// main.js
import { setDynamicBackground } from '../scripts/utils.js';

export function loadHeroSection() {
  const heroSection = document.createElement("section");
  heroSection.classList.add("hero");
  heroSection.id = "hero";

  heroSection.innerHTML = `
    <div class="container">
      <div class="hero-content">
        <h1>Plan Your Perfect Event</h1>
        <p class="hero-subtitle">Expert planning for unforgettable experiences</p>
        <p class="rotating-tagline">We Plan… <span id="dynamic-text">Weddings</span></p>
        <div class="hero-buttons">
          <button class="cta-button primary">Plan My Event</button>
          <button class="cta-button secondary">View Gallery</button>
        </div>
      </div>
    </div>
  `;

  document.getElementById("main-content").appendChild(heroSection);

  // Array of background images
  const heroBackgroundImages = [
    "../assets/images/image2.jpg",
    "../assets/images/image3.jpg",
    "../assets/images/image1.jpg",
    "../assets/images/image6.jpg",
    "../assets/images/image7.jpg",
    "../assets/images/image8.jpg",
    "../assets/images/image9.jpg",
    "../assets/images/image4.jpg"
  ];

  // Set dynamic background for hero section
  setDynamicBackground(heroSection, heroBackgroundImages, 7000);

  // Rotating Tagline Logic
  const taglineText = ["Weddings", "Corporate Events", "Concerts"];
  let taglineIndex = 0;

  function rotateTagline() {
    const dynamicText = document.getElementById("dynamic-text");
    dynamicText.textContent = taglineText[taglineIndex];
    taglineIndex = (taglineIndex + 1) % taglineText.length;
  }

  setInterval(rotateTagline, 3000);
}
