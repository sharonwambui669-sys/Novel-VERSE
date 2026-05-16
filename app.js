const books = [
  {
    title: "Atomic Habits",
    author: "James Clear",
    price: 1200
  },
  {
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    price: 950
  },
  {
    title: "Think and Grow Rich",
    author: "Napoleon Hill",
    price: 1100
  }
];

const booksContainer = document.querySelector(".books-container");

function displayBooks() {

  books.forEach(book => {

    const card = document.createElement("div");

    card.classList.add("book-card");

    card.innerHTML = `
      <h3>${book.title}</h3>
      <p>${book.author}</p>
      <span>Ksh ${book.price}</span>
      <button>Add to Cart</button>
    `;


    booksContainer.appendChild(card);
  });
}

if (booksContainer) {
  displayBooks();
}

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}

const searchInput = document.querySelector("#search");

if (searchInput) {
