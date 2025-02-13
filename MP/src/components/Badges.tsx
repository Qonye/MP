import React from 'react';

const Badges = () => {
  return (
    <section>
      <h2>Badges</h2>
      {/* Badge Image, Badge Title, Badge Description */}
      <div>
        <img src="badge1.jpg" alt="Beginner's Badge" />
        <p>Badge Title: Beginner's Badge</p>
        <p>Badge Description: Awarded for completing an easy activity.</p>
      </div>
      <div>
        <img src="badge2.jpg" alt="Explorer Badge" />
        <p>Badge Title: Explorer Badge</p>
        <p>Badge Description: Awarded for completing a moderate activity.</p>
      </div>
      {/* Add more badges */}
    </section>
  );
};

export default Badges;
