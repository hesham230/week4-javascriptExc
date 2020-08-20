function date(){
  let d = new Date();
  let weekday = new Array(7);
  // getDay() method returns the day of the week (from 0 to 6)
  // convert the name of the weekday
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  // current day in string format 
  let n = weekday[d.getDay()];
  console.log('Today is: ' + n );

  // current time
  let d = new Date().toLocaleTimeString();;
  console.log('Current time is: ' + d);

}

date();