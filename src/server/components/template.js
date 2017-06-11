import React, { Component, PropTypes } from 'react';

// serve the complied bundle for prod env
const CLIENT_BUNDLE = "/js/client-bundle.js";
// serve the webpack-dev-server copy
const DEV_CLIENT_BUNDLE = `http://localhost:5001/${CLIENT_BUNDLE}`;

class Template extends Component {
  constructor(...args) {
    super(...args);
  }

  render () {
    const { isProd } = this.props;
    
    return (
      <html lang='en-US'>
        <head>
          <meta charset="UTF-8"/>
          <title>Pratik Karnawat</title>
          <meta name="author" content="Pratik Karnawat" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link href="https://fonts.googleapis.com/css?family=Roboto+Mono" rel="stylesheet" />
          <meta name="description" content="A portfolio website depicting projects done by Pratik and much more" />
          { isProd && <link rel="stylesheet" href="/css/app.css" /> }
        </head>
        <body>
          <div id="app"></div>
          <script type="text/javascript" src= { isProd ? CLIENT_BUNDLE : DEV_CLIENT_BUNDLE }></script>
        </body>
      </html>
    );
  }
}

Template.propTypes = {
  isProd: PropTypes.bool
};

export default Template;