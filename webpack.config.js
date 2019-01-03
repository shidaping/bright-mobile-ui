var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
// var env = config.env;
// var AssetsWebpackPlugin = require('assets-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var nodeModulesDir = path.join(__dirname, 'node_modules');
var webackConfig = {
  entry: {
    'css/base': './src/components/style/index.less',
    'css/bmui': './src/components/style/bmui.less',
    'css/bmui-select': './src/components/bmui-select/bmui-select.less',
    'css/bmui-select-container': './src/components/bmui-select-container/bmui-select-container.less',
    'css/check-box': './src/components/check-box/check-box.less',
    'css/date-picker': './src/components/date-picker/date-picker.less',
    'css/address-picker': './src/components/address-picker/address-picker.less',
    'css/img-slider': './src/components/img-slider/img-slider.less',
    'css/list': './src/components/list/list.less',
    'css/radio': './src/components/radio/radio.less',
    'css/loading': './src/components/loading/loading.less',
    'css/toast': './src/components/toast/toast.less',
    'css/switch': './src/components/switch/switch.less',
    'css/bmui-confirm': './src/components/bmui-confirm/bmui-confirm.less',
    'css/drawer': './src/components/drawer/drawer.less',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    // chunkFilename: "[id].js"
  },

  // externals: {
  // require('jquery') is external and available
  //  on the global var jQuery
  //   'jquery': 'jQuery'
  // },
  resolve: {
    alias: {
      'font-awesome.css': path.resolve(nodeModulesDir, 'font-awesome/css/font-awesome.min.css'),
      // client: path.resolve('./client'),
      config: path.resolve('config'),
    },
    modules: [
      'node_modules',
      'src',
    ],
    // extensions: ['.js', '.jsx', '.less'],
    // root: [
    // ],
  },
  plugins: [
    // new webpack.optimize.CommonsChunkPlugin({ name: 'vendor' }),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin(
      '[name].css',
      { allChunks: true }
    ),
  ],
  module: {
    // noParse: ['./src/noparse/*'],
    loaders: [{
      // test: /\.js$/,
      // loaders: ['babel'],
      // exclude: /(node_modules)/,
    // }, {
    //   test: /\.less$/,
    //  css?-autoprefixer!postcss!less
    //   loader: ExtractTextPlugin.extract('style', 'css?-autoprefixer!postcss!less')
    // }, {
    //   test: /\.css$/,
    //   loader: 'style!css'
    // }, {
      test: /(\.less|\.css)$/,
      loader: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'less-loader', 'postcss-loader'],
      }),
    }, {
      test: /\.jpg|\.png$/,
      loader: 'file-loader',
    }, {
      test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'url-loader?limit=10000&minetype=application/font-woff',
    }, {
      test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'file-loader',
    }],

  },
  devServer: {
    host: '0.0.0.0',
    port: 3000,
    disableHostCheck: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
};
// if (env === 'production') {
webackConfig.plugins.push(new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('production'),
  },
}));

webackConfig.plugins.push(new HtmlWebpackPlugin({
  template: path.join(__dirname, 'src/views/index.html'),
  minify: {
    collapseWhitespace: true,
  },
}));
// }

// webackConfig.plugins.push(
//   new AssetsWebpackPlugin()
// );


module.exports = webackConfig;
