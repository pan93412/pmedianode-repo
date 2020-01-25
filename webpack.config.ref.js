const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const { pages, entries } = require('./webpack.pages.js')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  mode: 'development',

  entry: entries,

  plugins: [
    new webpack.ProgressPlugin(),
    new webpack.EnvironmentPlugin({
      ytAPIToken: ''
    }),
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
        test: /\.pug$/,
        use: 'pug-loader'
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: 'file-loader'
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.s(?:a|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.woff(2|)$/,
        use: 'file-loader'
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
  },

  output: {
    filename: '[name].[chunkhash].js'
  },

  devServer: {
    port: 50000,
    compress: true
  }
}

pages.forEach(e => {
  module.exports.plugins.push(
    new HtmlWebpackPlugin({
      template: `src/views/${e.page}.pug`,
      filename: `${e.page}.html`,
      chunks: [
        // CSS 檔案。預設引入。
        'css',
        // 在新分頁開啟。預設引入。
        'blank',
        // 清除追蹤 query。預設引入。
        'cleanupQueries',
        // 開頭列 JS。預設引入。
        'header',
        // 延後載入 JS。預設引入。
        'lazyload',
        // 回到 TOP 的 JS。預設引入。
        'top'
      ].concat(e.chunks)
    })
  )
})

module.exports.plugins = module.exports.plugins.concat([
  new MiniCssExtractPlugin({ filename: 'css.[chunkhash].css' }),
  new CleanWebpackPlugin()
])
