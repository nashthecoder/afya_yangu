const mongoose = require('mongoose');

const statsSchema = mongoose.Schema(
    {

    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('Stats', statsSchema)