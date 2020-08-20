// 1st Object
const book1 = {
  name: 'Javascript',
  author: 'Hesham',
  publishedYear: 9
};

// 2nd Object
const book2 = {
  name: 'Java',
  author: 'Mousa',
  publishedYear: 11
};

// Empty Object
const bookUtils = {

}

  bookUtils.getFirstPublished = (book1, book2) =>{
  const result = book1.publishedYear < book2.publishedYear ? book1 : book2;
  console.log(result);
}


 bookUtils.setNewEdition =(book, editionYear) =>{
  console.log(editionYear);
}

bookUtils.setLanguage = (book, language) =>{
  return  language;
}

bookUtils.setTranslation = (book, translator, language) => {
  translation = {
    translator: translator,
    language: language
  }
  return translation;
}

bookUtils.setPublisher = (book, name, location) => {
   book.publish = {
     name: name,
     location: location
   }
   return publish;
}

bookUtils.isSamePublisher =  (book1,  book2) => {
  if(book1.Publisher === book2.Publisher){
    return true;
  }else{
    return false;
  }
}

console.log(bookUtils.getFirstPublished(book1,book2));
console.log(bookUtils.setNewEdition(book1,190));
console.log(bookUtils.setLanguage(book1,'Arabic'));
console.log(bookUtils.setTranslation(book1,'michael', 'Hebrew'));
console.log(bookUtils.setPublisher(book1,'hesham','Abu-sinan'));
console.log(bookUtils.isSamePublisher(book1,book2));

console.log(bookUtils);
