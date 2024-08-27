const openModalButton = document.getElementById('open-modal-btn');
const closeModalButton = document.getElementById('close-modal-btn');
const modal = document.getElementById('simple-modal');

// Function to open the modal
openModalButton.addEventListener('click', () => {
    modal.style.display = 'flex'; // Show the modal
});

// Function to close the modal
closeModalButton.addEventListener('click', () => {
    modal.style.display = 'none'; // Hide the modal
});