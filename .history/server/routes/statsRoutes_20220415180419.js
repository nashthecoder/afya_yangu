const express = require('express');
const router = express.Router();

//GET
router.get('/', (req, res) => {
    res.status(200).json({message: 'Get stats'});
});

router.post('/', (req, res) => {
    res.status(200).json({message: 'Add stats'});
});

router.put('/:id', (req, res) => {
    res.status(200).json({message: `Update stats ${});
});

router.delete('/', (req, res) => {
    res.status(200).json({message: 'Delete stats'});
});


module.exports = router;