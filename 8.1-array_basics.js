const people = ["Greg","Mary","Devon","James"];

// 1 - console.log all people
for(let i=0; i<people.length; i++){
  console.log(people[i]);
}
// 2 - remove Greg (fromm the front of the arr)
people.shift();
console.log(people)

// 3 - remove James (from the end of the array)
people.pop();
console.log(people);

// //4 add Matt to the front of the array
people.unshift("Matt");
console.log(people);

// // 5 add my name to the end of the array
people.push("hesham");
console.log(people);

// 6 exiting after console-log 'mary'
for(let i=0; i<people.length/2; i++){
  console.log(people[i]);
}

// // 7 - copy using slice without mary and matt
const people2 = [
  ...people.slice(2,4)
]
console.log(people2);

// 8 indexOf marry
const maryIndex = people.indexOf('Mary');
console.log(maryIndex);

// 9 indexOf Foo
const fooIndex = people.indexOf('Foo');
console.log(fooIndex);

//10 splice
people[0] = "Greg";
people[3] = "James";
console.log(people);

const people3 = [
  ...people.splice(0,2), 'Elizabeth' , 'Artie',
  ...people.splice(1)
];

console.log(people3);

// 11 - withBob
const withBob = people.concat('Bob');
console.log(withBob);