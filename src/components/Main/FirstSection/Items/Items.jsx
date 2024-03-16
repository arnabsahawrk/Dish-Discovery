import { useState } from "react";
import Dishes from "./Dishes/Dishes";
import Selected from "./Selected/Selected";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Items = () => {
  const [cookData, setCookData] = useState([]);
  const [prepareData, setPrepareData] = useState([]);
  const [totalTime, setTotalTime] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);

  //Event Handle
  function handleCookData(obj) {
    if (cookData.find((cook) => cook.recipe_id === obj.recipe_id))
      return toast.warn("You've already added the dish");
    setCookData([...cookData, obj]);
    toast.success(`The dish "${obj.recipe_name}" add for cook`);
  }

  function handlePrepareData(obj) {
    setCookData(cookData.filter((cook) => cook.recipe_id !== obj.recipe_id));
    setTotalTime(totalTime + obj.preparing_time);
    setTotalCalories(totalCalories + obj.calories);

    setPrepareData([...prepareData, obj]);
    toast.success(`The dish "${obj.recipe_name}" add for cooking`);
  }

  //JSX
  return (
    <div className="flex flex-col-reverse lg:flex-row gap-6 mt-5 md:mt-10">
      <Dishes handleCookData={handleCookData} />
      <Selected
        cookData={cookData}
        handlePrepareData={handlePrepareData}
        prepareData={prepareData}
        totalTime={totalTime}
        totalCalories={totalCalories}
      />

      <ToastContainer position="top-center" theme="colored" />
    </div>
  );
};

export default Items;
