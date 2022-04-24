const mongoose = require('mongoose');

const statsSchema = mongoose.Schema({
    bloodPressure: [{
        systolicRate

    }],

});

module.exports = mongoose.model('Stats', statsSchema)