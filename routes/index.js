const productsRouter = require('./productsRoutes');
const imagesRouter = require('./imagesRouter');

module.exports = (app) => {
    app.use('/api/products', productsRouter);
    app.use('/api/images', imagesRouter);
};