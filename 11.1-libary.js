var library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false
  },
];


function canBeRead(arr){
  for(let i=0; i<arr.length; i++){
    if(arr[i].readingStatus === true){
      console.log(arr[i]);
    }
  }
}

console.log(canBeRead(library));