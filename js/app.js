function comprar() {
    let tipoDeIngresso = document.getElementById('tipo-ingresso').value;
    console.log(tipoDeIngresso.value);

    //Atividade 1
    //////////////////////////////////////////////////////////////
    let qtdInput = document.getElementById('qtd');
    //////////////////////////////////////////////////////////////
    let qtd = parseInt(qtdInput.value);
    console.log(qtdInput);
    console.log(qtd);

    //Atividade 1
    //////////////////////////////////////////////////////////////
    if (isNaN(qtd) || qtd <= 0) {
        alert('Por favor, insira uma quantidade válida');
    }
    //////////////////////////////////////////////////////////////

    if (tipoDeIngresso == 'pista') {
        comprarPista(qtd);
    } else if (tipoDeIngresso == 'superior') {
        comprarSuperior(qtd);
    } else {
        comprarInferior(qtd);
    }
}

function comprarPista(qtd) {
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);

    if (qtd > qtdPista) {
        alert('Qantidade indisponível para tipo pista!');
    } else {
        qtdPista = qtdPista - qtd;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert('Compra realizada com sucesso!');
    }
}

function comprarSuperior(qtd) {
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);

    if (qtd > qtdSuperior) {
        alert('Qantidade indisponível para tipo superior!');
    } else {
        qtdSuperior = qtdSuperior - qtd;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        alert('Compra realizada com sucesso!');
    }
}

function comprarInferior(qtd) {
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);

    if (qtd > qtdInferior) {
        alert('Qantidade indisponível para tipo inferior!');
    } else {
        qtdInferior = qtdInferior - qtd;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        alert('Compra realizada com sucesso!');
    }
}

//Atividade 2
//////////////////////////////////////////////////////////////
// function converterParaInteiro(valorEmString) {
//     return parseInt(valorEmString);
// }

// let valorEmString = '50';
// let valorInteiroDaString = converterParaInteiro(valorEmString);
// console.log(valorInteiroDaString);
//////////////////////////////////////////////////////////////

//Atividade 3
//////////////////////////////////////////////////////////////
// function adicao(a, b) {
//     return a + b;
// }

// function subtracao(a, b) {
//     return a - b;
// }

// function multiplicacao(a, b) {
//     return a * b;
// }

// function divisao(a, b) {
//     if (b !== 0){
//         return a / b;
//     } else {
//         return 'Erro: divisão por zero.';
//     }
// }

// function calculadora(operacaoSelecionada, a, b) {
//     switch(operacaoSelecionada){
//         case 'soma':
//             return adicao(a, b);
//         case 'subtração':
//             return subtracao(a, b);
//         case 'multiplicação':
//             return multiplicacao(a, b);
//         case 'divisão':
//             return divisao(a, b);
//         default:
//             return 'Operação inválida.';
//     }
// }

// let resultado = calculadora('soma', 5, 3);
// console.log(resultado);
//////////////////////////////////////////////////////////////

//Atividade 4
//////////////////////////////////////////////////////////////
// function verificarParOuImpar(numero) {
//     if (numero % 2 === 0) {
//         return 'Par';
//     } else {
//         return 'Ímpar';
//     }
// }

// let numero = 7;
// let resultadoParOuImpar = verificarParOuImpar(numero);
// console.log(resultadoParOuImpar);
//////////////////////////////////////////////////////////////

//Atividade 5
//////////////////////////////////////////////////////////////
// function converterTemperatura(valor, escala) {
//     if (escala.toLowerCase() === 'celsius') {
//         return (valor * 9/5) + 32;
//     } else if (escala.toLowerCase() ==- 'fahrenheit') {
//         return (valor - 32) * 5/9;
//     } else {
//         return 'Escala Inválida!';
//     }
// }

// let temperaturaCelsius = 25;
// let temperaturaFahrenheit = converterTemperatura(temperaturaCelsius, 'celsius');
// console.log(temperaturaFahrenheit);
//////////////////////////////////////////////////////////////