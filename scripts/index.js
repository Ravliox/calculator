window.onload = function() {
  let expression = [];
  let outputStack = [];
  let operatorStack = [];
  let finishedCalculating = {
    value: false
  };

  let input = document.getElementById('input');

  initListeners(input, expression, outputStack, operatorStack, finishedCalculating);
}

const computeResult = (expression, outputStack, operatorStack) => {
  let computingStack = [];
  shuntingYard (expression, outputStack, operatorStack);

  for (element of outputStack) {
    if (typeof element === 'number') {
      computingStack.push(element);
    } else {
      let operationResult = element.operation(computingStack.pop(), computingStack.pop());
      computingStack.push(operationResult);
    }
  }
  return computingStack.pop();
}

/* Shunting yard algorithm to converting our infix expression in to postfix */
const shuntingYard = (expression, outputStack, operatorStack) => {
  for (let element of expression) {
    
    if (typeof element === 'string') {
      outputStack.push(parseFloat(element));

    } else if (operatorStack.length === 0 || (operatorStack[operatorStack.length - 1].priority < element.priority ||
        operatorStack[operatorStack.length - 1].opened || element.opened || element.rightToLeft)) {

        operatorStack.push(element);

      } else if (operatorStack[operatorStack.length - 1].priority >= element.priority) {

        while (operatorStack.length > 0 && operatorStack[operatorStack.length - 1].priority >= element.priority) {
          let greaterPriorityOperator = operatorStack.pop();
          outputStack.push(greaterPriorityOperator);
        }
        
        operatorStack.push(element);

      } else if (element.closed) {
        let searchForBracket = operatorStack.pop();
        
        while (!searchForBracket.opened) {
          outputStack.push(searchForBracket);
          searchForBracket = operatorStack.pop();
        }
      }
    }

  while (operatorStack.length > 0) {
    outputStack.push(operatorStack.pop());
  }

  return outputStack;
}