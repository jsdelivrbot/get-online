import React, { Component } from 'react';

const Footer = () => {
  return (
    <div id='app-footer'>
      <div className='container-fluid'>
            <div className='row center-xs'>
              <div className='col-xs-12'>
                <p>&copy; { new Date().getFullYear() } | Pratik Karnawat | All Rights Reserved</p>
              </div>
            </div>
      </div>
    </div>
  );
}

export default Footer;