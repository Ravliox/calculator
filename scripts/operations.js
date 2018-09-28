/* Clear the input and the expression */
const clearExpression = (expression, outputStack, operatorStack, input) => {
  expression.length = 0;
  outputStack.length = 0;
  operatorStack.length = 0;
  input.value = 0;
}

/* Compute and show the result of the curent expression */
const equals = (expression, outputStack, operatorStack, input, finishedCalculating) => {
  let result = computeResult(expression, outputStack, operatorStack);

  let historyLine = document.createElement("p");
  historyLine.innerHTML = `${input.value} = ${result}`;
  document.getElementById('history').appendChild(historyLine);
  
  input.value = result;
  expression.length = 0;
  finishedCalculating.value = true;
  expression.push(input.value);
}

/* Square root */
const sqrt = (expression, outputStack, operatorStack, input, finishedCalculating) => {
  let result = Math.sqrt(computeResult(expression, outputStack, operatorStack));

  let historyLine = document.createElement("p");
  historyLine.innerHTML = `Sqrt(${input.value}) = ${result}`;
  document.getElementById('history').appendChild(historyLine);
  
  input.value = result;
  expression.length = 0;
  finishedCalculating.value = true;
  expression.push(input.value);
}

/* nth number of Fibbonacci */ 
const fib = (expression, outputStack, operatorStack, input, finishedCalculating) => {
  let computedResult = computeResult(expression, outputStack, operatorStack);

  let result = fibAlgorithm(computedResult);

  let historyLine = document.createElement("p");
  historyLine.innerHTML = `Fib(${input.value}) = ${result}`;
  document.getElementById('history').appendChild(historyLine);
  
  input.value = result;
  expression.length = 0;
  finishedCalculating.value = true;
  expression.push(input.value);
}

const fibAlgorithm = (n) => {
  if (n <= 1){
    return n;
  }
  return fibAlgorithm(n - 1) + fibAlgorithm(n - 2);
}

/* Prime number */
const prime = (expression, outputStack, operatorStack, input, finishedCalculating) => {
  let computedResult = computeResult(expression, outputStack, operatorStack);

  let result = primeAlgorithm(computedResult);

  let historyLine = document.createElement("p");
  historyLine.innerHTML = `Prm(${input.value}) = ${result}`;
  document.getElementById('history').appendChild(historyLine);
  
  input.value = result;
  expression.length = 0;
  finishedCalculating.value = true;
  expression.push(input.value);
}

const primeAlgorithm = (n) => {
  let quantity = 0;

  for (let i = 2; i < n / 2; i++) {
    if (n % i == 0) {
      quantity += 1;
    }
  }

  if (quantity == 0) {
    return true;
  }

  return false;
}

/* Factorial */
const fact = (expression, outputStack, operatorStack, input, finishedCalculating) => {
  let computedResult = computeResult(expression, outputStack, operatorStack);

  let result = factAlgorithm(computedResult);

  let historyLine = document.createElement("p");
  historyLine.innerHTML = `Fact(${input.value}) = ${result}`;
  document.getElementById('history').appendChild(historyLine);
  
  input.value = result;
  expression.length = 0;
  finishedCalculating.value = true;
  expression.push(input.value);
}

const factAlgorithm = (n) => {
  let result = 1;
  for (let i = 1; i <=n; i++) {
    result = result * i;
  }
  return result;
}