const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin('css/[name].css');

module.exports = {
	entry: {
		vendors: './src/javascripts/vendor.js',
		app: './src/javascripts/app.js',
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/[name].js'
	},
	module: {
		loaders: [
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
				loader: 'file?name=fonts/[name].[ext]'
			}
		]
	},
	plugins: [
		extractCSS,
	]
};