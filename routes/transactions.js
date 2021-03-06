const express = require('express')
const router = express.Router()
const { getTransactions } = require('../controllers/transactions')

router.route('/').get(getTransactions)

module.exports = router
