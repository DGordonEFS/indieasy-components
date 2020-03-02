// webpack.config.js
var path = require('path');
var nodeExternals = require('webpack-node-externals');
//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
//	.BundleAnalyzerPlugin;
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'index.js',
		libraryTarget: 'commonjs2',
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				include: path.resolve(__dirname, 'src'),
				exclude: /(node_modules|bower_components|build)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env'],
					},
				},
			},
			{
				test: /\.*css$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'sass-loader'],
				}),
			},
		],
	},
	target: 'node', // in order to ignore built-in modules like path, fs, etc.
	externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
	//plugins: [new BundleAnalyzerPlugin()],
};
