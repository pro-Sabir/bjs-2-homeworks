function getArrayParams(...arr) {
	let min = arr[0];
	let max = arr[0];
	let sum = 0;
  
	for (const num of arr) {
	  if (num < min) {
		min = num;
	  }
	  if (num > max) {
		max = num;
	  }
	  sum += num;
	}
  
	const avg = sum / arr.length;
	return { min, max, avg: Number(avg.toFixed(2)) };
  }


  function summElementsWorker(...arr) {
    return arr.reduce((sum, num) => sum + (isNaN(num) ? 0 : num), 0);
  }
  
  function differenceMaxMinWorker(...arr) {
    if (arr.length === 0) {
      return 0;
    }
  
    const max = Math.max(...arr.filter((num) => !isNaN(num)));
    const min = Math.min(...arr.filter((num) => !isNaN(num)));
  
    return max - min;
  }
  
  function differenceEvenOddWorker(...arr) {
    if (arr.length === 0) {
      return 0;
    }
  
    let sumEvenElement = 0;
    let sumOddElement = 0;
  
    for (const num of arr) {
      if (isNaN(num)) {
        continue;
      }
  
      if (num % 2 === 0) {
        sumEvenElement += num;
      } else {
        sumOddElement += num;
      }
    }
  
    return sumEvenElement - sumOddElement;
  }
  
  function averageEvenElementsWorker(...arr) {
    const evenElements = arr.filter((num) => !isNaN(num) && num % 2 === 0);
  
    if (evenElements.length === 0) {
      return 0;
    }
  
    const sumEvenElement = evenElements.reduce((sum, num) => sum + num, 0);
    const avg = sumEvenElement / evenElements.length;
  
    return isNaN(avg) ? 0 : avg;
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

