const container = document.querySelector('.container');
const buttonCircles = document.querySelectorAll('.buttonCircle');

const body = document.querySelector('body');
const playAgain = document.querySelector('.play-again');
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

const winningCombos = {
  0: { beats: '2', losesTo: '1' }, // Камінь перемагає ножиці, програє паперу
  1: { beats: '0', losesTo: '2' }, // Папір перемагає камінь, програє ножицям
  2: { beats: '1', losesTo: '0' }, // Ножиці перемагають папір, програють каменю
  3: { beats: '1', losesTo: '0' }, // Ножиці перемагають папір, програють каменю
  4: { beats: '1', losesTo: '0' }, // Ножиці перемагають папір, програють каменю
};

buttonCircles.forEach((button, i) => {
  button.addEventListener('click', (event) => {
    const user = i;
    const computer = Math.floor(Math.random() * 5);

    console.log('Гравець обрав', user);
    console.log('Вибір комп`ютера', computer);

    container.classList.add('invizible');
    wrapper.classList.add('visible');

    yourPickImage.outerHTML = `
    <div class="${choiceToImageMap[i].alt} circle-choise circle-down-choise "></div>
    <div class="circle-choise circle-white-choise "></div>
    <div class="${choiceToImageMap[i].alt}-light circle-choise">
    <img src="./images/${choiceToImageMap[i].image}" alt="">
    </div>
    `;
    // yourPickImage.outerHTML = `
    // <div class="${choiceToImageMap[i].alt} circle-choise circle-down-choise " style="--i:${user};"></div>
    // <div class="circle-choise circle-white-choise " style="--i:${user};"></div>
    // <div class="${choiceToImageMap[i].alt}-light circle-choise" style="--i:${user};">
    // <img src="./images/${choiceToImageMap[i].image}" alt="">
    // </div>
    // `;
    computerPickImage.outerHTML = `
    <div class="${choiceToImageMap[computer].alt} circle-choise circle-down-choise "></div>
    <div class="circle-choise circle-white-choise "></div>
    <div class="${choiceToImageMap[computer].alt}-light circle-choise">
    <img src="./images/${choiceToImageMap[computer].image}" alt="">
    </div>
    `;
    computerPickImage.outerHTML = `
    <div class="${choiceToImageMap[computer].alt} circle-choise circle-down-choise "></div>
    <div class="circle-choise circle-white-choise "></div>
    <div class="${choiceToImageMap[computer].alt}-light circle-choise">
    <img src="./images/${choiceToImageMap[computer].image}" alt="">
    </div>
    `;

    console.log(buttonChoise);

    // buttonChoise.classList.add('circle-choise');

    userImage.src = `./images/${choiceToImageMap[user].image}`;
    userImage.alt = `${choiceToImageMap[computer].alt}`;

    computerImage.src = `./images/${choiceToImageMap[computer].image}`;
    computerImage.alt = `${choiceToImageMap[computer].alt}`;

    const chekWinner = () => {
      if (user === computer) {
        youWinText.textContent = computerWinsText.textContent = 'нічия';
        return;
      }
    };
    const isUserWinner = winningCombos[user].beats === computer;
    const winner = isUserWinner ? 'ти' : "комп'ютер";

    console.log(`переможець ${winner}`);

    if (isUserWinner) {
      body.classList.add('you-win');
      youWinText.textContent = `${winner} переміг`;
    } else {
      body.classList.add('computer-wins');
      computerWinsText.textContent = `${winner} переміг`;
    }

    chekWinner();
  });
});

// console.log(winningCombos);
