import "../../src/style/hero.css";

const Hero = () => {
  return (
    <div className="hero-img relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Blue tinted overlay for booking site look */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/60 to-black/30 z-10" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-20 flex flex-col items-center text-center max-w-4xl">
        <h1 className="text-4xl md:text-6xl text-white font-extrabold tracking-tight leading-tight md:leading-tight mb-6 max-w-3xl drop-shadow-md">
          Find your next stay
        </h1>
        <p className="text-lg md:text-2xl text-white/90 font-medium leading-relaxed max-w-2xl mb-8 drop-shadow">
          Search low prices on hotels, homes and much more...
        </p>
      </div>
    </div>
  );
};

export default Hero;
