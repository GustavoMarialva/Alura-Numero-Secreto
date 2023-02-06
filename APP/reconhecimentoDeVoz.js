const elementoChute = document.getElementById("chute");

const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lang = "pt-br";
recognition.start();

recognition.addEventListener("result", onSpeak);

function onSpeak(e) {
  chute = e.results[0][0].transcript;
  exibeChuteNaTela(chute);
  verificaSeOChutePossuiUmValorValido(chute);
}

// Aprendemos a acessar o conteúdo falado pelo usuário através da API de reconhecimento de voz SpeechRecognition.

// Para isso adicionamos um evento e acessamos a propriedade “results”, depois as duas arrays de índice “0” e por fim o “transcript” que é onde fica o conteúdo falado.

function exibeChuteNaTela(chute) {
  elementoChute.innerHTML = `
      <div>Você disse</div>
      <span class='box'>${chute}</span>
    `;
}
