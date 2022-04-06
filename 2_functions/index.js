//Functions (Regular, anonymous, closures, IIFEs = Immediately Invoked Function Expressions)

//Regular function
function say_hi() {
  console.log("Hi");
}

say_hi();

//Returning function
function return_helloworld() {
  return "Hello World";
}

let hw = return_helloworld();
console.log(hw);

//Parameterized functions
function add(n1, n2) {
  let sum = n1 + n2; //you can use const because we don't change value
  console.log(sum);
}

add(15, 20); //pass string as second parameter: what happens?

//Default function parameter
//(In ES6, a function allows the parameters to be initialized with default values, if no values are passed to it or it is undefined.)
function add(n1, n2 = 100) {
  let sum = n1 + n2; //you can use const because we don't change value
  console.log(sum);
}

add(10, 10); //2nd parameter provided, value is taken
add(15); //2nd parameter is not passed, default value is taken
add(15, null); //2nd parameter is null, 15 + null = 15
add(15, undefined); //2nd parameter is undefined, default value is taken
add(); //Nan, because n1 doesn't have a default value (give default value to see the change)

//Rest Parameters
//Rest parameters doesn’t restrict the number of values that you can pass to a function. However, the values passed must all be of the same type.
//Rest parameters should be the last in a function’s parameter list.
function average(message, ...params) {
  if (!isNaN(params[0])) {
    //reduce = reduce array to a single value
    //reduce calls callback function for all the elements in the array
    //2 parameters in callback function: previous value and current value
    //a + b = callback function
    //0 = initial value, we start with 0 and one by one add each value
    const average = params.reduce((a, b) => a + b, 0) / params.length; //change 0 and see what happens
    console.log(message + " " + average);
  } else {
    console.log("Can't get average from a non numeric array");
  }
}

average("The average is:", 1, 5, 4, 10);

//Anonymous function
//Functions that are not bound to an identifier (function name)
//These functions are dynamically declared at runtime
var anonymous_function = function () {
  return "I'm anonymous!";
};

console.log(anonymous_function());

//With parameters
var anonymous_function_params = function (x, y) {
  return x * y;
};

let r = anonymous_function_params(5, 6);
console.log(r);

//Function constructor
let constr_func = new Function("arg1", "arg2", "return arg1 + arg2;");
console.log(constr_func(7, 3));

//Recursion, the function calls itself
function factorial(num) {
  if (num <= 0) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}
console.log(factorial(5));

//Anonymous recursive function
//() at the end immediately executes the function
(function () {
  var hw = "Hello World Anonymous Recursive";
  console.log(hw);
})();
