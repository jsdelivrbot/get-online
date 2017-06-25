import path from 'path';
import React from 'react';
import express from 'express';
import Template from './components/template';
import ReactDOMServer from 'react-dom/server';

const App = express();
const isProd = process.env.NODE_ENV === 'production';

App.use(express.static('static'));
App.set('port', (process.env.PORT || 6001));

App.get('/', (req, res) => {
  const markup = ReactDOMServer.renderToStaticMarkup(<Template isProd={ isProd } />);
  res.send(`<!DOCTYPE html>${markup}`);
});

App.listen(App.get('port'), () => {
  console.log('Node app is running on port', App.get('port'));
});