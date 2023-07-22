"use strict";

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  // Проверка, что все аргументы являются числами
  if (
    typeof percent !== "number" ||
    typeof contribution !== "number" ||
    typeof amount !== "number" ||
    typeof countMonths !== "number"
  ) {
    return false;
  }

  // Преобразование процентной ставки в диапазон от 0 до 1 и в месячную ставку
  const monthlyPercent = percent / 100 / 12;

  // Вычисление тела кредита
  const creditBody = amount - contribution;

  // Расчет ежемесячного платежа
  const monthlyPayment =
    creditBody *
    (monthlyPercent +
      monthlyPercent / (Math.pow(1 + monthlyPercent, countMonths) - 1));

  // Расчет общей суммы, которую придется заплатить клиенту
  const totalPayment = monthlyPayment * countMonths;

  // Округление результата до двух значений после запятой
  const roundedTotalPayment = Math.round(totalPayment * 100) / 100;

  return roundedTotalPayment;
}

// Тестовые случаи
console.log(calculateTotalMortgage(10, 0, 50000, 12)); // 52749.53
console.log(calculateTotalMortgage(10, 1000, 50000, 12)); // 51694.54
console.log(calculateTotalMortgage(10, 0, 20000, 24)); // 22149.56
console.log(calculateTotalMortgage(10, 1000, 20000, 24)); // 21042.09
console.log(calculateTotalMortgage(10, 20000, 20000, 24)); // 0
console.log(calculateTotalMortgage(10, 0, 10000, 36)); // 11616.19
console.log(calculateTotalMortgage(15, 0, 10000, 36)); // 12479.52

