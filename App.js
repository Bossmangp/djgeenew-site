import React from 'react';
import './App.css';
import logo from './logo.png'; // Your logo file
import promo from './0707(1).mp4'; // Your video file

function App() {
  return (
    <div className="container">
      <img src={logo} alt="DJ Gee Logo" className="logo" />

      <h1>🎧 DJ Gee</h1>
      <p>DMV’s Premier DJ & Event Experience – Beats, Vibes, and Energy You’ll Remember.</p>

      <a href="https://calendly.com/bookme-djgeedmv" target="_blank" rel="noreferrer">
        <button className="btn">Book Now</button>
      </a>

      <div className="video-wrapper">
        <video controls width="100%" height="auto">
          <source src={promo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default App;
