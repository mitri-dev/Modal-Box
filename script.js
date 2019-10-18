// Elements
const btn = document.querySelector('.click-me');
const body = document.querySelector('body');
btn.addEventListener('click', addModal);

function addModal(e) {
  const modal = document.createElement('div');
  modal.innerHTML = `
  <div class="modal">
    <div class="modal-wrapper">
      <header class="modal-header">
        <h1>Modal Header</h1>
        <button>X</button>
      </header>
      <main class="modal-body">
        <h2>Hello I'm a modal</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quo odit expedita voluptatem, itaque
          molestiae
          tempore numquam nostrum? Porro cumque officia quae repellendus ipsa sed architecto voluptatum ab sint omnis?
        </p>
      </main>
      <footer class="modal-footer">
        <h1>Modal Footer</h1>
      </footer>
    </div>
  </div>`;
  body.appendChild(modal);
  modal.querySelector('button').addEventListener('click', () => {
    modal.remove();
  });
  modal.querySelector('.modal').addEventListener('click', e => {
    if (e.target.className === 'modal') {
      modal.remove();
    }
  });
}
