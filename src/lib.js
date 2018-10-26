const makeConstant = function (source) {
  return function (anything){
    return source;
  }
}

const makeCounterFromN = function (argv) {
  let count = argv;
  return function (){
    return count++;
  }
}

const makeCounterFromZero = function () {
  return makeCounterFromN(0);
}

const makeDeltaTracker = function (firstArgv) {
  return function (secondArgv = 0) {
    firstArgv = firstArgv + secondArgv;
    return {old:firstArgv - secondArgv,delta:secondArgv,new:firstArgv}
  }
}


const compose = function (outerFunction,innerFunction) {
  return function (firstArgument,secondArgument) {
    return outerFunction(innerFunction(firstArgument,secondArgument));
  }
}

const curry = function (func,source1) {
  return function (source2,source3) {
    return func(source1,source2,source3);
  }
}

const makeCycler = function (list) {
  let count = 0;
  let newList = list.slice();
  return function () {
    let length = (newList.length)
    if(count == length){
      count = 0;
    }
      return newList[count++];
  }
}

const makeFiboGenerator = function (num1,num2) {

  let firstNumber = 0;
  let secondNumber = 1;
  if(num1 && num2){
    firstNumber = num1;
    secondNumber = num2;
  }
  if(num1 && !num2){
    secondNumber= num1;
  }

  return function () {
    let sum = firstNumber+secondNumber;
    let  result = firstNumber;
    firstNumber = secondNumber;
    secondNumber = sum;
    return result;

  }
}

exports.makeConstant=makeConstant;
exports.makeCounterFromN=makeCounterFromN;
exports.makeCounterFromZero=makeCounterFromZero;
exports.makeDeltaTracker=makeDeltaTracker;
exports.compose=compose;
exports.curry=curry;
exports.makeFiboGenerator=makeFiboGenerator;
exports.makeCycler=makeCycler;
