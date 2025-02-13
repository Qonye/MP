import React from 'react';
import UpcomingEvents from '../components/UpcomingEvents';
import VendorPastEvents from '../components/VendorPastEvents';
import VendorBookings from '../components/VendorBookings';
import VendorPayments from '../components/VendorPayments';
import VendorProfile from '../components/VendorProfile';

const VendorDashboard = () => {
  return (
    <div>
      <header>
        <h1>Vendor Dashboard</h1>
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
          <h2>Events Section</h2>
          {/* List of Events, "Add New Event" Button, Event Image, Event Title, Date/Time, Location, Difficulty Level, "Edit" Button, "Deactivate/Activate" Button */}
          <UpcomingEvents />
          <VendorPastEvents />
        </section>
        <VendorBookings />
        <VendorPayments />
        <VendorProfile />
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

export default VendorDashboard;
