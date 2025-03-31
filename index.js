totalPontos = document.getElementById('total')
mediaFinal = document.getElementById('media')
let pontos = 0
function verificarEscolha1() {
    const selecionado = document.querySelector('input[name="opcao1"]:checked')
    
    if (selecionado) {
        document.getElementById('resultado1').innerText = 'Voçê escolheu a  opção: ' +  selecionado.value
        // document.getElementById('respostaCerta1').innerText = 'A resposta correta é a letra:  e'
        if (selecionado.value === 'e') {
            document.getElementById('respostaCerta1').innerText = 'A resposta está CERTA '
            document.getElementById('respostaCerta1').style.color = 'green'
            pontos += 1
        } else {
            document.getElementById('respostaCerta1').innerText = 'A resposta está ERRADA'
            document.getElementById('respostaCerta1').style.color = '#D90000'
        }
    } else {
        document.getElementById('resultado1').innerText = 'Voçê deve escolher uma opção!'
        document.getElementById('resultado1').style.color = 'red'
    }
    
}

function verificarEscolha2() {
    const selecionado = document.querySelector('input[name="opcao2"]:checked')
    
    if (selecionado) {
        document.getElementById('resultado2').innerText = 'Voçê escolheu a  opção: ' +  selecionado.value
        // document.getElementById('respostaCerta2').innerText = 'A resposta correta é a letra:  a'
        if (selecionado.value === 'a') {
            document.getElementById('respostaCerta2').innerText = 'A resposta está CERTA'
            document.getElementById('respostaCerta2').style.color = 'green'
            pontos += 1
        } else {
            document.getElementById('respostaCerta2').innerText = 'A resposta esta ERRADA'
            document.getElementById('respostaCerta2').style.color = 'red'
        }
    } else {
        document.getElementById('resultado2').innerText = 'Voçê deve escolher uma opção!'
        document.getElementById('resultado2').style.color = 'red'
    }
    
}

function verificarEscolha3() {
    const selecionado = document.querySelector('input[name="opcao3"]:checked')
    
    if (selecionado) {
        document.getElementById('resultado3').innerText = 'Voçê escolheu a  opção: ' +  selecionado.value
        // document.getElementById('respostaCerta3').innerText = 'A resposta correta é a letra:  a'
        if (selecionado.value === 'a') {
            document.getElementById('respostaCerta3').innerText = 'A resposta está CORRETA'
            document.getElementById('respostaCerta3').style.color = 'green'
            pontos += 1
            console.log(pontos)
        } else {
            document.getElementById('respostaCerta3').innerText = 'A resposta está ERRADA'
            document.getElementById('respostaCerta3').style.color = 'red'
        }
    } else {
        document.getElementById('resultado3').innerText = 'Voçê deve escolher uma opção!'
        document.getElementById('resultado3').style.color = 'red'
    }
    
}

function verificarEscolha4() {
    const selecionado = document.querySelector('input[name="opcao4"]:checked')
    
    if (selecionado) {
        document.getElementById('resultado4').innerText = 'Voçê escolheu a  opção: ' +  selecionado.value
        // document.getElementById('respostaCerta4').innerText = 'A resposta correta é a letra:  c'
        if (selecionado.value === 'c') {
            document.getElementById('respostaCerta4').innerText = 'A resposta está CORRETA!'
            document.getElementById('respostaCerta4').style.color = 'green'
            pontos += 1
        }else {
            document.getElementById('respostaCerta4').innerText = 'A resposta está ERRADA!'
        document.getElementById('respostaCerta4').style.color = 'red'
        }
    } else {
        document.getElementById('resultado4').innerText = 'Voçê deve escolher uma opção!'
        document.getElementById('resultado4').style.color = 'red'
    }
    
}

function verificarEscolha5() {
    const selecionado = document.querySelector('input[name="opcao5"]:checked')
    
    if (selecionado) {
        document.getElementById('resultado5').innerText = 'Voçê escolheu a  opção: ' +  selecionado.value
        // document.getElementById('respostaCerta5').innerText = 'A resposta correta é a letra:  d'
        if (selecionado.value === 'd') {
            document.getElementById('respostaCerta5').innerText = 'A resposta está CORRETA!'
            document.getElementById('respostaCerta5').style.color = 'green'
            pontos += 1
        } else {
            document.getElementById('respostaCerta5').innerText = 'A resposta está ERRADA!'
            document.getElementById('respostaCerta5').style.color = 'red'
        }
    } else {
        document.getElementById('resultado5').innerText = 'Voçê deve escolher uma opção!'
        document.getElementById('resultado5').style.color = 'red'
    }
    
}

