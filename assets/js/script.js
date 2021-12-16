const json = [
  {
    nome: "Maria da Penha",
    foto: "https://catracalivre.com.br/wp-content/thumbnails/eSDkZwkFBiJe06givDqZ_RGR9vM=/wp-content/uploads/2017/03/Maria-Da-Penha.jpg",
    nacionalidade: "Brasileira",
    profissao: "Farmacêutica",
    idade: "76 anos",
    link: "../index.html"
  },
  {
    nome: "Malala Yousafzai",
    foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Malala_Yousafzai_at_Girl_Summit_2014.jpg/675px-Malala_Yousafzai_at_Girl_Summit_2014.jpg",
    nacionalidade: "Paquistanesa",
    profissao: "Filósofa",
    idade: "24 anos",
    link: "./malala.html"
  },
  {
    nome: "Djamila Ribeiro",
    foto: "https://boitempoeditorial.files.wordpress.com/2021/07/djamila-ribeiro-lanca-pequeno-manual-antirracista-1572628503663_v2_1280x1920-e1625513202282.jpg",
    nacionalidade: "Brasileira",
    profissao: "Filósofa",
    idade: "41 anos",
    link: "./djamila.html"
  },
  {
    nome: "Luiza Trajano",
    foto: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Magazine_Luiza_Luiza_Helena_Trajano_%2851387211323%29.jpg",
    nacionalidade: "Brasileira",
    profissao: "Empresária",
    idade: "73 anos",
    link: "./luiza.html"
  },
  {
    nome: "Zileide Silva",
    foto: "https://imagem.natelinha.uol.com.br/tudo-sobre/zileide-silva_9477.jpeg",
    nacionalidade: "Brasileira",
    profissao: "Jornalista",
    idade: "63 anos",
    link: "./zileide.html"
  },
  {
    nome: "Ubah Ali",
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRprw413EOtQOpEVoF0zkd-12lPfavzx6I8oKs3dEvOPgz8ZlIxACYAKSn99lnW74QSJhY&usqp=CAU",
    nacionalidade: "Africana",
    profissao: "Ativista",
    idade: "25 anos",
    link: "./ubah.html"
  },
  {
    nome: "Ruth Rocha",
    foto: "https://images.quatrocincoum.com.br/240/articles-5NTHEfHEdNrH1Qx.jpg",
    nacionalidade: "Brasileira",
    profissao: "Escritora",
    idade: "90 anos",
    link: "./ruth.html"
  },
  {
    nome: "Rachel Levine",
    foto: "https://veja.abril.com.br/wp-content/uploads/2021/12/RACHEL-LEVINE-PORTRAIT-TRANS-2021-02.jpg2_.jpg?quality=70&strip=info",
    nacionalidade: "Americana",
    profissao: "Política",
    idade: "64 anos",
    link: "./rachel.html"
  },
  {
    nome: "Elza Soares",
    foto: "https://f.i.uol.com.br/fotografia/2019/09/11/15682456805d7987b098a92_1568245680_3x4_md.jpg",
    nacionalidade: "Brasileira",
    profissao: "Cantora",
    idade: "91 anos",
    link: "./elza.html"
  },
  {
    nome: "Fernanda Montenegro",
    foto: "https://claudia.abril.com.br/wp-content/uploads/2020/01/323584.jpg",
    nacionalidade: "Brasileira",
    profissao: "Atriz",
    idade: "92 anos",
    link: "./fernanda.html"
  },
  {
    nome: "Carolina Castro",
    foto: "https://statics.forbesargentina.com/2020/08/5f47b89f4ead0.jpg",
    nacionalidade: "Argentina",
    profissao: "Sindicalista",
    idade: "42 anos",
    link: "./carolina.html"
  },
  {
    nome: "Dilma Roussef",
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVMbFwfKHA5A0sF6lkwgJyUU2-v7x6o_GypNvq9IABnbaxP1eHOQObaiUUr6Orc3DzoGM&usqp=CAU",
    nacionalidade: "Brasileira",
    profissao: "Política",
    idade: "74 anos",
    link: "./dilma.html"
  }
];


for (let i = 0; i < json.length; i++) {
  const containerGrid = document.querySelector(".container-grid");
  const linkHome = document.createElement("a");
  const cardSmall = document.createElement("div");
  const inspiringWoman = document.createElement("h2");
  const circle = document.createElement("div");
  const imageCard = document.createElement("img");
  const nacionalidade = document.createElement("h3");
  const profissao = document.createElement("h3");
  const idade = document.createElement("h3");
  
  containerGrid.appendChild(linkHome);
  linkHome.appendChild(cardSmall);
  cardSmall.appendChild(inspiringWoman);
  cardSmall.appendChild(circle);
  circle.appendChild(imageCard);
  cardSmall.appendChild(nacionalidade);
  cardSmall.appendChild(profissao);
  cardSmall.appendChild(idade);
  
  inspiringWoman.innerText = json[i].nome;
  nacionalidade.innerText = json[i].nacionalidade;
  profissao.innerText = json[i].profissao;
  idade.innerText = json[i].idade;
  imageCard.setAttribute("src", json[i].foto);
  linkHome.setAttribute("href", json[i].link);
  
  linkHome.classList.add("link-home");
  cardSmall.classList.add("card-small");
  inspiringWoman.classList.add("inspiring-woman");
  circle.classList.add("circle");
  imageCard.classList.add("image-card");
  idade.classList.add("little-bio");
  inspiringWoman.classList.add("little-bio");
}