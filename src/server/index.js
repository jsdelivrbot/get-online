import path from 'path';
import React from 'react';
import express from 'express';
import Template from './components/template';
import ReactDOMServer from 'react-dom/server';

const App = express();
const port = App.get('port') || 6001;
const isProd = process.env.NODE_ENV === 'production';

App.use(express.static('static'));
App.set('port', (process.env.PORT || 5000));

App.get('/', (req, res) => {
  const markup = ReactDOMServer.renderToStaticMarkup(<Template isProd={ isProd } />);
  res.send(`<!DOCTYPE html>${markup}`);
});

App.listen(port, () => {
  console.log('Node app is running on port', port);
});