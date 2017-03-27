import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import styles from '../styles/index.scss';

const App = () => {
  return (
    <div className='vh-100 vw-100 flex flex-column'>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
