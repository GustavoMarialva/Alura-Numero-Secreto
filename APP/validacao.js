function verificaSeOChutePossuiUmValorValido() {
  const numero = +chute;
  // vai validar se ele é um número inteiro

  if (chuteForInvalido(numero)) {
    elementoChute.innerHTML += "<div>Valor inválido</div>";
  }

  if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
    elementoChute.innerHTML += `<div>
        Número inválido: Fale um número entre ${menorValor} e ${maiorValor}
      </div>`;
  }

  if (numero === numeroSecreto) {
    document.body.innerHTML = `
    <h2>Você acertou!!!!</h2>
    <h3>O número secreto era ${numeroSecreto}</h3>`;
  }
}
function chuteForInvalido(numero) {
  return Number.isNaN(numero);
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
  return numero > maiorValor || numero < menorValor;
}
