// init getDayInfo task
// let date = new Date("2021-12-15")

// console.log(date)

// 15.12.2021
// 2014-04-03
// const weekDaysNames = ["Понедельник", "Вторник", ""]

// var dateStr = '05/23/2014';
const dateString = '04.03.2022';
const splittedDate = '04.03.2022'.split('.');
// const splittedDate = dateString.split(".")
// console.log(splittedDate)
// console.log(splittedDate[0])
// const date = new Date(splittedDate[2], splittedDate[1] - 1, splittedDate[0])

function getDayName(dateStr, locale) {
  const date = new Date(splittedDate[2], splittedDate[1] - 1, splittedDate[0]);
  const dayName = date.toLocaleDateString(locale, { weekday: 'long' });
  return dayName;
}

const day = getDayName(dateString, 'ru-RU'); // Gives back day name
console.log(day);

console.log();

const parts = '04.03.2022'.split('.');
// Please pay attention to the month (parts[1]); JavaScript counts months from 0:
// January - 0, February - 1, etc.
const mydate = new Date(parts[2], parts[1] - 1, parts[0]);
console.log(mydate.toDateString());
console.log(mydate.getDay());
// console.log(parts)

function getWeekNumber(params) {}
