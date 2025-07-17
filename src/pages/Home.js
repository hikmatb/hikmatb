import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home">
      {/* <div className="home-sidebar">
        <Navbar />
      </div> */}
      <div className="about-content">
        <h1>Hikmat Babalola</h1>
        <div className="about-intro">
            <img src={ require('../images/profile.png') }/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
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
        </div>
      </div>
    </div>
  );
}

export default Home;