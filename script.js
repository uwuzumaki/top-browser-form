const email = document.getElementById("email");
email.addEventListener("blur", (e) => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("Please enter a valid email address!!");
  } else {
    email.setCustomValidity("");
  }
});

const zipcode = document.getElementById("zipcode");
zipcode.addEventListener("input", () => {
  if (zipcode.validity.patternMismatch) {
    zipcode.setCustomValidity(
      "Please enter a valid Canadian postal code (e.g., M4N 1A2)."
    );
  } else {
    zipcode.setCustomValidity("");
  }
});

const password = document.getElementById("password");
password.addEventListener("input", () => {
  if (password.validity.patternMismatch) {
    password.setCustomValidity(
      "Please enter a valid password. A valid password is 6 - 16 characters long with at least 1 number and 1 special character."
    );
  } else {
    password.setCustomValidity("");
  }
});

const passwordConfirm = document.getElementById("password-confirm");
passwordConfirm.addEventListener("input", () => {
  if (password.value === passwordConfirm.value) {
    passwordConfirm.setCustomValidity("");
    console.log("match");
  } else {
    passwordConfirm.setCustomValidity(
      "Password does not match. Please ensure your passwords match."
    );
    console.log("don't match");
  }
});
