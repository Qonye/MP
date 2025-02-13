
# Conceptual Framework for Outdoor Activity Platform

## I. Overview
The platform connects outdoor activity providers (Vendors) with adventurers (Users). The core functionalities include activity listing, booking, payment processing, and a gamified rewards system.

## II. Categories
- Hiking
- Camping
- Rock Climbing
- Kayaking/Canoeing
- Mountain Biking
- Fishing
- Wildlife Tours
- Backpacking
- Skiing/Snowboarding
- Snowshoeing
- Trail Running
- Outdoor Photography Workshops
- Survival Skills Workshops

## III. Wireframe - Page Structure & Key Elements

### A. Homepage
- **Header:**
  - Logo
  - Search Bar (Activity, Location)
  - Navigation (Activities, Vendors, About Us, Login/Register)
- **Featured Activities Carousel:**
  - Event Image (Vendor Logo Overlay - Small)
  - Event Title
  - Date/Time
  - Location
  - Difficulty Level (Icon)
  - Price
- **Browse by Category:**
  - Category Icons/Links
- **Recently Added Activities:**
  - Event Image (Vendor Logo Overlay - Small)
  - Event Title
  - Date/Time
  - Location
  - Difficulty Level (Icon)
  - Price
- **Footer:**
  - About Us
  - Contact
  - Terms of Service
  - Privacy Policy

### B. Activity Details Page
- **Hero Section:**
  - Large Event Image
  - Event Title
  - Vendor Name (Link to Vendor Profile)
  - Date/Time
  - Location (Map Integration)
  - Difficulty Level (Description & Icon)
  - Price
- **Event Description:**
  - Detailed Text
  - Itinerary
  - What to Bring
  - Included/Excluded Items
  - Safety Information
- **Vendor Details:**
  - Vendor Logo
  - Vendor Rating (if applicable)
  - "View Vendor Profile" Button
- **Reviews/Ratings:**
  - Star Rating
  - Comments
- **Booking Section:**
  - Availability (Calendar)
  - Number of Participants
  - Total Price
  - "Book Now" Button

### C. Vendor Profile Page
- **Vendor Header:**
  - Vendor Logo
  - Vendor Name
  - Vendor Description
  - Contact Information
- **Upcoming Events:**
  - Event Image
  - Event Title
  - Date/Time
  - Location
  - Difficulty Level
  - Price
- **Past Events:**
  - Event Image
  - Event Title
  - Date/Time
  - Location
  - Difficulty Level
- **Reviews:**
  - Vendor Reviews

### D. User Dashboard
- **Navigation:**
  - Profile
  - Booked Events
  - Past Events
  - Badges
  - Settings
- **Profile Section:**
  - User Information (Name, Email, etc.)
  - Edit Profile Button
- **Booked Events:**
  - Event Image
  - Event Title
  - Date/Time
  - Location
  - Difficulty Level
  - "View Details" Button
  - "Cancel Booking" Button (with cancellation policy details)
- **Past Events:**
  - Event Image
  - Event Title
  - Date/Time
  - Location
  - Difficulty Level
  - "View Details" Button
  - "Leave Review" Button
- **Badges:**
  - Badge Image
  - Badge Title
  - Badge Description

### E. Vendor Dashboard
- **Navigation:**
  - Events
  - Bookings
  - Payments
  - Profile
- **Events Section:**
  - List of Events (Active/Inactive)
  - "Add New Event" Button
  - Event Image
  - Event Title
  - Date/Time
  - Location
  - Difficulty Level
  - "Edit" Button
  - "Deactivate/Activate" Button
- **Bookings Section:**
  - List of Bookings (per Event)
  - User Name
  - Event Title
  - Date/Time
  - Number of Participants
  - Payment Status
- **Payments Section:**
  - Total Earnings
  - Available Balance
  - Payment History
  - "Request Disbursement" Button
- **Profile Section:**
  - Vendor Information
  - Edit Profile Button
  - Upload Logo

