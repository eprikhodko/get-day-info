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

const dateStr = '15.12.2021';

function getDayInfo(dateString) {
  /* 
  - функция getDayInfo принимает на вход строку, которая содержит дату вот в таком формате: '15.12.2021'
  - далее мы должны на основе этой строки сделать объект Date, чтобы получить доступ к дате и времени и методам управления ими
  (доки лежат здесь: https://learn.javascript.ru/date)
  - советы по созданию объекта Date из строки: https://stackoverflow.com/questions/5619202/parsing-a-string-to-a-date-in-javascript 
  */

  // сначала разобьем входящую строку на массив из отдельных строк, чтобы можно было передать их конструктору new Date() в правильном порядке
  const parts = dateString.split('.');

  // сохраним элементы массива в отдельные константы для удобства чтения
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

  /* 
  Сейчас дата у нас находится в локали по умолчанию, на английском языке.
  Чтобы перевести дату на русский язык, используем метод toLocaleString(locales, options), в параметрах которого укажем нужную нам локаль, и передадим объект с опциями. В опциях укажем, как мы хотим отформатировать вывод.
  */

  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  // получаем строку с датой на русском языке
  const myDateString = myDate.toLocaleDateString('ru', options); // среда, 15 декабря 2021 г.

  // разделим строку с датой на русском языке на массив из отдельных строк
  const myDateParts = myDateString.split(' ');

  // сохраним элементы массива в отдельные константы для удобства чтения
  const dayName = myDateParts[0];
  const dayNumber = myDateParts[1];
  const monthName = myDateParts[2];
  const yearNumber = myDateParts[3];

  // получим номер недели в зависимости от числа месяца
  function getWeekNumber(dayNum) {
    let weekNumber;

    if (dayNum <= 7) {
      weekNumber = 1;
      return weekNumber;
    }
    if (dayNum > 7 && dayNum <= 14) {
      weekNumber = 2;
      return weekNumber;
    }
    if (dayNum > 14 && dayNum <= 21) {
      weekNumber = 3;
      return weekNumber;
    }
    if (dayNum > 21 && dayNum <= 28) {
      weekNumber = 4;
      return weekNumber;
    }
    if (dayNum > 28) {
      weekNumber = 5;
      return weekNumber;
    }
  }

  const weekNumber = getWeekNumber(dayNumber);

  // эта функция делает первую букву строки заглавной
  function capitalizeFirstLetter(str) {
    const capitalized = str[0].toUpperCase() + str.substring(1);
    return capitalized;
  }

  // сформируем отформатированную дату
  const formattedDate = `${capitalizeFirstLetter(
    dayName
  )} ${weekNumber} неделя ${capitalizeFirstLetter(
    monthName
  )} ${yearNumber} года`;

  return formattedDate;
}

getDayInfo(dateStr);
