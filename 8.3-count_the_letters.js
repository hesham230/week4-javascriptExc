const countLetters = (arr) => {
  const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];
  const obj = {};
  
  array.join("").toString().toLowerCase().split("").forEach(e => obj[e] = (obj[e] || 0)+1);
  console.log(obj);
}


const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];
countLetters(array);