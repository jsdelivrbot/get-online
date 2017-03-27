import path from 'path';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import nodeExternals from 'webpack-node-externals';

const CURRENT_DIR = __dirname;
const SRC_DIR =  path.join(CURRENT_DIR, '../src');
const CLIENT_DIR = path.join(SRC_DIR, 'client');
const CLIENT_ENTRY = path.join(SRC_DIR, 'client/index.js');
const CLIENT_OUTPUT_DIR = path.join(CURRENT_DIR, '../static');

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
        loaders: 'style-loader!css-loader?sourceMap!sass-loader?sourceMap'
      }
    ]
  },
  output: {
    filename: 'js/client-bundle.js',
    path: `${CLIENT_OUTPUT_DIR}`,
    publicPath: 'http://localhost:5001/'
  },
  plugins: [
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

// bundle server and then start the client
startLocal();

export default [
  clientConfig,
  serverConfig
];


function startClient() {
  new WebpackDevServer(webpack(clientConfig), {
    publicPath: clientConfig.output.publicPath,
    hot: true,
    historyApiFallback:true
  })
  .listen('5001', 'localhost', (err, result) => {
    if (err) {
      return console.log(err);
    }
    
    console.log('Webpack Dev Server started at localhost:5001');
  });
}

function startLocal() {
  const serverBundle = webpack(serverConfig);

  serverBundle.run((err, stats) => {
    if (err) {
      throw err;
    }
    
    console.log('Server bundled! Startign app server now...');
    require(`${SERVER_OUTPUT_DIR}`);

    setImmediate(() => {
      console.log('Starting client now....');
      startClient();
    });
  });
}