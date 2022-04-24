const mongoose = require('mongoose');

const statsSchema = mongoose.Schema({
    bloodPressure: [{
        systolicRate: String,
        diastolicRate: String,
    }],
    pulseRate: {}
});

module.exports = mongoose.model('Stats', statsSchema)