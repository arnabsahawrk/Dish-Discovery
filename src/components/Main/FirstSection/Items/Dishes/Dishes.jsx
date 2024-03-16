import { useEffect, useState } from "react";
import Dish from "./Dish";
import PropTypes from "prop-types";

const Dishes = ({ handleCookData }) => {
  const [dishes, setDishes] = useState([]);
  //Data Load
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("recipes.json");
        if (!response.ok) {
          throw new Error(`Http error: ${response.status}`);
        }
        const data = await response.json();
        setDishes(data);
      } catch (error) {
        console.error(`Failed to fetch data: ${error}`);
      }
    };
    fetchData();
  }, []);

  //JSX
  return (
    <div className="grid grid-cols-1  md:grid-cols-2 gap-6">
      {dishes.map((dish) => (
        <Dish
          key={dish.recipe_id}
          Dish={dish}
          handleCookData={handleCookData}
        ></Dish>
      ))}
    </div>
  );
};

Dishes.propTypes = {
  handleCookData: PropTypes.func.isRequired,
};

export default Dishes;
