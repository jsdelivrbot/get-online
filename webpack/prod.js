import path from 'path';
import rimraf from 'rimraf';
import webpack from 'webpack';

import nodeExternals from 'webpack-node-externals';

const SRC_DIR =  path.join(__dirname, '../src');
const CLIENT_ENTRY = path.join(SRC_DIR, 'client/index.js');
const CLIENT_OUTPUT_DIR = path.join(__dirname, '../static');

const clientConfig = {
  entry:[
    `${CLIENT_ENTRY}`
  ],
  module: {
    loaders: [
      {
        test: /jsx?/,
        exclude: [ /node_modules/ ],
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        include: SRC_DIR,
        loaders: 'style-loader!css-loader!sass-loader'
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: 'file-loader'
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg|ico)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100000
          }
        }
      }
    ]
  },
  output: {
    filename: 'client-bundle.js',
    path: `${CLIENT_OUTPUT_DIR}/js`
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: {
        screw_ie8: true,
        keep_fnames: true
      },
      compress: {
        screw_ie8: true
      },
      comments: false
    })
  ]
};


const SERVER_ENTRY = path.join(SRC_DIR, 'server/index.js');
const SERVER_OUTPUT_DIR = path.join(__dirname, '../build/server'); 

const serverConfig = {
  entry: [
    `${SERVER_ENTRY}`
  ],
  module: {
    loaders: [
      {
        test: /jsx?/,
        exclude: [/node_modules/],
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ],
  output: {
    filename: 'index.js',
    path: `${SERVER_OUTPUT_DIR}`
  },
  target: 'node',
  externals: [ nodeExternals() ]
};

export default [
  clientConfig,
  serverConfig
];