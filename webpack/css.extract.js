const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function () {
    return {
        module: {
            rules: [
                {
                    test: /\scss$/,
                    include: this.paths,
                    use: ExtractTextPlugin.extract({
                        publicPath: '../',
                        fallback: 'style-loader',
                        use: ['scss-loader','sass-loader']
                    })
                },
                {
                    test: /\css$/,
                    include: this.paths,
                    use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: ['css-loader']
                    })
                }
            ]
        },
        plugins: [
            new ExtractTextPlugin('./css/[name]/.css')
        ]
    };
};