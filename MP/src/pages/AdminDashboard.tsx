import React from 'react';
import AdminVendorList from '../components/AdminVendorList';
import AdminUserList from '../components/AdminUserList';
import AdminEventList from '../components/AdminEventList';
import AdminPayments from '../components/AdminPayments';
import AdminSettings from '../components/AdminSettings';

const AdminDashboard = () => {
  return (
    <div>
      <header>
        <h1>Admin Dashboard</h1>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/activities">Activities</a></li>
            <li><a href="/vendors">Vendors</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/login">Login/Register</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <AdminVendorList />
        <AdminUserList />
        <AdminEventList />
        <AdminPayments />
        <AdminSettings />
      </main>
      <footer>
        <p>About Us</p>
        <p>Contact</p>
        <p>Terms of Service</p>
        <p>Privacy Policy</p>
      </footer>
    </div>
  );
};

export default AdminDashboard;
