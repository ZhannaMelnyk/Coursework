const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack');

module.exports = {
	entry: "./src/index.js",
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules|bower_components)/,
				loader: "babel-loader",
				options: { presets: ["@babel/env"] }
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"]
			},
			{
				test: /\.(jpg|png|svg|ico)$/,
				loader: 'file-loader',
				options: {
					name: 'assests/images/[name].[ext]',
					esModule: false
				}
			},
		]
	},
	resolve: { extensions: ["*", ".js", ".jsx"] },
	output: {
		path: path.resolve(__dirname, "dist"),
		publicPath: "/",
		filename: "bundle.js"
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, './public/index.html')
		}),
		new Dotenv()
	]
};