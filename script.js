const addButton = document.getElementById('add');
const subtractButton = document.getElementById('subtract');
const divideButton = document.getElementById('divide');
const multiplyButton = document.getElementById('multiply');
const calculation = document.getElementById('calculation');
const result = document.getElementById('result');
const inputNum = document.getElementById('inputNumber');


function outputResult(answer, text){
  result.textContent = answer;
  calculation.textContent = text;
}

const defaultResult = 0;
currentResult = defaultResult;
let logEntries = [];


function getUserInput(){
   return parseInt(inputNum.value);
}

 function writeToLog(prevResult, operand, original) {
  let calcDescription = `${prevResult} ${operand} ${original}`;
  outputResult(currentResult, calcDescription)
 }

 function createLog(operationidentifier, older, olderTwo, newResult){
  let logEntry = {
    operation : operationidentifier,
    numberOne : older,
    numberTwo : olderTwo,
    newResult: newResult
  };
  logEntries.push(logEntry);
   console.log(logEntries);
 }

 function createOutput(conditional) {
  const enteredNumber = getUserInput();
    if (conditional !== "ADD"
    && conditional !== 'SUBTRACT' 
    && conditional !== 'DIVIDE' 
    && conditional !== 'MULTIPLY' || enteredNumber === 0){
      return;
 }

   let initialResult = currentResult;
   let differ;
   if(conditional === 'ADD'){
    currentResult +=  parseInt(enteredNumber);
     differ = '+';
   } else if (conditional === 'SUBTRACT') {
    currentResult -=  parseInt(enteredNumber);
     differ = '-';
   } else if (conditional === 'DIVIDE'){
    currentResult = currentResult / parseInt(enteredNumber);
    differ = "/";
   }
   else if(conditional === 'MULTIPLY'){
    currentResult = currentResult * parseInt(enteredNumber);
    differ = '*';
   }
   
   writeToLog(initialResult, differ, enteredNumber);
   createLog(conditional, initialResult, enteredNumber, currentResult)
 }
  


function add(){
  createOutput('ADD');
}

function subtract(){
  createOutput('SUBTRACT');
   
}

function divide(){
  createOutput('DIVIDE');
}

function multiply(){
  createOutput('MULTIPLY');
}

addButton.addEventListener('click', add);
subtractButton.addEventListener('click', subtract);
divideButton.addEventListener('click', divide);
multiplyButton.addEventListener('click', multiply);
