// NOVELVERSE BOOK DATA
// =====================
const books = [
  { id: 1, title: "Atomic Habits", author: "James Clear" },
  { id: 2, title: "Rich Dad Poor Dad", author: "Robert Kiyosaki" },
  { id: 3, title: "Think and Grow Rich", author: "Napoleon Hill" },
  { id: 4, title: "The Alchemist", author: "Paulo Coelho" }
];

// =====================
// CART SYSTEM
// =====================
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// =====================
// DOM ELEMENTS
// =====================
const container = document.querySelector(".books-container");
const searchInput = document.querySelector("#search");
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

// =====================
// RENDER BOOKS
// =====================
function renderBooks(data = books) {
  if (!container) return;

  container.innerHTML = "";

  data.forEach(book => {
    const card = document.createElement("div");
    card.classList.add("book-card");

    card.innerHTML = `
      <h3>${book.title}</h3>
      <p>${book.author}</p>
      <button class="add-btn" data-id="${book.id}">Add to Cart</button>
    `;

    container.appendChild(card);
  });

  attachCartEvents();
}

// =====================
// ADD TO CART FUNCTION
// =====================
function addToCart(id) {
  const book = books.find(b => b.id === id);
  if (!book) return;

  cart.push(book);
  localStorage.setItem("cart", JSON.stringify(cart));

  alert(`${book.title} added to cart`);
}
// =====================
// ATTACH BUTTON EVENTS
// =====================
function attachCartEvents() {
  const buttons = document.querySelectorAll(".add-btn");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const id = Number(btn.getAttribute("data-id"));
      addToCart(id);
    });
  });
}

// =====================
// SEARCH FUNCTIONALITY
// =====================
if (searchInput) {
  searchInput.addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase();

    const filtered = books.filter(book =>
      book.title.toLowerCase().includes(value)
    );
    renderBooks(filtered);
  });
}

// =====================
// MOBILE MENU TOGGLE
// =====================
if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}

// =====================
// INITIAL LOAD
// =====================
renderBooks();