function boom(n){
  let arr = [];
   let num;
   let numInstr;
   let strInArr;
  for(let i=1; i<=n; i++){
    num = i;
    if(i % 7 == 0){
      numInstr = String(num);
      strInArr = numInstr.split("");
      if(strInArr.includes("7")){
        console.log("BOOM BOOM");
      } else{
        console.log("BOOM");
      }
    }
    else{
      console.log(i);
    }
  }
  
}



boom(77);