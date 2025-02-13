npm audit fix --forceimport React from 'react';
import ReviewsSection from '../components/ReviewsSection';
import BookingSection from '../components/BookingSection';

const ActivityDetailsPage = () => {
  return (
    <div>
      <header>
        <h1>Activity Details</h1>
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
          <h2>Hero Section</h2>
          {/* Large Event Image, Event Title, Vendor Name, Date/Time, Location, Difficulty Level, Price */}
        </section>
        <section>
          <h2>Event Description</h2>
          {/* Detailed Text, Itinerary, What to Bring, Included/Excluded Items, Safety Information */}
        </section>
        <section>
          <h2>Vendor Details</h2>
          {/* Vendor Logo, Vendor Rating, "View Vendor Profile" Button */}
        </section>
        <ReviewsSection />
        <BookingSection />
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

export default ActivityDetailsPage;
