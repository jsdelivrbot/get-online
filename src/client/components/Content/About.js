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
          <div id='intro-card' className='pt-20 pb-20'>
            <h1 className='title-txt'> Pratik Karnawat </h1>
            <p> Software Engineer / Budding Blogger / 6 Speed Lover </p>
          </div>
        </div>
        <div className='col-xs-12'>
          <h1 className='title-txt'> Little bit about me </h1>
          <p>
            Post the completion of my masters in computer science from Arizona State University.
            I have been working full-time as a full stack software engineer at GoDaddy, Tempe
            where I help in developing the next generation (internationally scaled) website builder - "GoCentral".
          </p>
          <p> 
            Since the early days of my programming career, I have had the privilege of working as a full stack developer
            on numerous distinct applications and over these years, I have learned many things the hard and the easy way to
            building software solutions. I am passionate about software development because my job enables me to become an
            active contributor to the society, it allows me to solve problems that create's positive impacts on people's life.
            The best thing about software development is that in some sense, it is a never ending learning process having come
            across numerous new ideas as technology evolves with time, and this dynamic component to software development makes
            sure that my job is not redundant, but it consistently acquaints me with new dimensions of the software industry.
          </p>
          <p>
            Besides work, I play the guitar (jam on good old rock and grunge music), play badminton, go for hiking and running at new places, do home and craft projects,
            crawl auto blogs and do road trips to observe the beauty of nature.
          </p>
        </div>
      </div>
  </div>
);

export default About;