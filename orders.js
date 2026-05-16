const form = document.querySelector("#order-form");
const message = document.querySelector("#message");

form.addEventListener("submit", e => {

  e.preventDefault();

  const username = document.querySelector("#username").value;
  const email = document.querySelector("#email").value;
  const book = document.querySelector("#book-select").value;
  