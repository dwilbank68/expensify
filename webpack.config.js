const path = require('path');
const webpack = require('webpack');                                 // 2
const ExtractTextPlugin = require('extract-text-webpack-plugin');   // 3

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if (process.env.NODE_ENV === 'test') {
    require('dotenv').config({path:'.env.test'});
} else if (process.env.NODE_ENV === 'development') {
    require('dotenv').config({path:'.env.development'});
}

module.exports = (env) => {
    const isProduction = env === 'production';
    const CSSExtract = new ExtractTextPlugin('styles.css');         // 3a
    return {
        entry: ['babel-polyfill', './src/app.js'],
        output: {
            path: path.join(__dirname, 'public', 'dist'),
            filename: 'bundle.js'
        },
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.jsx?$/,
                exclude: /node_modules/
            }, {
                test: /\.s?css$/,
                use: CSSExtract.extract({                           // 3
                    use: [
                        {
                            loader: 'css-loader',
                            options: {sourceMap: true}
                        },
                        {
                            loader: 'sass-loader',
                            options: {sourceMap: true}
                        }
                    ]
                })
            }]
        },
        plugins: [
            CSSExtract,                                             // 3
            new webpack.DefinePlugin({                              // 2
                'process.env.FIREBASE_API_KEY':             JSON.stringify(process.env.FIREBASE_API_KEY),
                'process.env.FIREBASE_AUTH_DOMAIN':         JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
                'process.env.FIREBASE_DATABASE_URL':        JSON.stringify(process.env.FIREBASE_DATABASE_URL),
                'process.env.FIREBASE_PROJECT_ID':          JSON.stringify(process.env.FIREBASE_PROJECT_ID),
                'process.env.FIREBASE_STORAGE_BUCKET':      JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
                'process.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID),
            })
        ],
        resolve: {                                                  // 4
            extensions: ['.js', '.jsx']
        },

        devtool: isProduction? 'source-map': 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true,
            publicPath: '/dist/'
        }
    }

};

// 2 -  to pass environment variable to the front end, you have to install webpack
//      and use DefinePlugin. Using JSON.stringify is an alternative for "'process.env.FIREBASE_API_KEY'"
// 3 -  This makes the css write to a separate file, rather than sit
//      in the bundle.js file. npm i extract-text-webpack-plugin@3.0.0
// 3a - 'styles.css' is the name of the file you want to create.
//      So in index.html, you must put a link tag ->
//      <link rel="stylesheet" type="text/css" href="/styles.css">
// 4 -  Without resolve extensions, js and jsx files won't be loaded