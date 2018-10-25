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


const compose = function (func1,func2) {
  return function (source1,source2) {
    return func1(func2(source1,source2));
  }
}

const sum=function(a,b) { return a+b };


const isBetween=function(number,lowerLimit,upperLimit) {
  return lowerLimit<=number && number<=upperLimit;
};

const paintCar=function(color,make,model) {
  return {color,make,model};
};

const curry = function (func,source1) {
  return function (source2,source3) {
    return func(source1,source2,source3);
  }
}

const makeCycler = function (array) {
  let count = 0;
  let newArray = array.slice(0,lengthOf(array));
  return function () {
    let length = lengthOf(newArray)
    if(count == length){
      count = 0;
    }

    if(length <= 1){
      return array[count];
    }else{
      return array[count++];
    }
  }
}






/*const makeFiboGenerator = undefined;
*/
exports.makeConstant=makeConstant;
exports.makeCounterFromN=makeCounterFromN;
exports.makeCounterFromZero=makeCounterFromZero;
exports.makeDeltaTracker=makeDeltaTracker;
exports.compose=compose;
exports.curry=curry;
//exports.makeFiboGenerator=makeFiboGenerator;
exports.makeCycler=makeCycler;
