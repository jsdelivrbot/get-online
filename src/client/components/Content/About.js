import React from 'react';

const About = () => {
  
  function renderProfilePic() {
    return (
      <div className='profile-pic p-20 mt-60'>
        <img src='https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/2/005/01e/314/3397524.jpg' alt='pratik-profile-picture' />
      </div>
    )
  }

  return (
    <div id='about'>
      <div  className='container flex-jc-sa flex-ai-center flex flex-column'>
        { renderProfilePic() }
        <div className='mt-60 p-20'>
          Hey, I am a Software Developer working on new projects
          Hey, I am a Software Developer working on new projects
          Hey, I am a Software Developer working on new projects
          Hey, I am a Software Developer working on new projects
          Hey, I am a Software Developer working on new projects
          Hey, I am a Software Developer working on new projects
          Hey, I am a Software Developer working on new projects
          Hey, I am a Software Developer working on new projects
          Hey, I am a Software Developer working on new projects
          Hey, I am a Software Developer working on new projects
          Hey, I am a Software Developer working on new projects
          Hey, I am a Software Developer working on new projects
        </div>
      </div>
    </div>
  )
}

export default About;