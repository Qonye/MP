import React from 'react';

const VendorPastEvents = () => {
  return (
    <section>
      <h2>Past Events</h2>
      {/* Event Image, Event Title, Date/Time, Location, Difficulty Level */}
      <div>
        <img src="event2.jpg" alt="Event 2" />
        <p>Event Title: Kayaking Fun</p>
        <p>Date/Time: 2023-10-20 09:00 AM</p>
        <p>Location: River Rapids</p>
        <p>Difficulty Level: Strenuous</p>
      </div>
      {/* Add more past events */}
    </section>
  );
};

export default VendorPastEvents;
