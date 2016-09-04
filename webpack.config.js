var path = require('path');

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: "./public"
    },

    devServer: {
        port: 3333,
        //historyApiFallback: true,
        inline: true,
        contentBase: './src'
    },
    devtool: "source-map",
    module: {
        loaders: [
            // {
            //     test: /\.jsx?$/,
            //     loaders: ['react-hot'],
            //     include: path.join(__dirname, 'public')
            //
            // },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
              test: /masonry|imagesloaded|fizzy\-ui\-utils|desandro\-|outlayer|get\-size|doc\-ready|eventie|eventemitter/,
              loader: 'imports?define=>false&this=>window'
            },
            {test: /\.css$/, loader: 'style!css', exclude: /node_modules/},
            {test: /\.png$/, loader: 'url-loader?limit=10000', exclude: /node_modules/}
        ]
    }
};
