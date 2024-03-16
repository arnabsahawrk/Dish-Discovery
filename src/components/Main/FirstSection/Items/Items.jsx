import Dishes from "./Dishes/Dishes";
import Selected from "./Selected/Selected";

const Items = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row gap-6 mt-5 md:mt-10">
      <Dishes />
      <Selected />
    </div>
  );
};

export default Items;
