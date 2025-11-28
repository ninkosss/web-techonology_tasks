const paragraphCount = document.querySelectorAll('p').length;
console.log(`Кількість параграфів <p>: ${paragraphCount}`);


const h2Count = document.querySelectorAll('h2').length;
console.log(`Кількість заголовків <h2>: ${h2Count}`);


const bodyBackgroundColor = window.getComputedStyle(document.body).getPropertyValue('background-color');
console.log(`Значення background-color <body>: ${bodyBackgroundColor}`);


const wrapperGradient = document.querySelector('.wrapper');
const actualBackground = window.getComputedStyle(wrapperGradient).getPropertyValue('background-image');
console.log(`Фактичний градієнт сторінки: ${actualBackground}`);

const h1FontSize = window.getComputedStyle(document.querySelector('h1')).getPropertyValue('font-size');
console.log(`Значення font-size <h1>: ${h1FontSize}`);