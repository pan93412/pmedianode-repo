const path = require('path')

module.exports = {
  entry: {
    // index: './src/main.js', // 預設會放在 Footer
    // css: './src/main.css.js', // 預設會放在 title 最前面
    // player: './src/player.js', // 用在 player.pug
    // about: './src/about.js' // 用在 about.pug
  },
  mode: 'production',
  devtool: 'inline-source-map',
  output: {
    filename: '[name].bundle.js',
    path: path.join(process.cwd(), 'dist')
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ],
        exclude: ['./node_modules']
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ],
        exclude: ['./node_modules']
      },
      {
        test: /\.svg$/,
        use: 'file-loader',
        exclude: ['./node_modules']
      },
      {
        test: /\.ts$/,
        use: {
          loader: 'ts-loader',
          options: {
            context: path.join(process.cwd(), 'src')
          }
        },
        include: ['./src'],
        exclude: ['./node_modules']
      }
    ]
  }
}
