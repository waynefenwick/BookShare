// Purpose: login.js is used to handle the login and signup forms on the login page.
async function loginFormHandler(event) {
  event.preventDefault();
// Get the email and password from the form 
  const email = document.querySelector("#email-signin").value.trim();
  const password = document.querySelector("#password-signin").value.trim();
// If the email and password exist, send the email and password to the server 
  if (email && password) {
    const response = await fetch("/api/users/signin", {
      // Use the POST method to send the email and password to the server
      method: "post",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    // If the response is ok, redirect to the dashboard page, otherwise display the error
    if (response.ok) {
      document.location.replace("/bookshare");
    } else {
      alert(response.statusText);
    }
  }
}
document.querySelector(".signin-form").addEventListener("submit", loginFormHandler);
