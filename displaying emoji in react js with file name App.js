import React, { useState } from 'react';
import './App.css';

function App() {
  const [isClicked, setIsClicked] = useState(false);

  const toggleEmoji = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="App">
      <h1>Hello, styled with external CSS in React!</h1>
      <div className="emoji-display" aria-label="emoji">
        {isClicked ? '😂' : '🙂'}
      </div>
      <button className="emoji-button" onClick={toggleEmoji}>
        {isClicked ? 'Show Normal Emoji' : 'Show Laughing Emoji'}
      </button>
      <a href="https://www.youtube.com" className="click-me-link">click me</a>
    </div>
  );
}

export default App;
//css for above code it is in app.css in the folder demo 
/* App.css */
body {
  background-color: #c43333;
  font-family: Arial, sans-serif;
  text-align: center;
  margin: 0;
  padding: 20px;
}

h1 {
  color: #007bff;
  border: 4px solid black;
  border-radius: 20px;
  padding: 10px;
  display: inline-block;
  margin-bottom: 20px;
}

.emoji-display {
  font-size: 8rem;
  margin: 20px 0;
}

.emoji-button {
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.emoji-button:hover {
  background-color: #0056b3;
}

