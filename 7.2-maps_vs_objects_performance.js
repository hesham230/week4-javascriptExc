// empty object
const obj = {};

// empty map
const myMap = new Map();

// array of 10 value string names!
const arr = ['1','2','3','4','5','6','7','8','9','10']

for(let i=0; i<arr.length; i++){

  obj[i] - arr[i];
  myMap.set(i,arr[i]);
}

console.time('Object');
obj.hasOwnProperty(28);

console.timeEnd('Object');

console.time('Map');
myMap.has(28);
console.timeEnd('Map')