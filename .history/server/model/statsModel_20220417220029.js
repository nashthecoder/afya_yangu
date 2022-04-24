const mongoose = require('mongoose');

const statsSchema = mongoose.Schema(
    {
        pulseRate: {
            type: number,
        },
        bloodPressure: [{
            systolicRate: Number,
            diastolicRate: Number,
        }],
        bloodSugar: [{
            testType: String,
            sugarLevel: Number,

        }],
        
    }
);

module.exports = mongoose.model('Stats', statsSchema)