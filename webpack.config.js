const path = require('path')

module.exports = {
  entry: {
    index: './src/main.js', // 預設會放在 Footer
    css: './src/main.css.js', // 預設會放在 title 最前面
    player: './src/player.js', // 用在 player.pug
    about: './src/about.js' // 用在 about.pug
  },
  mode: 'production',
  // devtool: 'source-map', // for debug
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
