import React from 'react';

const PastEvents = () => {
  return (
    <section>
      <h2>Past Events</h2>
      {/* Event Image, Event Title, Date/Time, Location, Difficulty Level, "View Details" Button, "Leave Review" Button */}
      <div>
        <img src="event2.jpg" alt="Event 2" />
        <p>Event Title: Kayaking Fun</p>
        <p>Date/Time: 2023-10-20 09:00 AM</p>
        <p>Location: River Rapids</p>
        <p>Difficulty Level: Strenuous</p>
        <button>View Details</button>
        <button>Leave Review</button>
      </div>
      {/* Add more past events */}
    </section>
  );
};

export default PastEvents;
