import path from 'path';
import nodeExternals from 'webpack-node-externals';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const CURRENT_DIR = __dirname;
const SRC_DIR =  path.join(CURRENT_DIR, '../src');
const CLIENT_DIR = path.join(SRC_DIR, 'client');
const CLIENT_ENTRY = path.join(SRC_DIR, 'client/index.js');
const CLIENT_OUTPUT_DIR = path.join(CURRENT_DIR, '../static');

const extractSass = new ExtractTextPlugin({
  filename: 'css/app.css',
  disable: process.env.NODE_ENV === 'production'
}); 

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
        loaders: extractSass.extract({
          use: [
            {
              loader: 'css-loader'
            },
            {
              loader: 'sass-loader'
            }
          ],
          fallback: 'style-loader'
        })
      }
    ]
  },
  output: {
    filename: 'js/client-bundle.js',
    path: `${CLIENT_OUTPUT_DIR}`
  },
  plugins: [
    extractSass
  ]
};

const SERVER_ENTRY = path.join(SRC_DIR, 'server/index.js');
const SERVER_OUTPUT_DIR = path.join(CURRENT_DIR, '../build/server'); 

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