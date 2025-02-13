import React from 'react';

const VendorList = () => {
  return (
    <section>
      <h2>Vendors Section</h2>
      {/* List of Vendors, Vendor Name, Vendor Email, "Approve/Reject" Button, "View Vendor Profile" Button, "Boost Vendor" Button */}
      <div>
        <p>Vendor Name: Adventure Co.</p>
        <p>Vendor Email: contact@adventureco.com</p>
        <button>Approve</button>
        <button>Reject</button>
        <button>View Vendor Profile</button>
        <button>Boost Vendor</button>
      </div>
      {/* Add more vendors */}
    </section>
  );
};

export default VendorList;
