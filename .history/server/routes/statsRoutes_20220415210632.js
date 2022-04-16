const express = require('express');
const router = express.Router();
const {} = require('../controllers')

//GET
router.get('/', (req, res) => {
    res.status(200).json({message: 'Get stats'});
});


//POST
router.post('/', (req, res) => {
    res.status(200).json({message: 'Add stats'});
});


//UPDATE
router.put('/:id', (req, res) => {
    res.status(200).json({ message: `Update stats ${req.params.id}`});
});

//DELETE 
router.delete('/:id', (req, res) => {
    res.status(200).json({ message: `Delete stats ${req.params.id}`});
});


module.exports = router;