import React from 'react';

const AdminEventList = () => {
  return (
    <section>
      <h2>Events Section</h2>
      {/* List of All Events, Event Title, Vendor Name, Date/Time, "View Event Details" Button */}
      <div>
        <p>Event Title: Hiking Adventure</p>
        <p>Vendor Name: Adventure Co.</p>
        <p>Date/Time: 2023-10-15 10:00 AM</p>
        <button>View Event Details</button>
      </div>
      {/* Add more events */}
    </section>
  );
};

export default AdminEventList;