function verificarEscolha6() {
    const selecionado = document.querySelector('input[name="opcao6"]:checked')
    
    if (selecionado) {
        document.getElementById('resultado6').innerText = 'Voçê escolheu a  opção: ' +  selecionado.value
        // document.getElementById('respostaCerta6').innerText = 'A resposta correta é a letra:  b'
        if (selecionado.value === 'b'){
            document.getElementById('respostaCerta6').innerText = 'A resposta está CORRETA!'
            document.getElementById('respostaCerta6').style.color = 'green'
            pontos += 1
        } else {
            document.getElementById('respostaCerta6').innerText = 'A resposta está CORRETA!'
            document.getElementById('respostaCerta6').style.color = 'red'
        }
    } else {
        document.getElementById('resultado6').innerText = 'Voçê deve escolher uma opção!'
        document.getElementById('resultado6').style.color = 'red'
    }
    
}


function verificarEscolha7() {
    const selecionado = document.querySelector('input[name="opcao7"]:checked');
    if (selecionado) {
        document.getElementById("resultado7").innerText = "Você escolheu a opção: " + selecionado.value
        // document.getElementById('respostaCerta7').innerText = 'A resposta correta é a letra:  a'
        if (selecionado.value === 'a') {
            document.getElementById('respostaCerta7').innerText = 'A resposta está CORRETA!'
        document.getElementById('respostaCerta7').style.color = 'green'
        pontos += 1
        } else {
        document.getElementById('respostaCerta7').innerText = 'A resposta está ERRADA!'
        document.getElementById('respostaCerta7').style.color = 'red'
        }
    } else {
        document.getElementById("resultado7").innerText = "Por favor, selecione uma opção."
         document.getElementById('resultado7').style.color = 'red'
    }
}

function verificarEscolha8() {
    const selecionado = document.querySelector('input[name="opcao8"]:checked')
    if (selecionado) {
        document.getElementById("resultado8").innerText = "Você escolheu a opção: " + selecionado.value
        // document.getElementById('respostaCerta8').innerText = 'A resposta correta é a letra:  c'
        if (selecionado.value === 'c') {
            document.getElementById('respostaCerta8').innerText = 'A resposta está CORRETA!'
            document.getElementById('respostaCerta8').style.color = 'green'
            pontos += 1
        } else {
            document.getElementById('respostaCerta8').innerText = 'A resposta está ERRADA!'
            document.getElementById('respostaCerta8').style.color = 'red'
        }
    } else {
        document.getElementById("resultado8").innerText = "Por favor, selecione uma opção."
         document.getElementById('resultado8').style.color = 'red'
    }
}

function verificarEscolha9() {
    const selecionado = document.querySelector('input[name="opcao9"]:checked');
    if (selecionado) {
        document.getElementById("resultado9").innerText = "Você escolheu a opção: " + selecionado.value
        // document.getElementById('respostaCerta9').innerText = 'A resposta correta é a letra:  a'
        if (selecionado.value === 'a') {
            document.getElementById('respostaCerta9').innerText = 'A resposta está CORRETA!'
            document.getElementById('respostaCerta9').style.color = 'green'
            pontos += 1
        } else {
            document.getElementById('respostaCerta9').innerText = 'A resposta está ERRADA!'
            document.getElementById('respostaCerta9').style.color = 'red'
        }
    } else {
        document.getElementById("resultado9").innerText = "Por favor, selecione uma opção."
         document.getElementById('resultado9').style.color = 'red'
    }
}

function verificarEscolha10() {
    const selecionado = document.querySelector('input[name="opcao10"]:checked');
    if (selecionado) {
        document.getElementById("resultado10").innerText = "Você escolheu a opção: " + selecionado.value
        // document.getElementById('respostaCerta10').innerText = 'A resposta correta é a letra:  c'
        if (selecionado.value === 'c') {
            document.getElementById('respostaCerta10').innerText = 'A resposta está CERTA'
            document.getElementById('respostaCerta10').style.color = 'green'
            pontos += 1
            document.getElementById('total')
        } else {
            document.getElementById('respostaCerta10').innerText = 'A resposta está ERRADA!'
            document.getElementById('respostaCerta10').style.color = 'red'
        }
    } else {
        document.getElementById("resultado10").innerText = "Por favor, selecione uma opção."
        document.getElementById('resultado10').style.color = 'red'
    }
}

function resultadoFinal() {
    if (pontos >= 6) {
        document.getElementById('total').innerText = `Sua pontuação total é: ${pontos} pontos`
        document.getElementById('media').innerText = 'Parabens você foi APROVADO!!!'
    } else {
        document.getElementById('total').innerText = `Sua pontuação total é: ${pontos} pontos`
        document.getElementById('media').innerText = 'Você foi REPROVADO!'
    }
}

