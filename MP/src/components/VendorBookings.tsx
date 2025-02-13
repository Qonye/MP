import React from 'react';

const VendorBookings = () => {
  return (
    <section>
      <h2>Bookings Section</h2>
      {/* List of Bookings, User Name, Event Title, Date/Time, Number of Participants, Payment Status */}
      <div>
        <p>User Name: John Doe</p>
        <p>Event Title: Hiking Adventure</p>
        <p>Date/Time: 2023-10-15 10:00 AM</p>
        <p>Number of Participants: 2</p>
        <p>Payment Status: Paid</p>
      </div>
      {/* Add more bookings */}
    </section>
  );
};

export default VendorBookings;
