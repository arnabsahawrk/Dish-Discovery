import PropTypes from "prop-types";
import { CiClock1 } from "react-icons/ci";
import { AiOutlineFire } from "react-icons/ai";

const Dish = ({ Dish, handleCookData }) => {
  const {
    recipe_id,
    recipe_img,
    recipe_name,
    short_description,
    ingredients,
    preparing_time,
    calories,
  } = Dish;
  return (
    <div className="p-6 rounded-2xl border border-[#28282833] space-y-6">
      <img
        className="w-full object-cover rounded-2xl h-[200px]"
        src={recipe_img}
        alt={recipe_name}
      />
      <article className="border-b border-[#28282833] pb-4 space-y-3">
        <h2 className="text-xl text-[#282828] font-semibold">{recipe_name}</h2>
        <p className="text-[#878787]">{short_description}</p>
      </article>
      <div className="border-b border-[#28282833] pb-4 space-y-3">
        <h3 className="text-lg text-[#282828] font-medium">
          Ingredients: {ingredients.length}
        </h3>
        <ul className="text-[#878787] text-sm space-y-1 list-disc ml-4 lg:grid lg:grid-cols-2">
          {ingredients.map((ingredient, idx) => (
            <li key={idx}>{ingredient}</li>
          ))}
        </ul>
      </div>
      <ul className="flex justify-between items-center text-[#282828CC]">
        <li className="flex items-center gap-2">
          <CiClock1 /> {preparing_time} minutes
        </li>
        <li className="flex items-center gap-2">
          <AiOutlineFire /> {calories} calories
        </li>
      </ul>
      <button
        onClick={() =>
          handleCookData({ recipe_id, recipe_name, preparing_time, calories })
        }
        type="button"
        className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        Want to Cook
      </button>
    </div>
  );
};

Dish.propTypes = {
  Dish: PropTypes.object.isRequired,
  handleCookData: PropTypes.func.isRequired,
};

export default Dish;
