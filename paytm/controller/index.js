const router = require('./paytm.router');

module.exports = {
    router: router.router,
    verification : router.verifyTransactionId
}