### F. Admin Dashboard
- **Navigation:**
  - Vendors
  - Users
  - Events
  - Payments
  - Settings
- **Vendors Section:**
  - List of Vendors (Approved/Pending)
  - Vendor Name
  - Vendor Email
  - "Approve/Reject" Button
  - "View Vendor Profile" Button
  - "Boost Vendor" Button
- **Users Section:**
  - List of Users
  - User Name
  - User Email
  - "View User Profile" Button
- **Events Section:**
  - List of All Events
  - Event Title
  - Vendor Name
  - Date/Time
  - "View Event Details" Button
- **Payments Section:**
  - List of All Transactions
  - Vendor Name
  - Event Title
  - Amount
  - Status (Pending, Paid)
  - "Mark as Paid" Button
- **Settings Section:**
  - Platform Settings (e.g., commission rate, payment gateway settings)

### G. Event Creation Form (Vendor Dashboard)
- Event Title (Text Input)
- Event Description (Text Area)
- Category (Dropdown)
- Date/Time (Date/Time Picker)
- Location (Text Input + Map Integration for selection)
- Difficulty Level (Dropdown - Easy, Moderate, Strenuous, Challenging, Extreme) (Add custom description for each)
- Price (Number Input)
- Maximum Participants (Number Input)
- Image Upload
- Itinerary (Text Area)
- What to Bring (Text Area)
- Included/Excluded Items (Text Area)
- Safety Information (Text Area)
- "Save" Button
- "Publish" Button

## IV. Logic Mapping

### User Registration/Login:
- Standard authentication flow.

### Vendor Registration:
- Requires admin approval before vendor can list events.
- Includes agreement to terms and conditions.

### Event Creation:
- Vendors fill out the event creation form.
- Data is validated.
- Event is saved to the database (associated with the vendor).

### Event Display:
- Homepage prioritizes promoted events (paid).
- Otherwise, events are sorted by date.
- Filtering by category, location, date, and difficulty.

### Booking Process:
- User selects date and number of participants.
- System checks availability.
- User is prompted to pay.
- Booking is confirmed, and user receives notification.
- Vendor receives notification.

### Payment Processing:
- Integrate with a payment gateway (Stripe, PayPal).
- Admin holds funds in escrow until the event occurs.

### Disbursement to Vendors:
- Vendors request disbursement.
- Admin reviews and approves.
- Funds are transferred to the vendor (minus platform commission).

### Badge System:
- A lookup table maps difficulty level to badge type.
  - Easy = "Beginner's Badge"
  - Moderate = "Explorer Badge"
  - Strenuous = "Trailblazer Badge"
  - Challenging = "Summit Seeker Badge"
  - Extreme = "Conqueror Badge"
- After the event date passes, the system automatically checks the user's attendance.
- Based on the event's difficulty, the appropriate badge is awarded to the user.
- The badge is displayed in the user's dashboard.

### Promoted Events:
- Vendors pay a fee to have their events featured.
- Admin manages promoted events and their duration.

### Review System:
- Users can leave reviews for events and vendors.
- Reviews are moderated.

## V. Data Model (Example)

### Users:
- user_id, name, email, password, profile_info, badges

### Vendors:
- vendor_id, name, email, password, description, logo, contact_info, approved (boolean)

### Events:
- event_id, vendor_id, title, description, category, date, time, location, difficulty, price, max_participants, image, itinerary, what_to_bring, included_excluded, safety_info, promoted (boolean)

### Bookings:
- booking_id, user_id, event_id, date, num_participants, total_price, payment_status

### Badges:
- badge_id, title, description, image, difficulty_level (maps to event difficulty)

### UserBadges:
- user_id, badge_id (many-to-many relationship)

### Reviews:
- review_id, user_id, event_id, vendor_id, rating, comment

### Payments:
- payment_id, vendor_id, booking_id, amount, status, date
