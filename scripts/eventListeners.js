const initListeners = (input, expression, outputStack, operatorStack, finishedCalculating) => {
  var valueList = document.getElementsByClassName('value');
  var operationList = document.getElementsByClassName('operation');

  /* adding clicking events for our value buttons */
  for (let value of valueList) {
    value.addEventListener('click', () => {
      addValueEvent(input, expression, outputStack, operatorStack, finishedCalculating, value.firstChild.nodeValue);
    })
  }
  
  /* adding clicking events for our operation buttons */
  for (let operation of operationList) {
    operation.addEventListener('click', () => {
      addOperationEvent(input, expression, outputStack, operatorStack, finishedCalculating, operation.firstChild.nodeValue);
    })
  }

  /* events for keyboard shortcuts. only for values and basic arithmetic operations */
  document.addEventListener('keydown', (event) => {
    console.log (operationFactory(event.key));
    var reg = new RegExp('^[0-9]+$');
  
    if(reg.test(event.key)) {
      addValueEvent(input, expression, outputStack, operatorStack, finishedCalculating, event.key);
    } else if (operationFactory(event.key)){
      addOperationEvent(input, expression, outputStack, operatorStack, finishedCalculating, event.key);
    }
  })

  /* events for our instant operations. these operations compute the input of the expression currently given and give the result after the operation */
  document.getElementById('compute').addEventListener('click', () => equals(expression, outputStack, operatorStack, input, finishedCalculating));
  document.getElementById('CE').addEventListener('click', () => clearExpression(expression, outputStack, operatorStack, input))
  document.getElementById('sqrt').addEventListener('click', () => sqrt(expression, outputStack, operatorStack, input, finishedCalculating));
  document.getElementById('fib').addEventListener('click', () => fib(expression, outputStack, operatorStack, input, finishedCalculating));
  document.getElementById('prime').addEventListener('click', () => prime(expression, outputStack, operatorStack, input, finishedCalculating));
  document.getElementById('fact').addEventListener('click', () => fact(expression, outputStack, operatorStack, input, finishedCalculating));
}

/* event for values */
const addValueEvent = (input, expression, outputStack, operatorStack, finishedCalculating, value) => {
  {
    if (input.value === '0' || finishedCalculating.value || input.value === 'true' || input.value === 'false') {
      expression.pop();
      finishedCalculating.value = false;
      input.value = value;
    } else {
      let integerValue = parseInt(input.value + value);
      if (integerValue < 1000000000 && integerValue > -1000000000) {
        input.value += value;
      }
    }
    if (typeof expression[expression.length - 1] === 'string' || expression[expression.length - 1] === '-') {
      expression[expression.length - 1] += value;
    } else {
      expression.push(value);
    }
  }
}

/* event for operations. creates the right operation using the Factory Pattern */
const addOperationEvent = (input, expression, outputStack, operatorStack, finishedCalculating, value) => {
  {
    finishedCalculating.value = false;
    if (input.value === '0' && value === '-') {
      input.value = '-';
      expression.push('-');
    } else if (typeof expression[expression.length - 1] !== 'string') {
      input.value += ' -';
      expression.push('-');
    }
    else{
      input.value += ` ${value} `
      expression.push(operationFactory(value));
    }
  }
}