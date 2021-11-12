const AuthorController = require('../controllers/author.controller')

module.exports = function(app) {
    // Creating = Post Request
    app.post('/api/authors/new', AuthorController.create)
    // Reading = Get Request
    // Read All
    app.get('/api/authors', AuthorController.readAll)
    // Read One
    app.get('/api/authors/:id', AuthorController.readOne)
    // Updating = Put Request
    app.put('/api/authors/edit/:id', AuthorController.update)
    // Deleting = Delete Request
    app.delete('/api/authors/delete/:id', AuthorController.delete)
}