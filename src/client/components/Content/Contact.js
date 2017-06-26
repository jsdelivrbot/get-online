import React from 'react';

const Contact = () => {

  return (
    <div id='contact' className='page-section'>
        <div className='row'>
          <div className='green-divider col-xs-12 title-txt'>
            <h1>
              Don't forget to say Hi on  
              <a className='p-10' href='https://www.linkedin.com/in/pratik-karnawat-33143884' target='_blank'>
                Linkedin!!!
              </a>
            </h1>
          </div>
          <div className='col-xs-12 pt-20 pb-20'>            
            <ul> 
              <li>If you are looking for help in open source projects.</li>
              <li>If you have something related to my area of interest.</li>
              <li>If you think that I will be a good fit for your next big thing.</li>
              <li>If you are looking for help in a Non-Profit Organization project.</li>
              <li>If you want me to write a blog for any computer science concept.</li>
              <li>If you want to exchange fruitful thoughts about programming, traveling or music.</li>
              <li>If you liked this portfolio website and felt like giving me some praise for it. I will be delighted :)</li>
            </ul>
          </div>
        </div>
    </div>
  );
}

export default Contact;