const mongoose = require('mongoose');

const statsSchema = mongoose.Schema(
    {

    },
    {
        time
    }
);

module.exports = mongoose.model('Stats', statsSchema)