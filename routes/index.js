const productsRouter = require('./productsRoutes');

module.exports = (app) => {
    app.use('/products', productsRouter);
};