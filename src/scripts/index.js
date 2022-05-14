const listaPersonagens = document.querySelectorAll(".personagem");
const personagemGrande = document.querySelector("#personagem-jogador-1");
const nomePersonagem = document.getElementsByClassName("nome");

listaPersonagens.forEach(function (item) {
  item.addEventListener("mouseover", function () {
    const personagemSelecionado = document.querySelector(".selecionado");

    if (personagemSelecionado) {
      personagemSelecionado.classList.remove("selecionado");
    }

    personagemGrande.src = `../src/imagens/${item.id}.png`;

    nomePersonagem[0].innerHTML = `<h2>${item.dataset.name}</h2>`;

    item.classList.add("selecionado");
  });
});