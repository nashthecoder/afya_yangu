const mongoose = require('mongoose');

const statsSchema = mongoose.Schema({
    bloodPressure: [{
        systolicRate: String,
        diastolicRate: String,
    }],
    pulse
});

module.exports = mongoose.model('Stats', statsSchema)