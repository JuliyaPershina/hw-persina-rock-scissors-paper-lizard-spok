const body = document.querySelector('body');
const container = document.querySelector('.container');
const wrapper = document.querySelector('.wrapper');
wrapper.classList.add('invizible');

const scoreNumber = document.querySelector('.scoreNumber');

const buttonCircles = document.querySelectorAll('.buttonCircle');
const buttonRulesUp = document.querySelector('.button-rules-up');
const buttonRulesDown = document.querySelector('.button-rules-down');
const popover = document.getElementById('pop-rules');

const buttonPlayAgain = document.querySelector('.button-play-again');
const playAgain = document.querySelector('.play-again');
const textPlayAgain = document.querySelector('.text-play-again');
const userImage = document.querySelector('.your-pick > img');
const computerImage = document.querySelector('.computer-pick > img');
const youWinText = document.querySelector('.you-win');
const computerWinsText = document.querySelector('.computer-wins');
const yourPickImage = document.querySelector('.your-pick-image');
const computerPickImage = document.querySelector('.computer-pick-image');

let scor = 0;

const choiceToImageMap = {
  0: { image: '2.svg', alt: 'scissors' },
  1: { image: '1.svg', alt: 'paper' },
  2: { image: '0.svg', alt: 'rock' },
  3: { image: '3.svg', alt: 'lizard' },
  4: { image: '4.svg', alt: 'spock' },
};

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

    setTimeout(() => {
      computerPickImage.outerHTML = `
    <div class="computer-pick-image"><div class=" circle-choise circle-down-choise ${choiceToImageMap[computer].alt}"></div>
    <div class="circle-choise circle-white-choise "></div>
    <div class=" circle-choise ${choiceToImageMap[computer].alt}-light">
    <img src="./images/${choiceToImageMap[computer].image}" alt="">
    </div></div>
    `;
    }, 2000);

    const isUserWinner =
      winningCombos[user].beats[0] == computer ||
      winningCombos[user].beats[1] == computer;
    const winner = isUserWinner ? 'ти' : "комп'ютер";

    console.log(winningCombos[user].beats[0], winningCombos[user].beats[1]);
    console.log(isUserWinner);
    console.log(`переможець ${winner}`);

    const YourPickRiples = document.querySelectorAll('.your-pick .riple');
    const ComputerPickRiples = document.querySelectorAll(
      '.computer-pick .riple'
    );
    console.log(YourPickRiples, ComputerPickRiples);

    setTimeout(() => {
      if (user === computer) {
      } else {
        if (isUserWinner) {
          YourPickRiples.forEach((elem) => {
            elem.classList.remove('invizible');
          });
        } else {
          ComputerPickRiples.forEach((elem) => {
            elem.classList.remove('invizible');
          });
        }
      }
      
    }, 2000);

    setTimeout(() => {
      buttonPlayAgain.classList.remove('invizible');
    }, 3000);

    const chekWinner = () => {
      setTimeout(() => {
        if (user === computer) {
          textPlayAgain.textContent = 'draw';
        } else {
          if (isUserWinner) {
            textPlayAgain.textContent = 'YOU WIN';
            scor += 1;
            scoreNumber.textContent = scor;
          } else {
            textPlayAgain.textContent = 'YOU LOOSE';
          }
        }
      }, 2000);
    };

    chekWinner();
  });
});

playAgain.addEventListener('click', (event) => {
  const yourPickImage = document.querySelector('.your-pick-image');
  const computerPickImage = document.querySelector('.computer-pick-image');
  const YourPickRiples = document.querySelectorAll('.your-pick .riple');
  const ComputerPickRiples = document.querySelectorAll('.computer-pick .riple');

  textPlayAgain.textContent = '';

  ComputerPickRiples.forEach((elem) => {
    elem.classList.add('invizible');
  });
  YourPickRiples.forEach((elem) => {
    elem.classList.add('invizible');
  });

  buttonPlayAgain.classList.add('invizible');

  wrapper.classList.remove('visible');
  container.classList.remove('invizible');

  yourPickImage.outerHTML = `<div class="your-pick-image"></div>`;
  computerPickImage.outerHTML = `<div class="computer-pick-image"></div>`;
});

buttonRulesUp.addEventListener('click', (event) => {
  event.stopPropagation();
  body.classList.toggle('body-dark');
});
buttonRulesDown.addEventListener('click', (event) => {
  event.stopPropagation();
  body.classList.remove('body-dark');
});
popover.addEventListener('click', (event) => {
  event.stopPropagation();
  body.classList.add('body-dark');
});

body.addEventListener('click', (event) => {
  body.classList.remove('body-dark');
});
