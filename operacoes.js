//cosiderar o botão de opção como parte de escolha para a execução da operação entre o valor 1 e 2.
function operacoes() {
    var entrada1 = window.document.getElementById('entrada1')
    var entrada2 = window.document.getElementById('entrada2')
    var ResultadoFinal = window.document.querySelector('div.ResultadoFinal')
    var valor1 = Number(entrada1.value)
    var valor2 = Number(entrada2.value)
    var valoroperacao = valor1 + valor2
    ResultadoFinal.innerHTML = `O Resultado da operação é ${valoroperacao}`

}

