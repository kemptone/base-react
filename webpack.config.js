/* globals __dirname, require */

var path = require("path")
    , webpack = require("webpack")

var config = {
    cache : true
    , debug: true
    , devServer: {
        contentBase: "./www"
    }
    , devtool: "source-map"
    , context : path.join(__dirname, 'src')
    , entry: [
        'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000'
        , './scripts/index.js'
    ]
    , output: {
        path: path.join(__dirname, 'www')
        , filename: 'bundle.js'
    }
    , plugins: [
        new webpack.optimize.OccurenceOrderPlugin()
        , new webpack.HotModuleReplacementPlugin()
        , new webpack.NoErrorsPlugin()
    ]
    , module : {
        loaders: [
            {
                test: /\.js$/
                , exclude: /node_modules/
                , loaders: ['react-hot', 'babel']
            }
        ]
    }
    , resolveLoader: {
        root: [
            path.join(__dirname, 'node_modules')
        ]
    }
    , rosolve: {
        root: [
            path.join(__dirname, 'node_modules')
        ]
    }
}

module.exports = config
