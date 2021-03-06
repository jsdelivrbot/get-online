import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const mountEl = document.getElementById('app');
const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <App />
    </AppContainer>
  , mountEl);
};

render(App);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextAppContainer = require('./components/App');  
    render(NextAppContainer);
  });
}