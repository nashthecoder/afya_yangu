const express = require('express');
const router = express.Router();

app.get('/api/stats', (req, res) => {
    res.status(200).json({message: 'Get stats'});
});


module.exports = router;