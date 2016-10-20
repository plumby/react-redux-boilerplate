var path = require('path')
var webpack = require('webpack')

var ip = process.env.IP || '0.0.0.0'
var port = process.env.PORT || 3000
var DEBUG = process.env.NODE_ENV !== 'production'
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
  devtool: DEBUG ? 'eval' : false,
  entry: [
    path.join(__dirname, 'src')
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
    publicPath: '/'
  },
  resolve: {
    modulesDirectories: ['src', 'node_modules'],
    extensions: ['', '.js', '.jsx'],
    root: [
      path.resolve(__dirname)
    ],
    alias: {
      actions: 'src/actions',
      components: 'src/components',
      containers: 'src/containers',
      reducers: 'src/reducers',
      routes: 'src/routes',
      store: 'src/store'
    }
  },



  plugins: [
    new ExtractTextPlugin('styles.css'),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': "'" + process.env.NODE_ENV + "'"
    })
  ],
  module: {
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: ['eslint-loader']
      }
    ],    
    loaders: [
      { test: /\.(js|jsx)?$/, loader: 'babel', exclude: /node_modules/ },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules=true&localIdentName=[name]__[local]___[hash:base64:5]'
      },

      { test: /\.png$/, loader: 'url?prefix=images/&limit=8000&mimetype=image/png' },
      { test: /\.jpg$/, loader: 'url?prefix=images/&limit=8000&mimetype=image/jpeg' },
      { test: /\.woff$/, loader: 'url?prefix=fonts/&limit=8000&mimetype=application/font-woff' },
      { test: /\.ttf$/, loader: 'file?prefix=fonts/' },
      { test: /\.eot$/, loader: 'file?prefix=fonts/' },
      { test: /\.svg$/, loader: 'raw' },
      { test: /\.json$/, loader: 'json' }
    ]
  }
}

if (DEBUG) {
  config.entry.unshift(
    'webpack-dev-server/client?http://' + ip + ':' + port + '/',
    'webpack/hot/only-dev-server',
    'react-hot-loader/patch'
  )

  config.plugins = config.plugins.concat([
    new webpack.HotModuleReplacementPlugin()
  ])
} else {
  config.plugins = config.plugins.concat([
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } })
  ])
}

module.exports = config
