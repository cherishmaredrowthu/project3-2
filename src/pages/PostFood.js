import React, { useState } from "react";
import "../styles/PostFood.css"; // Your CSS file

const PostFood = () => {
  const [formData, setFormData] = useState({
    location: "",
    address: "",
    foodDetails: [{ type: "", count: "" }], // Initialize with one type of food
  });

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    if (name === "type" || name === "count") {
      const updatedFoodDetails = [...formData.foodDetails];
      updatedFoodDetails[index][name] = value;
      setFormData({ ...formData, foodDetails: updatedFoodDetails });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const addFoodDetail = () => {
    setFormData((prevData) => ({
      ...prevData,
      foodDetails: [...prevData.foodDetails, { type: "", count: "" }],
    }));
  };

  const removeFoodDetail = (index) => {
    const updatedFoodDetails = formData.foodDetails.filter((_, i) => i !== index);
    setFormData({ ...formData, foodDetails: updatedFoodDetails });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Add logic to send data to the backend here
  };

  const removeLocation = () => {
    setFormData((prevData) => ({ ...prevData, location: "" }));
  };

  return (
    <div className="form-wrapper">
      <div className="donor-form-container">
        <h2>Donate Surplus Food</h2>
        <form onSubmit={handleSubmit}>
          {/* Location Field */}
          <div className="form-group">
            <label htmlFor="location">Location:</label>
            <div className="location-wrapper">
              <input
                type="text"
                id="location"
                name="location"
                placeholder="Enter your city or area"
                value={formData.location}
                onChange={handleChange}
                required
              />
              {/* Remove Button for Location */}
              <button
                type="button"
                className="btn-remove"
                onClick={removeLocation}
                aria-label="Remove Location"
              >
                X
              </button>
            </div>
          </div>
          
          {/* Dynamic Food Details Section */}
          <div className="form-group">
            <label>Food Details:</label>
            {formData.foodDetails.map((foodDetail, index) => (
              <div key={index} className="food-detail-row">
                <input
                  type="text"
                  name="type"
                  placeholder="Type of food"
                  value={foodDetail.type}
                  onChange={(e) => handleChange(e, index)}
                  required
                />
                <input
                  type="number"
                  name="count"
                  placeholder="No. of persons"
                  value={foodDetail.count}
                  onChange={(e) => handleChange(e, index)}
                  required
                  min="1"
                />
                <button
                  type="button"
                  className="btn-remove"
                  onClick={() => removeFoodDetail(index)}
                  aria-label="Remove Food Detail"
                >
                  X
                </button>
              </div>
            ))}
            <button
              type="button"
              className="btn-add"
              onClick={addFoodDetail}
            >
              + Add Another Food Type
            </button>
          </div>

          {/* Submit and Reset Buttons */}
          <div className="form-buttons">
           <button type="submit" className="btn-submit"
          aria-label="Click to submit your food donation details">Submit</button>
               <button
              type="reset"
              className="btn-reset"
              onClick={() =>
                setFormData({
                  location: "",
                  address: "",
                  foodDetails: [{ type: "", count: "" }],
                })
              }
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostFood;