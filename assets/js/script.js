(() => {
  const buttonSend = document.querySelector("[btn-send]");
  buttonSend.addEventListener("click", (e) => {
    e.preventDefault();
    openModal();
    closeModal();
    clearFields();
  });

  const clearFields = () => {
    const form = document.querySelector("[data-form]");
    form.reset();
  };

  const openModal = () => {
    const modal = document.querySelector("[data-modal]");
    modal.classList.add("modal-show");
  };

  const closeModal = () => {
    const close = document.querySelector("[data-close]");
    const modal = document.querySelector("[data-modal]");
    close.addEventListener("click", () => {
      modal.classList.remove("modal-show");
    });
  };
})();