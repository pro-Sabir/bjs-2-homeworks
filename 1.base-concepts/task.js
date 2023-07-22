"use strict";

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


