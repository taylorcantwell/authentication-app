require('dotenv').config();
const morgan = require('morgan');
const AppError = require('./util/appError');
const cors = require('cors');
const express = require('express');
const app = express();
const authRoutes = require('./routes/authRoutes');
const errorController = require('./controllers/errorController');

//!allow express to parse json from the body
app.use(express.json());
app.use(morgan('tiny'));

//!cors to allow us to accept requests from client
app.use(cors());

//!routes
app.use('/auth', authRoutes);

//!handle any unhandled routes
app.all('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

//!error handling middleware
app.use(errorController);

app.listen(4000);
