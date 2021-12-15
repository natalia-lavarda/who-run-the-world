const buttonSend = document.getElementById("send");

buttonSend.addEventListener("click", (e) => {
  e.preventDefault();
  const abrirModal = () => {
    const modal = document.querySelector("[data-modal]");
    modal.classList.add("modal-show");
  };

  const fecharModal = () => {
    const close = document.querySelector("[data-close]");
    const modal = document.querySelector("[data-modal]");
    close.addEventListener("click", () => {
      modal.classList.remove("modal-show");
    });
  };

  abrirModal();
  fecharModal();
});
