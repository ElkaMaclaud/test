// 1)Ответ:  
//         - Первым делом разделить кучу из 8-ми монет на три части;
//         - Затем взвесить 2 кучи из трех монет(кучу из 2-монет пока не трогать)
//             Если одна из взвешенных куч весит больше другой, то значит там наша монета и 
//             необходимо 2-м взвешиванием 2 монеты из этой кучи взвесить, а третью монету не трогать и 
//             если одна из этих монет тяжелее, то значит эта та самая тяжелая монета. В противном случае 
//             (если обе монеты весят одинаково) наша тяжелая монета - 3-ья 
//             (которую мы не взвешивали);
//         - Если обе кучи (из 3-х монет весят одинаково), то взвешиваем 2 монеты их 3-ей кучи, 
//             в которой 2 монеты и соответственно так находим нашу тяжелую монету.

// 2) Ответ: 
//             [ 7   4  6 ]
//             [ 8  11  5 ]
//             [ 3  10  9 ]

// 3) Ответ: 
//             Максимальное количество экспериментов = 100
//             Объяснение: 
//             1. Стратегия в том, чтобы сначала использовать первый предмет, чтобы найти диапозон высот, 
//          в котором находится критическая точка. После того как первый предмет разобьется, используем второй предмет для точногго определения
//          критической высоты. 
//             2. Начнем с высоты полученного диапозона и будем увеличивать на 1 шаг и выбрасывать предмет пока предмет не разобьется. 
//         Это значение и будет критической высотой.
//         То есть наиболее эффективный метод - это уменьшение шагов при каждом сбросе, то есть начинаем с x
//         формула получения максимального количества экспериментов (x + (x-1) + (x-2)...+1) => x*(x+1)/2 = 5000
//         x = 100 => 100*(100+1)/2 = 5050

// 4) Ответ: 60
//             Возьмем за общее кол-во пирожков в столовой за X, тогда получается:
//             x/3 + 2 + x/4 + 3 + x/5 + 8 = x
//             20x/60 + 15x/60 + 12x/60 + 780 = x  // Помножим на 60 оба равенства, чтобы изьавиться от делителя
//             20x + 15x + 12x = 60x - 780
//             47x - 60x + 780 = 0
//             -13x= -780
//             x = 60
//             Получаем, что в столовой 60 пирожков.

// Задачи по программированию:

// Задачa № 1
function numberOfComputers(n) {
  const str = "компьютер";
  let result = n + " " + str;
  if ([2, 3, 4].includes(n % 10) && ![12, 13, 14].includes(n)) {
    result += "а";
  } else if (n % 10 !== 1 || n === 11) {
    result += "ов";
  }
  return result;
}

console.log(numberOfComputers(1048));

// Задачa № 2
function findingCommonFact(inputArr) {
  let arr = [];
  for (let i = 2; i <= inputArr[0]; i++) {
    if (inputArr[0] % i === 0) {
      arr.push(i);
    }
  }
  for (const item of inputArr.slice(1)) {
    for (const div of arr) {
      if (item % div !== 0) {
        arr = arr.filter((i) => i !== div);
      }
    }
  }
  return arr;
}
console.log(findingCommonFact([42, 12, 18]));

// Задачa № 3
function findPrimeNumbers(first, end) {
  const arr = [];
  function isPrime(num) {
    if (num <= 1) return false;
    let div = 2;
    while (div <= Math.sqrt(num)) {
      if (num % div === 0) {
        return false;
      }
      div++;
    }
    return true;
  }
  for (let i = first; i <= end; i++) {
    if (isPrime(i)) {
      arr.push(i);
    }
  }
  return arr;
}

console.log(findPrimeNumbers(11, 20));

// Задачa № 4
function printMultiplicationTable(n) {
  const len = (n * n).toString().length;
  const orange = "\x1b[38;5;208m"; // Оранжевый цвет
  const lightGray = "\x1b[90m"; // Серый цвет
  const reset = "\x1b[0m";
  
  let header = `${orange}█${reset}${lightGray}█${reset}` + " ".repeat(len + 2);
  for (let j = 1; j <= n; j++) {
      header += ` ${j.toString().padStart(len)} `;
  }
  console.log(header);

  for (let i = 1; i <= n; i++) {
      let row = `${orange}█${reset}${lightGray}█${reset} ${i.toString().padStart(len)} `;
      for (let j = 1; j <= n; j++) {
      row += ` ${(i * j).toString().padStart(len)} `;
      }
      console.log(row);
  }
}

printMultiplicationTable(25);
