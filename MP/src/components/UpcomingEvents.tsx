import React from 'react';

const UpcomingEvents = () => {
  return (
    <section>
      <h2>Upcoming Events</h2>
      {/* Event Image, Event Title, Date/Time, Location, Difficulty Level, Price */}
      <div>
        <img src="event1.jpg" alt="Event 1" />
        <p>Event Title: Hiking Adventure</p>
        <p>Date/Time: 2023-10-15 10:00 AM</p>
        <p>Location: Mountain Trail</p>
        <p>Difficulty Level: Moderate</p>
        <p>Price: $50</p>
      </div>
      {/* Add more upcoming events */}
    </section>
  );
};

export default UpcomingEvents;
