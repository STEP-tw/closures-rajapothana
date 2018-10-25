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

  /*const makeFiboGenerator = undefined;
const makeCycler = undefined;
const compose = undefined;
*/
  exports.makeConstant=makeConstant;
  exports.makeCounterFromN=makeCounterFromN;
  exports.makeCounterFromZero=makeCounterFromZero;
  exports.makeDeltaTracker=makeDeltaTracker;
  //exports.curry=curry;
  /*exports.makeFiboGenerator=makeFiboGenerator;
exports.makeCycler=makeCycler;
exports.compose=compose;*/
