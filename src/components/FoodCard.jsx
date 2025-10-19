import React from "react";

const FoodCard = ({ food }) => {
  return (
    <div className="border rounded-lg shadow p-4 m-2 w-64 bg-white">
      <h2 className="font-bold text-lg">{food.name}</h2>
      <p>Quantity: {food.quantity} {food.unit}</p>
      <p>Price: ₹{food.price}</p>
      <p>Expires on: {food.expiry_date}</p>
      <button className="mt-2 bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700">
        Claim
      </button>
    </div>
  );
};

export default FoodCard;
