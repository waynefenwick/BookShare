document.addEventListener('DOMContentLoaded', function() {
    // HTML elements
    const searchForm = document.querySelector('#searchForm');
    const searchInput = document.querySelector('#searchQuery');
    const searchResults = document.querySelector('#searchResults');
  
    // Event listener for form submission
    searchForm.addEventListener('submit', function(e) {
      e.preventDefault(); // Prevent form submission
  
      const searchTerm = searchInput.value; // Get the search term
  
      // Clear previous search results
      searchResults.innerHTML = '';
  
      // Perform API request
      fetch(`http://openlibrary.org/search.json?q=${searchTerm}`)
        .then(response => response.json())
        .then(data => {
          displayResults(data);
        })
        .catch(error => {
          console.error(error);
        });
    });
  
// Display search results
// Display search results
function displayResults(data) {
    const books = data.docs.filter(book => {
      return book.cover_i && book.language && book.language.includes('eng');
    });
  
    if (books.length === 0) {
      searchResults.innerHTML = '<p>No results found.</p>';
    } else {
      const bookList = document.createElement('ul');
      bookList.classList.add('book-list'); // Add CSS class to the book list
  
      books.forEach(book => {
        const listItem = document.createElement('li');
        const bookTitle = document.createElement('span');
        const bookCover = document.createElement('img');
        const bookSummary = document.createElement('p');
  
        bookTitle.textContent = book.title;
  
        const coverID = book.cover_i;
        const coverURL = `http://covers.openlibrary.org/b/id/${coverID}-M.jpg`;
        bookCover.src = coverURL;
        bookCover.alt = book.title;
  
        if (book.description) {
          bookSummary.textContent = book.description;
        } else {
          bookSummary.textContent = 'No summary available.';
        }
  
        listItem.appendChild(bookCover);
        listItem.appendChild(bookTitle);
        listItem.appendChild(bookSummary);
        bookList.appendChild(listItem);
      });
  
      searchResults.appendChild(bookList);
    }
  }
  
  });
  