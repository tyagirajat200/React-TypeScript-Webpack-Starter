const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const outputDirectory = path.join(__dirname, '..', 'freshteam/app');

module.exports = {
  entry: path.resolve(__dirname, '..', './client/index.tsx'),
  resolve: {
    extensions: ['*', '.ts', '.tsx', '.js', '.jsx', '.json', '.scss']
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.(css|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
        use: {
          loader: 'url-loader',
        }
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
        use: {
          loader: 'url-loader',
        }
      },
    ],
  },
  output: {
    path: path.join(outputDirectory),
    filename: './scripts/[name].bundle.js',
    chunkFilename: './scripts/[name].bundle.js',
    globalObject: 'this',
    clean: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', './client/index.html')
    }),
    new MiniCssExtractPlugin({
      filename: './style/[name].css',
      chunkFilename: './style/[id].css',
    }),
    new CopyPlugin({
      patterns: [
        { from: './manifest.json', to: path.join(outputDirectory, '..') },
        { from: './assets', to: outputDirectory },
        { from: './config', to: path.join(outputDirectory, '..', 'config') }
      ]
    })
  ],
  optimization: {
    moduleIds: 'deterministic',
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          priority: -10,
          chunks: 'all'
        }
      }
    }
  },
  stats: 'errors-only',
}
