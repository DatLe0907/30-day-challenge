let userName = document.querySelector("#username"),
  email = document.querySelector("#email"),
  password = document.querySelector("#password"),
  confirmPassword = document.querySelector("#confirm-password"),
  form = document.querySelector("form");

function showError(input, message) {
  let parent = input.parentElement;
  let small = parent.querySelector("small");

  parent.classList.add("error");
  small.innerText = message;
}

function showSuccess(input) {
  let parent = input.parentElement;
  let small = parent.querySelector("small");

  parent.classList.remove("error");
  small.innerText = " ";
}

function checkEmtyError(listImput) {
  let isEmtyError = false;
  listImput.forEach((input) => {
    input.value.trim();

    if (input.value === "") {
      isEmtyError = true;
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
  return isEmtyError;
}

function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function checkEmailError(input) {
  const regexEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  input.value = input.value.trim();
  let isEmailError = !regexEmail.test(input.value);
  if (regexEmail.test(input.value)) {
    showSuccess(input);
  } else {
    showError(input, "Email invalid");
  }
  return isEmailError;
}

function checkLengthError(input, min, max) {
  input.value = input.value.trim();

  if (input.value.length < min) {
    showError(input, `at least ${min} characters`);
    return true;
  }
  else if (input.value.length > max) {
    showError(input, `at most ${max} characters`);
    return true;
  }
  showSuccess(input);
  return false;
}

function checkPassword(input1,input2){
  if(input1.value!== input2.value){
    showError(input2,'Password do not match')
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  checkEmtyError([userName, email, password, confirmPassword]);
  checkEmailError(email);
  checkLengthError(userName, 3, 15);
  checkLengthError(password, 6, 25);
  checkPassword(password,confirmPassword)
});
