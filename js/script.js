'use strict'

var gBooks = [
    { id: 'b101', txt: 'Nosferatu', isRead: false },
    { id: 'b102', txt: 'The Abyss', isRead: true },
    { id: 'b103', txt: 'Odyssey', isRead: false }
]

function onInit() {
    renderBooks()
}

function renderBooks() {
    const elBooks = document.querySelector('.book-list')
    const strHTMLs = gBooks.map(book => `
    <li>
      <span class="${book.isRead ? 'read' : ''}">${book.txt}</span>
      <button onclick="onRemoveBook('${book.id}')">X</button>
    </li>
    `)
    elBooks.innerHTML = strHTMLs.join('')
}

function onRemoveBook(bookId) {
    console.log('Book Id: ', bookId)
    const idx = gBooks.findIndex(book => book.id === bookId)
    gBooks.splice(idx, 1)
    renderBooks()
}

function onAddBook() {
    console.log('hi')
}