const array = [1,2,3,5,4];

// max
const maxValue = array.reduce((acc, arr) => Math.max(acc, arr));

// sum of even numbers
const sumEvens = arr => arr.filter(e => !(e % 2)).reduce((a, b) => a + b);


// average
function average(arr) {
  return arr.reduce((a, b) => (a + b)) / arr.length;
}

console.log(`the max number is: ${maxValue}`);
console.log(`the sum of even numbers is: ${sumEvens(array)}`);
console.log(`the average is: ${average(array)}`);