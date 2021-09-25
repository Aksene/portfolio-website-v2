import React from 'react'
import './TextfieldMidSection.css'

function TextfieldMidSection() {
    return (
        <div className= 'textField__section'>
            <div className="textfield__grid-container">
                <div className="textfield__row">

                    <p>

                    </p>

                    <p className='textField__section-text'> 
                        I currently work a iOS intern for start-up called DiStaff. There I’m tasked with developing telemetry and alerting for opportunities to improve build infrastructure and tooling, and execute on them. 
                        I also have to try to create the best possible developer experience for mobile engineers by ensuring our tools are effective, efficient and easy to use. 
                        I collaborate with other engineers and leadership to build, optimize and maintain the CI/CD systems. 
                        I’m currently tasked with the job of building an Android version of the iOS native application. 
                        I‘ve worked in the field as an IT/Communication Intern for a couple months with a company named CDX Analytics before being let go due to Covid-19. 
                        In this role I assisted in maintenance and upgrading the IT infrastructure of the office. 
                        Aided in the development of a new Analysis Request App designed to replace older inefficient model, customers can log in and fill the required information.
                        I updated UI, database, data entry on fields, reorganized scripts, created new scripts and even worked on a mobile version of the application on file maker among other things. 
                        We also revamped the CDX Results Database app in concert with the scientists. Since a lot of the required raw data entered by scientists are different, I had to update the database and corresponding fields. 
                        After doing the ground work, I redesigned the UI for most of the pages on the application to reflect the changes request by the head scientist. 
                        After examining each document that has to report to comply with the state of Massachusetts. With the help of FileMaker and  little research, i developed buttons on each 
                        relevant results page which grabs all the needed fields and automatically  fills in a printable sheet. Making both the scientist and their managers work not just quicker but also reduced the chance of mistakes.  
                        I’ve also spent four years as a Sales Associate at for Marshalls. In this role, I was valued as the employee overseeing the cleaning & organization of the Shoe Department, assisting in keeping track of stock and also in charge training future employees 
                    </p> 
                </div> 
                <div className="textfield__row">
                    <p className='textField__section-textWeb'>
                        Web Application Development Skills:
                        <p>
                        React.js, JavaScript, CSS, Styled Components, PHP and Web creation platforms (Shopify, SquareSpace, Webnode etc...)
                        </p>
                    </p>

                    <p className='textField__section-textMobile'>
                        Mobile Application Development Skills:
                        <p>
                        Java, Swift, Xcode, CocoaPods, API, Django REST API, FirebaseSDK, Kotlin(small exp.), VSCode, IntelliJ, 
                        Android Studios, Python, MySQL, SQL Queries, JSON, Database design, Ubuntu, AWS, EC2, RDS
                        </p>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default TextfieldMidSection;
