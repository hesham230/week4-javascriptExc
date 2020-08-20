function gradeAssigner(score){
  // Check if score is valid number
  // between 0 and 100
  if(score < 0 || score > 100 ){
    throw 'score must be between 1 & 100' ;

    // 1st statment F
  }else if(score >=0 && score <=64){
    return score + ' is a "F" ';
    // 2nd statment D
  } else if(score >=65 && score <= 69){
      return score + ' is a "D" ';
    // 3rd statment C
  } else if(score >=70 && score <= 79){
    return score + ' is a "C" ';
    // 4th statment B
  }else if(score >=80 && score <= 89){
    return score + ' is a "B" ';
    // last statement A
  }else{
    return score + ' is a "A" ';
  }
}

console.log(gradeAssigner(50));