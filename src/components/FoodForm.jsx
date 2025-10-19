import React, { useState } from "react";
import axios from "axios";

const FoodForm = () => {
  const [formData, setFormData] = useState({
    name: "", quantity: "", unit: "", price: "", expiry_date: ""
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios.post("http://localhost:5000/api/food/add", formData)
      .then(res => alert("Food Added!"))
      .catch(err => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow max-w-md">
      <input type="text" name="name" placeholder="Food Name" onChange={handleChange} className="border p-2 w-full mb-2"/>
      <input type="number" name="quantity" placeholder="Quantity" onChange={handleChange} className="border p-2 w-full mb-2"/>
      <input type="text" name="unit" placeholder="Unit (kg/liters/pieces)" onChange={handleChange} className="border p-2 w-full mb-2"/>
      <input type="number" name="price" placeholder="Price" onChange={handleChange} className="border p-2 w-full mb-2"/>
      <input type="date" name="expiry_date" onChange={handleChange} className="border p-2 w-full mb-2"/>
      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Add Food</button>
    </form>
  );
};

export default FoodForm;
