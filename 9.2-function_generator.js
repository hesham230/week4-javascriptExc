function randBetween(){
  return Math.floor(Math.random() * 21);
}

function callBack(num, func){
  
  let outpot = func();
  let numAttempts = 1;
  
  while(outpot !== num){
    outpot = func();
    numAttempts ++;
  }
  console.log('it tooks: ' + numAttempts + ' attempts to get the right number!');
}

callBack(10,randBetween);