import React from 'react';

const VendorProfile = () => {
  return (
    <section>
      <h2>Vendor Information</h2>
      {/* Vendor Information, Edit Profile Button, Upload Logo */}
      <div>
        <p>Vendor Name: Adventure Co.</p>
        <p>Description: We offer the best outdoor adventures.</p>
        <button>Edit Profile</button>
        <button>Upload Logo</button>
      </div>
    </section>
  );
};

export default VendorProfile;
