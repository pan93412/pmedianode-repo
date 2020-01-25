const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const { entries, defaultEntries, pages } = require('./webpack.pages.js')

module.exports = {
  entry: entries,
  mode: 'production',
  output: {
    filename: '[name].[chunkhash].js',
    path: path.join(process.cwd(), 'dist')
  },
  devServer: {
    port: 50000,
    compress: true
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new CopyPlugin([
      { from: './src/assets', to: 'assets' }
    ]),
    new HtmlWebpackPlugin({
      template: 'src/views/index.pug',
      filename: 'index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.s(?:a|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.pug$/,
        use: 'pug-loader'
      }
    ]
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          ecma: '2017'
        }
      })
    ],

    splitChunks: {
      cacheGroups: {
        vendors: {
          priority: -10,
          test: /[\\/]node_modules[\\/]/
        }
      },

      chunks: 'async',
      minChunks: 1,
      minSize: 30000,
      name: true
    }
  }
}

pages.forEach(e => {
  module.exports.plugins.push(
    new HtmlWebpackPlugin({
      template: `src/views/${e.page}.pug`,
      filename: `${e.page}.html`,
      chunks: defaultEntries.concat(e.chunks)
    })
  )
})

module.exports.plugins = module.exports.plugins.concat([
  new MiniCssExtractPlugin({ filename: '[chunkhash].css' }),
  new CleanWebpackPlugin()
])
