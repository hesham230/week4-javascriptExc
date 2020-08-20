const darkLight = (color) =>{
  let result = '';
  
  switch(color){
    case 'orange':
    case 'yellow':
    case 'pink':
      result = 'light-color';
      break;  
    case 'blue':
    case 'purple':
    case 'brown':
      result = 'dark-color';
      break;
    default:
      result = "Unknown Color ";
  }
  console.log(result);
}

darkLight('blue');
darkLight('yellow');
darkLight('white');