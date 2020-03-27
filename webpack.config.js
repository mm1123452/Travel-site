const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {

  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
   module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(gif|png|jpe?g)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images/',
              esModule: false,
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        loader: 'svg-url-loader'
      },
      {
        test:/\.html$/,
        use: [
          'html-loader'
        ]
      },
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: 'body',
      template: './src/index.html',
      filename: 'index.html'
    })
  ]
};