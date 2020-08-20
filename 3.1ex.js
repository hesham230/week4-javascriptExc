/*
    JavaScript - Declaring Functions
    The following exercise contains the following subjects:
        * functions
    
    Instructions
        * Please reformat the following function declarations to function expression.
        * Please reformat the following function expressions to function declarations.
    Submit the file to Hive
*/

// From function declarations to function expressions
const func1 = function welcome() {
  let welcome = 'Welcome to Appleseeds Bootcamp!';
  return welcome;
}
//console.log(func1());

const func2 =function power(a) {
  let myNumber = a;
  let result = Math.pow(myNumber, 2);
  return result;
}
//console.log(func2(2));

const func3 = function add(a, b = 5) {
  let myNumber = a;
  let sum = myNumber + b;
  return sum;
}
//console.log(func3(5));


// From function expressions to function declarations
function hello(){
   return "Hello!";
}
//console.log(hello());


function squareRoot(a) {
  return  Math.sqrt(a);
  //return result;
}
//console.log(squareRoot(9));


function randomNumbers(a, b){
  return Math.random() * (a - b) + b;
} 
//console.log(randomNumbers(5,3));
