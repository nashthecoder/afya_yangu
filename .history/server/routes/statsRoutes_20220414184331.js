const express = require('express');
const router = express.Router();

router.get('/api/st', (req, res) => {
    res.status(200).json({message: 'Get stats'});
});


module.exports = router;