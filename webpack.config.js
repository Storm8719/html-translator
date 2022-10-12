const path = require('path')

module.exports = {
    entry: './index.js',
    module: {
        rules: [
            { test: /\.(js)$/, use: 'babel-loader' }
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js'
    },
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development'
}