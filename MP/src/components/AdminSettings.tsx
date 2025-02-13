import React from 'react';

const AdminSettings = () => {
  return (
    <section>
      <h2>Settings Section</h2>
      {/* Platform Settings */}
      <div>
        <p>Commission Rate: 10%</p>
        <p>Payment Gateway: Stripe</p>
        {/* Add more settings */}
      </div>
    </section>
  );
};

export default AdminSettings;
