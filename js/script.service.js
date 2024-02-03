'use strict'

var gBooks = [
    { id: 'b101', txt: 'Nosferatu', isRead: false },
    { id: 'b102', txt: 'The Abyss', isRead: true },
    { id: 'b103', txt: 'Odyssey', isRead: false }
]

function getBooks() {
    return gBooks
}

function removeBook(bookId) {
    const idx = gBooks.findIndex(book => book.id === bookId)
    gBooks.splice(idx, 1)
}

function toggleBook(bookId) {
    const toRead = gBooks.find(book => book.id === bookId)
    toRead.isRead = !toRead.isRead
}

function addBook(txt) {
    const toRead = {
        id: 'b' + Date.now() % 1000,
        txt,
        isRead: false
    }
    gBooks.unshift(toRead)
}