const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const outputDirectory = path.join(__dirname, 'app');

module.exports = {
  entry: path.resolve(__dirname, 'client/index.tsx'),
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
  devtool: 'source-map',
  devServer: {
    hot: false,
    open: true,
    port: 3000,
    allowedHosts: 'all',
    devMiddleware: {
      writeToDisk: true
    }
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: './icon.svg', to: outputDirectory }
      ]
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'client/index.html'),
      filename: path.join(outputDirectory, 'index.html')
    }),
    new MiniCssExtractPlugin({
      filename: './style/[name].css',
      chunkFilename: './style/[id].css',
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
