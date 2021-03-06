const {merge} = require('webpack-merge');

const { ModuleFederationPlugin } = require('webpack').container;
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const {dependencies} = packageJson;

const devConfig = {
    mode: 'development',
    devServer: {
        port: 3000,
        historyApiFallback: {
        index: 'index.html'
        }
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                marketing: 'marketing@http://localhost:3001/remoteEntry.js'
            },
            shared: dependencies
        }),
    ]  
};

module.exports = merge(commonConfig, devConfig);