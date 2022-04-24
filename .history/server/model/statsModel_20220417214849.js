const mongoose = require('mongoose');

const statsSchema = mongoose.Schema({
    bloodPressure: [{
        systolicRate: String,
        

    }],

});

module.exports = mongoose.model('Stats', statsSchema)