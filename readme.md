# 🪨 Rock, Paper, Scissors, Lizard, Spock – Solution

Це рішення до бонусного варіанту гри **Rock, Paper, Scissors, Lizard, Spock**, створеної як інтерпретація класичної гри з додатковими виборами.

![Design preview for the Rock, Paper, Scissors coding challenge](./design/desktop-preview.jpg)

---

## 👋 Welcome!

Гра підтримує адаптивну верстку і розроблена для гри проти комп’ютера. Кожен вибір має свої сильні та слабкі сторони.

---

## 🔍 Огляд

### 🎯 Завдання

Користувачі повинні мати змогу:

- Переглядати оптимальне компонування залежно від розміру екрана
- Грати у Rock, Paper, Scissors, Lizard, Spock проти комп’ютера

---

## 📏 Правила гри

> Якщо гравець виграє — **+1 бал**  
> Якщо програє — **-1 бал**  
> Нічия — рахунок не змінюється

### Виграшні комбінації

| Вибір          | Перемагає             |
| -------------- | --------------------- |
| ✂ **Scissors** | 📄 Paper, 🦎 Lizard   |
| 📄 **Paper**   | 🪨 Rock, 🖖 Spock     |
| 🪨 **Rock**    | ✂ Scissors, 🦎 Lizard |
| 🦎 **Lizard**  | 📄 Paper, 🖖 Spock    |
| 🖖 **Spock**   | 🪨 Rock, ✂ Scissors   |

---

## 🛠 Технології

### 🔧 Побудовано з використанням:

- Semantic **HTML5**
- **CSS** змінні та анімації
- **Flexbox** та адаптивна верстка
- Чистий **JavaScript**

---

## 🧠 Що я вивчив

- Робота з DOM для інтерактивної логіки
- Побудова адаптивного інтерфейсу
- Застосування умовної логіки для визначення переможця
- Анімація виграшного вибору

---

## 🧾 Структура проєкту
```html
├── index.html
├── style.css
├── reset.css
├── mobile.css
├── app.js
├── style-guide.md
├── readme.md
├── /images
└── /design
```
### 📄 HTML Head

```html
<link
  href="https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed&display=swap"
  rel="stylesheet"
/>
<link rel="stylesheet" href="./reset.css" />
<link rel="stylesheet" href="./style.css" />
<link rel="stylesheet" href="./mobile.css" />
```
## 🏗 Основна частина `<body>`

### 🔹 Header
- **Логотип**: `logo-bonus.svg`
- **Блок рахунку**: `.scoreNumber`

### 🔹 Ігрова зона (`.container`)
- 5 кнопок з класом `.buttonCircle`, кожна має внутрішню структуру:

```html
<button class="buttonCircle" data-id="0">
  <div class="circle circle-down scissors"></div>
  <div class="circle circle-white"></div>
  <div class="circle scissors-light">
    <img src="./images/2.svg" alt="scissors">
  </div>
</button>
```

### 🔹 Екран результату (`.wrapper`)

- `.your-pick` — вибір гравця  
- `.computer-pick` — вибір комп’ютера  
- `.button-play-again` — кнопка перезапуску  

---

## Footer

- Кнопка **Rules** відкриває модальне вікно з правилами  
- Зображення правил: `image-rules-bonus.svg`  

---

⚙️ **JS Функціонал**

- Основні змінні

```js
const buttonCircles = document.querySelectorAll('.buttonCircle');
const scoreNumber = document.querySelector('.scoreNumber');

const choiceToImageMap = {
0: { image: '2.svg', alt: 'scissors' },
1: { image: '1.svg', alt: 'paper' },
2: { image: '0.svg', alt: 'rock' },
3: { image: '3.svg', alt: 'lizard' },
4: { image: '4.svg', alt: 'spock' },
};
```
Комбінації виграшу
```js
const winningCombos = {
0: { beats: ['1', '3'] }, // scissors
1: { beats: ['2', '4'] }, // paper
2: { beats: ['0', '3'] }, // rock
3: { beats: ['1', '4'] }, // lizard
4: { beats: ['0', '2'] }, // spock
};
```

🚀 **Запуск**

Відкрий [index.html](https://juliyapershina.github.io/hw-persina-rock-scissors-paper-lizard-spok/) у браузері — і можна грати!

