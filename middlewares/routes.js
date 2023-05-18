const userRouter = require('../routers/userRouter');
const categoryRouter = require('../routers/categoryRouter');
const productRouter = require('../routers/productRouter');
const cartRouter = require('../routers/cartRouter');
const profileRouter = require('../routers/profileRouter');
const paymentRouter = require('../routers/paymentRouter');

module.exports = (app) => {
    app.get('/', (req, res) => {
        res.send('<h3>Server running...</h3>');
    });
    app.use('/api/user', userRouter);
    app.use('/api/category', categoryRouter);
    app.use('/api/product', productRouter);
    app.use('/api/cart', cartRouter);
    app.use('/api/profile', profileRouter);
    app.use('/api/payment', paymentRouter);
}
