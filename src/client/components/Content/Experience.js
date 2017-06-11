import React from 'react';

function toggleJobSummary(event) {
    const { target } = event;
    const isClickOnExpandBtn = target.classList.contains('toggle-job-summary');

    if ( isClickOnExpandBtn ) {
      const jobSummaryEle = target.parentElement.nextElementSibling;
      jobSummaryEle.classList.toggle('show')
    }

}

const Experience = () => {

  const jobTile = ({ companyName, title, dates }) => {
    return (
      <div className='job-tile title-txt row middle-xs center-xs'>
        <div className='col-xs-12 col-md-4 start-xs'>
          <p>
            <strong>
              { companyName }
            </strong>
          </p>
        </div>
        <div className='col-xs-12 col-md-4 start-xs center-md'>
          <p> 
            <strong>
              { title }
            </strong>
          </p>
        </div>
        <div className='col-xs-12 col-md-4 start-xs end-md'>
          <p>
            <strong>
              { dates }
            </strong>
          </p>
        </div>                
      </div> 
    );
  }

  return (
    <div id='experience' className='page-section'>
        <div className='row'>
          <div className='green-divider col-xs-12 title-txt'>
            <h1> Experience </h1>
          </div>
          
          <div className='job col-xs-12'>
            {
              jobTile({
                companyName: 'GoDaddy', 
                title: 'Software Engineer II',
                dates: 'June 2015 - Present'
              })
            }
            <div className='row'>
              <div className='col-xs-12'>
                <ul>
                  <li>
                    Full stack feature crew member for the GoCentral product.
                  </li>
                  <li>
                    Implemented the middleware for handling internationaltion (i18n) inside the product.
                  </li>
                  <li>
                    Implemented and architected the lifecycle for displaying modals inside the application.
                  </li>
                  <li>
                    Responsbile for developing the front end of the application utilizing React, HTML5, and CSS3.
                  </li>
                  <li>
                    Worked and helped in optimizing the bundle size for the application to get better response times.
                  </li>
                  <li>
                    Responbile for developing the back end of the application uitilizing Node.js and frameworks like Express and Slay.
                  </li>
                  <li>
                    Implemented the concept of the click to edit inside the application to improve editing experience for the customers.
                  </li>
                </ul>
              </div>
            </div>  
          </div>


          <div className='job  col-xs-12'>
            {
              jobTile({
                companyName: 'GoDaddy', 
                title: 'Software Engineer Intern',
                dates: 'March 2015 - May 2015'
              })
            }
            <div className='row'>
              <div className='col-xs-12'>
                <ul>
                  <li>
                    Scored the full time job offer to work on the next generation of the product.
                  </li>
                  <li>
                    Worked on the version 7 of Website builder product built on C# and .Net stack.
                  </li>
                  <li>
                    Implemented, updated and refactored parts of widgets available in the project.
                  </li>
                  <li>
                    Learned and practiced Knockout.js MV<sup>*</sup> framework for building front end of the application.
                  </li>
                  <li>
                    Responsbile for developing the front end of the application utilizing React, HTML5, and CSS3.
                  </li>
                  <li>
                    Flawlessly updated and refactored the Facebook Graph and Google maps API integrations in the product.
                  </li>
                </ul>
              </div>
            </div>  
          </div>

          <div className='job  col-xs-12'>
            {
              jobTile({
                companyName: 'iValidate.me', 
                title: 'Software Engineer Intern',
                dates: 'August 2014 - January 2015'
              })
            }
            <div className='row'>
              <div className='col-xs-12'>
                <ul>
                  <li>
                    Developed the automation testing pipeline for this application.
                  </li>
                  <li>
                    Responsible for devising and seting up the CICD pipeline for the application.
                  </li>
                  <li>
                    Interned with this startup to build an identity verification application built using Java, Spring and Angular.js.
                  </li>
                </ul>
              </div>
            </div> 
          </div>

          <div className='job  col-xs-12'>
            {
              jobTile({
                companyName: 'Charles Schwab', 
                title: 'Security Operations Intern',
                dates: 'June 2014 - August 2014'
              })
            }
            <div className='row'>
              <div className='col-xs-12'>
                <ul>
                  <li>
                    First real world experience in the field of application and network security.
                  </li>
                  <li>
                    Wrote Python scripts to gather and process real time feeds emitted from the security application.
                  </li>
                  <li>
                    Hands on experience with MongoDB, wrote aggregation queries to fetch large and periodic chunk of data.
                  </li>
                  <li>
                    Developed API end points for the application to flush data in CEF(Custom Event Format) using Decorator Pattern.
                  </li>
                  <li>
                    Actively worked on a security based web application developed in Django to gather threat and malware based data.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className='job  col-xs-12'>
            {
              jobTile({
                companyName: 'Educational Outreach and Student Services, Arizona State University', 
                title: 'Web Developer (Part time)',
                dates: 'January 2014 - May 2014'
              })
            }
            <div className='row'>
              <div className='col-xs-12'>
                <ul>
                  <li>
                    Responsible for migrating the websites from Drupal 6 to Drupal 7.
                  </li>
                  <li>
                    Responsible for upgrading, installing and maintaining the modules for the websites.
                  </li>
                  <li>
                    Responsible updating, maintaining and creating dynamic webpages using HTML, CSS and Jquery.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className='job  col-xs-12'>
            {
              jobTile({
                companyName: 'Systango', 
                title: 'Web Developer',
                dates: 'June 2012 - July 2013'
              })
            }
            <div className='row'>
              <div className='col-xs-12'>
                <ul>
                  <li>
                    First full time job out of college where I was responsible for building web applications utilizing Ruby and Ruby on Rails.
                  </li>
                  <li>
                    Worked across the application stack by taking on different roles which helped me to lay the foundations for becoming a full stack developer in future.
                  </li>
                  <li>
                    Wrote code for enabling user file uploads to Amazon S3 utilizing gems like paperclip and carrierwave.
                  </li>
                  <li>
                    Co-implemented a state machine to handle money transactions for a real world banking application.
                  </li>
                  <li>
                    Worked on integration of REST API's for applications Songkick, Foursquare and iTunes for a music application.
                  </li>
                  <li>
                    Examined the security and dependability concerns associated with the various ruby gems used for a given project.
                  </li>
                  <li>
                    Wrote delayed jobs to update database after receiving and processing date received from different API and web services.
                  </li>
                  <li>
                    Developed a modular and generic javascript user validation libraries that can be used across projects.
                  </li>
                  <li>
                    Developed a CMS specific to the application which help admins to update page content without developer support.
                  </li>
                  <li>
                    Developed dynamic webpages using HTML/HAML, CSS/SASS/LESS and JavaScript which can work seamlessly across browsers.
                  </li>
                  <li>
                    Coded entire test suites for atleast 2 applications by maintaining 95% functional coverage and 95% code coverage.
                  </li>
                  <li>
                    Maintained and monitered continuous integration Teamcity server for application to report over night build failures.
                  </li>
                  <li>
                    Worked closely with product owners to prepare Cumcumber test stories that can help developers to practice and leverage TDD style of product development.
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
    </div>
  );
}

export default Experience;