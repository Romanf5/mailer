const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'production',
    entry: ['@babel/polyfill', './src/index.js'],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/'
    },
    resolve: {
        extensions: [
            '.js'
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            title: 'Mailer'
        }),
        new MiniCssExtractPlugin({
            filename: '[contenthash].css'
        }),

        new webpack.DefinePlugin({
            'process.env': {
                FB_API_KEY: JSON.stringify(process.env.FB_API_KEY)
            }
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                include: path.resolve()
            },
            {
                test: /\.styl$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'stylus-loader'
                ]
            },
            {
                test: /\.(jpg|png|gif|svg|pdf|ico)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name]-[hash:8].[ext]'
                        }
                    }
                ]
            }
        ]
    }
};
