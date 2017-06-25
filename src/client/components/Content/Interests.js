import React from 'react';

const Interests = () => {

  return (
    <div id='interests' className='page-section'>
        <div className='row'>
          <div className='green-divider col-xs-12'>
            <h1 className='title-txt'>
              I L<span className='heart'>&hearts;</span>ve
            </h1>
          </div>
          <div className='col-xs-12 pt-20 pb-20'>            
            <ul>
              <li>Solving UI/UX problems for a product.</li>
              <li>Solving puzzles and competitive coding challenges.</li>
              <li>Prototyping solutions to open problems in a project.</li>
              <li>Brainstorming ideas with my peers, friends, and family.</li>
              <li>Participating in hackathons and working on out of box solutions.</li>
              <li>Transforming raw data into well-defined meaningful visual representations.</li>
              <li>Channeling my energy and ideas on problems that pose algorithmic and performance challenges.</li>
            </ul>
          </div>
        </div>
    </div>
  );
}

export default Interests;