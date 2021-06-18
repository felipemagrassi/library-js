let myLibrary = [];
let uniqueID = 0;

function Book(author, title, pages, totalPages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.totalPages = totalPages;
  this.read = read;
  this.id = uniqueID;
}

function validateInput(pages, totalPages) {
  if (totalPages < pages) {
    return false
  }
return true;
}

function addBookToLibrary() {
  let title = document.forms[0].elements["title"].value;
  let author = document.forms[0].elements["author"].value;
  let pages = document.forms[0].elements["page-read"].value;
  let totalPages = document.forms[0].elements["pages"].value;
  let read = document.forms[0].elements["read"].checked;
  let id = uniqueID++
  if(!validateInput(pages, totalPages)){
    return alert('Total of pages must be greater than pages read');
  }
  
  let book = new Book(author, title, pages, totalPages, read);
  myLibrary.push(book);

  createBookDiv()

}

function createBookDiv() {
  let library = document.querySelector(".library")
  let bookDiv = document.createElement('div')
  /*
  * Remove the H1 when library has books 
  * */
  if (library)
  library.appendChild(bookDiv);
}

