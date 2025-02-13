import React from 'react';
import ProfileSection from '../components/ProfileSection';
import BookedEvents from '../components/BookedEvents';
import PastEvents from '../components/PastEvents';
import Badges from '../components/Badges';

const UserDashboard = () => {
  return (
    <div>
      <header>
        <h1>User Dashboard</h1>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/activities">Activities</a></li>
            <li><a href="/vendors">Vendors</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/login">Login/Register</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <ProfileSection />
        <BookedEvents />
        <PastEvents />
        <Badges />
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

export default UserDashboard;
