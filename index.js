const express = require('express');
const errorHandler = require('./middlewares/Error');
const app = express();

// Using dotenv
require('dotenv').config();

// Converting Data into JSON
app.use(express.json());

// URL-encoded data
app.use(express.urlencoded({ extended: false }));

// Using router from userrouter.js
app.use('/', require('./routes/Userroutes'));

// Middleware Error Handler
app.use(errorHandler);

app.listen(process.env.PORT, () => console.log(`I am listening at Port ${process.env.PORT}`));
