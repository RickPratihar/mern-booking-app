import "../../src/style/hero.css"
const Hero = () => {
  return (
    <div className="hero-img ">
      
        <div className=" container mx-auto flex flex-col mt-10  ">
          <h1 className="sm:text-2xl md:text-5xl text-white font-bold w-[16ch] md:leading-normal  ">
            Wanderlust days and cozy nights
          </h1>
          <p className=" md:text-2xl text-white leading-normal ">
            Choose from cabins, houses and more
          </p>
        </div>
        <div className="container mx-auto mt-5">
          <button className="sm:py-2 md:py-3 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">Explore holiday rentals</button>
          </div>

      </div>
  );
};

export default Hero;
