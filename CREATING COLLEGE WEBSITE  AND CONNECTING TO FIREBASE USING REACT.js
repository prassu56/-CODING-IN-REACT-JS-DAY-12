//code in app.js//
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import ContactUs from './components/ContactUs';
import Signup from './components/Signup';
import Login from './components/Login';
import Help from './components/Help';
import Header from './components/Header';
import Footer from './components/Footer';
function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/help" element={<Help />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
//code in app.css//
/* Reset and base styles */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-image: url('https://th.bing.com/th/id/OIP.D9vb9Bt-jbLVgexAArqcXQHaEo?rs=1&pid=ImgDetMain');
  color: #fbfdff;
  line-height: 1.6;
}

/* App container */
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Header styling */
.app-header {
  background-color: #343a40;
  padding: 15px 30px;
  color: #f8f9fa;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.logo h1 {
  font-size: 1.8rem;
  font-weight: 700;
}

/* Navigation styling */
.app-nav ul {
  list-style: none;
  display: flex;
  gap: 20px;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
}

.app-nav li {
  
}

.nav-link {
  color: #f8f9fa;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  padding: 8px 12px;
  border-radius: 5px;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.nav-link:hover,
.nav-link:focus {
  background-color: #ffc107;
  color: #343a40;
  outline: none;
}

/* Main content styling */
.app-main {
  flex-grow: 1;
  padding: 40px 30px;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  background-color: #ffffff;
  box-shadow: 0 6px 12px rgba(0,0,0,0.1);
  border-radius: 10px;
}

/* Page container */
.page-container {
  text-align: center;
  padding: 40px 20px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: #ffffff;
}

.page-container h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #ffffff;
}

.page-container p {
  font-size: 1.2rem;
  color: #e0e0e0;
  line-height: 1.6;
}

/* Home page container with background image */
.home-container {
  background-color: #de37cb;
  padding: 60px 20px;
  min-height: 100vh;
  border-radius: 0;
  background-image: url('https://th.bing.com/th/id/OIP.3TBtgryVcd_qV5O0-qjjsgHaF7?rs=1&pid=ImgDetMain');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

/* Features container */
.features-container {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 40px;
  flex-wrap: wrap;
  
}

/* Feature card styling */
.feature-card {
  background-color: rgba(0, 0, 0, 0.6);
  padding: 20px 25px;
  border-radius: 10px;
  width: 280px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.3);
  color: #ffffff;
  transition: transform 0.3s ease;
}

.feature-card h2 {
  margin-bottom: 15px;
  font-size: 1.5rem;
  color: #ffc107;
}

.feature-card p {
  font-size: 1rem;
  line-height: 1.4;
}

.feature-card:hover {
  transform: translateY(-10px);
}

/* Footer styling */
.app-footer {
  background-color: #343a40;
  color: #f8f9fa;
  text-align: center;
  padding: 15px 30px;
  font-size: 0.9rem;
  box-shadow: 0 -4px 8px rgba(0,0,0,0.1);
}

/* About page styling */
.about-container {
  max-width: 1200px;
  margin: 40px auto;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #212529;
}

