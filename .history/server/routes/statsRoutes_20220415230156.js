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
router.post('/', addStats);


//UPDATE
router.put('/:id', );

//DELETE 
router.delete('/:id', (req, res) => {
    res.status(200).json({ message: `Delete stats ${req.params.id}`});
});


module.exports = router;