const merge = require('webpack-merge');
const common = require('./webpack.common.js');
(require('dotenv').config());

module.exports = merge(common, {
    mode: 'development',
    devServer: {
        port: process.env.CLIENT_PORT,
        historyApiFallback: true
    },
    devtool: 'inline-source-map',
});