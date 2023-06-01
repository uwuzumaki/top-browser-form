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
