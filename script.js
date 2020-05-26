const numberBtn = document.querySelectorAll('.number');
const operationBtn = document.querySelectorAll('.operator');
const acBtn = document.querySelector('#ac');
const Del = document.querySelector('#del');
const curOp = document.querySelector('#curroperand'); 
const prevOp = document.querySelector('#prevoperand');
const equalsBtn = document.querySelector('#equals');

const output = document.querySelector('.output')

output.style.color = 'white';

const display = (text) => {
  curOp.textContent = text;
}

let ope;
let numb2;
let numb1;
let result;


function deletion() { 
  curOp.textContent = curOp.textContent.split("").slice(0, -1).join("");
  display(curOp.textContent); 
}

function clear() {
  curOp.textContent = '';
  prevOp.textContent = '';
  ope = undefined;
}

Del.addEventListener('click', function() {
  deletion()
});

acBtn.addEventListener('click',  function() {
  clear()
});

numberBtn.forEach(button => {
  button.addEventListener('click', () => {
    curOp.textContent += button.textContent;   
    numb2 = parseInt(curOp.innerHTML, 10); 
  });
});

  operationBtn.forEach(button => { 
  button.addEventListener('click', function(e) { 
    if(curOp.textContent !== '' && prevOp.textContent !== '') {
    equals();
    prevOp.textContent = curOp.textContent; 
    curOp.textContent = '';
    numb1 = Number(prevOp.textContent, 10);
    ope = e.target.textContent;
    } else {
    prevOp.textContent = curOp.textContent; 
    curOp.textContent = '';
    numb1 = Number(prevOp.textContent, 10);
    ope = e.target.textContent;
    }
  });
});


equalsBtn.addEventListener('click', function(){
  equals()
  });

function equals(){
   result = operate(numb1, ope, numb2) 
   display(result);
   };

function add(a,b) {
  return a+b ;
}

function subtract(a,b) {
  return a-b;
}

function multiply(a,b) {
  return a*b;
}

function divide(a,b) {
  if(b === 0) {
    return 0;
  } else {
    return a / b;
  }
  
}

function operate(a, ope, b){
  switch(ope) {
    case '+':
      return add(a,b);
      break;
    case '-':
      return subtract(a,b);
      break;
    case '*':
      return multiply(a,b);
      break;
    case '/':
      return  divide(a,b);
      break;
  }
}

