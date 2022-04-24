const mongoose = require('mongoose');

const statsSchema = mongoose.Schema(
    {
    pulseRate: {
        type: number,
    },
    bloodPressure: [{
        systolicRate: number,
        diastolicRate: number,
    }],
    bloodSugar: 
        test
    }
);

module.exports = mongoose.model('Stats', statsSchema)