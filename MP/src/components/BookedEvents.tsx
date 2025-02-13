import React from 'react';

const BookedEvents = () => {
  return (
    <section>
      <h2>Booked Events</h2>
      {/* Event Image, Event Title, Date/Time, Location, Difficulty Level, "View Details" Button, "Cancel Booking" Button */}
      <div>
        <img src="event1.jpg" alt="Event 1" />
        <p>Event Title: Hiking Adventure</p>
        <p>Date/Time: 2023-10-15 10:00 AM</p>
        <p>Location: Mountain Trail</p>
        <p>Difficulty Level: Moderate</p>
        <button>View Details</button>
        <button>Cancel Booking</button>
      </div>
      {/* Add more booked events */}
    </section>
  );
};

export default BookedEvents;
