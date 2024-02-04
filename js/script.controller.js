'use strict'

function onInit() {
    renderBooks()
}

function renderBooks() {
    const elBooks = document.querySelector('.book-list')
    const books = getBooks()
    const strHTMLs = `
    <tr>
        <th class="header">Title</th>
        <th class="header">Price</th>
        <th class="header">Actions</th>
    </tr>
    ` + books.map(book => `
    <tr class="table-row">
        <td>${book.title}</td>
        <td>${book.price}</td>
        <td class="actions">
        <button class="read">Read</button>
        <button class="update">Update</button>
        <button  class="delete" onclick="onRemoveBook(event,'${book.id}')">Delete</button>
        </td>
    </tr>
    `).join('')
    elBooks.innerHTML = strHTMLs
}

function onRemoveBook(ev, bookId) {
    ev.stopPropagation()
    console.log('Book Id: X ', bookId)
    removeBook(bookId)
    renderBooks()
}

// function onToggleBook(bookId) {
//     console.log('Book Id: ', bookId)
//     toggleBook(bookId)
//     renderBooks()

// }

function onAddBook() {

    const elInput = document.querySelector('.new-book input')
    addBook(elInput.value)
    elInput.value = ''
    renderBooks()
}

{/* <tr>
    <td>${book.title}</td>
    <td>  onClick="onToggleBook('${book.id}')"</td>
    <button onclick="onRemoveBook(event,'${book.id}')">X</button>
    </tr> */}