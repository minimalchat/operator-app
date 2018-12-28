let webpack = require('webpack');
let config = require('./package.json');

const development = process.env.NODE_ENV !== 'production';

const PATHS = {
  BUILD: __dirname + '/assets',
  SRC: __dirname + '/src',
  ELECTRON_MAIN: __dirname + '/main.js',
  ELECTRON_WINDOW: __dirname + '/Window.js',
  MODULES: __dirname + '/node_modules',
}

let plugins = [];

if (!development) {
  plugins.push(new webpack.optimize.UglifyJsPlugin());
}

module.exports = function (env) {
  console.log('Environment:', process.env.NODE_ENV || 'development');

  return {
    context: __dirname,
    devtool: development ? 'source-map' : false,
    entry: PATHS.SRC + '/init.jsx',
    output: {
      filename: 'source.js',
      path: PATHS.BUILD + '/js',
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          include: [
            PATHS.SRC,
          ],
          exclude: [
            PATHS.MODULES,
            PATHS.ELECTRON_MAIN,
            PATHS.ELECTRON_WINDOW,
          ],
          loader: 'babel-loader',
          options: {
            presets: [ [ 'env', { // ['es2015', 'stage-0', 'react'],
              targets: {
                'electron': ['4'],
              },
              useBuiltIns: 'usage',
            } ] ],
            plugins: [
              '@babel/plugin-proposal-class-properties',
              '@babel/plugin-transform-react-jsx',
            ],
          },
        },
        {
          test: /\.css$/,
          include: [
            PATHS.SRC,
          ],
          exclude: [
            PATHS.MODULES,
          ],
          loader: 'style-loader!css-loader',
        },
      ]
    },
    target: 'electron-renderer',
    plugins: plugins,
  };
}
