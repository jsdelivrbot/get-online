import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import styles from '../styles/index.scss';

const App = () => {
  return (
    <div className=''>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
