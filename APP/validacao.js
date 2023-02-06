function verificaSeOChutePossuiUmValorValido() {
  const numero = +chute;
  // vai validar se ele é um número inteiro

  if (chuteForInvalido(numero)) {
    console.log("Valor inválido");
  }

  if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
    console.log(
      `Número inválido: o número secreto precisa estar entre ${menorValor} e ${maiorValor}`
    );
  }
}
function chuteForInvalido(numero) {
  return Number.isNaN(numero);
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
  return numero > maiorValor || numero < menorValor;
}
