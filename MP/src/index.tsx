import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ActivityDetailsPage from './pages/ActivityDetailsPage';
import VendorProfilePage from './pages/VendorProfilePage';
import UserDashboard from './pages/UserDashboard';
import VendorDashboard from './pages/VendorDashboard';
import AdminDashboard from './pages/AdminDashboard';
import EventCreationForm from './components/EventCreationForm';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/activity/:id" component={ActivityDetailsPage} />
      <Route path="/vendor/:id" component={VendorProfilePage} />
      <Route path="/user/dashboard" component={UserDashboard} />
      <Route path="/vendor/dashboard" component={VendorDashboard} />
      <Route path="/admin/dashboard" component={AdminDashboard} />
      <Route path="/vendor/event/create" component={EventCreationForm} />
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/contact" component={ContactPage} />
      {/* Add other routes here */}
    </Switch>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));
