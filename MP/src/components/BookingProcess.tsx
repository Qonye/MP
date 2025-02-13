import React from 'react';

const BookingProcess = () => {
  return (
    <section>
      <h2>Booking Process</h2>
      {/* Availability (Calendar), Number of Participants, Total Price, "Book Now" Button */}
      <div>
        <label>Availability</label>
        <input type="date" name="availability" />
      </div>
      <div>
        <label>Number of Participants</label>
        <input type="number" name="participants" />
      </div>
      <div>
        <label>Total Price</label>
        <input type="text" name="totalPrice" readOnly />
      </div>
      <button type="button">Book Now</button>
    </section>
  );
};

export default BookingProcess;
