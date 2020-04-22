const initSignUpModal = () => {
  var modalBtn = document.querySelector('.modal-btn');
  var modalBg = document.querySelector('.modal-bg');
  var modalClose = document.querySelector('.modal-close');

  if (modalBtn) {
    modalBtn.addEventListener('click', function () {
      modalBg.classList.add('bg-active');
    });

    modalClose.addEventListener('click', function () {
      modalBg.classList.remove('bg-active');
    });
  }
}
export { initSignUpModal }
