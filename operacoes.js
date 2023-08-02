//cosiderar o botão de opção como parte de escolha para a execução da operação entre o valor 1 e 2.

function OperacaoSimples() {
    var entrada1 = window.document.getElementById('Entrada1')
    var entrada2 = window.document.getElementById('Entrada2')
    var valor1 = Number(entrada1.value)
    var valor2 = Number(entrada2.value)
    var Resultado = valor1 + valor2
    ResultadoFinal.innerText = `O resultado é ${Resultado}` //tanto faz innerText ou innerHTML
    //window.alert(`A soma é ${Resultado}`)
}