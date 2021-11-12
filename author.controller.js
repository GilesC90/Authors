const Author = require('../models/authors.model')

module.exports = {
    // CRUD 

    // CREATE
    create: (req, res) => {
        Author.create(req.body)
            .then(author => res.json(author))
            .catch(err => res.status(400).json(({message: "Cannot create author", error: err})))
    },

    // READ (All, One)
    readAll: (req, res) => {
        Author.find()
            .then(all => res.json(all))
            .catch(err => res.json(({message: "Cannot find authors" , error: err})))
    },

    readOne: (req, res) => {
        Author.findById(req.params.id)
            .then(author => res.json(author))
            .catch(err => res.json({message: "Cannot find author", error: err}))
    },

    // UPDATE
    update: (req, res) => {
        Author.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
            .then(author => res.json(author))
            .catch(err => res.status(400).json({message: "Cannot update the author", error: err}))
    },

    // DELETE
    delete: (req, res) => {
        Author.findByIdAndDelete(req.params.id)
            .then(author => res.json(author))
            .catch(err => res.json({message: "Cannot delete the author", error: err}))
    }
};