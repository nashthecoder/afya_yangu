const mongoose = require('mongoose');

const statsSchema = mongoose.Schema(
    {
        pulseRate: {
            type: Number,
            
        },
        bloodPressure: [{
            systolicRate: Number,
            diastolicRate: Number,
        }],
        bloodSugar: [{
            testType: String,
            sugarLevel: Number,

        }],
        {
            timestamps: true,
        }
    }
);

module.exports = mongoose.model('Stats', statsSchema)