const fetch = require("node-fetch");
const router = require("express").Router();
//getting book data from search term
router.get('/', async (req, res) => {
    try {
        const searchTerm = req.query.searchTerm;
        console.log(req.query.searchTerm);
        const response = await fetch('https://openlibrary.org/search.json?q=the+lord+of+the+rings?q=' + searchTerm);
        console.log(response);
        const data = await response.json();
        console.log(data)
        console.log('here at the book routes')
        res.render('single-book', { books: data.items });
    } catch (err) {
        console.error(err);
        res.status(500).json(err)
    }
})
// export
module.exports = router;