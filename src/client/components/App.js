import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import styles from '../styles/index.scss';

const App = () => {
  const hideNav = () => {
    const navLinks = document.getElementById('nav-links-container');
    navLinks.classList.remove('open-nav');
    const overlay = document.getElementsByClassName('overlay')[0];
    overlay.classList.remove('show-overlay');
    document.body.classList.remove('no-scroll');
  }

  return (
    <div onClick={ hideNav.bind(null, true) }>
      <Header />
      <Content />
      <Footer />
      <div className='overlay' onClick={ hideNav }/>
    </div>
  );
}

export default App;
