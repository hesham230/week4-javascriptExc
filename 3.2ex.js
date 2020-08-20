/*
    JavaScript - Declaring Functions

    The following exercise contains the following subjects:
        * functions
    
    Instructions
        * Please reformat the following function expressions to IIFE functions.
        * Please reformat the following function declarations in two ways, explicit return and implicit return functions.

    Submit the file to Hive

*/

// From function declarations to explicit and implicit return functions (one of each).

//Explicit Return
const explicit = (welcome) => {return welcome = 'Welcome to Appleseeds Bootcamp!'}
//console.log(explicit());

//Implicit Return
const implicit = (a) => Math.pow(a,2);
//console.log(implicit(6));

// From function expressions to IIFE functions.
// 1st function
(function (a){
  let result = Math.sqrt(a);
  return result;
})();

// 2nd function
(function(a,b){
  let result = Math.random() * (a-b) + b;
  return result;
})();