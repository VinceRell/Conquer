const path = require("path");
//const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./app/assets/scripts/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  
  module: {
    rules: [
      {
        test: /\html$/,
        use: [{loader: "html-loader", options: {minimize: false}}]
      },
      {
        test: /\.(gif|png|jpe?g|svg)/i,
        use: [
         { 
           loader: "file-loader",
          options: {
            name: '[name].[ext]',
            outputPath: "./images/",
            publicPath: "./images/"
          }
         }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./app/index.html",
      filename: "./index.html"
    }),

    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),

    //new CleanWebpackPlugin(["dist"])
  ]
}