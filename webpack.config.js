let webpack = require('webpack');

module.exports = {
  entry: './app.js',
  output: {
    path: __dirname,
    filename: 'bundle.js',
  },
  "devtool": '#eval-source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        query: {
          plugins: [
            ['transform-react-jsx', {pragma: 'Mreact.createElement'}],
            'transform-class-properties'
          ]
        }
      }
    ]
  }
}