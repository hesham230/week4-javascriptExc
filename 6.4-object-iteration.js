const person = {
  name: 'hesham',
  id: '203995',
  phone: '054765'
}

var func1 = function (obj) {

  let new_obj = {};

  for (let prop in obj) {
    if(obj.hasOwnProperty(prop)) {
      new_obj[obj[prop]] = prop;
    }
  }

  return new_obj;
};


console.log(person);
console.log(func1(person));