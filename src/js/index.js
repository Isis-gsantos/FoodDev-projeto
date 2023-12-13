// CÓDIGO CARROSSEL DE IMAGENS
const imagens = document.querySelectorAll('.slide');
const setaAvancar = document.querySelector('.seta-avancar');
const setaVoltar = document.querySelector('.seta-voltar');

let imagemAtual = 0;

setaAvancar.addEventListener('click', () => {
    event.preventDefault();

    esconderImagemAberta();
    imagemAtual = (imagemAtual + 1) % imagens.length;
    imagens[imagemAtual].classList.add('mostrar');
});

setaVoltar.addEventListener('click', () => {
    event.preventDefault();

    esconderImagemAberta();
    imagemAtual = (imagemAtual - 1 + imagens.length) % imagens.length;
    imagens[imagemAtual].classList.add('mostrar');
});

function esconderImagemAberta() {
    const imagemAberta = document.querySelector('.mostrar');
    if (imagemAberta) {
        imagemAberta.classList.remove('mostrar');
    }
}

// CÓDIGO SELEÇÃO DE BOTÕES
const botoes = document.querySelectorAll('.botao');
const itensCatalogo = document.querySelectorAll('.items');

botoes.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        event.preventDefault();
        
        itensCatalogo.forEach(item => {
            item.classList.remove('mostrar');
        });

        if (itensCatalogo[indice]) {
            itensCatalogo[indice].classList.add('mostrar');
        }
    });
});