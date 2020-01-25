const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  entry: {
    index: './src/main.js', // 預設會放在 Footer
    css: './src/main.css.js', // 預設會放在 title 最前面
    player: './src/player.js', // 用在 player.pug
    about: './src/about.js' // 用在 about.pug
  },
  mode: 'production',
  output: {
    filename: '[name].bundle.js',
    path: path.join(process.cwd(), 'assets')
  },
  module: {
    rules: [
      {
        test: /\.s(?:a|c)ss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.svg$/,
        use: 'file-loader'
      }
    ]
  }
}
