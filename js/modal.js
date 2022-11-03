(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-modal-open]'),
      closeModalBtn: document.querySelector('[data-modal-close]'),
      modal: document.querySelector('[data-modal]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
    window.addEventListener('keydown', onEscKeyPress);
    window.addEventListener('click', onBackdropClick);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }
    function onEscKeyPress(event) {
      const ESC_KEY_CODE = 'Escape';
      if (event.code === ESC_KEY_CODE) {
        
        refs.modal.classList.add('is-hidden');
        body.style.overflow = "auto";
        window.removeEventListener('keydown', onEscKeyPress);
      }
    }
    function onBackdropClick(event) {
      if (event.target == refs.modal) {
        refs.modal.classList.add('is-hidden');
        body.style.overflow = "auto";
        window.removeEventListener('click', onBackdropClick);
      }
    }
  })();

  (() => {
    const refs = {
      openModalBtn1: document.querySelector('[data-modal-open-first]'),
      closeModalBtn1: document.querySelector('[data-modal-close-first]'),
      modal: document.querySelector('[data-modal-first]'),
    };
  
    refs.openModalBtn1.addEventListener('click', toggleModal);
    refs.closeModalBtn1.addEventListener('click', toggleModal);
    window.addEventListener('keydown', onEscKeyPress);
    window.addEventListener('click', onBackdropClick);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }
    function onEscKeyPress(event) {
      const ESC_KEY_CODE = 'Escape';
      if (event.code === ESC_KEY_CODE) {
        
        refs.modal.classList.add('is-hidden');
        body.style.overflow = "auto";
        window.removeEventListener('keydown', onEscKeyPress);
      }
    }
    function onBackdropClick(event) {
      if (event.target == refs.modal) {
        refs.modal.classList.add('is-hidden');
        body.style.overflow = "auto";
        window.removeEventListener('click', onBackdropClick);
      }
    }
  })();

  (() => {
    const refs = {
      openModalBtn2: document.querySelector('[data-modal-open-second]'),
      closeModalBtn2: document.querySelector('[data-modal-close-second]'),
      modal: document.querySelector('[data-modal-second]'),
    };
  
    refs.openModalBtn2.addEventListener('click', toggleModal);
    refs.closeModalBtn2.addEventListener('click', toggleModal);
    window.addEventListener('keydown', onEscKeyPress);
    window.addEventListener('click', onBackdropClick);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }
    function onEscKeyPress(event) {
      const ESC_KEY_CODE = 'Escape';
      if (event.code === ESC_KEY_CODE) {
        
        refs.modal.classList.add('is-hidden');
        body.style.overflow = "auto";
        window.removeEventListener('keydown', onEscKeyPress);
      }
    }
    function onBackdropClick(event) {
      if (event.target == refs.modal) {
        refs.modal.classList.add('is-hidden');
        body.style.overflow = "auto";
        window.removeEventListener('click', onBackdropClick);
      }
    }
  })();



  