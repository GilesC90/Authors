const express = require('express');
const cors = require('cors');

const app = express();

const PORT = 8000;


// Middleware
app.use(cors(), express.json(), express.urlencoded({extended: true}));


require('./config/mongoose.config');


require('./routes/author.routes')(app);
//start server 
app.listen(PORT, () => console.log(`You are connected to Port ${PORT}`));