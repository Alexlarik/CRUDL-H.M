'use strict'

var gBooks = [
    { id: 'b101', title: 'Nosferatu', price: 120, imgUrl: '' },
    { id: 'b102', title: 'The Abyss', price: 80, imgUrl: '' },
    { id: 'b103', title: 'Odyssey', price: 100, imgUrlL: '' }
]

function getBooks() {
    return gBooks
}

function removeBook(bookId) {
    const idx = gBooks.findIndex(book => book.id === bookId)
    gBooks.splice(idx, 1)
}

// function toggleBook(bookId) {
//     const toRead = gBooks.find(book => book.id === bookId)
//     toRead.isRead = !toRead.isRead
// }

function addBook(title) {
    const toRead = {
        id: 'b' + Date.now() % 1000,
        title,
        // isRead: false
    }
    gBooks.unshift(toRead)
}