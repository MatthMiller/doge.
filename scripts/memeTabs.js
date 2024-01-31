const memesImages = [
  '../images/memes/meme-1.png',
  '../images/memes/meme-2.png',
  '../images/memes/meme-3.png',
];
const tabsContainer = document.querySelector('#js-tabs');
const memeContainer = document.querySelector('#js-meme-container');

// Popula/Cria os elementos de tab
// e imagem no HTML
memesImages.forEach((actualLink, index) => {
  const tabElement = document.createElement('div');
  tabElement.classList.add('tab');
  tabElement.innerText = index + 1;

  const imageContainer = document.createElement('div');
  imageContainer.classList.add('image-container');

  const imageElement = document.createElement('img');
  imageElement.classList.add('meme');
  imageElement.src = actualLink;
  imageContainer.appendChild(imageElement);

  tabsContainer.appendChild(tabElement);
  memeContainer.appendChild(imageContainer);
});

// Selecionando todos as tabs e imagens criadas
const tabsElements = document.querySelectorAll('#memes .tab');
const imageContainerElements = document.querySelectorAll(
  '#memes .image-container'
);
// console.log(tabsElements);
// console.log(imageContainerElements);

// Inicializa com o primeiro meme selecionado
imageContainerElements[0].classList.add('active');
tabsElements[0].classList.add('active');

// Adicionando event listeners
tabsElements.forEach((actualTab) => {
  actualTab.addEventListener('click', handleChangeImage);
});

function handleChangeImage(event) {
  const tabClicked = event.target;
  const clickedIndex = Number(tabClicked.innerText);

  // Remove .active de todas as tabs
  // Remove .active de todos os image containers
  tabsElements.forEach((actualTab, index) => {
    tabsElements[index].classList.remove('active');
    imageContainerElements[index].classList.remove('active');
  });

  // - 1 porque somei mais um no começo do código
  const selectedImage = imageContainerElements[clickedIndex - 1];

  // Adiciona classe active na imagem selecionada
  // E na tab selecionada
  selectedImage.classList.add('active');
  tabClicked.classList.add('active');
}
