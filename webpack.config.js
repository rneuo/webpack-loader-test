const path = require('path')

const config = {
  entry: {
    application: './src/app.js'
  },

  output: {
    path: path.join(__dirname, 'build/js'),
    filename: '[name].bundle.js'
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
      { test: /\.html$/, loader: 'html' },
      { test: /\.css$/, loaders: ['style', 'css'] },
      { test: /\.scss$/, loader: 'style!css!sass' }
    ]
  },

  resolve: {
    root: [ path.resolve(__dirname, 'src') ]
  }
}

module.exports = config
