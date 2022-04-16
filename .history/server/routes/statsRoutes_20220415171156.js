const express = require('express');
const router = express.Router();

//GET
router.get('/', (req, res) => {
    res.status(200).json({message: 'Get stats'});
});

router.post('/', (req, res) => {
    res.status(200).json({message: 'Get stats'});
});

router.('/', (req, res) => {
    res.status(200).json({message: 'Get stats'});
});

router.get('/', (req, res) => {
    res.status(200).json({message: 'Get stats'});
});


module.exports = router;