const mongoose = require('mongoose');

const statsSchema = mongoose.Schema({
    bloodPressure: [{
        systolicRate: String,
        diastolicRate: String,
    }],
    pulseRate: {
        ty
    }
});

module.exports = mongoose.model('Stats', statsSchema)