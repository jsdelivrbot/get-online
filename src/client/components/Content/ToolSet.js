import React from 'react';

const ToolSet = () => {

  const SkillBlock = (toolName, toolLogo) => {
    return (
      <div className='skill-block col-xs-7 col-sm-2'>
        <div className='skill-name row center-xs'>
          <h3>{ toolName }</h3>
        </div>
        <div className='skill-icon row  center-xs'>
          <img className='skill-icon' src={ `/images/${toolLogo}` }/>
        </div>
      </div>
    );
  }

  return (
    <div id='toolset' className='page-section'>
        <div className='row'>
          <div className='green-divider col-xs-12 title-txt'>
            <h1> Toolset </h1>
          </div>
          <div className='col-xs-12 pt-20 pb-20'>            
            <div id='skill-container'>
              <div className='row middle-xs around-sm center-xs'>
                { SkillBlock('JavaScript', 'js.png') }
                { SkillBlock('Node.js', 'nodejs.png') }
                { SkillBlock('Java', 'java.png') }
                { SkillBlock('React', 'react.svg') }
              </div>
              <div className='row middle-xs around-sm center-xs'>
                { SkillBlock('HTML 5', 'html5.png') }
                { SkillBlock('CSS3', 'css3.svg') }
                { SkillBlock('CSS Preprocessors', 'css-preprocessors.png') }
                { SkillBlock('Bootstrap', 'bootstrap.png') }
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default ToolSet;