function print(str){
  return str;
}

function callBack(str, func1){
  if (typeof str !== 'undefined' && typeof str === 'function') { 
    return func1(str);
  }
}

console.log(callBack('hesham',print()));