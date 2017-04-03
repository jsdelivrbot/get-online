import React, { Component } from 'react';

const Header = () => {
  
  function renderNav() {
    const navLinks =  ['About', 'Experience', 'Skills', 'Interests', 'Contact'].map((linkName, i) => {
      const linkHref = `#${linkName.toLowerCase()}`;
      return (
       <a href={ linkHref } key={i} className='nav-link p-10'>{ linkName }</a> 
      )
    });

    return (
      <div className='nav flex flex-wrap flex-jc-sa p-20'>
        { navLinks }
      </div>
    )
  }

  return (
    <div id='app-header'>
      <div className='container flex flex-column flex-jc-center'>
        { renderNav() }
      </div>
    </div>
  );
}

export default Header;