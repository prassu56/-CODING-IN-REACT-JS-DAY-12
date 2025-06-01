//code in index.js//
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
//code in app.js//
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <>
      <nav className="nav-container">
        <table className="nav-table">
          <tbody>
            <tr>
              <td>
                <Link to="/" className="nav-link">Home</Link>
              </td>
              <td>
                <Link to="/about" className="nav-link">About</Link>
              </td>
              <td>
                <Link to="/contact" className="nav-link">Contact</Link>
              </td>
              <td>
                <Link to="/login" className="nav-link">Login</Link>
              </td>
              <td>
                <Link to="/signup" className="nav-link">Signup</Link>
              </td>
            </tr>
          </tbody>
        </table>
      </nav>
      <div className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
//code in header.js//
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="header-banner">
      <p>Empowering Minds Through Interactive Quizzes!</p>
    </div>
  );
};

export default Header;
//code in header.css//
.header-banner {
  background-color: #10a5db;
  color: rgb(245, 61, 241);
  text-align: center;
  padding: 12px 0;
  font-weight: bold;
  font-size: 1.2rem;
  font-family: 'Arial Black', Gadget, sans-serif;
  letter-spacing: 1.5px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.3);
  user-select: none;
}
//code in app.css//
/* Navigation container styling */
.nav-container {
  max-width: 900px;
  margin: 20px auto;
  padding: 10px;
  background: #a5ee07;
  border-radius: 12px;
  box-shadow: 0 0 15px #cdc7c6;
}

/* Navigation table styling */
.nav-table {
  width: 100%;
  border-collapse: collapse;
}

/* Navigation links styling */
.nav-link {
  display: block;
  padding: 12px 20px;
  color: #fff;
  font-weight: 700;
  text-decoration: none;
  font-family: 'Comic Sans MS', cursive, sans-serif;
  text-align: center;
  transition: background-color 0.3s ease, color 0.3s ease;
  border-radius: 8px;
}

.nav-link:hover {
  background-color: #ff7e5f;
  color: #fff;
}

/* Page container styling */
.page-container {
  max-width: 900px;
  margin: 30px auto;
  padding: 20px;
  background: #e0f7fa; /* Default container background color */
  border-radius: 12px;
  box-shadow: 0 0 20px #4dd0e1;
  font-family: 'Comic Sans MS', cursive, sans-serif;
  color: #333;
  text-align: center;
}

/* About page container background override */
.about-page-container {
  background: #fff3e0;
  box-shadow: 0 0 20px #ffb347;
}

/* Signup page container background override */
.signup-page-container {
  background: #23df5e;
  box-shadow: 0 0 20px #f584a9;
}

/* Home page h1 styling */
.page-container h1 {
  font-size: 3rem;
  color: #00796b;
  text-shadow: 2px 2px 4px #004d40;
  font-weight: 900;
  font-family: 'Comic Sans MS', cursive, sans-serif;
  margin-bottom: 15px;
}

/* Page images */
.page-image {
  max-width: 100%;
  height: auto;
  margin-top: 20px;
  border-radius: 12px;
  box-shadow: 0 0 15px #ff7e5f;
}

/* Forms styling */
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin-top: 20px;
}

label {
  width: 100%;
  max-width: 400px;
  font-weight: 600;
  color: #ff7e5f;
  text-align: left;
}

input[type="text"],
input[type="email"],
input[type="password"],
textarea {
  width: 100%;
  padding: 10px;
  border: 2px solid #ffb347;
  border-radius: 8px;
  font-size: 1rem;
  font-family: 'Comic Sans MS', cursive, sans-serif;
  box-shadow: 0 0 10px #ff7e5f inset;
  transition: border-color 0.3s ease;
}

input[type="text"]:focus,
input[type="email"]:focus,
input[type="password"]:focus,
textarea:focus {
  outline: none;
  border-color: #ff7e5f;
  box-shadow: 0 0 15px #ff7e5f inset;
}

button {
  padding: 12px 30px;
  border: none;
  border-radius: 12px;
  color: #dce610;
  font-weight: 700;
  font-size: 1.2rem;
  cursor: pointer;
  box-shadow: 0 0 20px #f1ebea;
  transition: background 0.3s ease;
  font-family: 'Comic Sans MS', cursive, sans-serif;
}

