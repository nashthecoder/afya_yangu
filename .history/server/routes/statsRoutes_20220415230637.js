const express = require('express');
const router = express.Router();
const {getStats,
        addStats,
        updateStats,
        deleteStats,
} = require('../controllers/statsController');

//GET and POST
router.route('/').get(getStats).post(addStats)

//UPDATE and DELETE
router.route('/:id').delete(deleteStats).put(updateStats)




module.exports = router;