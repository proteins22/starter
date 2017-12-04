const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin('css/[name].css');

module.exports = {
	entry: {
		vendors: './src/javascripts/vendors.js',
		app: './src/javascripts/react.js',
		main: './src/javascripts/main.js',
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: '../',
		filename: 'js/[name].js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					'babel-loader',
				],
			},
			{
				test: /\.scss$/,
				use: [
					'file-loader?name=css/[name].css',
					'extract-loader',
					'css-loader',
					'sass-loader'
				]
			}, {
				test: /\.(woff|woff2|eot|ttf|svg)$/,
				use: [
					'file-loader?name=fonts/[name].[ext]'
				]
			}, {
				test: /\.(jpe?g|png|gif|svg)$/i,
				use: [
            		'file-loader?hash=sha512&digest=hex&name=images/[hash].[ext]',
				]
			}
		]
	},
	plugins: [
		extractCSS,
	]
};