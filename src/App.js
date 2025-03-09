import React from "react";
import { BrowserRouter as Router, Route, Routes ,Link} from "react-router-dom";
import Home from "./pages/Home";
import DonorLogin from "./pages/DonorLogin";
import DonorSignup from "./pages/DonorSignup";
import DonorHome from "./pages/DonorHome";
import PostFood from "./pages/PostFood";
import TrackDonation from "./pages/TrackDonation";
import ViewDonationHistory from "./pages/ViewDonationHistory";
import UpdateReceiverProfile from "./pages/UpdateReceiverProfile";
import UpdateDonorProfile from "./pages/UpdateDonorProfile";
import ReceiverLogin from "./pages/ReceiverLogin";
import ReceiverSignup from "./pages/ReceiverSignup";
import ReceiverHome from "./pages/ReceiverHome";
import ViewAvailableDonations from "./pages/ViewAvailableDonations";
import ViewAllDonations from "./pages/ViewAllDonations";
import ReceivedDonations from "./pages/ReceivedDonations";
import ContactUs from "./pages/ContactUs";
import About from "./pages/About";
import ReceiverFeedbackPage from "./pages/ReceiverFeedbackPage";
import "./App.css";

function App() {
  return (
    <Router>
      <header className="header">
        <h1>Excess Food Donation System</h1>
        <nav>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/contact-us" className="nav-link">Contact Us</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<ContactUs />} />
        {/* Donor Routes */}
        <Route path="/donor-login" element={<DonorLogin />} />
        <Route path="/donor-signup" element={<DonorSignup />} />
        <Route path="/donor-home" element={<DonorHome />} />
        <Route path="/post-food" element={<PostFood />} />
        <Route path="/track-donation" element={<TrackDonation />} />
        <Route path="/donation-history" element={<ViewDonationHistory />} />
        <Route path="/all-donations" element={<ViewAllDonations />} />
        <Route path="/update-donorprofile" element={<UpdateDonorProfile />} />
        {/* Receiver Routes */}
        <Route path="/receiver-login" element={<ReceiverLogin />} />
        <Route path="/receiver-signup" element={<ReceiverSignup />} />
        <Route path="/receiver-home" element={<ReceiverHome />} />
        <Route path="/view-available-donations" element={<ViewAvailableDonations />} />
        <Route path="/received-donations" element={<ReceivedDonations />} />
        <Route path="/update-receiverprofile" element={<UpdateReceiverProfile />} />
        <Route path="/receiver-feedback" element={<ReceiverFeedbackPage />} />
      </Routes>
      <footer className="footer">
        <p>© 2025 Excess Food Donation Plan. All rights reserved.</p>
      </footer>
    </Router>
  );
}

export default App;
