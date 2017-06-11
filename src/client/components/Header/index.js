import React from 'react';

const Header = () => {
  
  const toggleNav = (event) => {
    const navLinks = document.getElementById('nav-links-container');
    navLinks.classList.toggle('open-nav');
    navLinks.classList.remove('closed-nav');
    
    const overlay = document.getElementsByClassName('overlay')[0];
    overlay.classList.add('show-overlay');
    
    document.body.classList.add('no-scroll');
    
    event.preventDefault();
    event.stopPropagation();
  }
  
  const renderNav = () => {
    const navLinks =  ['About', 'Interests', 'Experience', 'Toolset', 'Hobbies', 'Contact'].map((linkName, i) => {
      const linkHref = `#${linkName.toLowerCase()}`;
      return (
        <div className='row nav-link title-txt end-xs' key={i}>
          <a href={ linkHref } className='col-xs-12 col-sm p-10'>
            <strong>
              { linkName }
            </strong>
          </a> 
        </div>
      );
    });

    const logo = (
      <div className='app-logo-container row center-xs title-txt'>
        <div id='app-logo' className='col-xs-6'>
          <h1>PK</h1>
        </div>
      </div>
    );

    return [logo, navLinks];
  }

  const icon =  () => (
    <div className='col-xs-12 col-sm p-10' onClick={ toggleNav }>
      <svg height="32px" id="Layer_1" version="1.1" viewBox="0 0 32 32" width="32px" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"/>
      </svg>
    </div>
  );

  return (
    <div>
      <div id='app-header' className='container-fluid'>
        <div className='row'>
          { icon() }
        </div>
      </div>
      <div id='nav-links-container' className='container-fluid closed-nav'>
          { renderNav() }
      </div>
    </div>
  );
}

export default Header;