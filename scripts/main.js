import { loadHeader } from '../components/header.js'
import { loadHeroSection } from '../components/hero.js'
import { loadAboutSection } from '../components/about.js'
import { loadGallerySection } from '../components/gallery.js'


document.addEventListener("DOMContentLoaded", function () {
  const splashScreen = document.createElement("div");
  splashScreen.classList.add("splash-screen");

  splashScreen.innerHTML = `
  <div class="container">
    <img src="../assets/images/main-logo-black.png" alt="logo">
  </div>
  `;

  document.body.appendChild(splashScreen);

  setTimeout(() => {
    splashScreen.remove();

    document.getElementById("main-content").innerHTML = "";
    loadHeader()
    loadHeroSection()
    loadAboutSection()
    loadGallerySection()
  }, 3000);
});



/* 

fix the splashscreen later

*/