;(function(){
    const btnAjuda = document.querySelector('#btnAjuda')
    btnAjuda.addEventListener("click", function(){
        // const ajudas = [
        //     "Bem Vindo ao Ceep"
        //     ,"Clique no btn Linhas para mudar o layout"
        // ]

        const xhr = new XMLHttpRequest()
        xhr.open('GET', 'https://ceep.herokuapp.com/cartoes/instrucoes')
        xhr.responseType = "json"
        xhr.send()
        xhr.addEventListener("load", function(){
            const objeto = xhr.response
            const ajudas = objeto.instrucoes

            ajudas.forEach(function(ajuda){
                adicionaCartaoNoMural(ajuda)
            })
        })
    })
    btnAjuda.classList.remove('no-js')
})()


// const ajudas = [
//     {conteudo: "Bem Vindo ao Ceep", cor: "#F05450"}
//     ,{conteudo: "Clique no botao Linhas para alterar o layout", cor: "#92c4ec"}
// ]

// adicionaCartaoNoMural(ajuda)