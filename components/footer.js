export function loadFooter() {
  const footer = document.createElement("footer");
  footer.classList.add("footer");
  
  footer.innerHTML = `
    <div class="footer-content">
      <p>&copy; 2024 Event Planner. All rights reserved.</p>
      <ul>
        <li><a href="#terms">Terms of Service</a></li>
        <li><a href="#privacy">Privacy Policy</a></li>
      </ul>
    </div>
  `;

  return footer;
}