// 1. Receives a function and calls it
function receivesAFunction(callback) {
  callback();
}

// 2. Returns a named function
function returnsANamedFunction() {
  function namedFn() {
    return "I am a named function!";
  }
  return namedFn;
}

// 3. Returns an anonymous function
function returnsAnAnonymousFunction() {
  return function() {
    return "I am anonymous!";
  };
}

// export if needed for testing
module.exports = {
  receivesAFunction,
  returnsANamedFunction,
  returnsAnAnonymousFunction
};
