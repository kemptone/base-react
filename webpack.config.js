/* globals __dirname, require */

var path = require("path")

var config = {
    cache : true
    , debug: true
    , devServer: {
        contentBase: "./www"
    }
    , devtool: "source-map"
    , context : path.join(__dirname, 'src')
    , entry: {
        app: ["./main.js"]
    }
    , output: {
        path: path.join(__dirname, 'www')
        , filename: 'bundle.js'
    }
    , module : {
        loaders: [
            {
                test: /\.js$/
                , exclude: /node_modules/
                , loaders: ['babel']
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
