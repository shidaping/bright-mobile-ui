var webpack = require('webpack');
var path = require('path');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
// var AnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
var nodeModulesDir = path.join(__dirname, 'node_modules');
var webackConfig = {
  entry: {
    AddressPicker: path.join(__dirname, 'src/components/address-picker'),
    BmuiSelect: path.join(__dirname, 'src/components/bmui-select'),
    CheckBox: path.join(__dirname, 'src/components/check-box'),
    DatePicker: path.join(__dirname, 'src/components/date-picker'),
    Drawer: path.join(__dirname, 'src/components/drawer'),
    ImgSlider: path.join(__dirname, 'src/components/img-slider'),
    List: path.join(__dirname, 'src/components/list'),
    Loading: path.join(__dirname, 'src/components/loading'),
    Radio: path.join(__dirname, 'src/components/radio'),
    Switch: path.join(__dirname, 'src/components/switch'),
    Toast: path.join(__dirname, 'src/components/toast'),
    OptionSheet: path.join(__dirname, 'src/components/option-sheet'),
    Stepper: path.join(__dirname, 'src/components/stepper'),
    index: path.join(__dirname, 'src/components/index'),
    base: path.join(__dirname, 'src/components/style/index.less'),
    bmui: path.join(__dirname, 'src/components/style/bmui.less'),
  },
  output: {
    path: path.join(__dirname, 'lib'),
    filename: '[name].js',
    // chunkFilename: "[id].js"
    libraryTarget: 'umd',
  },

  externals: {
  // require('jquery') is external and available
  //  on the global var jQuery
    react: 'react',
    'react-dom': 'react-dom',
    lodash: 'lodash',
  },
  resolve: {
    alias: {
      // 'font-awesome.css': path.resolve(nodeModulesDir, 'font-awesome/css/font-awesome.min.css'),
      // config: path.resolve('config'),
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
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    // new AnalyzerPlugin(),
  ],
  module: {
    rules: [{
      test: /\.js$/,
      use: ['babel-loader'],
      exclude: /(node_modules)/,
    }, {
      test: /(\.less|\.css)$/,
      use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'less-loader'],
    }, {
      test: /\.jpg|\.png$/,
      use: 'file-loader',
    }, {
      test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      use: 'url-loader?limit=10000&minetype=application/font-woff',
    }, {
      test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      use: 'file-loader',
    }],

  },
  mode: 'production',
};
module.exports = webackConfig;
