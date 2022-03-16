import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));

app.use(cors());
// app.use(express.json());
// app.use(require("./routes/record"));
// // get driver connection
// const dbo = require("./db/conn");
// app.listen(port, () => {
//   // perform a database connection when server starts
//     dbo.connectToServer(function (err) {
//     if (err) console.error(err);
//     });
//     console.log(`Server is running on port: ${port}`);
// });

