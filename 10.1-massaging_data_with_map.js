const data = [
  {
    name: "John",
    birthday: "1-1-1995",
    favoriteFoods: {
    meats: ["hamburgers", "sausages"],
    fish: ["salmon", "pike"],
    },
  },
  {
    name: "Mark",
    birthday: "10-5-1980",
    favoriteFoods: {
    meats: ["hamburgers", "steak", "lamb"],
    fish: ["tuna", "salmon", "barracuda"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
    meats: ["ham", "chicken"],
    fish: ["pike"],
    },
    },
    {
    name: "Thomas",
    birthday: "1-10-1990",
    favoriteFoods: {
    meats: ["bird", "rooster"],
    fish: ["salmon"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
    meats: ["hamburgers", "lamb"],
    fish: ["anchovies", "tuna"],
    },
  },
];

// first function
function names(arr){
  const newArr = [];
  for (let j = 0; j < data.length; j++){
    newArr.push(data[j].name);
  }
  return newArr;
}

// second function
function bornBefore1990(arr){
  const newArr = [];
  for(let i = 0; i < data.length; i++){
    const newBirth = data[i].birthday.split('-');
    if(newBirth[2] < 1990){
       newArr.push((data[i]));
    }
  }
  return newArr;
}

// third function
function foodNumber(arr){
  const obj = {};
  data.forEach(e => {
    if(e.favoriteFoods){
      for(const foodType in e.favoriteFoods){
        e.favoriteFoods[foodType].forEach(food =>{
          obj.hasOwnProperty(food) ? obj[food]++ : obj[food] =1 ;
        })
      }
    }
  })
  console.log(obj);
}

console.log(names(data));
console.log(bornBefore1990(data));
foodNumber(data);


 