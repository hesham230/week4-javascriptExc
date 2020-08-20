const food = ["Noodle", "Pasta", "Meat","Ice-cream", "Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza", "Olives", "Hamburgers"];

const sameItems = (...arrays) => 
        arrays.reduce((xs, ys) => xs.filter(x => ys.indexOf(x) > -1));

console.log(sameItems(food,food1));