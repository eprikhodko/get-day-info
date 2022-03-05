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

function capitalizeFirstLetter(str) {
  const capitalized = str[0].toUpperCase() + str.substring(1);
  return capitalized;
}

const dayName = myDateParts[0];

console.log(`${capitalizeFirstLetter(dayName)}`);

function getWeekNumber(params) {}
