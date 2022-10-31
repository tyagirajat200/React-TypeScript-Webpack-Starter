const webpack = require('webpack')

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
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
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('Rajat'),
    }),
  ],
}
