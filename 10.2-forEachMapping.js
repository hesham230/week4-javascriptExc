const array = [2,3,4,5,6];

// 1st function
function doubleValues(arr){
  const newArr = [];
  for(let i=0; i<arr.length; i++){
    newArr.push(Math.pow(arr[i],2));
  }
  console.log(newArr);
}

// 2nd function
function onlyEvenValues(arr){
  const newArr = [];
  for(let i=0; i<arr.length; i++){
    if(arr[i]%2==0){
      newArr.push(arr[i]);
    }
  }
  console.log(newArr);
}

const arrOfObj = [{
  name: 'eve'
  }, 
  {
  name: 'john'
  }, 
  {
  name: 'jane'
}];

// 3rd function
function addKeyAndValue(arr){

  let result = arrOfObj.map(function(el) {
    let o = Object.assign({}, el);
    o.isActive = true;
    return o;
  })
  console.log(result);
}

// 4th function
const shiftLetters = (string) => { 
  return string.split(" ").map(word => { 
    return word.split("").map(letter => { 
      return String.fromCharCode((letter.charCodeAt() - 1))
     }).join('') 
    }).join(' ')
}

doubleValues(array);
onlyEvenValues(array);
addKeyAndValue(arrOfObj);
console.log(shiftLetters('heshamz'));