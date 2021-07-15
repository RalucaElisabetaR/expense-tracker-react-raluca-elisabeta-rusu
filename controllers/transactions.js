// @desc Get all Transactions
// @route GET /api/v1/transactions
// @access Public

exports.getTransactions = (rec, res, next) => {
    res.send('GET Transactions')
}

// @desc Add all Transaction
// @route POST /api/v1/transactions
// @access Public

exports.addTransaction = (rec, res, next) => {
    res.send('POST transaction')
}

// @desc Delete all Transaction
// @route DELETE /api/v1/transactions/:id
// @access Public

exports.deleteTransaction = (rec, res, next) => {
    res.send('DELETE Transaction')
}
