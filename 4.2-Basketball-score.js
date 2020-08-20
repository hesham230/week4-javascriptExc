function basketball(){

  let john = (199 + 134 + 10) / 3;
  let mike = (116 + 94 + 123) / 3;
  let mary = (99 + 134 + 100) / 3;

  // checks if john avg is the biggest
  if(john > mike && john > mary) {
    console.log(" John's team wins the game with " + Math.round(john,2) + " avg points");
  
  // checks if mike avg is the biggest
  }else if (mike > john && mike > mary){
    console.log("Mike's team wins the game with " + Math.round(mike,2) + " avg points");
 
  // checks if mary avg is the biggest
  }else if(mary >mike && mary > john){
    console.log('Mary team wins the game with ' + Math.round(mary,2) + " avg points");
  
  // checks if exist draw between john & mike
  }else if (john === mike && john > mary){
    console.log('its a draw between john & mike ' + john + " points" );
  
  // checks if exist draw between john & mary
  }else if (john === mary && john > mike){
    console.log('its a draw between john & mary ' + john + " points" );
  
  // checks if exist draw between mary & mike
  }else if(mike === mary && mike > john){
    console.log('its a draw between mike & mary ' + mike + " points" );
  
  // checks if exists draw between all the teams
  } else {
    console.log('draw between all the teams ' + mike + " points");
  }
}

basketball();