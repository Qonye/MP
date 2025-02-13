import React from 'react';
import VendorReviews from '../components/VendorReviews';

const VendorProfilePage = () => {
  return (
    <div>
      <header>
        <h1>Vendor Profile</h1>
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
        <section>
          <h2>Vendor Header</h2>
          {/* Vendor Logo, Vendor Name, Vendor Description, Contact Information */}
        </section>
        <section>
          <h2>Upcoming Events</h2>
          {/* Event Image, Event Title, Date/Time, Location, Difficulty Level, Price */}
        </section>
        <section>
          <h2>Past Events</h2>
          {/* Event Image, Event Title, Date/Time, Location, Difficulty Level */}
        </section>
        <VendorReviews />
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

export default VendorProfilePage;
