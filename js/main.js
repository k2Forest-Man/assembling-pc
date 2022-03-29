const modalWindow = document.querySelector('.modal')
const buttonModals = document.querySelectorAll('.btn')
const modalCloseButton = document.querySelector('.modal-close-button')
const pageBody = document.querySelector('body')

buttonModals.forEach((item) => {
  item.addEventListener('click', () => {
    modalWindow.style.display = 'flex';
    pageBody.classList.add('noscroll');
  });
});

modalWindow.addEventListener ('click', (e) => {
  const isModal = e.target.closest('.modal-inner');

  if (!isModal) {
    modalWindow.style.display = 'none';
    pageBody.classList.remove('noscroll');
  }
});

modalCloseButton.addEventListener('click', () => {
  modalWindow.style.display = 'none';
  pageBody.classList.remove('noscroll');
});