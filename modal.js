const modal = document.querySelector('.modal');
const modalBtns = document.querySelectorAll('.modal-btn');
const closeModalBtn = document.querySelector('.close-modal');
const modalTitle = document.querySelector('#modal-title');
const modalDescription = document.querySelector('#modal-description');

function openModal() {
  modal.style.opacity = 1;
  modal.style.visibility = 'visible';
}

function closeModal() {
  modal.style.opacity = 0;
  modal.style.visibility = 'hidden';
}

function displayItemInfo(itemName, itemDescription) {
  modalTitle.textContent = itemName;
  modalDescription.textContent = itemDescription;
}

modalBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    const itemName = this.querySelector('td:first-child').textContent;
    const itemDescription = this.querySelector('td:last-child').textContent;
    displayItemInfo(itemName, itemDescription);
    openModal();
  });
});

closeModalBtn.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => e.target === modal ? closeModal() : false);
