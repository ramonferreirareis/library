const myLibrary = [];



function Book(title, page, author, read, id) {
    this.title = title;
    this.page = page;
    this.author = author;
    this.read = read;
    this.id = id;
}

function addBookToLibrary() {
    const book = new Book('Re:Zero', '300', 'Tappei', 'read', self.crypto.randomUUID());
    const book2 = new Book('Makeine', '360', 'Ame', 'not read', self.crypto.randomUUID());
    myLibrary.push(book);
    myLibrary.push(book2);
}

addBookToLibrary();

const shelf = document.querySelector('.shelf');
// const bookDiv = document.createElement('div');

// bookDiv.classList.add('book');
// bookDiv.textContent = myLibrary[0].title;

// shelf.append(bookDiv);

const form = document.querySelector('#book-registration');

const addButton = document.querySelector('.addButton');
addButton.addEventListener('click', () => form.classList.toggle('active'));


myLibrary.forEach(({title, page, author, read, id})=> {
    let book = document.createElement('div');
    book.classList.add('book');

    let h1 = document.createElement('h1');
    h1.textContent = title;
    book.append(h1);

    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let status = document.createElement('p');

    p1.textContent = page;
    p2.textContent = author;
    status.textContent = read;

    book.append(p1)
    book.append(p2);
    book.append(status);

    shelf.append(book);
}
);