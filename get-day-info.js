/*  Задача 2. Вывод информации о дате

Необходимо разработать функцию getDayInfo(date), которая возвращает информацию о выбранной дате.
Результатом функции должен быть форматированный текст:
<день недели>, <номер недели> неделя <месяц> <год> года
Пример:
getDayInfo(“01.01.2022”) // => Суббота, 1 неделя Января 2022 года
getDayInfo(“15.12.2021”) // => Среда, 3 неделя Декабря 2021 года

что нужно сделать?

У нас должна быть функция, которая принимает в качестве аргумента строку с датой вида "15.12.2021" 
далее функция выводит результат вот так:
getDayInfo(“15.12.2021”) // => Среда, 3 неделя Декабря 2021 года
вот параметры вывода:
<день недели>, <номер недели> неделя <месяц> <год> года
*/

// const dateString = "04.03.2022"
const dateString = '15.12.2021';
// сделаем из входящей строки массив из строк
const parts = dateString.split('.');
// Please pay attention to the month (parts[1]); JavaScript counts months from 0:
// January - 0, February - 1, etc.
// что мы тут делаем?
const myDate = new Date(parts[2], parts[1] - 1, parts[0]);
// console.log(mydate.getDay())

console.log(
  myDate.toLocaleDateString('ru', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
);

// разобьем строку с датой на отдельные части
const myDateString = myDate.toLocaleDateString('ru', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});

const myDateParts = myDateString.split(' ');
console.log(myDateParts);

const dayNumber = myDateParts[1];
const dayName = myDateParts[0];
const monthName = myDateParts[2];
const year = myDateParts[3];

function getWeekNumber(day) {
  console.log(typeof day);
  console.log(typeof Number(day));
  // console.log(day > 20)
  let weekNumber;

  if (day <= 7) {
    console.log(`1 week`);
    weekNumber = 1;
  }
  if (day > 7 && day <= 14) {
    console.log(`2 week`);
    weekNumber = 2;
  }
  if (day >= 15 && day <= 21) {
    console.log(`3 week`);
    weekNumber = 3;
  }
  if (day >= 22 && day <= 28) {
    console.log(`4 week`);
    weekNumber = 4;
  }
  if (day > 28) {
    console.log(`5 week`);
    weekNumber = 5;
  }

  return weekNumber;
}

const weekNumber = getWeekNumber(dayNumber);

function capitalizeFirstLetter(str) {
  const capitalized = str[0].toUpperCase() + str.substring(1);
  return capitalized;
}

console.log(
  `${capitalizeFirstLetter(
    dayName
  )} ${weekNumber} неделя ${capitalizeFirstLetter(monthName)} ${year} года`
);
