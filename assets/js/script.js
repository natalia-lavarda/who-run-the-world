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

async function getInfos() {
  const myHeaders = new Headers();

  const myInit = {
    method: "GET",
    headers: myHeaders,
  };

  try {
    const result = await fetch(
      "http://localhost:3000/mulheresInspiradoras/",
      myInit
    );
    const response = await result.json();
    console.log(response);
    response.forEach((mulher) => {
      const cardSmall = document.createElement("div");
      const inspiringWoman = document.createElement("h2");
      const circle = document.createElement("div");
      const imageCard = document.createElement("img");
      const nacionalidade = document.createElement("h3");
      const profissao = document.createElement("h3");
      const idade = document.createElement("h3");

      const containerGrid = document.querySelector(".container-grid");

      containerGrid.appendChild(cardSmall);
      cardSmall.appendChild(inspiringWoman);
      cardSmall.appendChild(circle);
      circle.appendChild(imageCard);
      cardSmall.appendChild(nacionalidade);
      cardSmall.appendChild(profissao);
      cardSmall.appendChild(idade);

      inspiringWoman.innerText = mulher.nome;
      nacionalidade.innerText = mulher.nacionalidade;
      profissao.innerText = mulher.profissao;
      idade.innerText = mulher.idade;
      imageCard.setAttribute("src", mulher.foto);

      cardSmall.classList.add("card-small");
      inspiringWoman.classList.add("inspiring-woman");
      circle.classList.add("circle");
      imageCard.classList.add("image-card");
    });
  } catch (error) {
    console.log("Something is not working :(");
  }
}
