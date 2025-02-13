import React from 'react';

const AdminPayments = () => {
  return (
    <section>
      <h2>Payments Section</h2>
      {/* List of All Transactions, Vendor Name, Event Title, Amount, Status, "Mark as Paid" Button */}
      <div>
        <p>Vendor Name: Adventure Co.</p>
        <p>Event Title: Hiking Adventure</p>
        <p>Amount: $50</p>
        <p>Status: Pending</p>
        <button>Mark as Paid</button>
      </div>
      {/* Add more transactions */}
    </section>
  );
};

export default AdminPayments;
