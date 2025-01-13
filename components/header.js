export function loadHeader() {
  const header = document.createElement("header");
  header.classList.add("header");

  // Mobile header with hamburger icon
  const mobileHeaderContent = `
    <div class="container">
      <div class="logo">
        <img src="../assets/images/main-logo-white.png" alt="logo" class="logo">
      </div>
      <div class="hamburger-menu">
        <i class="fa-solid fa-bars" id="hamburger-icon"></i>
      </div>
    </div>
  `;

  const desktopHeaderContent = `
    <div class="container">
      <div class="logo">
        <img src="../assets/images/main-logo-white.png" alt="logo" class="logo">
      </div>
      <nav class="navbar">
        <ul>
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact" class="cta-button primary">Request a Quote</a></li>
        </ul>
      </nav>
    </div>
  `;

  // Function to create and return the mobile menu list element
  function createMobileMenu() {
    const nav = document.createElement("nav");
    nav.classList.add("navbar");
    nav.innerHTML = `
      <ul>
        <li><a href="#hero">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact" class="cta-button primary">Request A Quote</a></li>
      </ul>
    `;
    return nav;
  }

  // Function to check and load the correct header content
  function updateHeaderContent() {
    header.innerHTML = window.matchMedia("(min-width: 767px)").matches
      ? desktopHeaderContent
      : mobileHeaderContent;

    if (!window.matchMedia("(min-width: 767px)").matches) {
      const hamburgerMenu = header.querySelector(".hamburger-menu");
      const hamburgerIcon = header.querySelector("#hamburger-icon");
      let menuAdded = false;
      let mobileMenu;

      // Toggle menu list and icon on hamburger click
      hamburgerIcon.addEventListener("click", () => {
        if (menuAdded) {
          // Remove the menu list and reset the icon to hamburger
          mobileMenu.remove();
          hamburgerIcon.className = "fa-solid fa-bars";
        } else {
          // Add the menu list and change the icon to close
          mobileMenu = createMobileMenu();
          header.appendChild(mobileMenu);
          hamburgerIcon.className = "fa-solid fa-circle-xmark";
        }
        menuAdded = !menuAdded; // Toggle the flag
      });
    }
  }

  // Initial load
  updateHeaderContent();

  // Listen for window resize to switch header content
  window.addEventListener("resize", updateHeaderContent);

  document.getElementById("main-content").appendChild(header);
}
