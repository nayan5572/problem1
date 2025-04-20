// create function composition
function square(x) {
  return x * x;
}

// create function composition
function double(x) {
  return x * 2;
}

// add 5 to a number
function add5(x) {
  return x + 5;
}

// compose the three numbers
function composeFunc(x) {
  return add5(double(square(x)));
}

// show result
const result = composeFunc(5);
console.log(result);
