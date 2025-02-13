import React from 'react';
import FeaturedActivitiesCarousel from '../components/FeaturedActivitiesCarousel';
import CategorySection from '../components/CategorySection';
import RecentlyAddedActivities from '../components/RecentlyAddedActivities';

const HomePage = () => {
  return (
    <div>
      <header>
        <h1>Outdoor Activity Platform</h1>
        <nav>
          <ul>
            <li><a href="/activities">Activities</a></li>
            <li><a href="/vendors">Vendors</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/login">Login/Register</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <FeaturedActivitiesCarousel />
        <CategorySection />
        <RecentlyAddedActivities />
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

export default HomePage;
