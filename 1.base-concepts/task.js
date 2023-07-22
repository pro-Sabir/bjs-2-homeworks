"use strict";

// Функция для решения квадратных уравнений
function solveEquation(a, b, c) {
	let arr = [];
	let discriminant = b ** 2 - 4 * a * c;

	if (discriminant < 0) {
		// Нет корней
		return arr;
	} else if (discriminant === 0) {
		// Один корень
		let root = -b / (2 * a);
		arr.push(root);
		return arr;
	} else {
		// Два корня
		let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
		let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
		arr.push(root1);
		arr.push(root2);
		return arr;
	}
}

// Пример использования функции
console.log(solveEquation(1, -3, 2)); // [2, 1]
console.log(solveEquation(1, -2, 1)); // [1]
console.log(solveEquation(1, 2, 3)); // []

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