const mongoose = require('mongoose');

const statsSchema = mongoose.Schema({
    bloodPressure: [
        
    ],

});

module.exports = mongoose.model('Stats', statsSchema)