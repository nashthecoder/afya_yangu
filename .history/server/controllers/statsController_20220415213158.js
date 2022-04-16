// @desc Get stats
// @route GET/api/stats
// @access Provate
const getStats = (req, res) => {
    res.status(200).json({message: 'Get stats'})
};


// @desc Get stats
// @route GET/api/stats
// @access Provate
const postStats = (req, res) => {
    res.status(200).json({message: 'Add stats'})
};

// @desc Get stats
// @route GET/api/stats
// @access Provate
const putStats = (req, res) => {
    res.status(200).json({message: 'Update stats'})
};

// @desc Get stats
// @route GET/api/stats
// @access Provate
const deleteStats = (req, res) => {
    res.status(200).json({message: 'Delete stats'})
};

module.exports = {
    getStats,
};