"use strict";

cartao.addEventListener("change", function mudaCor(event) {
    var elementoSelecionado = event.target;
    var isRadioTipo = elementoSelecionado.classList.contain('opcoesDoCartao');
    if (isRadioTipo) {
        cartao.style.backgroundColor = elementoSelecionado.value;
    }
});