.about-header {
  position: relative;
  height: 400px;
  background-image: url('https://www.pixelstalk.net/wp-content/uploads/2016/03/Sunset-wallpaper-desktop.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin-bottom: 40px;
}

.about-overlay {
  background-color: rgba(0, 0, 0, 0.5);
  padding: 40px 60px;
  border-radius: 10px;
  text-align: center;
  color: #ffffff;
  max-width: 600px;
}

.about-overlay h1 {
  font-size: 2.5rem;
  margin-bottom: 15px;
}

.about-overlay p {
  font-size: 1.2rem;
  margin-bottom: 25px;
}

.learn-more-btn {
  background-color: #b22222;
  color: #ffffff;
  border: none;
  padding: 12px 25px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.learn-more-btn:hover {
  background-color: #7a1616;
}

.info-boxes {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
}

.info-box {
  background-color: #f0f0f0;
  flex: 1 1 22%;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  text-align: center;
  color: #212529;
  transition: transform 0.3s ease;
}

.info-box:hover {
  transform: translateY(-10px);
}

.info-box .icon {
  font-size: 2.5rem;
  margin-bottom: 15px;
  color: #b22222;
}

.info-box h3 {
  margin-bottom: 10px;
  font-size: 1.3rem;
}

.info-box p {
  font-size: 1rem;
  line-height: 1.4;
}

/* Contact Us page styling */
.contact-container {
  display: flex;
  max-width: 900px;
  margin: 40px auto;
  background-image: url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 10px;
  box-shadow: 0 6px 12px rgba(0,0,0,0.1);
  overflow: hidden;
}

.contact-form {
  flex: 1;
  padding: 40px 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.contact-form h1 {
  margin-bottom: 25px;
  color: #212529;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 12px 15px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 25px;
  font-size: 1rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  resize: vertical;
  transition: border-color 0.3s ease;
}

.contact-form input:focus,
.contact-form textarea:focus {
  border-color: #1962d0;
  outline: none;
}

.send-btn {
  background-color: #1962d0;
  color: #ffffff;
  border: none;
  padding: 12px 25px;
  font-size: 1.1rem;
  border-radius: 25px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.send-btn:hover {
  background-color: #0f4bbd;
}

.contact-image {
  flex: 1;
  background-color: #e6f0fa;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.contact-image img {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .app-header {
    flex-direction: column;
    align-items: flex-start;
  }
  .app-nav ul {
    flex-direction: column;
    gap: 10px;
    width: 100%;
  }
  .nav-link {
    display: block;
    width: 100%;
    padding: 10px 0;
  }
  .app-main {
    padding: 20px 15px;
    margin: 10px;
  }
  .about-header {
    height: 300px;
  }
  .about-overlay {
    padding: 20px 30px;
    max-width: 100%;
  }
  .info-boxes {
    flex-direction: column;
  }
  .info-box {
    flex: 1 1 100%;
  }
  .contact-container {
    flex-direction: column;
    max-width: 100%;
  }
  .contact-image {
    padding: 10px 0;
  }
}
//code in header.js//
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="app-header">
      <div className="logo">
        <h1>College Portal</h1>
      </div>
      <nav className="app-nav">
        <ul>
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/about" className="nav-link">About</Link></li>
          <li><Link to="/contactus" className="nav-link">Contact Us</Link></li>
          <li><Link to="/signup" className="nav-link">Signup</Link></li>
          <li><Link to="/login" className="nav-link">Login</Link></li>
          <li><Link to="/help" className="nav-link">Help</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
//code in header.css//
.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 40px;
  background-color: #0a7c7c;
  color: white;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.logo h1 {
  margin: 0;
  font-size: 24px;
  font-weight: 700;
}

.app-nav ul {
  list-style: none;
  display: flex;
  gap: 25px;
  margin: 0;
  padding: 0;
}

.app-nav ul li {
  display: inline;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-weight: 600;
  font-size: 16px;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #f0f0f0;
  text-decoration: underline;
}
//code in footer.js//
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="app-footer">
      <p>© {new Date().getFullYear()} College Portal. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
//code in footer.css//
.app-footer {
  background-color: #0a7c7c;
  color: white;
  text-align: center;
  padding: 20px 0;
  font-size: 14px;
  font-weight: 500;
  box-shadow: 0 -2px 5px rgba(0,0,0,0.1);
}
//code in home.js//
import React from 'react';
import FeatureCard1 from './HomeFeatures/FeatureCard1';
import FeatureCard2 from './HomeFeatures/FeatureCard2';
import FeatureCard3 from './HomeFeatures/FeatureCard3';

function Home() {
  return (
    <div className="page-container home-container">
      <h1>Welcome to the mother theresa institute of engineering and technology</h1>
      <p>Explore our courses, faculty, and campus life.</p>
      <div className="features-container">
        <FeatureCard1 />
        <FeatureCard2 />
        <FeatureCard3 />
      </div>
    </div>
  );
}

export default Home;
//code in featurecard1.js this is related to home page//
import React from 'react';

function FeatureCard1() {
  return (
    <div className="feature-card">
      <h2>Quality Education</h2>
      <p>Our college offers top-notch education with experienced faculty and modern curriculum.</p>
    </div>
  );
}

export default FeatureCard1;
//code in featurecard2.js this is related to home page//
import React from 'react';

function FeatureCard2() {
  return (
    <div className="feature-card">
      <h2>Vibrant Campus Life</h2>
      <p>Experience a lively campus with clubs, events, and activities that enrich student life.</p>
    </div>
  );
}

export default FeatureCard2;
//code in featurecard3.js this is related to home page//
import React from 'react';

function FeatureCard3() {
  return (
    <div className="feature-card">
      <h2>Career Opportunities</h2>
      <p>We provide excellent placement support and career guidance to help you succeed.</p>
    </div>
  );
}

export default FeatureCard3;
//code in about.js//
import React from 'react';

function About() {
  return (
    <div className="about-container">
      <header className="about-header">
        <div className="about-overlay">
          <h1>With Ardor and Devotion</h1>
          <p>Aligning who you are with what you do is the heart of the Bates experience.</p>
          <button className="learn-more-btn">Learn About Visiting</button>
        </div>
      </header>
      <section className="info-boxes">
        <div className="info-box future-students">
          <div className="icon">&#128218;</div>
          <h3>Future Students</h3>
          <p>Bates' unique personality rests on the bedrock values of academic excellence, inclusivity, and social responsibility.</p>
        </div>
        <div className="info-box academic-programs">
          <div className="icon">&#128161;</div>
          <h3>Academic Programs</h3>
          <p>A Bates education fosters inquiry and reflection, growth, and a commitment to a better world beyond oneself.</p>
        </div>
        <div className="info-box presidential-search">
          <div className="icon">&#128269;</div>
          <h3>Presidential Search</h3>
          <p>Leading and appointing the next president of Bates College.</p>
        </div>
        <div className="info-box virtual-campus-tours">
          <div className="icon">&#128421;</div>
          <h3>Virtual Campus Tours</h3>
          <p>Take a virtual tour, learn about admission and financial aid, and speak with current students.</p>
        </div>
      </section>
    </div>
  );
}

export default About;
//code in contactus.js//
import React, { useState } from 'react';
import { database } from '../firebase';
import { ref, push } from "firebase/database";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await push(ref(database, 'contactMessages'), {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        timestamp: Date.now()
      });
      alert(`Message sent!\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
      setFormData({name: '', email: '', message: ''});
    } catch (error) {
      alert("Error sending message: " + error.message);
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-form">
        <h1>Contact us</h1>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="name" 
            placeholder="Name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
          <textarea 
            name="message" 
            placeholder="Message" 
            value={formData.message} 
            onChange={handleChange} 
            required 
          />
          <button type="submit" className="send-btn">Send Message</button>
        </form>
      </div>
      <div className="contact-image">
        <img 
          src="https://th.bing.com/th/id/OIP._xCcTZ4iG7933f7OV9GP9gHaEK?w=291&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" 
          alt="Contact Illustration" 
        />
      </div>
    </div>
  );
}

export default ContactUs;
//code in signup.js//
import React, { useState } from 'react';
import './Signup.css';
import { auth, database } from '../firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, set } from "firebase/database";

function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    agreeTerms: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.agreeTerms) {
      alert("You must agree to the Terms & Conditions");
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      const user = userCredential.user;
      // Save additional user info in Realtime Database
      await set(ref(database, 'users/' + user.uid), {
        name: formData.name,
        email: formData.email
      });
      alert(`Account created!\nName: ${formData.name}\nEmail: ${formData.email}`);
      setFormData({name: '', email: '', password: '', agreeTerms: false});
    } catch (error) {
      alert("Error creating account: " + error.message);
    }
  };

  return (
    <div className="signup-wrapper">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <div className="input-group">
          <span className="input-icon">👤</span>
          <input 
            type="text" 
            name="name" 
            placeholder="Name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="input-group">
          <span className="input-icon">📧</span>
          <input 
            type="email" 
            name="email" 
            placeholder="E-mail" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="input-group">
          <span className="input-icon">🔒</span>
          <input 
            type="password" 
            name="password" 
            placeholder="Password" 
            value={formData.password} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="checkbox-group">
          <input 
            type="checkbox" 
            id="agreeTerms" 
            name="agreeTerms" 
            checked={formData.agreeTerms} 
            onChange={handleChange} 
          />
          <label htmlFor="agreeTerms">I read and agree to Terms & Conditions</label>
        </div>
        <button type="submit" className="create-account-btn">CREATE ACCOUNT</button>
        <p className="signin-link">Already have an account? <a href="/login">Sign in</a></p>
      </form>
    </div>
  );
}

export default Signup;
//code in signup.css//
.signup-wrapper {
  background: #7b2ff7; /* purple background */
  background: linear-gradient(135deg, #7b2ff7 0%, #f107a3 100%);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.signup-form {
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(123, 47, 247, 0.5);
  padding: 40px 50px;
  width: 350px;
  max-width: 100%;
  box-sizing: border-box;
  text-align: center;
}

.signup-form h2 {
  margin-bottom: 30px;
  font-weight: 700;
  font-size: 24px;
  color: #333;
}

.input-group {
  position: relative;
  margin-bottom: 25px;
}

.input-icon {
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 18px;
  color: #7b2ff7;
  pointer-events: none;
}

.input-group input {
  width: 100%;
  padding: 12px 15px 12px 45px;
  border-radius: 30px;
  border: 1px solid #ddd;
  box-shadow: 0 2px 5px rgba(123, 47, 247, 0.15);
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s ease;
}

.input-group input:focus {
  border-color: #7b2ff7;
  box-shadow: 0 0 8px rgba(123, 47, 247, 0.6);
}

.checkbox-group {
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  font-size: 14px;
  color: #555;
}

.checkbox-group input[type="checkbox"] {
  margin-right: 10px;
  width: 18px;
  height: 18px;
  accent-color: #7b2ff7;
  cursor: pointer;
}

.create-account-btn {
  background: #7b2ff7;
  background: linear-gradient(135deg, #7b2ff7 0%, #f107a3 100%);
  border: none;
  color: white;
  font-weight: 700;
  font-size: 16px;
  padding: 12px 0;
  width: 100%;
  border-radius: 30px;
  cursor: pointer;
  box-shadow: 0 5px 15px rgba(241, 7, 163, 0.5);
  transition: background 0.3s ease;
}

.create-account-btn:hover {
  background: linear-gradient(135deg, #f107a3 0%, #7b2ff7 100%);
}

.signin-link {
  margin-top: 20px;
  font-size: 14px;
  color: #666;
}

.signin-link a {
  color: #7b2ff7;
  text-decoration: none;
  font-weight: 600;
}

.signin-link a:hover {
  text-decoration: underline;
}
//code in login.js//
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
  const [formData, setFormData] = useState({
    emailOrPhone: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Logging in with\nEmail or Phone: ${formData.emailOrPhone}`);
    setFormData({ emailOrPhone: '', password: '' });
  };

  return (
    <div className="login-page">
      <nav className="top-nav">
        <ul className="nav-links">
         
        </ul>
        <button className="login-btn">Log in</button>
      </nav>
      <div className="login-container">
        <div className="form-section">
          <div className="tabs">
            <Link to="/login">
              <button className="tab active">Login</button>
            </Link>
            <Link to="/signup">
              <button className="tab inactive">Sign up</button>
            </Link>
          </div>
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <span className="input-icon">📧</span>
              <input
                type="text"
                name="emailOrPhone"
                placeholder="Email or phone number"
                value={formData.emailOrPhone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group">
              <span className="input-icon">🔒</span>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <p className="forgot-password">Forgot your password?</p>
            <button type="submit" className="submit-btn">Login</button>
          </form>
        </div>
        <div className="illustration-section">
          {/* Placeholder for illustration */}
          <img src="https://file.mockplus.com/image/2019/05/b3b8cb9d-9812-4ae7-b5b8-dbe513620fd9.jpg" alt="Illustration" />
        </div>
      </div>
    </div>
  );
}

export default Login;
//code in login.css//
.login-page {
  background: #f0f7f7;
  min-height: 100vh;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  display: flex;
  flex-direction: column;
}

.top-nav {
  display: flex;
  justify-content: space-between;
  padding: 20px 50px;
  background: white;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  align-items: center;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 30px;
  margin: 0;
  padding: 0;
  font-weight: 600;
  color: #333;
}

.nav-links li {
  cursor: pointer;
}

.login-btn {
  background-color: #0a7c7c;
  color: white;
  border: none;
  padding: 10px 25px;
  border-radius: 20px;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.3s ease;
}

.login-btn:hover {
  background-color: #095959;
}

.login-container {
  flex: 1;
  display: flex;
  background: white;
  margin: 40px 50px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

.form-section {
  flex: 1;
  padding: 60px 50px;
  display: flex;
  flex-direction: column;
}

.tabs {
  display: flex;
  gap: 20px;
  margin-bottom: 40px;
}

.tab {
  background: none;
  border: none;
  font-size: 18px;
  font-weight: 600;
  padding-bottom: 10px;
  cursor: pointer;
  color: #999;
  border-bottom: 2px solid transparent;
  transition: color 0.3s ease, border-color 0.3s ease;
}

.tab.active {
  color: #0a7c7c;
  border-color: #0a7c7c;
}

.tab.inactive:hover {
  color: #0a7c7c;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.input-group {
  position: relative;
}

.input-icon {
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 18px;
  color: #0a7c7c;
  pointer-events: none;
}

.input-group input {
  width: 100%;
  padding: 12px 15px 12px 45px;
  border-radius: 30px;
  border: 1px solid #ddd;
  box-shadow: 0 2px 5px rgba(10, 124, 124, 0.15);
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s ease;
}

.input-group input:focus {
  border-color: #0a7c7c;
  box-shadow: 0 0 8px rgba(10, 124, 124, 0.6);
}

.forgot-password {
  font-size: 14px;
  color: #0a7c7c;
  cursor: pointer;
  margin-bottom: 30px;
  user-select: none;
}

.submit-btn {
  background-color: #0a7c7c;
  color: white;
  border: none;
  padding: 15px 0;
  border-radius: 30px;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  box-shadow: 0 5px 15px rgba(10, 124, 124, 0.5);
  transition: background-color 0.3s ease;
}

.submit-btn:hover {
  background-color: #095959;
}

.illustration-section {
  flex: 1;
  background: linear-gradient(135deg, #a0d8d8 0%, #5eb5b5 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
}

.illustration-section img {
  max-width: 100%;
  height: auto;
  border-radius: 20px;
}
//code in help.js//
import React from 'react';
import './Help.css';

function Help() {
  return (
    <div className="help-page">
      <h1>Help</h1>
      <p>Find answers to frequently asked questions and support resources.</p>
      <section className="college-info">
        <h2>About Our College</h2>
        <p>
          Our college is committed to providing quality education and fostering a supportive learning environment. 
          We offer a wide range of programs and extracurricular activities to help students achieve their academic and personal goals.
        </p>
        <p>
          Established in 1990, our college has a rich history of academic excellence and community involvement. 
          Our dedicated faculty and staff work tirelessly to ensure every student receives the guidance and resources they need to succeed.
        </p>
        <p>
          For more information, please visit our <a href="/about">About Us</a> page or contact our support team.
        </p>
      </section>
    </div>
  );
}

export default Help;
//code in help.css//
.help-page {
  min-height: 100vh;
  background: #f9f9f9;
  background: linear-gradient(135deg, #ffffff 0%, #e6f2f2 100%);
  padding: 40px 60px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
}

.help-page h1 {
  font-size: 36px;
  margin-bottom: 20px;
}

.help-page p {
  font-size: 16px;
  margin-bottom: 15px;
  line-height: 1.6;
}

.college-info h2 {
  font-size: 28px;
  margin-top: 30px;
  margin-bottom: 15px;
}

.college-info p {
  font-size: 15px;
  margin-bottom: 10px;
}

.college-info a {
  color: #0a7c7c;
  text-decoration: none;
  font-weight: 600;
}

.college-info a:hover {
  text-decoration: underline;
}
//code in firebase.js//
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyALCHYC05Glo7Kb5kf6eoLppmcq29WIN8o",
  authDomain: "webdevelopment-81b3a.firebaseapp.com",
  databaseURL: "https://webdevelopment-81b3a-default-rtdb.firebaseio.com",
  projectId: "webdevelopment-81b3a",
  storageBucket: "webdevelopment-81b3a.appspot.com",
  messagingSenderId: "1007100020553",
  appId: "1:1007100020553:web:453c39b22402e9dd06fc98",
  measurementId: "G-JCDC3P5V9F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { app, auth, database };


