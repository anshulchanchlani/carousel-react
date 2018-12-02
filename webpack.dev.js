
module.exports = {
    entry: ['./src/index.js'],
    output: {
        path: __dirname + '/public',
        publicPath: '/',
        filename: 'main.js'
    },

    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        },
        {
            test: /\.scss$/,
            use: [
                "style-loader",
                "css-loader",
                "sass-loader"
            ]
        },
        { loader: 'file-loader', test: /\.(ttf|eot|svg)$/ }

        ]
    },

    devServer: { contentBase: './public' }
};