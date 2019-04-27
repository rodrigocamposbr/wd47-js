"use strict";

;(function () {
    var btnAjuda = document.querySelector('#btnAjuda');
    btnAjuda.addEventListener("click", function () {
        var ajudas = ["Bem Vindo ao Ceep", "Clique no btn Linhas para mudar o layout"];

        ajudas.forEach(function (ajuda) {
            adicionaCartaoNoMural({ conteudo: ajuda });
        });
    });
    btnAjuda.classList.remove('no-js');
})();

// const ajudas = [
//     {conteudo: "Bem Vindo ao Ceep", cor: "#F05450"}
//     ,{conteudo: "Clique no botao Linhas para alterar o layout", cor: "#92c4ec"}
// ]

// adicionaCartaoNoMural(ajuda)