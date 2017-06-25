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
                    Implemented and architected the lifecycle for displaying modals within the application.
                  </li>
                  <li>
                    Implemented the middleware for handling internationalization (i18n) within the application.
                  </li>
                  <li>
                    Responsible for developing the front end of the application utilizing React, HTML5, and CSS3.
                  </li>
                  <li>
                    Responsible for developing the back end of the application utilizing Node.js and frameworks like Express and Slay.
                  </li>
                  <li>
                    Worked and helped in optimizing the bundle size for the application to achieve faster response time and initial load.
                  </li>
                  <li>
                    Implemented the concept of the click to edit inside the application to improve editing experience for the customers.
                  </li>
                  <li>
                    Extensively worked on developing numerous short iteration based monetization features inside the application to help product manager to achieve higher user satisfaction and sales numbers.
                  </li>
                  <li>
                    Took participations in company-wide hackathons and team hackathons to come up with innovative ideas such as real-time user tracking, a lazy loader for widget layouts, "ScrollToTop" React component.
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
                    Scored full-time job offer to work on the next generation of the product.
                  </li>
                  <li>
                    Worked on version 7 of the website builder product built on C# and .Net stack.
                  </li>
                  <li>
                    Implemented, updated and refactored parts of widgets available in the application.
                  </li>
                  <li>
                    Learned and practiced Knockout.js MV* framework for building front end of the application.
                  </li>
                  <li>
                    Flawlessly upgraded and refactored the Facebook Graph and Google Maps API integrations in the product.
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
                    Responsible for devising and initializing the CICD pipeline for the application.
                  </li>
                  <li>
                    Joined in as an intern with this startup to build an identity verification application built using Java, Spring, and Angular.js.
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
                    First real-world experience in the field of application and network security.
                  </li>
                  <li>
                    Wrote Python scripts to gather and process real-time feeds emitted from the security application.
                  </li>
                  <li>
                    Hands on experience with MongoDB, wrote crucial aggregation queries to fetch large and periodic chunks of data.
                  </li>
                  <li>
                    Developed API end points for the application to flush data in CEF(Custom Event Format) using Decorator Pattern.
                  </li>
                  <li>
                    Practiced Django web framework to build and maintain the web application for gathering threat and malware data.
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
                    Responsible updating, maintaining and creating dynamic web pages using HTML, CSS, and Jquery.
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
                    First full-time job out of college where I was responsible for building web applications utilizing Ruby and Ruby on Rails.
                  </li>
                  <li>
                    Wrote code for enabling user file uploads to Amazon S3 utilizing gems like paperclip and carrierwave.
                  </li>
                  <li>
                    Co-implemented a state machine to handle money transactions for a real-world banking application.
                  </li>
                  <li>
                    Worked on the integration of REST API for applications Songkick, Foursquare and iTunes for a music application.
                  </li>
                  <li>
                    Examined the security and dependability concerns associated with the various Ruby gems used for a given project.
                  </li>
                  <li>
                    Wrote delayed jobs to update the database after receiving and processing date received from different API and web services.
                  </li>
                  <li>
                    Developed a modular and generic javascript user validation libraries that can be used across projects.
                  </li>
                  <li>
                    Developed a CMS specific to the application which helps admins to update page content without developer support.
                  </li>
                  <li>
                    Developed dynamic web pages using HTML/HAML, CSS/SASS/LESS and JavaScript which can work seamlessly across browsers.
                  </li>
                  <li>
                    Coded entire test suites for at least 2 applications by maintaining 95% functional coverage and 95% code coverage.
                  </li>
                  <li>
                    Maintained and monitored continuous integration TeamCity server for application to report overnight build failures.
                  </li>
                  <li>
                    Worked closely with product owners to prepare Cucumber test stories that can help developers to practice and leverage TDD style of product development.
                  </li>
                   <li>
                    Working across the application stack by taking on different roles in the product development lifecycle helped me to lay the foundations for becoming a full stack developer in future.
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