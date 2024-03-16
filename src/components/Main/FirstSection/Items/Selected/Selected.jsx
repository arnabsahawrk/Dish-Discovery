import PropTypes from "prop-types";
const Selected = ({ cookData, handlePrepareData, prepareData }) => {
  return (
    <div className="py-6 rounded-2xl border border-[#28282833] space-y-6 lg:w-[1000px] max-h-[668px] overflow-auto">
      <h2 className="text-2xl font-semibold text-[#282828] text-center">
        Want to cook: {cookData.length}
      </h2>
      <hr className="w-72 h-0.5 mx-auto my-4 bg-[#28282826] border-0 rounded md:my-10"></hr>
      <table
        className={`text-[#282828B3] ${
          cookData.length ? "visible" : "invisible"
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
          {cookData.map((cook, idx) => {
            return (
              <tr key={idx} className="*:p-3">
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
      <h2 className="text-2xl font-semibold text-[#282828] text-center">
        Currently cooking: {prepareData.length}
      </h2>
      <hr className="w-72 h-0.5 mx-auto my-4 bg-[#28282826] border-0 rounded md:my-10"></hr>
      <table
        className={`text-[#282828B3] ${
          prepareData.length ? "visible" : "invisible"
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
              <tr key={idx} className="*:p-3 border-b">
                <td>{idx + 1}</td>
                <td>{prepare.recipe_name}</td>
                <td>{prepare.preparing_time}</td>
                <td>{prepare.calories}</td>
              </tr>
            );
          })}
          <tr>
            <td></td>
            <td></td>
            <td>Total Time = 45 minutes</td>
            <td>Total Calories = 1050 calories</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

Selected.propTypes = {
  cookData: PropTypes.array.isRequired,
  handlePrepareData: PropTypes.func.isRequired,
  prepareData: PropTypes.array.isRequired,
};

export default Selected;
