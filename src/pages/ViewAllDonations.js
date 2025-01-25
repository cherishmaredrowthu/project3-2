import React, { useState, useEffect } from "react";
import "../styles/ViewAllDonations.css";

const ViewAllDonations = () => {
  const [donations, setDonations] = useState([]);
  const [search, setSearch] = useState("");

  // Simulated API data
  useEffect(() => {
    const fetchDonations = async () => {
      const data = [
        { id: 1, donor: "Alice", foodType: "Bread", quantity: "20kg", date: "2025-01-20" },
        { id: 2, donor: "Bob", foodType: "Rice", quantity: "50kg", date: "2025-01-22" },
        { id: 3, donor: "Charlie", foodType: "Fruits", quantity: "30kg", date: "2025-01-23" },
      ];
      setDonations(data);
    };

    fetchDonations();
  }, []);

  const filteredDonations = donations.filter((donation) =>
    donation.donor.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="donation-history">
      <h2>Donation History</h2>
      <input
        type="text"
        placeholder="Search by donor name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Donor</th>
            <th>Food Type</th>
            <th>Quantity</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {filteredDonations.length > 0 ? (
            filteredDonations.map((donation) => (
              <tr key={donation.id}>
                <td>{donation.id}</td>
                <td>{donation.donor}</td>
                <td>{donation.foodType}</td>
                <td>{donation.quantity}</td>
                <td>{donation.date}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No donations found.</td> {/* Ensure colSpan matches the number of columns */}
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ViewAllDonations;
