import PropTypes from "prop-types";

const Selected = ({
  cookData,
  handlePrepareData,
  prepareData,
  totalTime,
  totalCalories,
}) => {
  return (
    <div className="py-6 rounded-2xl border border-[#28282833] space-y-6 lg:w-[1000px] max-h-[668px] overflow-auto">
      <h2 className="text-2xl font-semibold text-[#282828] text-center">
        Want to cook: {cookData.length}
      </h2>
      <hr className="w-72 h-0.5 mx-auto my-4 bg-[#28282826] border-0 rounded md:my-10"></hr>

      {/* Want To Cook Section  */}
      <table
        className={`text-[#282828B3] ${cookData.length ? "block" : "hidden"}`}
      >
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Time</th>
            <th>Calories</th>
          </tr>
        </thead>
        <tbody className="bg-[#F9F9F9] text-center">
          {cookData.map((cook, idx) => {
            return (
              <tr key={idx} className="*:p-2">
                <td>{idx + 1}</td>
                <td>{cook.recipe_name}</td>
                <td>{cook.preparing_time} minutes</td>
                <td>{cook.calories} calories</td>
                <td>
                  <button
                    onClick={() => handlePrepareData(cook)}
                    type="button"
                    className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:outline-none font-medium rounded-full text-xs px-4 py-2 text-center"
                  >
                    Preparing
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <h2
        className={`${
          cookData.length ? "hidden" : "block"
        } text-center text-3xl p-6`}
      >
        <img
          className="size-20 mx-auto"
          src="https://i.ibb.co/zbxkNkK/halo-halo.png"
        />
        You Have Not Selected Any Dish For Cook Yet
      </h2>
      <h2 className="text-2xl font-semibold text-[#282828] text-center">
        Currently cooking: {prepareData.length}
      </h2>
      <hr className="w-72 h-0.5 mx-auto my-4 bg-[#28282826] border-0 rounded md:my-10"></hr>

      {/* Currently Cooking Section  */}
      <table
        className={`text-[#282828B3] ${
          prepareData.length ? "block" : "hidden"
        }`}
      >
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Time</th>
            <th>Calories</th>
          </tr>
        </thead>
        <tbody className="bg-[#F9F9F9] text-center">
          {prepareData.map((prepare, idx) => {
            return (
              <tr key={idx} className="*:p-2 border-b border-b-[#28282826]">
                <td>{idx + 1}</td>
                <td>{prepare.recipe_name}</td>
                <td>{prepare.preparing_time}</td>
                <td>{prepare.calories}</td>
              </tr>
            );
          })}
          <tr className="text-sm">
            <td></td>
            <td></td>
            <td>Total Time = {totalTime} minutes</td>
            <td>Total Calories = {totalCalories} calories</td>
          </tr>
        </tbody>
      </table>
      <h2
        className={`${
          prepareData.length ? "hidden" : "block"
        } text-center text-3xl p-6`}
      >
        <img
          className="size-20 mx-auto"
          src="https://i.ibb.co/zbxkNkK/halo-halo.png"
        />
        Currently No Dish Is Cooking
      </h2>
    </div>
  );
};

Selected.propTypes = {
  cookData: PropTypes.array.isRequired,
  handlePrepareData: PropTypes.func.isRequired,
  prepareData: PropTypes.array.isRequired,
  totalTime: PropTypes.number.isRequired,
  totalCalories: PropTypes.number.isRequired,
};

export default Selected;
