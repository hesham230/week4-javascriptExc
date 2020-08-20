function lengthOfString (array){
  const arr = [];
  for(let i=0; i<array.length; i++){
    arr.push(array[i].length);
  }
  console.log(arr);
}

const arr = ["boo", "doooo", "hoo","ro"];
lengthOfString(arr);