const path = require('path')

module.exports = {
    mode: 'development',
    output: {
        filename: 'index.js',
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