import express from 'express';

const App = express();

App.get('/*', (req, res) => {
  res.send('Hello World');
});

App.listen(3000, () => {
  console.log('App now running at port 3000');
});