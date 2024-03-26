import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./OfferSection.css"
import img1 from "../assets/offersImg/pic1.png";
import img2 from "../assets/offersImg/pic2.jpeg";
import img3 from "../assets/offersImg/pic3.jpeg";
import img4 from "../assets/offersImg/pic4.jpeg";
const OfferSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="offer-heading">
        <h1 className="font-bold">Offers</h1>
        <p>Promotions, deals and special offers for you</p>
      </div>
      <Slider {...settings} className="slider">
        <div className="testimonial">
          <div className="offer">
            <div className="offer-content1 ">
              <h2 className="text-xl font-bold pb-2">Fly away to your dream holiday</h2>
              <p className="text-base pb-2">
                Get inspired, compare and book flights with more flexibility
              </p>
              <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 hover:bg-blue-500 text-md">
                Search for flights
              </button>
            </div>
            <img src={img1} alt="" className=" img1" />
          </div>
        </div>

        <div className="testimonial  ">
          <div className="offer">
            <div className="offer-content1">
              <h2 className="text-xl font-bold pb-2">Fly away to your dream holiday</h2>
              <p className="text-base pb-2">
                Get inspired, compare and book flights with more flexibility
              </p>
              <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 hover:bg-blue-500 text-md">
                Search for flights
              </button>
            </div>
            <img src={img2} alt="" className="img1" />
          </div>
        </div>

        <div className="testimonial tes1">
          <div className="offer1">
            <div className="offer-content px-4">
              <h2 className="text-white  pb-2">Fly away to your dream holiday</h2>
              <p className="text-white  pb-2">
                Get inspired, compare and book flights with more flexibility
              </p>
              <button className=" text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 hover:bg-blue-500 text-md">
                Search for flights
              </button>
            </div>
            <img src={img3} alt="" className="offer-imgs" />
          </div>
        </div>

        <div className="testimonial tes1">
          <div className="offer1">
            <div className="offer-content px-4">
              <h2 className="text-white pb-2">Fly away to your dream holiday</h2>
              <p className="text-white pb-2">
                Get inspired, compare and book flights with more flexibility
              </p>
              <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 hover:bg-blue-500 text-md">
                Search for flights
              </button>
            </div>
            <img src={img4} alt="" className="offer-imgs" />
          </div>
        </div>
      </Slider>
    </>
  );
};

export default OfferSection;
