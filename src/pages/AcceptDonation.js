import React from "react";
import { useLocation } from "react-router-dom";

const AcceptDonation = () => {
  const query = new URLSearchParams(useLocation().search);
  const status = query.get("status");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Donation Status</h2>
        {status === "success" ? (
          <p className="text-green-600 font-semibold">✅ Thank you! Your acceptance has been recorded.</p>
        ) : status === "alreadyAccepted" ? (
          <p className="text-yellow-600 font-semibold">⚠️ Sorry, this donation has already been accepted by another receiver.</p>
        ) : (
          <p className="text-red-600 font-semibold">❌ An error occurred. Please try again.</p>
        )}
        <a
          href="/"
          className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Go Back to Home
        </a>
      </div>
    </div>
  );
};

export default AcceptDonation;
