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
const form = document.querySelector('#book-registration');
const formBtn = document.querySelector('.form-button');

const addButton = document.querySelector('.addButton');
addButton.addEventListener('click', () => form.classList.toggle('active'));

// formBtn.addEventListener('click', () => {
//     let title = document.querySelector('#title').value;
//     console.log(title);
// });

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let status = document.querySelector('input[name="status"]:checked').value;

    console.log(`The title is ${title} by ${author} with ${pages} pages${status}`);

});


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