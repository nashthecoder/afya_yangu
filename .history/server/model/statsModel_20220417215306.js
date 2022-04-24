const mongoose = require('mongoose');

const statsSchema = mongoose.Schema({
    bloodPressure: [{
        systolicRate: String,
        diastolicRate: String,
    }],
    pulseRate: {
        type: Stinr
    },

});

module.exports = mongoose.model('Stats', statsSchema)