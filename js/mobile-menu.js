(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-mobile-menu-open]'),
    closeModalBtn: document.querySelector('[data-mobile-menu-close]'),
    modal: document.querySelector('[data-mobile-menu]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.mobile-menu.classList.toggle('is-hidden');
  }
})();
