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
          <button className="sm:py-2 md:py-3 px-2 rounded font-medium text-white hover:bg-[#165fb3] bg-[#006CE4] ">Explore holiday rentals</button>
          </div>

      </div>
  );
};

export default Hero;
