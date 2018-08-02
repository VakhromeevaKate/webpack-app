const PATH = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
    source: PATH.join(__dirname, 'source'),
    build: PATH.join(__dirname, 'build')
};

module.exports = {
    entry: PATHS.source + '/index.js',
    output: {
        path: PATHS.build,
        filename: '[name].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack app'
        })
    ]
};