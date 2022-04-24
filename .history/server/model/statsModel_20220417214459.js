const mongoose = require('mongoose');

const statsSchema = mongoose.Schema(
    {

    },
    {
        timestamps:
    }
);

module.exports = mongoose.model('Stats', statsSchema)