import React from 'react';

const EventCreationForm = () => {
  return (
    <form>
      <div>
        <label>Event Title</label>
        <input type="text" name="title" />
      </div>
      <div>
        <label>Event Description</label>
        <textarea name="description"></textarea>
      </div>
      <div>
        <label>Category</label>
        <select name="category">
          <option value="hiking">Hiking</option>
          <option value="camping">Camping</option>
          {/* Add other categories */}
        </select>
      </div>
      <div>
        <label>Date/Time</label>
        <input type="datetime-local" name="datetime" />
      </div>
      <div>
        <label>Location</label>
        <input type="text" name="location" />
        {/* Map Integration */}
      </div>
      <div>
        <label>Difficulty Level</label>
        <select name="difficulty">
          <option value="easy">Easy</option>
          <option value="moderate">Moderate</option>
          <option value="strenuous">Strenuous</option>
          <option value="challenging">Challenging</option>
          <option value="extreme">Extreme</option>
        </select>
      </div>
      <div>
        <label>Price</label>
        <input type="number" name="price" />
      </div>
      <div>
        <label>Maximum Participants</label>
        <input type="number" name="maxParticipants" />
      </div>
      <div>
        <label>Image Upload</label>
        <input type="file" name="image" />
      </div>
      <div>
        <label>Itinerary</label>
        <textarea name="itinerary"></textarea>
      </div>
      <div>
        <label>What to Bring</label>
        <textarea name="whatToBring"></textarea>
      </div>
      <div>
        <label>Included/Excluded Items</label>
        <textarea name="includedExcluded"></textarea>
      </div>
      <div>
        <label>Safety Information</label>
        <textarea name="safetyInfo"></textarea>
      </div>
      <button type="submit">Save</button>
      <button type="button">Publish</button>
    </form>
  );
};

export default EventCreationForm;
