const { initPayment, ipn, paymentSuccess, paymentFail, paymentCancel } = require('../controllers/paymentController');
const authorize = require('../middlewares/authorize');
const router = require('express').Router();

router.get('/', authorize, initPayment);

router.get('/ipn', ipn);

router.get('/success', paymentSuccess);

router.get('/fail', paymentFail);

router.get('/cancel', paymentCancel);

module.exports = router;