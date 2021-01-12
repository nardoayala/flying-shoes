const toggleModal = (isVisible) => {
  const modalMenu = document.querySelector('.modal-menu');
  if (isVisible) {
    modalMenu.style.transform = 'translateX(-500px)';
  } else {
    modalMenu.style.transform = 'translateX(0)';
  }
};

export default toggleModal;
