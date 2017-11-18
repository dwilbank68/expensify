const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');   // 3

module.exports = (env) => {
    const isProduction = env === 'production';
    const CSSExtract = new ExtractTextPlugin('styles.css');         // 3a
    return {
        entry: './src/app.js',
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
        plugins: [CSSExtract],                                      // 3
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
// 3 -  This makes the css write to a separate file, rather than sit
//      in the bundle.js file. npm i extract-text-webpack-plugin@3.0.0
// 3a - 'styles.css' is the name of the file you want to create.
//      So in index.html, you must put a link tag ->
//      <link rel="stylesheet" type="text/css" href="/styles.css">

// 4 -  Without resolve extensions, js and jsx files won't be loaded