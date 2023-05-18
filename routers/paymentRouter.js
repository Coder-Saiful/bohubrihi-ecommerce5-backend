const { initPayment, ipn, paymentSuccess, paymentFail, paymentCancel } = require('../controllers/paymentController');
const authorize = require('../middlewares/authorize');
const router = require('express').Router();

router.get('/', authorize, initPayment);

router.post('/ipn', ipn);

router.post('/success', paymentSuccess);

router.post('/fail', paymentFail);

router.post('/cancel', paymentCancel);

module.exports = router;
