import React from 'react';

const EventDisplay = () => {
  return (
    <section>
      <h2>Event Details</h2>
      {/* Event Image, Event Title, Vendor Name, Date/Time, Location, Difficulty Level, Price */}
      <div>
        <img src="event.jpg" alt="Event" />
        <p>Event Title: Hiking Adventure</p>
        <p>Vendor Name: Adventure Co.</p>
        <p>Date/Time: 2023-10-15 10:00 AM</p>
        <p>Location: Mountain Trail</p>
        <p>Difficulty Level: Moderate</p>
        <p>Price: $50</p>
      </div>
      {/* Add more event details */}
    </section>
  );
};

export default EventDisplay;
