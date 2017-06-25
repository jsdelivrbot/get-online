import React from 'react';
import About from './About';
import ToolSet from './ToolSet';
import Contact from './Contact';
import Interests from './Interests';
import Experience from './Experience';

const Content = () => {
  return (
    <div id='app-content' className='container-fluid'>
      <About/>
      <Interests />
      <Experience />
      <ToolSet />
      <Contact />
    </div>
  );
}

export default Content;