import React from 'react';

const ProfileSection = () => {
  return (
    <section>
      <h2>Profile Section</h2>
      {/* User Information, Edit Profile Button */}
      <div>
        <p>Name: John Doe</p>
        <p>Email: john.doe@example.com</p>
        <button>Edit Profile</button>
      </div>
    </section>
  );
};

export default ProfileSection;
