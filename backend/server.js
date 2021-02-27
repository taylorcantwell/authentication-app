require('dotenv').config();
const express = require('express');
const app = express();
const register = require('./routes/register');
// app.use(cors());
app.use(express.json());
app.use('/register', register);
app.listen(4000);
