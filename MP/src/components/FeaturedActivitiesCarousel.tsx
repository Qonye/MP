import React from 'react';

const FeaturedActivitiesCarousel = () => {
  return (
    <section>
      <h2>Featured Activities</h2>
      {/* Carousel of Featured Activities */}
      <div>
        <img src="activity1.jpg" alt="Activity 1" />
        <p>Event Title: Hiking Adventure</p>
        <p>Date/Time: 2023-10-15 10:00 AM</p>
        <p>Location: Mountain Trail</p>
        <p>Difficulty Level: Moderate</p>
        <p>Price: $50</p>
      </div>
      <div>
        <img src="activity2.jpg" alt="Activity 2" />
        <p>Event Title: Kayaking Fun</p>
        <p>Date/Time: 2023-10-20 09:00 AM</p>
        <p>Location: River Rapids</p>
        <p>Difficulty Level: Strenuous</p>
        <p>Price: $75</p>
      </div>
      {/* Add more featured activities */}
    </section>
  );
};

export default FeaturedActivitiesCarousel;
