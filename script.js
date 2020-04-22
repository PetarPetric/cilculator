clas Calculator {
  constructor(prevoperandTextelement, curroperandTextelement) {
    this.prevoperrand = prevoperandTextelement
    this.curroperand = curroperandTextelement
  }
}




function add(a,b) {
  return a+b 
}

function subtract(a,b) {
  return a-b
}

function multiply(a,b) {
  return a*b
}

function divide(a,b) {
  return a/b
}

function operate(operator, a,b){
  switch() {
    case '+':
      return add(a,b);
    case '-':
      return subtract(a,b);
    case '*':
      return multiply(a,b);
    case '/':
      return  divide(a,b);
  }
}

