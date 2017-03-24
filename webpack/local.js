import path from 'path';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
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
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:5001',
    'webpack/hot/only-dev-server',
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
    path: `${CLIENT_OUTPUT_DIR}`,
    publicPath: 'http://localhost:5001/'
  },
  plugins: [
    extractSass,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
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

// start webpack dev server for hot reloading
startWebpackDevServer();

export default [
  clientConfig,
  serverConfig
];


function startWebpackDevServer() {
  new WebpackDevServer(webpack(clientConfig), {
    publicPath: clientConfig.output.publicPath,
    hot: true,
    historyApiFallback:true
  })
  .listen('5001', 'localhost', (err, result) => {
    if (err) {
      return console.log(err);
    }

    // we need to start actual express server after webpack is done
    require(SERVER_OUTPUT_DIR);
    
    console.log('Webpack Dev Server started at localhost:5001');
  });
}