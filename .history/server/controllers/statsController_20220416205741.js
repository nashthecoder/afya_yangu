const asyncHandler = require('express-async-handler');

// @desc Get stats
// @route GET/api/stats
// @access Private
const getStats = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Get stats'});
});


// @desc Add stats
// @route POST/api/stats
// @access Private
const addStats =  asyncHandler(async (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field');
    }
    res.status(200).json({message: 'Add stats'});
});

// @desc Update stats
// @route PUT/api/stats/:id
// @access Private
const updateStats =  asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Update stats ${req.params.id}`});
});

// @desc Delete stats
// @route DELETE/api/stats/:id
// @access Private
const deleteStats = Vasync (req, res) => {
    res.status(200).json({ message: `Delete stats ${req.params.id}`});
};

module.exports = {
    getStats,
    addStats,
    updateStats,
    deleteStats,
};