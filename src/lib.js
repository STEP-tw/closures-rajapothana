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

/*const makeDeltaTracker = undefined;
const makeFiboGenerator = undefined;
const makeCycler = undefined;
const curry = undefined;
const compose = undefined;
*/
exports.makeConstant=makeConstant;
exports.makeCounterFromN=makeCounterFromN;
exports.makeCounterFromZero=makeCounterFromZero;
/*exports.makeDeltaTracker=makeDeltaTracker;
exports.makeFiboGenerator=makeFiboGenerator;
exports.makeCycler=makeCycler;
exports.curry=curry;
exports.compose=compose;*/
