const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    main: "./app/assets/scripts/main.js",
    vendor: "./app/assets/scripts/vendor.js"  
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js"
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
            publicPath: "./images/",
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
    })
  ]
}