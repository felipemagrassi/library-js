let myLibrary = [];
let uniqueID = 0;
const form = document.querySelector("form");

class Book {
  constructor(author, title, pagesRead, totalPages, read) {
    this.author = author;
    this.title = title;
    this.pagesRead = pagesRead;
    this.totalPages = totalPages;
    this.read = read;
    this.id = ++uniqueID;
  }
  showBooks () {
    myLibrary.forEach((book) => console.log(book))
  }
  removeBooks() {
  }
}

function addBookToLibrary() {
  if(verifyForm() === false) {
    return false;
  }
  
}

function addBookToHTML(){

}

function verifyForm() {
  if(+form.pagesRead.value > +form.totalPages.value) {
    console.log(pagesRead > totalPages);
    return false;
  } 
}

// Prevent form from submitting 
form.onsubmit = function(e){
  e.preventDefault();
  addBookToLibrary();}