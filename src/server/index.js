import path from 'path';
import express from 'express';

const App = express();

App.use(express.static('static'));

App.get('/', (req, res) => {
  res.sendFile('./index.html');
});

App.listen(3000, () => {
  console.log('App now running at port 3000');
});