button.home-btn {
  background: linear-gradient(45deg, #4caf50, #81c784);
}

button.home-btn:hover {
  background: linear-gradient(45deg, #388e3c, #66bb6a);
}

button.about-btn {
  background: linear-gradient(45deg, #2196f3, #64b5f6);
}

button.about-btn:hover {
  background: linear-gradient(45deg, #1976d2, #42a5f5);
}

button.contact-btn {
  background: linear-gradient(45deg, #ff9800, #ffb74d);
}

button.contact-btn:hover {
  background: linear-gradient(45deg, #f57c00, #ffa726);
}

button.login-btn {
  background: linear-gradient(45deg, #9c27b0, #ba68c8);
}

button.login-btn:hover {
  background: linear-gradient(45deg, #7b1fa2, #ab47bc);
}

button.signup-btn {
  background: linear-gradient(45deg, #e91e63, #f06292);
}

button.signup-btn:hover {
  background: linear-gradient(45deg, #c2185b, #ec407a);
}
//code in home.js//
import React from 'react';
import Header from '../components/Header';

const Home = () => {
  return (
    <>
      <Header />
      <div className="page-container">
        <h1>Welcome to Kids School</h1>
        <h2>Arise! Awake! And stop not until the goal is reached!</h2>
        <div className="home-content">
          <p>
            At Kids School, we believe in nurturing creativity, curiosity, and confidence in every child.
          </p>
          <p>
            Join us for a fun-filled learning journey with interactive activities, games, and more!
          </p>
          <img
            src="https://www.schoolaids.com/web/image/460708/1.png?access_token=68989749-fd1a-45c9-90dc-2f9cf583ab63"
            alt="Kids playing and learning"
            className="page-image"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
//code in contact.js//
import React from 'react';

const Contact = () => {
  return (
    <div className="page-container">
      <h1>Contact Us</h1>
      <p>We would love to hear from you! Reach out with any questions or feedback.</p>
      <form className="contact-form">
        <label>
          Name:
          <input type="text" name="name" placeholder="Your name" required />
        </label>
        <label>
          Email:
          <input type="email" name="email" placeholder="Your email" required />
        </label>
        <label>
          Message:
          <textarea name="message" placeholder="Your message" required />
        </label>
        <button className="contact-btn" type="submit">Send</button>
      </form>
      <img
        src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
        alt="Contact kids school"
        className="page-image"
      />
    </div>
  );
};

export default Contact;
//code in login.js//
import React from 'react';

const Login = () => {
  return (
    <div className="page-container">
      <h1>Login</h1>
      <form className="login-form">
        <label>
          Email:
          <input type="email" name="email" placeholder="Enter your email" required />
        </label>
        <label>
          Password:
          <input type="password" name="password" placeholder="Enter your password" required />
        </label>
        <button className="login-btn" type="submit">Login</button>
      </form>
      <img
        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
        alt="Kids login"
        className="page-image"
      />
    </div>
  );
};

export default Login;
//code in signup.js//
import React from 'react';

const Signup = () => {
  return (
    <div className="page-container signup-page-container">
      <h1>Signup</h1>
      <form className="signup-form">
        <label>
          Name:
          <input type="text" name="name" placeholder="Enter your name" required />
        </label>
        <label>
          Email:
          <input type="email" name="email" placeholder="Enter your email" required />
        </label>
        <label>
          Password:
          <input type="password" name="password" placeholder="Create a password" required />
        </label>
        <button className="signup-btn" type="submit">Signup</button>
      </form>
      <img
        src="https://colorlib.com/wp/wp-content/uploads/sites/2/kiddos-free-template.jpg"
        alt="Kids signup"
        className="page-image"
      />
    </div>
  );
};

export default Signup;
//code in about.js//
import React from 'react';

const About = () => {
  return (
    <div className="page-container about-page-container">
      <h1>About Kids School</h1>
      <div className="about-content">
        <p>
          Kids School is dedicated to providing a joyful and nurturing environment where children can explore, learn, and grow with creativity and confidence.
        </p>
        <p>
          Our experienced teachers and staff are committed to fostering a love of learning through interactive lessons and activities.
        </p>
        <img
          src="https://th.bing.com/th/id/OIP.CM9PIcfqFaRpO1KLF2p-NwHaE8?w=262&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          alt="Children learning together"
          className="page-image"
        />
      </div>
    </div>
  );
};

export default About;
