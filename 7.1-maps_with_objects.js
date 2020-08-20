const person1 = {
  name: 'hesham',
}
const person2 = {
  name: 'mike',
}
const person3 = {
  name: 'avi',
}

const persons = new Map();
persons.set(person1,'203995')
persons.set(person2,'123456')
persons.set(person3,'654123')

// for..of loop
console.log('for..of loop' + "\n");

for(const [key,value] of persons){
  console.log(key.name, value);
}

console.log("\n");

// forEach loop
console.log('forEach loop' + "\n");

persons.forEach((value,key) => {
  console.log(`${key.name}  ${value}`);
});


