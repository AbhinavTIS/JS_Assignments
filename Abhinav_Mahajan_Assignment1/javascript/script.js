function validateForm() {
  // Putting the input values into js variables
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var dob = document.getElementById("dob").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;
  var flag = true; // setting a flag that decides if the form is to be submitted or not(in case of errors)

  // setting previous error messages to empty
  document.getElementById("emailError").innerHTML = "";
  document.getElementById("phoneError").innerHTML = "";
  document.getElementById("passwordError").innerHTML = "";
  document.getElementById("confirmPasswordError").innerHTML = "";
  document.getElementById("dobError").innerHTML = "";

  // Phone number validation
  var phonePattern =
    /^(?:(?:\+|00)1[-.]\s?)?(?:\(\d{3}\)|\d{3})[-.\s]?\d{3}[-.\s]?\d{4}$/;
  if (!phonePattern.test(phone)) {
    document.getElementById("phoneError").innerHTML =
      "Enter a valid 10-digit phone number";

    flag = false;
  }

  // DateOfBirth validation
  var dobPattern =
    /^(0[1-9]|1[0-2])[-./](0[1-9]|[12][0-9]|3[01])[-./](19|20)\d{2}$/;
  if (!dobPattern.test(dob)) {
    document.getElementById("dobError").innerHTML =
      "Enter date in the valid format (MM/DD/YYYY";
    flag = false;
  }

  // Email validation
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    document.getElementById("emailError").innerHTML =
      "Enter a valid email address";
    flag = false;
  }

  // Password validation

  // #1 password matching
  if (password !== confirmPassword) {
    document.getElementById("confirmPasswordError").innerHTML =
      "Passwords do not match";

    return false; // prevent submission
  }

  if (password.length < 8) {
    document.getElementById("passwordError").innerHTML =
      "Password must contain Minimum 8 characters";

    return false;
  }
  //  #2 at least one uppercase letter
  if (!/[A-Z]/.test(password)) {
    document.getElementById("passwordError").innerHTML =
      "Password must contain at least 1 uppercase letter";

    return false;
  }

  //  #3 at least one lowercase letter
  if (!/[a-z]/.test(password)) {
    document.getElementById("passwordError").innerHTML =
      "Password must contain at least 1 lowercase letter";

    return false;
  }

  // #4  at least one digit
  if (!/\d/.test(password)) {
    document.getElementById("passwordError").innerHTML =
      "Password must contain at least 1 digit";

    return false;
  }

  if (!flag) {
    //This if statement will prevent form submission if any of the fields are having invalid input

    return false; // prevent form submission with prompts to user for correct data format
  }
  alert("Form submitted successfully"); // display the success message
  return true; // Allow form submission
}
