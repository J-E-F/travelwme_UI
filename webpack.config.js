const path = require('path');

const SRC_DIR = path.join(__dirname, './src');
const DIST_DIR = path.join(__dirname, './public');

const webpackConfig = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    path: DIST_DIR,
    filename: 'bundle.js',
  },
  module: {
    loaders: [],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devtool: 'inline-source-map',
};

webpackConfig.module.loaders.push({
  test: /\.js[x]?$/,
  exclude: /node_modules/,
  loader: 'babel-loader',
  options: { presets: ['stage-2', 'react'] },
});

webpackConfig.module.loaders.push({
  test: /\.(css)$/,
  loaders: ['style-loader', 'css-loader?url=false'],
});

webpackConfig.module.loaders.push({
  test: /\.(png|jpg|gif|jpeg)$/,
  loader: 'file-loader',
  options: {},
});


module.exports = webpackConfig;
