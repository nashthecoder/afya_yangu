const mongoose = require('mongoose');

const statsSchema = mongoose.Schema(
    {

    },
    {
        timestamp
    }
);

module.exports = mongoose.model('Stats', statsSchema)