const path = require('path');
require("babel-polyfill");

module.exports = {
  entry: ['@babel/polyfill', './src/index.jsx'],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.m?jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', '@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  }
};
