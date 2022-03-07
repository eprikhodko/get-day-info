/*  Задача 2. Вывод информации о дате

Необходимо разработать функцию getDayInfo(date), которая возвращает информацию о выбранной дате.
Результатом функции должен быть форматированный текст:
<день недели>, <номер недели> неделя <месяц> <год> года
Пример:
getDayInfo(“01.01.2022”) // => Суббота, 1 неделя Января 2022 года
getDayInfo(“15.12.2021”) // => Среда, 3 неделя Декабря 2021 года

// теперь своими словами, что нужно сделать?

У нас должна быть функция, которая принимает в качестве аргумента строку с датой вида "15.12.2021" 
далее функция выводит результат вот так:
getDayInfo(“15.12.2021”) // => Среда, 3 неделя Декабря 2021 года
вот параметры вывода:
<день недели>, <номер недели> неделя <месяц> <год> года
*/

// const dateString = "04.03.2022"
const datestr = '15.12.2021';

function getDayInfo(datestring) {
  /* 
  - функция getDayInfo принимает на вход строку, которая содержит дату вот в таком формате: '15.12.2021'
  - далее мы должны на основе этой строки сделать объект Date, чтобы получить доступ к дате и времени и методам управления ими
  (доки лежат здесь: https://learn.javascript.ru/date)
  - советы по созданию объекта Date из строки: https://stackoverflow.com/questions/5619202/parsing-a-string-to-a-date-in-javascript 
  */

  // сначала разобьем входящую строку на массив из отдельных строк, чтобы можно было передать их конструктору new Date() в правильном порядке
  const parts = datestring.split('.');
  const year = parts[2];
  const month = parts[1];
  const day = parts[0];

  /* 
  создадим объект Date используя конструктор new Date()
  формат следующий: new Date(year, month, date, hours, minutes, seconds, ms)
  Параметр date здесь представляет собой день месяца. Я использовал в конструкторе ниже вместо date, название day.
  Мы последовательно передаем конструктору год, месяц, и день. Учтите, что нумерация месяцев начинается с нуля, поэтому мы передаем конструктору month - 1, уменьшая индекс месяца на единицу.
  */
  const myDate = new Date(year, month - 1, day); // myDate сейчас выглядит так: Wed Dec 15 2021

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
  const yearNum = myDateParts[3];

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
    )} ${weekNumber} неделя ${capitalizeFirstLetter(monthName)} ${yearNum} года`
  );
}

getDayInfo(datestr);
