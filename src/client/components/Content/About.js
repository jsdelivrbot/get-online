import React from 'react';

const About = () => (
  <div id='about' className='page-section'>
      <div className='row'>
        <div className='green-divider col-xs-12 center-xs'>
          <img 
            src='https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAA2gAAAAJDU4OWQyNGI0LTVkODgtNDBkMS04MjI2LWNjZDM3MGZkNWZlNg.jpg'
            alt='pratik-profile-picture'
            width='200'
            height='200'
          />
          <h1 className='title-txt'> Pratik Karnawat </h1>
          <p> Software Engineer </p>
          <p> Javascript / Node.js Enthusiast, UX / Web Design, Big Data </p>
        </div>
        <div className='col-xs-12'>
          <h1 className='title-txt'> Little bit about me </h1>
          <p>
            Hello, I am a Software Engineer working at GoDaddy where I help in developing the next generation of website builder - "GoCentral".
            Since the early days of my programming career I have had the privilege of working as a full stack developer on numerous applications 
            and over these years I have learned many things the hard and the easy way about building software solutions and fortunately this learning process
            is still going on (which means I am not bored yet and I guess I will never be).
          </p>
          <p>
            Academically, I hold a Master's degree in Computer Science from Arizona State University, Tempe, AZ - USA and a bachelor's degree in Information
            Technology from Shri Vaishnav Institute of Technology and Science, Indore, MP - India.
          </p>
        </div>
      </div>
  </div>
);

export default About;