const mongoose = require('mongoose');

const statsSchema = mongoose.Schema(
    {
    pulseRate: {
        type: String,
    },
    bloodPressure: [{
        systolicRate: String,
        diastolicRate: number,
    }],
    bloodSugar: 
    }
);

module.exports = mongoose.model('Stats', statsSchema)