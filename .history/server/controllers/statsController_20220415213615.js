// @desc Get stats
// @route GET/api/stats
// @access Private
const getStats = (req, res) => {
    res.status(200).json({message: 'Get stats'})
};


// @desc Add stats
// @route POST/api/stats
// @access Private
const addStats = (req, res) => {
    res.status(200).json({message: 'Add stats'})
};

// @desc Update stats
// @route PUT/api/stats
// @access Private
const updateStats = (req, res) => {
    res.status(200).json({message: 'Update stats'})
};

// @desc Delete stats
// @route DELETE/api/stats
// @access Private
const deleteStats = (req, res) => {
    res.status(200).json({message: 'Delete stats'})
};

module.exports = {
    getStats,
    addStats,
    updateStats,
    deleteStats,
};