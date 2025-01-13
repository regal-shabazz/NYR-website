export function loadModal() {
  const modal = document.createElement('div');
  modal.classList.add('modal');
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close-btn">&times;</span>
      <h2>Request a Quote</h2>
      <form>
        <input type="text" placeholder="Name" required>
        <input type="email" placeholder="Email" required>
        <textarea placeholder="Details of Event" required></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  `;
  
  modal.querySelector('.close-btn').addEventListener('click', () => {
    modal.remove();
  });

  return modal;
}