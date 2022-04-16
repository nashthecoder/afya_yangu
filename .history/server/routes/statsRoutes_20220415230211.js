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
router.put('/:id', updateStats);

//DELETE 
router.delete('/:id', delete);


module.exports = router;