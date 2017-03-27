import path from 'path';
import React from 'react';
import express from 'express';
import Template from './components/template';
import ReactDOMServer from 'react-dom/server';

const App = express();
const isProd = process.env.NODE_ENV === 'production';

App.use(express.static('static'));

App.get('/', (req, res) => {
  const markup = ReactDOMServer.renderToStaticMarkup(<Template isProd={ isProd } />);
  res.send(`<!DOCTYPE html>${markup}`);
});

App.listen(5000, () => {
  console.log('App now running at port 5000');
});