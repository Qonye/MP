import React from 'react';

const ReviewsSection = () => {
  return (
    <section>
      <h2>Reviews/Ratings</h2>
      {/* Star Rating, Comments */}
      <div>
        <p>Star Rating: ★★★★☆</p>
        <p>Comment: Great experience!</p>
      </div>
      <div>
        <p>Star Rating: ★★★☆☆</p>
        <p>Comment: It was okay.</p>
      </div>
      {/* Add more reviews */}
    </section>
  );
};

export default ReviewsSection;
