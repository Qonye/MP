import React from 'react';

const UserList = () => {
  return (
    <section>
      <h2>Users Section</h2>
      {/* List of Users, User Name, User Email, "View User Profile" Button */}
      <div>
        <p>User Name: John Doe</p>
        <p>User Email: john.doe@example.com</p>
        <button>View User Profile</button>
      </div>
      {/* Add more users */}
    </section>
  );
};

export default UserList;
