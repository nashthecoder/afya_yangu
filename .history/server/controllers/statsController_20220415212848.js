// @desc Get stats
// GET/api/stats
//
const getStats = (req, res) => {
    res.status(200).json({message: 'Get stats'})
};

module.exports = {
    getStats,
};