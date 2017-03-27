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
else {
  injectCss();
}

function injectCss() {
  var styleTag = document.createElement('link');
  styleTag.setAttribute('rel', 'stylesheet');
  styleTag.setAttribute('href', '/css/app.css');
  document.head.appendChild(styleTag);
}