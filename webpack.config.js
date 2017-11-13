const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
    rules: [{
        loader: 'babel-loader',
        test: /\.jsx?$/,
        exclude: /node_modules/
    }, {
        test: /\.s?css$/,
        use: [
            'style-loader',
            'css-loader',
            'sass-loader'
        ]
    }]
    },

    resolve: {
        extensions: ['.js', '.jsx']
    },

    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
  }
};

// without resolve - extensions, js and jsx files won't be loaded