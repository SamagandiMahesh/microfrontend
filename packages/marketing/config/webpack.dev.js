const {merge} = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const {dependencies} = packageJson;

const devConfig = {
    mode: 'development',
    devServer: {
        port: 3001,
        historyApiFallback: {
        index: 'index.html'
        }
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'marketing',
            filename: 'remoteEntry.js',
            exposes: {
                './MarketingApp': './src/bootstrap'
            },
            shared: dependencies
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]  
};

module.exports = merge(commonConfig, devConfig);