
// variables
const bookName = 'Javascript';
const author = 'Hesham Mousa';
const publishedYear = '2020';
const type = 'Scince';

// the Object
const book = {
  bookName,
  author,
  publishedYear,
  type
};

const b1 = book;

// the Function
const Book = (book) => {
  return "The book " + "'" + book.bookName + "'" 
         + " was written by " +"'" + book.author + "'" 
         +' in the year ' + book.publishedYear;
}

console.log(Book(b1));