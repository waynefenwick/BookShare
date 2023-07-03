// Purpose: To sign up a new user
async function signupFormHandler(event) {
    event.preventDefault();
  
    // Get the username, email, and password from the form
    const username = document.querySelector("#username-signup").value.trim();
    const email = document.querySelector("#email-signup").value.trim();
    const password = document.querySelector("#password-signup").value.trim();
  
    // If the username, email, and password are not empty, send them to the server for signup
    if (username && email && password) {
      try {
        const response = await fetch("/api/users", {
          method: "POST",
          body: JSON.stringify({ username, email, password }),
          headers: { "Content-Type": "application/json" },
        });
  
        if (response.ok) {
          document.location.replace("/bookshare");
        } else {
          alert("Signup failed. Please try again.");
        }
      } catch (err) {
        console.log(err);
        alert("An error occurred. Please try again.");
      }
    }
  }
  
  document.querySelector("#signup-form").addEventListener("submit", signupFormHandler);
  