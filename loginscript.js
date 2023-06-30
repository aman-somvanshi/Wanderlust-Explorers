function redirectToIndex() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Check the conditions for username and password
    if (isValidUsername(username) && isValidPassword(password)) {
      window.location.replace = "index.html"; // Redirect to index.html
    } else {
      alert("Invalid username or password. Please check the input.");
    }
  }
  // Validate the syntax of the username
function isValidUsername(username) {
    // Username should be more than 6 characters long
    return username.length > 6;
  }
  
// Validate the syntax of the password
function isValidPassword(password) {
    // Password should be at least 8 characters long and contain a combination of letters and numbers
    var regex = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;
    return regex.test(password);
  }
  
