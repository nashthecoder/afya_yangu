const mongoose = require('mongoose');

const statsSchema = mongoose.Schema({
    bloodPressure: [{
        systolicRate: String,
        diastolicRate: 

    }],

});

module.exports = mongoose.model('Stats', statsSchema)