// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const isProduction = process.env.NODE_ENV === 'production';

const stylesHandler = 'style-loader';

const config = {
  resolve: {
    fallback: {
      'https': false,
      'path': false,
    },
    extensions: ['.js', '*'],
    modules: [path.resolve(__dirname, 'js'), 'node_modules', 'src'],
  },
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new Dotenv(),

    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, 'css-loader'],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: 'asset',
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = 'production';


    config.plugins.push(new WorkboxWebpackPlugin.GenerateSW());

  } else {
    config.mode = 'development';
  }
  return config;
};
