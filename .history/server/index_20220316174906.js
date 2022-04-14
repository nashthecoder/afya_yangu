import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://nashthecoder:dip6Funk!@cluster0.9wssf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));Journey Steps Which step of the experience are you describing?	Discovery Why do they even start the journey?	Registration Why would they trust us?	Onboarding and First Use How can they feel successful?	Sharing Why would they invite others?
    Actions What does the  customer do? What information do they look for? What is their context?	Starts to work remotely with the team  	Chose a plan   Confirm free trial   Connect  social account  	Explore templates   Go through a tutorial   Watch an onboarding video.   Explore workspace  	Open document   Invite others   Load a template   I learn from how others do it  
    Needs and Pains What does the customer want to achieve or avoid? What is not working? Tip: Try to formulate these consistently to reduce ambiguity. Here we use the first person.	We rarely collaborate   I want a way to collaborate visually   I understand how this can help me get my job done  	I worry about having to pay before trying   I don't give up any personal data   I trust this can help me get my job done  	I don't waste time reading manuals   I don't fiddle with unfamiliar controls   I get inspired by how others do it  	I can start creating right away   I can work with others  
    Touchpoint What part of the service do they interact with?	Recommendation from a friend  	Registration form   Email   Free templates  	Onboarding tutorial   Onboarding tutorial   Workspace   Template library  	New document   Sharing  
    Customer Feeling What is the customer feeling? Tip: Use the emoji app to express more emotions				
    Backstage				
    Opportunities What could we improve or introduce?	Increase the duration of trial period to activate users. 
     [High Value][Low Reach][Low Confidence]	Increase the duration of trial period to activate users. 
     [High Value][Low Reach][Low Confidence]	Start with a template   Implement more visual tutorials to reduce onboarding effort 
     [High Confidence][High Value][Low Reach]	Improve sharing and embedding flows to drive adoption 
    
    Process ownership﻿ Who is in the lead on this?	Andrej  	Kate  	Kristin  	Andrej  


// const cors = require("cors");
// require("dotenv").config({ path: "./config.env" });
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

