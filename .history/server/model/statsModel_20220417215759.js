const mongoose = require('mongoose');

const statsSchema = mongoose.Schema(
    {
    pulseRate: {
        type: number,
    },
    bloodPressure: [{
        systolicRate: umber,
        diastolicRate: Number,
    }],
    bloodSugar: [{
        testType: String,
    }]
        

    }
);

module.exports = mongoose.model('Stats', statsSchema)