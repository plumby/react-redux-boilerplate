var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')
var config = require('./webpack.config')

var ip = process.env.IP || '0.0.0.0'
var port = process.env.PORT || 3000

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  host: ip,
  quiet: false,
  // It suppress everything except error, so it has to be set to false as well
  // to see success build.
  noInfo: false,
  stats: {
    // Config for minimal console.log mess.
    assets: false,
    colors: true,
    version: false,
    hash: false,
    timings: false,
    chunks: false,
    chunkModules: false
  },
  historyApiFallback: true,
  contentBase: 'public'
}).listen(port, ip, function (err, result) {
  if (err) {
    return console.log(err)
  }

  console.log('Listening at http://' + ip + ':' + port)
})
