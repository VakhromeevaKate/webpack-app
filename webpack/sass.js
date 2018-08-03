module.exports = function () {
    return {
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    include: this.paths,
                    use: [
                        'style-loader',
                        'css-loader',
                        'sass-loader'
                    ]
                }
            ]
        }
    }
}