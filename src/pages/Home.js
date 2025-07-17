import React from 'react';
import './Home.css';
import './Gallery.js';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <div className="header">
          <h1>Hikmat Babalola</h1>
          <h3>BSc (Hons) Computer Science Graduate | Open to Work</h3>
          <div className="about-links">
            <a href="https://github.com/hikmatb" target="_blank" rel="noopener noreferrer" className="link-button">
                <img src={require('../images/github.png')} alt="GitHub" />
                GitHub
            </a>
            <a href="https://www.linkedin.com/in/hikmat-babalola/" target="_blank" rel="noopener noreferrer" className="link-button">
                <img src={require('../images/linkedin.png')} alt="LinkedIn" />
                LinkedIn
            </a>
            <a href={require('../files/CV.pdf')} target="_blank" rel="noopener noreferrer" className="link-button">
                <img src={require('../images/file.png')} alt="PDF" />
                My CV
            </a>
            <Link to="/gallery" className="link-button">
              <img src={require('../images/image.png')} alt="Gallery" />
              Gallery
            </Link>
          </div>
        </div>
      <div className="about-content">
        <div className="about-intro">
            <img src={ require('../images/profile.png') }/>
            <p>I am new graduate with a BSc (Hons) degree in Computer Science from University College Cork. I have hands-on experience working in automated and manual testing and working in an Agile environment. I am open to work to further my career. I enjoy learning new things, creating, and can adapt to new environments and situations quickly. I have been described as a great team member, a hard worker, and friendly by friends and colleagues alike.</p>
        </div>

        <div className="side-to-side">
          <div className="left">
            <section className="education">
              <h2>Education</h2>
              <ul>
                <li>
                  <strong>BSc (Hons) Computer Science</strong><br />
                  <em>University College Cork, 2020–2025</em><br />
                  Final Year Project: Mindful Computing: A Digital Wellbeing Dashboard
                </li>
              </ul>
            </section>
            
            <section className="experience">
              <h2>Experience</h2>
              <ul>
                <li>
                  <strong>Junior Developer</strong><br />
                  <em>Smarttech247, 08/24 - 01/25</em><br />
                  <ul>
                    <li>Identified, documented and reported bugs using bug tracking tools, for clear communication with developers.</li>
                    <li>Developed and maintained automated end-to-end test scripts to validate application functionality.</li>
                  </ul>
                </li>
                <li>
                  <strong>Junior Developer Intern</strong><br />
                  <em>Smarttech247, 03/24 - 08/24</em><br />
                  <ul>
                    <li>Participated in Scrum ceremonies, such as daily stand-ups, sprint plannings, sprint retrospectives, and sprint reviews.</li>
                    <li>Utilized Agile project management tools, to track progress, manage sprints and report bugs.</li>
                    <li>Conducted manual testing, including regression testing, exploratory testing, and execution of detailed test cases.</li>
                  </ul>
                </li>
              </ul>
            </section>
          </div>

          <section className="projects">
            <h2>Projects</h2>
            <ul>
              <li>
                <strong>Mindful Computing: A Digital Wellbeing Dashboard</strong><br />
                <em>4th Year Final Year Project, 2024 - 2025</em><br />
                <em><strong>Android Studio, Java, SQLite</strong></em><br />
                <ul>
                  <li>Mobile application, promoting mindfulness towards technology.</li>
                  <li>Usage tracking, personalised reminders, activity suggestions.</li>
                  <li>Third-party data visualtion tools used to present graphs.</li>
                  <li className="no-bullet">
                    <a 
                      href="https://github.com/hikmatb/Mindful-Computing-Digital-Wellbeing-Dashboard" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-button inline-button"
                    >
                      <img src={require('../images/github.png')} alt="GitHub" />
                      Project's GitHub Page
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <strong>Android List App</strong><br />
                <em>4th Year Android Programming Module, 2024</em><br />
                <em><strong>Android Studio, Java</strong></em><br />
                <ul>
                  <li>Multi-activity Android app showcasing motosport figures.</li>
                  <li>Integrated a search functionality, to filter relevant results based on user input.</li>
                  <li>WebView to provide in-app access to web pages on each individual.</li>
                </ul>
              </li>
              <li>
                <strong>Improve.me</strong><br />
                <em>Team Software Project, 2024</em><br />
                <em><strong>Python, JavaScript, Node.js, Flask, HTML5</strong></em><br />
                <ul>
                  <li>Productivity Web Application</li>
                  <li>Created in a team of 6 (including myself).</li>
                  <li>Self-taught NodeJS and ReactJS to build a user interface, integrating API calls.</li>
                  <li>Developed key frontend features, utilising many libraries (e.g. Material-UI).</li>
                  <li className="no-bullet">
                    <a 
                      href="https://github.com/cs-ucc-ie/CS3305-Team5" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-button inline-button"
                    >
                      <img src={require('../images/github.png')} alt="GitHub" />
                      Project's GitHub Page
                    </a>
                  </li>
                </ul>
              </li>
              
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Home;