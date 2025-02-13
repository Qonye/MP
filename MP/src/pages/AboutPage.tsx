import React from 'react';

const AboutPage = () => {
  return (
    <div>
      <header>
        <h1>About Us</h1>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/activities">Activities</a></li>
            <li><a href="/vendors">Vendors</a></li>
            <li><a href="/login">Login/Register</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section>
          <h2>Our Mission</h2>
          <p>To connect outdoor activity providers with adventurers and promote a healthy, active lifestyle.</p>
        </section>
        <section>
          <h2>Our Team</h2>
          <p>We are a group of outdoor enthusiasts dedicated to making it easier for people to find and book outdoor activities.</p>
        </section>
      </main>
      <footer>
        <p>About Us</p>
        <p>Contact</p>
        <p>Terms of Service</p>
        <p>Privacy Policy</p>
      </footer>
    </div>
  );
};

export default AboutPage;
