const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const outputDirectory = 'freshteam';

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
        test: /\.(s(a|c)ss)$/,
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
    path: path.join(__dirname, '..', outputDirectory, 'app'),
    filename: './scripts/[name].bundle.js',
    chunkFilename: './scripts/[name].bundle.js',
    globalObject: 'this',
    clean: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', './client/index.html'),
      title: 'Codejudge-Freshteam',
    }),
    new MiniCssExtractPlugin({
      filename: './style/[name].css',
      chunkFilename: './style/[id].css',
    }),
    new CopyPlugin({
      patterns: [{
        from: './manifest.json', to: `./${outputDirectory}/`
      }]
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
