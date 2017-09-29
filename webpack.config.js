const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: path.join(__dirname, '/client/src/index.jsx'),

    output: {
        path: path.join(__dirname, '/client/dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            include: [path.join(__dirname, '/client/src')],
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react'],
                plugins: ['transform-object-rest-spread']
            }
        }, {
            test: /\.s?css$/,
            include: [path.join(__dirname, '/client/src'), path.resolve(__dirname, "node_modules/react-datepicker/dist/"), path.resolve(__dirname, "node_modules/font-awesome/css/")],
            loaders: ['style-loader', 'css-loader', 'sass-loader']
        }, {
            test: /\.(jpe?g|gif|png|svg|woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?|ttf|wav|mp3)$/,
            loader: "url-loader?limit=8192&name=images/[name]-[hash].[ext]"
        }]
    },

    watch: true
}
