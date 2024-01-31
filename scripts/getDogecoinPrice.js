// Fazer código e deixar até 4 ou 3 casas decimais

const apiEndpoint =
  'https://api.binance.com/api/v3/ticker/price?symbol=DOGEBRL';

const valueElements = document.querySelectorAll('#js-dogecoin-value');

async function fetchData() {
  try {
    const response = await fetch(apiEndpoint);
    // console.log(response);
    const json = await response.json();

    changeValues(json.price);
  } catch (error) {
    console.log(error);
  }
}

function changeValues(value) {
  valueElements.forEach((actualElement) => {
    // console.log(actualElement);
    actualElement.innerText = Number(value).toFixed(4).replace('.', ',');

    // Mesmo que:
    const valorParaNumero = Number(value);
    const com4CasasDecimais = valorParaNumero.toFixed(4);
    const trocadoPontoPorVirgula = com4CasasDecimais.replace('.', ',');
  });
}

// Executa ao entrar na página
fetchData();
