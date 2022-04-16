const express = require('express');
const router = express.Router();
const {getStats,
        addStats,
        updateStats,
        deleteStats,
} = require('../controllers/statsController');

//GET
router.get('/', getStats);


//POST
router.post('/', add);


//UPDATE
router.put('/:id', (req, res) => {
    res.status(200).json({ message: `Update stats ${req.params.id}`});
});

//DELETE 
router.delete('/:id', (req, res) => {
    res.status(200).json({ message: `Delete stats ${req.params.id}`});
});


module.exports = router;