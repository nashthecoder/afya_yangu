const express = require('express');
const router = express.Router();
const {getStats,
        addStats,
        updateStats,
        deleteStats,
} = require('../controllers/statsController');

//GET and POST
addStats,
    updateStats,
    deleteStats,

//UPDATE
router.put('/:id', updateStats);

//DELETE 
router.delete('/:id', deleteStats);


module.exports = router;