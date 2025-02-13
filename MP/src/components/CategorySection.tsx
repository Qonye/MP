import React from 'react';

const CategorySection = () => {
  return (
    <section>
      <h2>Browse by Category</h2>
      {/* Category Icons/Links */}
      <div>
        <a href="/category/hiking">Hiking</a>
        <a href="/category/camping">Camping</a>
        {/* Add other categories */}
      </div>
    </section>
  );
};

export default CategorySection;
