const mongoose = require('mongoose');

const statsSchema = mongoose.Schema({
    bloodPressure: [{
        systolic

    }],

});

module.exports = mongoose.model('Stats', statsSchema)