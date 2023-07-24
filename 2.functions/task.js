function getArrayParams(...arr) {
	let min = arr[0];
	let max = arr[0];
	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		const currentElement = arr[i];
		if (currentElement < min) {
			min = currentElement;
		}
		if (currentElement > max) {
			max = currentElement;
		}
		sum += currentElement;
	}

	const avg = sum / arr.length;

	return {
		min: min,
		max: max,
		avg: Number(avg.toFixed(2))
	};
}


// Находит сумму элементов массива
function summElementsWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}

	return arr.reduce((acc, curr) => acc + curr, 0);
}

// Вычисляет разницу между максимальным и минимальным элементами массива
function differenceMaxMinWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}

	const max = Math.max(...arr);
	const min = Math.min(...arr);

	return max - min;
}

// Вычисляет разницу суммы чётных и нечётных элементов массива
function differenceEvenOddWorker(...arr) {
	let sumEvenElement = 0;
	let sumOddElement = 0;

	for (const num of arr) {
		if (num % 2 === 0) {
			sumEvenElement += num;
		} else {
			sumOddElement += num;
		}
	}

	return sumEvenElement - sumOddElement;
}

// Вычисляет среднее значение чётных элементов массива
function averageEvenElementsWorker(...arr) {
	let sumEvenElement = 0;
	let countEvenElement = 0;

	for (const num of arr) {
		if (num % 2 === 0) {
			sumEvenElement += num;
			countEvenElement++;
		}
	}

	if (countEvenElement === 0) {
		return 0;
	}

	return sumEvenElement / countEvenElement;
}


function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;

	for (const dataArr of arrOfArr) {
		const workerResult = func(...dataArr);
		if (workerResult > maxWorkerResult) {
			maxWorkerResult = workerResult;
		}
	}

	return maxWorkerResult;
}