// Purpose: To edit a post
async function editFormHandler(event) {
    event.preventDefault();
  // Get the title from the form and the post id from the url 
    const title = document.querySelector('input[name="post-title"]').value.trim();
    const id = window.location.toString().split("/")[
      window.location.toString().split("/").length - 1
    ];

    const response = await fetch(`/api/posts/${id}`, {
      // PUT request to update the post title in the database`
    method: "PUT",
      body: JSON.stringify({
        title,
      }),
      headers: {
        // Tell the server we are sending JSON data 
        "Content-Type": "application/json",
      },
    });
  
    if (response.ok) {
      document.location.replace("/dashboard/");
    } else {
      alert(response.statusText);
    }
  }
  
  document
    .querySelector(".edit-post-form")
    .addEventListener("submit", editFormHandler);
  