// @desc Get stats
// @route GET/api/stats
// @access Private
const getStats = (req, res) => {
    res.status(200).json({message: 'Get stats'})
};


// @desc Post stats
// @route POST/api/stats
// @access Private
const postStats = (req, res) => {
    res.status(200).json({message: 'Add stats'})
};

// @desc Get stats
// @route /api/stats
// @access Private
const putStats = (req, res) => {
    res.status(200).json({message: 'Update stats'})
};

// @desc Get stats
// @route GET/api/stats
// @access Private
const deleteStats = (req, res) => {
    res.status(200).json({message: 'Delete stats'})
};

module.exports = {
    getStats,
};