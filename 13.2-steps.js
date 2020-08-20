const stepShape = (n) => {
   
  let output = '';
  for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= i; j++) {
          output += `#`;
      }
      console.log("'"+output + " '");
      output = '';
  }
}

stepShape(6);