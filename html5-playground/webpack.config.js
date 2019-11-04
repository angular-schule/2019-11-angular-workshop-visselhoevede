var path = require("path");
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: "./main.js",
  output: { filename: "main.bundle.js" },
  devServer: {
    contentBase: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: { loader: "babel-loader" }
      },
      {
        test: /\.scss$/,

        use: [
          // creates style nodes from JS strings
          { loader: "style-loader"},
          // translates CSS into CommonJS
          { loader: "css-loader" },
          // compile Sass to CSS
          { loader: "sass-loader" }
        ]

      }
    ]
  },
  plugins: [
    new CopyPlugin([
      { from: "index.html" },
      // { from: "*.png" }
    ])
  ]
}
