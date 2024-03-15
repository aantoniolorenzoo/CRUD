const loginForm = document.getElementById("loginForm");
const username = document.getElementById("username");
const password = document.getElementById("password");

loginForm.addEventListener("submit", (e) => { // Cambio de 'form' a 'loginForm'
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  const usuarioValue = username.value.trim();
  const passwordValue = password.value.trim();

  if (usuarioValue === "") {
    setErrorFor(username, "No puede estar vacío");
  } else if (usuarioValue.length < 8 || usuarioValue.length > 12) {
    setErrorFor(username, "El usuario deberá tener entre 8 y 12 caracteres");
  } else {
    setSuccessFor(username);
  }

  if (passwordValue === "") {
    setErrorFor(password, "No puede estar vacía");
  } else if (passwordValue.length < 8 || passwordValue.length > 15) {
    setErrorFor(password, "La contraseña debe tener entre 8 y 15 caracteres");
  } else if (!/[A-Z]/.test(passwordValue)) {
    setErrorFor(password, "La contraseña debe contener al menos una mayúscula");
  } else if (!/[a-z]/.test(passwordValue)) {
    setErrorFor(password, "La contraseña debe contener al menos una minúscula");
  } else if (!/\d/.test(passwordValue)) {
    setErrorFor(password, "La contraseña debe contener al menos un dígito");
  } else {
    setSuccessFor(password);
  }
}

function setErrorFor(input, message) {
  const userBox = input.parentElement;
  const small = userBox.querySelector("small");
  userBox.className = "user-box error"; // Cambio de 'loginForm' a 'user-box'
  small.innerText = message;
}

function setSuccessFor(input) {
  const userBox = input.parentElement;
  userBox.className = "user-box success"; // Cambio de 'loginForm' a 'user-box'
}
