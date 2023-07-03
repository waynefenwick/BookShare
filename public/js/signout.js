async function logout() {
  // Send a POST request to the server to logout the user 
  const response = await fetch("/api/users/signout", {
      method: "post",
      headers: { "Content-Type": "application/json" }
  });
// If the response is ok, redirect to the homepage, otherwise display the error
  if (response.ok) {
      document.location.replace("/signout");
  } else {
      alert(response.statusText);
  }
}

document.querySelector("#signout").addEventListener("click", logout);