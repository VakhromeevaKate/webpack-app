const PATH = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const merge = require('webpack-merge');
const pug = require('./webpack/pug');
const devserver = require('./webpack/devserver');
const sass = require('./webpack/sass');

const PATHS = {
    source: PATH.join(__dirname, 'source'),
    build: PATH.join(__dirname, 'build')
};

const common = merge([
    {
        entry: {
            'index': PATHS.source + '/pages/index/index.js',
            'blog': PATHS.source + '/pages/blog/blog.js'
        },
        output: {
            path: PATHS.build,
            filename: '[name].js'
        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: 'index.html',
                chunks: ['index'],
                template: PATHS.source + '/pages/index/index.pug'
            }),
            new HtmlWebpackPlugin({
                filename: 'blog.html',
                chunks: ['blog'],
                template: PATHS.source + '/pages/blog/blog.pug'
            })
        ]
    },
    pug(),
    sass()
]);

module.exports = function(env) {
    if (env === 'production'){
        return common;
    }
    if (env === 'development'){
        return merge(
            [common, devserver()],
        )
    }
}