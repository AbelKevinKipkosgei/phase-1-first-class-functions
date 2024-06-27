//function declarations
function receivesAFunction(callback) {
  return callback();
}
function returnsANamedFunction() {
  return function calculate() {
    let a = 53,
      b = 42;
    return a + b;
  };
}
function returnsAnAnonymousFunction() {
  return function () {
    `Battlefield is my favorite video game franchise`;
  };
}

//function calls
receivesAFunction((name, meal) => {
  return `My name is ${name} and ${meal} is my favorite food.`;
});
returnsANamedFunction();
returnsAnAnonymousFunction();
