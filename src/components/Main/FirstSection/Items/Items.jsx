import { useState } from "react";
import Dishes from "./Dishes/Dishes";
import Selected from "./Selected/Selected";

const Items = () => {
  const [cookData, setCookData] = useState([]);
  const [prepareData, setPrepareData] = useState([]);

  //Event Handle
  function handleCookData(obj) {
    setCookData([...cookData, obj]);
  }

  function handlePrepareData(obj) {
    setPrepareData([...prepareData, obj]);
  }
  return (
    <div className="flex flex-col-reverse lg:flex-row gap-6 mt-5 md:mt-10">
      <Dishes handleCookData={handleCookData} />
      <Selected
        cookData={cookData}
        handlePrepareData={handlePrepareData}
        prepareData={prepareData}
      />
    </div>
  );
};

export default Items;
