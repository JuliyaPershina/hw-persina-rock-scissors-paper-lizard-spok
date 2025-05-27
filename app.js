const container = document.querySelector('.container');
const buttonCircles = document.querySelectorAll('.buttonCircle');

const body = document.querySelector('body');
const playAgain = document.querySelector('.play-again');
const textPlayAgain = document.querySelector('.text-play-again');
const userImage = document.querySelector('.your-pick > img');
const computerImage = document.querySelector('.computer-pick > img');
const youWinText = document.querySelector('.you-win');
const computerWinsText = document.querySelector('.computer-wins');
const yourPickImage = document.querySelector('.your-pick-image');
const computerPickImage = document.querySelector('.computer-pick-image');
const wrapper = document.querySelector('.wrapper');
wrapper.classList.add('invizible');

const choiceToImageMap = {
  0: { image: '2.svg', alt: 'scissors' },
  1: { image: '1.svg', alt: 'paper' },
  2: { image: '0.svg', alt: 'rock' },
  3: { image: '3.svg', alt: 'lizard' },
  4: { image: '4.svg', alt: 'spock' },
};

// const winningCombos = {
//   0: { beats: '2', losesTo: '1' }, // Камінь перемагає ножиці, програє паперу
//   1: { beats: '0', losesTo: '2' }, // Папір перемагає камінь, програє ножицям
//   2: { beats: '1', losesTo: '0' }, // Ножиці перемагають папір, програють каменю
//   3: { beats: '1', losesTo: '0' }, // Ножиці перемагають папір, програють каменю
//   4: { beats: '1', losesTo: '0' }, // Ножиці перемагають папір, програють каменю
// };
const winningCombos = {
  0: { beats: ['1', '3'], losesTo: '1' }, // scissors
  1: { beats: ['2', '4'], losesTo: '2' }, // paper
  2: { beats: ['0', '3'], losesTo: '0' }, // rock
  3: { beats: ['1', '4'], losesTo: '0' }, // lizard
  4: { beats: ['0', '2'], losesTo: '0' }, // spock
};

buttonCircles.forEach((button, i) => {
  button.addEventListener('click', (event) => {
    const user = i;
    const computer = Math.floor(Math.random() * 5);

    console.log('Гравець обрав', user);
    console.log('Вибір комп`ютера', computer);

    container.classList.add('invizible');
    wrapper.classList.add('visible');

    const yourPickImage = document.querySelector('.your-pick-image');
    const computerPickImage = document.querySelector('.computer-pick-image');

    yourPickImage.outerHTML = `
    <div class="your-pick-image"><div class="${choiceToImageMap[i].alt} circle-choise circle-down-choise "></div>
    <div class="circle-choise circle-white-choise "></div>
    <div class="${choiceToImageMap[i].alt}-light circle-choise">
    <img src="./images/${choiceToImageMap[i].image}" alt="">
    </div></div>
    `;

    computerPickImage.outerHTML = `
    <div class="computer-pick-image"><div class=" circle-choise circle-down-choise ${choiceToImageMap[computer].alt}"></div>
    <div class="circle-choise circle-white-choise "></div>
    <div class=" circle-choise ${choiceToImageMap[computer].alt}-light">
    <img src="./images/${choiceToImageMap[computer].image}" alt="">
    </div></div>
    `;

    const chekWinner = () => {
      if (user === computer) {
        textPlayAgain.textContent = 'draw';
      } else {
        if (isUserWinner) {
          textPlayAgain.textContent = 'YOU WIN';
        } else {
          textPlayAgain.textContent = 'YOU LOOSE';
        }
      }
    };
    const isUserWinner =
      winningCombos[user].beats[0] == computer ||
      winningCombos[user].beats[1] == computer;
    const winner = isUserWinner ? 'ти' : "комп'ютер";

    console.log(winningCombos[user].beats[0], winningCombos[user].beats[1]);
    console.log(isUserWinner);
    console.log(`переможець ${winner}`);

    chekWinner();
  });
});

playAgain.addEventListener('click', (event) => {

  const yourPickImage = document.querySelector('.your-pick-image');
  const computerPickImage = document.querySelector('.computer-pick-image');

  wrapper.classList.remove('visible');
  container.classList.remove('invizible');

  yourPickImage.outerHTML = `<div class="your-pick-image"></div>`;
  computerPickImage.outerHTML = `<div class="computer-pick-image"></div>`;

});


// buttonChoise.classList.add('circle-choise');

// userImage.src = `./images/${choiceToImageMap[user].image}`;
// userImage.alt = `${choiceToImageMap[computer].alt}`;

// computerImage.src = `./images/${choiceToImageMap[computer].image}`;
// computerImage.alt = `${choiceToImageMap[computer].alt}`;

// if (isUserWinner) {
//   body.classList.add('you-win');
//   youWinText.textContent = `${winner} переміг`;
// } else {
//   body.classList.add('computer-wins');
//   computerWinsText.textContent = `${winner} переміг`;
//   textPlayAgain.textContent = `YOU LOSE`;
// }

// console.log(winningCombos);

// Scissors beats Paper
// - Paper beats Rock
// - Rock beats Lizard
// - Lizard beats Spock
// - Spock beats Scissors
// - Scissors beats Lizard
// - Paper beats Spock
// - Rock beats Scissors
// - Lizard beats Paper
// - Spock beats Rock
