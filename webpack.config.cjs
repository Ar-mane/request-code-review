const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	mode: "production",
	entry: {
		githubContent: "./src/content/githubContent.ts",
		// add here if needed
		styles: "./src/styles/tailwind.css",
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
			},
		],
	},
	resolve: {
		extensions: [".ts", ".js"],
	},
	devtool: false,
	output: {
		filename: "[name].js",
		path: path.resolve(__dirname, "dist"),
	},
	plugins: [
		new CopyPlugin({
			patterns: [
				{ from: "public", to: "." },
			],
		}),
		new MiniCssExtractPlugin({
			filename: "styles.css",
		}),
	],
};
