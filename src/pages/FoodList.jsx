import React, { useEffect, useState } from "react";
import axios from "axios";
import FoodCard from "../components/FoodCard";

const FoodList = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/food/available")
      .then(res => setFoods(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Available Food Items</h1>
      <div className="flex flex-wrap">
        {foods.map(food => <FoodCard key={food.food_id} food={food} />)}
      </div>
    </div>
  );
};

export default FoodList;
