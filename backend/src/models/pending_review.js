const mongoose = require('mongoose')
const review = require('./review')

const pendingReview  = new mongoose.Schema({
    ...review
})

const PendingReview = mongoose.model('pending_review',pendingReview)
module.exports = PendingReview

