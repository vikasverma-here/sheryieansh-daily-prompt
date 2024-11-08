function togglePassword() {
    const passwordField = document.getElementById("password");

    if (passwordField.type === "password") {
        passwordField.innerHTML='👁️'
      passwordField.type = "text";
    } else {
      passwordField.type = "password";
    }
  }
  