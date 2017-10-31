var path = require("path");
var webpack = require("webpack");

module.exports = {
  context: __dirname,
  entry: "./frontend/lokey.jsx",
  output: {
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/, /\.png?$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
<<<<<<< HEAD
          presets: ['es2015', 'react']
=======
          presets: ['es2015', 'react'],
          plugins: [require('babel-plugin-transform-object-rest-spread')]
>>>>>>> 302feb9648aff4b23ce0955bf2e90d75f020d3d1
        }
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    alias: {
      'react': path.join(__dirname, 'node_modules', 'react')
    },
    extensions: [".js", ".jsx", "*"]
  }
};
