const baseConfig = require('./webpack.base.config');
const { merge } = require("webpack-merge");

const devConfig = {
    mode: 'development',
    // webpack 5 comes with devServer which loads in development mode
    devServer: {
        port: 3000,
        open: true,
        hot: true
    },
};

module.exports = merge(devConfig, baseConfig);