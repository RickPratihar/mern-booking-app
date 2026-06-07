import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "../assets/offersImg/pic1.png";
import img2 from "../assets/offersImg/pic2.jpeg";
import img3 from "../assets/offersImg/pic3.jpeg";
import img4 from "../assets/offersImg/pic4.jpeg";

const OfferSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 800,
    swipeToSlide: true,
    autoplaySpeed: 3000,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const offers = [
    {
      title: "Fly away to your dream holiday",
      desc: "Get inspired, compare and book flights with more flexibility.",
      btnText: "Search flights",
      image: img1,
      tag: "Limited Time",
      bgColor: "from-blue-500 to-indigo-600",
    },
    {
      title: "Cozy cabins waiting for you",
      desc: "Experience nature up close in our handpicked rustic cabins.",
      btnText: "Explore cabins",
      image: img2,
      tag: "Seasonal",
      bgColor: "from-emerald-500 to-teal-600",
    },
    {
      title: "Escape for the weekend",
      desc: "Save 15% or more when you book weekend getaways today.",
      btnText: "Find deals",
      image: img3,
      tag: "Weekend Promo",
      bgColor: "from-purple-500 to-indigo-600",
    },
    {
      title: "Luxury staycation deals",
      desc: "Indulge in 5-star comfort right in your backyard.",
      btnText: "View luxury",
      image: img4,
      tag: "Exclusive",
      bgColor: "from-rose-500 to-pink-600",
    },
  ];

  return (
    <div className="py-10">
      <div className="mb-8 p-5 md:p-0">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
          Exclusive Offers
        </h2>
        <p className="text-sm text-slate-500 mt-1">Promotions, deals, and special offers curated just for you</p>
      </div>

      <Slider {...settings} className="offer-slider -mx-3">
        {offers.map((offer, index) => (
          <div key={index} className="px-3 pb-6">
            <div className="group relative overflow-hidden rounded-2xl bg-white border border-slate-100 shadow-[0_4px_25px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_35px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300 flex flex-col md:flex-row items-center gap-6 p-6 h-full md:h-[220px]">
              <div className="flex-1 flex flex-col items-start text-left">

                <h3 className="text-lg font-bold text-slate-800 tracking-tight mb-2 leading-snug group-hover:text-blue-600 transition-colors duration-200">
                  {offer.title}
                </h3>
                <p className="text-xs text-slate-500 mb-4 leading-relaxed max-w-[24ch] md:max-w-none">
                  {offer.desc}
                </p>
                <button className={`mt-auto text-xs font-bold text-white bg-gradient-to-r ${offer.bgColor} hover:opacity-90 px-4 py-2.5 rounded-xl shadow-md transition-all duration-300`}>
                  {offer.btnText}
                </button>
              </div>

              <div className="w-[140px] h-[140px] md:w-[150px] md:h-[150px] shrink-0 overflow-hidden rounded-xl bg-slate-100">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default OfferSection;
