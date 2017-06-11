import React from 'react';

const Interests = () => {

  return (
    <div id='interests' className='page-section'>
        <div className='row'>
          <div className='green-divider col-xs-12'>
            <h1 className='title-txt'>
              Professionally, I love ( <span className='heart'>&hearts;</span> )
            </h1>
          </div>
          <div className='col-xs-12 pt-20 pb-20'>            
            <ul>
              <li>Solving UI/UX problems for a product.</li>
              <li>Prototyping solutions to open problems in a project.</li>
              <li>Brain storming ideas with my peers, friends and family.</li>
              <li>Participating in hackathons and working on out of box solutions.</li>
              <li>Channeling my energy and ideas on problems that poses algorithmic and performance challeges to achieve a desired result.</li>
            </ul>
          </div>
        </div>
    </div>
  );
}

export default Interests;