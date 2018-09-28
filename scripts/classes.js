/* classes for our operation each containing their priority and function to be called on two operands(or direction in case of brackets) */

class Addition {

  constructor() {
    this.priority = 0;
  }

  operation (a, b) {
    return a + b;
  }
}

class Substraction {
  
  constructor() {
    this.priority = 0;
  }

  operation (a, b) {
    return b - a;
  }
}

class Multiply {
  
  constructor() {
    this.priority = 1;
  }

  operation (a, b){
    return a * b;
  }
}

class Division {
  
  constructor() {
    this.priority = 1;
  }

  operation (a, b) {
    return b / a;
  }
}

class Modulus {
  constructor() {
    this.priority = 1;
  }

  operation (a, b) {
    return b % a; 
  }
}

class Power {

  constructor() {
    this.priority = 2;
    this.rightToLeft = true;
  }

  operation (a, b) {
    return Math.pow(b, a);
  }
}

class Bracket {

  constructor(opened, closed) {
    this.opened = opened;
    this.closed = closed;
  }
}

const operationFactory = (symbol) => {
  switch(symbol) {
    case '+': 
      return new Addition();
      break;
    case '-':
      return new Substraction(); 
      break;
    case '*':
      return new Multiply();
      break;
    case '/':
      return new Division();
      break;
    case '%':
      return new Modulus();
      break;
    case '^':
      return new Power();
      break;
    case '(':
      return new Bracket(true, false);
      break;
    case ')':
      return new Bracket(false, true);
      break;
  }
  return null;
}