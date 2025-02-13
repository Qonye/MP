import React from 'react';

const RecentlyAddedActivities = () => {
  return (
    <section>
      <h2>Recently Added Activities</h2>
      {/* Recently Added Activities */}
      <div>
        <img src="activity3.jpg" alt="Activity 3" />
        <p>Event Title: Rock Climbing</p>
        <p>Date/Time: 2023-10-25 08:00 AM</p>
        <p>Location: Cliffside</p>
        <p>Difficulty Level: Challenging</p>
        <p>Price: $100</p>
      </div>
      <div>
        <img src="activity4.jpg" alt="Activity 4" />
        <p>Event Title: Wildlife Tour</p>
        <p>Date/Time: 2023-10-30 07:00 AM</p>
        <p>Location: National Park</p>
        <p>Difficulty Level: Easy</p>
        <p>Price: $40</p>
      </div>
      {/* Add more recently added activities */}
    </section>
  );
};

export default RecentlyAddedActivities;
