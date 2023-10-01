
const personagens = document.querySelectorAll(".personagem")
const botoes = document.querySelectorAll('.botao')


botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        desselecionarBotao();
        desselecionaPersonagem();


        botao.classList.add("selecionado");
        personagens[indice].classList.add("selecionado");

    });

});

function desselecionaPersonagem() {
    const personagemselecionado = document.querySelector(".personagem.selecionado");
    personagemselecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
    const botaoselecionado = document.querySelector(".botao.selecionado");
    botaoselecionado.classList.remove("selecionado");
}
