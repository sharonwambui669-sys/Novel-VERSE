const form = document.querySelector("#order-form");
const message = document.querySelector("#message");

form.addEventListener("submit", e => {

  e.preventDefault();

  const username = document.querySelector("#username").value;
  const email = document.querySelector("#email").value;
  const book = document.querySelector("#book-select").value;

    if (username === "" || email === "") {
    message.textContent = "Please fill all fields.";
    return;
  }

  message.textContent = `${username}, your order for ${book} has been submitted.`;

  form.reset();
});