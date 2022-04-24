const mongoose = require('mongoose');

const statsSchema = mongoose.Schema({
    bloodPressure: [{
        systoli

    }],

});

module.exports = mongoose.model('Stats', statsSchema)