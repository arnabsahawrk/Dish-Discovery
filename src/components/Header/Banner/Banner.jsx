const Banner = () => {
  return (
    <section className="bg-[url('https://i.ibb.co/w0Y4XB5/2151089067.jpg')] bg-no-repeat bg-cover bg-center rounded-3xl h-96 md:h-[600px]">
      <div
        className="size-full rounded-3xl flex justify-center items-center flex-col text-center space-y-6 md:space-y-8 px-4"
        style={{
          backgroundImage:
            "linear-gradient(30deg, rgba(21, 11, 43, 0.90) 30%, rgba(21, 11, 43, 0.00) 100%)",
        }}
      >
        <article className="text-white space-y-4 md:space-y-6">
          <h1 className="text-2xl md:text-[52px] font-bold leading-normal">
            Unlock Your Culinary Creativity Here
          </h1>
          <p className="text-base md:text-lg max-w-[800px] mx-auto">
            Explore personalized cooking classes for all levels. Unleash your
            culinary potential with immersive experiences tailored just for you.
          </p>
        </article>
        <div>
          <button
            type="button"
            className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Explore Now
          </button>
          <button
            type="button"
            className="text-white  border border-white hover:bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:border-green-600 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Our Feedback
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
