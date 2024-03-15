const form = document.getElementById("form");
const usuario = document.getElementById("username");
const email = document.getElementById("email");
const lastName = document.getElementById("lastName");
const phone = document.getElementById("phone");
const city = document.getElementById("city");
const postalCodeInput = document.getElementById("postalCode");
const keepInformed = document.getElementById("keepInformed");
const genderInputs = document.querySelectorAll('input[name="gender"]');
const male = document.getElementById("male");
const female = document.getElementById("female");
const other = document.getElementById("other");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  const usuarioValue = usuario.value.trim();
  const emailValue = email.value.trim();
  const lastNameValue = lastName.value.trim();
  const phoneValue = phone.value.trim();
  const cityValue = city.value.trim();
  const postalCodeValue = postalCodeInput.value.trim();
  const lettersRegex = /^[a-zA-Z\s]+$/;
  const phoneRegex = /^\+34\d{9}$/;

  if (usuarioValue === "") {
    setErrorFor(usuario, "No puedes dejar el usuario en blanco");
  } else if (!lettersRegex.test(usuarioValue)) {
    setErrorFor(usuario, "El usuario solo puede contener letras y espacios");
  } else {
    setSuccessFor(usuario);
  }

  if (lastNameValue === "") {
    setErrorFor(lastName, "No puedes dejar el apellido en blanco");
  } else if (!lettersRegex.test(lastNameValue)) {
    setErrorFor(lastName, "El apellido solo puede contener letras y espacios");
  } else if (lastNameValue.length < 3) {
    setErrorFor(lastName, "Tu apellido debe tener más de 3 letras");
  } else {
    setSuccessFor(lastName);
  }

  if (emailValue === "") {
    setErrorFor(email, "No puedes dejar el email en blanco");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "No ingresó un email válido");
  } else {
    setSuccessFor(email);
  }

  if (cityValue === "") {
    setErrorFor(city, "Debes elegir una ciudad");
  } else if (cityValue === "0") {
    setErrorFor(city, "Por favor selecciona una ciudad válida");
  } else {
    setSuccessFor(city);
  }

  if (postalCodeValue.length !== 5 || !/^\d{5}$/.test(postalCodeValue)) {
    setErrorFor(
      postalCodeInput,
      "Por favor ingrese un PostalCode válido, debe tener exactamente 5 dígitos."
    );
  } else {
    setSuccessFor(postalCodeInput);
  }

  if (phoneValue === "") {
    setErrorFor(phone, "No puedes dejar el teléfono en blanco");
  } else if (!phoneRegex.test(phoneValue)) {
    setErrorFor
    (phone,"El teléfono debe comenzar con el prefijo +34 y tener 9 dígitos después"
    );
  } else {
    setSuccessFor(phone);
  }

  let genderValue = null;
  genderInputs.forEach((input) => {
    if (input.checked) {
      genderValue = input.value;
    }
  });

  if (!genderValue) {
    setErrorFor2(genderInputs[0], "Debes marcar una opción de género");
  } else {
    setSuccessFor2(genderInputs[0]);
  }

  if (!keepInformed.checked) {
    setErrorFor2(keepInformed, "Debes aceptar mantenerse informado");
  } else {
    setSuccessFor2(keepInformed);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "form-control error";
  small.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function setErrorFor2(input, message) { //creo una funcion nueva de setError porque tuve q modificar el css de grupo para radio buttons y checkbottons ya que era diferente el estilo que queria utilizar al de form-group
  const grupo = input.parentElement;
  const small = grupo.querySelector("small");
  grupo.className = "grupo error";
  small.innerText = message;
}

function setSuccessFor2(input) {
  const grupo = input.parentElement;
  grupo.className = "grupo success";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
