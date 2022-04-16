const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT  || 5000;

const app = express()


app.use('/api/stats', require('./routes/statsRoutes'));
app.listen(port, () => console.log(`Server started on ${port}`));