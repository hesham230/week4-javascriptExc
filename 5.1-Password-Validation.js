// 1st case if/else
function pass(str){
  if(str.length >=7){
    return 'Strong';
  }else{
    return 'Weak';
  }
}

// 2nd case Ternary Conditional Expression
function pass2(str){
  const result = str.length >= 7 ? 'Strong' : 'Weak';
  return result;
}

// 3rd case Conditional Abuse Expression
const pass3 = (str) => {
  return (str.length > 7 && "Strong") || "Weak";
};

// 2nd part Ternary Conditional
const pass4 = (str) => {
  return str.length > 7 && /[A-Z]/.test(str)
  ? "Very Strong"
  : str.length > 7
  ? "Strong"
  : "Weak";
}

// console
console.log('1st function: ' + pass('hesm'));

console.log('2nd function: ' + pass2('hesmm'));
console.log('3rd function: ' + pass3('hemmaaaa'));

console.log('4th function: ' + pass4('eshmmRmok'));