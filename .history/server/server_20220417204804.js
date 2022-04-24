
require('dotenv').config();
const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv');
dotenv.config({path:'.env'})
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');

const port = process.env.PORT || 5000;

const app = express();
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/api/stats', require('./routes/statsRoutes'));

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on ${port}`));