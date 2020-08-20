function circleArea(radius){

  // Math formula to calculate the circle area:
  // circleArea = Pi * radius^2

  //let area = Math.PI * radius * radius;
  let area = Math.PI * Math.pow(radius,2);
  console.log(area);
  console.log(area.toFixed(2));
}

circleArea(10);