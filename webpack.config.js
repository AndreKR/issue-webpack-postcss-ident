var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function (env) {

	return [
		{
			entry: './src/css/test.css',
			output: {
				path: __dirname,
				filename: 'assets/dummy.css'
			},
			module: {
				rules: [
					{
						test: /\.css$/,
						use: ExtractTextPlugin.extract({
							use: [
								{ loader: 'css-loader', options: { importLoaders: 1 } },
								{
									loader: 'postcss-loader',
									options: {
		//										ident: 'remove-this-and-it-fails',
										plugins: [ require('postcss-cssnext')() ]
									}
								}
							]
						})
					}
				]
			},
			plugins: [
				new ExtractTextPlugin("assets/bundle.css")
			]
		}
	];
};
