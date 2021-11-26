var path = require('path')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  mode: 'none',
  entry: './build/index.js',
  output: {
    filename: 'crocks.min.js',
    path: path.resolve(__dirname, 'build', 'dist'),
    library: 'crocks',
    libraryTarget: 'umd'
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
}
