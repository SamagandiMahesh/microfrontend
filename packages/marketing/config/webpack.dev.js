const {merge} = require('webpack-merge');
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
        })
    ]  
};

module.exports = merge(commonConfig, devConfig);

// uses: shinyinc/action-aws-cli@v1.2
// uses: shinyinc/action-aws-cli@v1.2
// - run: aws s3 sync dist s3://${{ secrets.AWS_S3_BUCKET_NAME }}/container/latest
//   env:
//     AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
//     AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
//     AWS_DEFAULT_REGION: ""