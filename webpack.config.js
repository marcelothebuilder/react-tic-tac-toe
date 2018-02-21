const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebPackTemplate = require('html-webpack-template');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        contentBase: './dist'
    },
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'React: Hello world!', 
            unsupportedBrowser: true, 
            appMountId: 'app',
            inject: false,
            template: HtmlWebPackTemplate
        })
    ],
    module:{
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react']
                }
            }
        ]
    }
};
