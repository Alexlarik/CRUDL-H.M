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
    const idx = gBooks.findIndex(book => book.id === bookId)
    gBooks.splice(idx, 1)
    renderBooks()
}

function onToggleBook(bookId) {
    console.log('Book Id: ', bookId)
    const toRead = gBooks.find(book => book.id === bookId)
    toRead.isRead = !toRead.isRead
    renderBooks()

}

function onAddBook() {

    const elInput = document.querySelector('.new-book input')
    const toRead = {
        id: 'b' + Date.now() % 1000,
        txt: elInput.value,
        isRead: false
    }
    gBooks.unshift(toRead)
    elInput.value = ''
    renderBooks()
}