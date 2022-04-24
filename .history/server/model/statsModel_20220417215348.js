const mongoose = require('mongoose');

const statsSchema = mongoose.Schema({
    pulseRate: {
        type: String,
    },
    bloodPressure: [{
        systolicRate: String,
        diastolicRate: String,
    }],
    bloosSugar: 

});

module.exports = mongoose.model('Stats', statsSchema)