import React from 'react';
import './Home.css';
import Navbar from '../Navbar';

function Home() {
  return (
    <div className="home">
      <div className="home-sidebar">
        <Navbar />
      </div>
      <div className="home-content">
        <h1>Hikmat Babalola</h1>
      </div>
    </div>
  );
}

export default Home;