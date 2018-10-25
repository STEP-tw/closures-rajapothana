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
  let count = 0;
  return function () {
    return count++;
  }
}

const makeDeltaTracker = function (firstArgv) {
  let DeltaTracker = {old: firstArgv,delta:0,new:firstArgv}; 
  return function (secondArgv) {
    DeltaTracker.old = DeltaTracker.new;
    if(secondArgv){
      DeltaTracker.delta = secondArgv;
      DeltaTracker.new = DeltaTracker.old + DeltaTracker.delta;
      return DeltaTracker;
    }
    return DeltaTracker;
  }
}
const lengthOf=function(collection) {return collection.length};
const decrement=function(number){return number-1};
const isNotZero=function(x) {return x!=0};
const removeZeroes=function(array) {return array.filter(isNotZero)};
const concatWith=function(arrayToConcatWith,anotherArray) {
  return arrayToConcatWith.concat(anotherArray);
};


const compose = function (arg1,arg2) {
  return function (source1,source2) {
    return arg1(arg2(source1,source2));
  }
}




/*const makeFiboGenerator = undefined;
const makeCycler = undefined;
*/
exports.makeConstant=makeConstant;
exports.makeCounterFromN=makeCounterFromN;
exports.makeCounterFromZero=makeCounterFromZero;
exports.makeDeltaTracker=makeDeltaTracker;
exports.compose=compose;
//exports.curry=curry;
//exports.makeFiboGenerator=makeFiboGenerator;
//exports.makeCycler=makeCycler;
