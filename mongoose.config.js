const mongoose = require('mongoose');
const DB = 'authorsDB';

mongoose.connect('mongodb://localhost/' + DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log (`Database connection has been established on ${DB}`))
    .catch(err => console.log(`Something went wrong when connecting to ${DB}`, err))


mongoose.connection.on('error', (err) => console.err(err));