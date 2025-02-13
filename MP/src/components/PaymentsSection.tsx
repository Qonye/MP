import React from 'react';

const PaymentsSection = () => {
  return (
    <section>
      <h2>Payments Section</h2>
      {/* Total Earnings, Available Balance, Payment History, "Request Disbursement" Button */}
      <div>
        <p>Total Earnings: $500</p>
        <p>Available Balance: $200</p>
        <button>Request Disbursement</button>
      </div>
      <div>
        <p>Payment History</p>
        <p>Event Title: Hiking Adventure</p>
        <p>Amount: $50</p>
        <p>Status: Paid</p>
      </div>
      {/* Add more payment history */}
    </section>
  );
};

export default PaymentsSection;
