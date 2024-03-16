import Items from "./Items/Items";

const FirstSection = () => {
  return (
    <section className="mt-10 md:mt-12 lg:mt-16">
      <article className="text-center space-y-2 md:space-y-3">
        <h1 className="font-semibold text-3xl md:text-[40px]">Our Dishes</h1>
        <p className="max-w-[873px] mx-auto text-[#150B2B] text-sm md:text-lg">
          A tantalizing array of culinary delights awaits you. From savory mains
          to delectable desserts, indulge in an unforgettable dining experience.
        </p>
      </article>
      <Items />
    </section>
  );
};

export default FirstSection;
