'use strict'

function onInit() {
    renderBooks()
}

function renderBooks() {
    const elBooks = document.querySelector('.book-list')
    const books = getBooks()
    const strHTMLs = books.map(book => `
    <li onClick="onToggleBook('${book.id}')">
      <span class="${book.isRead ? 'read' : ''}">${book.txt}</span>
      <button onclick="onRemoveBook(event,'${book.id}')">X</button>
    </li>
    `)
    elBooks.innerHTML = strHTMLs.join('')
}

function onRemoveBook(ev, bookId) {
    ev.stopPropagation()
    console.log('Book Id: X ', bookId)
    removeBook(bookId)
    renderBooks()
}

function onToggleBook(bookId) {
    console.log('Book Id: ', bookId)
    toggleBook(bookId)
    renderBooks()

}

function onAddBook() {

    const elInput = document.querySelector('.new-book input')
    addBook(elInput.value)
    elInput.value = ''
    renderBooks()
}