import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/PostFood.css";

const PostFood = () => {
    const [foodItems, setFoodItems] = useState([{ name: "", quantity: "", expiry: "" }]);
    const [location, setLocation] = useState({ address: "", latitude: "", longitude: "" });
    const [contact, setContact] = useState({ name: "", phone: "" });
    const [message, setMessage] = useState("");

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(async (position) => {
                const { latitude, longitude } = position.coords;
                setLocation((prev) => ({ ...prev, latitude, longitude }));

                try {
                    const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);
                    const data = await response.json();
                    setLocation((prev) => ({ ...prev, address: data.display_name }));
                } catch (error) {
                    console.error("Error fetching address:", error);
                }
            });
        }
    }, []);

    const handleFoodChange = (index, event) => {
        const newFoodItems = [...foodItems];
        newFoodItems[index][event.target.name] = event.target.value;
        setFoodItems(newFoodItems);
    };

    const addFoodItem = () => {
        setFoodItems([...foodItems, { name: "", quantity: "", expiry: "" }]);
    };

    const removeFoodItem = (index) => {
        const newFoodItems = [...foodItems];
        newFoodItems.splice(index, 1);
        setFoodItems(newFoodItems);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const foodData = { foodItems, location, contact };

        try {
            const response = await axios.post("http://localhost:5000/api/food/post-food", foodData);
            setMessage(response.data.message);
            setFoodItems([{ name: "", quantity: "", expiry: "" }]);
            setContact({ name: "", phone: "" });
        } catch (error) {
            setMessage("Error posting food. Please try again.");
            console.error("Error:", error);
        }
    };

    return (
        <div>
            <h2>Post Food Details</h2>
            {message && <p className="message">{message}</p>}
            <form onSubmit={handleSubmit}>
                <h3>Food Items</h3>
                {foodItems.map((item, index) => (
                    <div key={index}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Food Name"
                            value={item.name}
                            onChange={(e) => handleFoodChange(index, e)}
                            required
                        />
                        <input
                            type="text"
                            name="quantity"
                            placeholder="Quantity"
                            value={item.quantity}
                            onChange={(e) => handleFoodChange(index, e)}
                            required
                        />
                        <input
                            type="datetime-local"
                            name="expiry"
                            value={item.expiry}
                            onChange={(e) => handleFoodChange(index, e)}
                            required
                        />
                        <button type="button" onClick={() => removeFoodItem(index)}>Remove</button>
                    </div>
                ))}
                <button type="button" onClick={addFoodItem}>Add More Food</button>

                <h3>Location Details</h3>
                <input type="text" value={location.address} placeholder="Fetching Address..." readOnly />

                <h3>Contact Details</h3>
                <input
                    type="text"
                    name="name"
                    placeholder="Contact Name"
                    value={contact.name}
                    onChange={(e) => setContact({ ...contact, name: e.target.value })}
                    required
                />
                <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    value={contact.phone}
                    onChange={(e) => setContact({ ...contact, phone: e.target.value })}
                    required
                />

                <button type="submit">Post Food</button>
            </form>
        </div>
    );
};

export default PostFood;
