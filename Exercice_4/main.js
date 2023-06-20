let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirmPassword");
let button = document.querySelector("button");

button.addEventListener("click", () => {
    
  if (password.value === confirmPassword.value && password.value != '') {
    password.classList.remove("redBorder");
    confirmPassword.classList.remove("redBorder");
    password.classList.add("greenBorder");
    confirmPassword.classList.add("greenBorder");
  } else {
    password.classList.remove("greenBorder");
    confirmPassword.classList.remove("greenBorder");
    password.classList.add("redBorder");
    confirmPassword.classList.add("redBorder");
  }
});