function IdiEnter1(){
    var entrou1 = window.document.getElementById('MovIdiEspa')
    entrou1.style.fontWeight = 'bold'
}
 
function IdiOut1(){
    var saiu1 = window.document.getElementById('MovIdiEspa')
    saiu1.style.fontWeight = 'Normal'
}

function IdiEnter2(){
    var entrou2 = window.document.getElementById('MovIdiIngl')
    entrou2.style.fontWeight = 'bold'
}
 
function IdiOut2(){
    var saiu2 = window.document.getElementById('MovIdiIngl')
    saiu2.style.fontWeight = 'Normal'
}

function IdiEnter3(){
    var entrou3 = window.document.getElementById('MovIdiFran')
    entrou3.style.fontWeight = 'bold'
}
 
function IdiOut3(){
    var saiu3 = window.document.getElementById('MovIdiFran')
    saiu3.style.fontWeight = 'Normal'
}

function IdiEnter4(){
    var entrou4 = window.document.getElementById('MovIdiAlem')
    entrou4.style.fontWeight = 'bold'
}
 
function IdiOut4(){
    var saiu4 = window.document.getElementById('MovIdiAlem')
    saiu4.style.fontWeight = 'Normal'
}

function IdiEnter5(){
    var entrou5 = window.document.getElementById('MovIdiPort')
    entrou5.style.fontWeight = 'bold'
}
 
function IdiOut5(){
    var saiu5 = window.document.getElementById('MovIdiPort')
    saiu5.style.fontWeight = 'Normal'
}

/*
    var movi_menuidioma = window.document.getElementById('MovIdiEspa' )
    movi_menuidioma.addEventListener('mouseenter', Entrou)
    movi_menuidioma.addEventListener('mouseout', Saiu)
    //movi_menuidioma.addEventListener('click', Clicar)
       
    function Entrou() {
        movi_menuidioma.style.fontWeight = 'bold'
    }

    function Saiu() {
        movi_menuidioma.style.fontWeight = 'normal'
    }

   function Clicar(){
        colocar função para implementar tradução de página
    }*/


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