require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose
        .connect("mongodb+srv://nashthecoder:dip6Funk!@clusterafya.kgjpv.mongodb.net/afyaapp?retryWrites=true&w=majority",{ useNewUrlParser: true }, () => {} )
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDB