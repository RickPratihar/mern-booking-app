import { useState, useEffect } from "react";
import classNames from "classnames";

const DiscountPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Open the popup automatically after 2 seconds
    const timeout = setTimeout(() => {
      setIsOpen(true);
    }, 3000);

    // Clean up the timeout to prevent memory leaks
    return () => clearTimeout(timeout);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div
      className={classNames(
        "fixed inset-0 flex md:justify-center items-center bg-gray-900 bg-opacity-50 z-[9999] ",
        {
          hidden: !isOpen,
        }
      )}
    >
      <img
        className="rounded-tl-lg rounded-bl-lg w-[30%] h-[25%] md:w-[25%] md:h-[43.5%]"
        src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/169124345.jpg?k=d4cfda0944783ff4dbcf081725203598e8e54871b44e057c569712795acffdd5&o=&hp=1"
        alt=""
      />
      <div className="bg-white p-6 md:p-8 rounded-tr-lg rounded-br-lg w-[60%] h-[25%] md:w-[18%] md:h-[43.5%]">
        <i
          className="fa-solid fa-xmark ml-[48%] top-[37%] md:ml-[14.5%] md:top-[28.2%] absolute text-3xl cursor-pointer"
          onClick={handleClose}
        ></i>
        <h2 className="text-2xl font-bold mb-2 md:4">Special Discount!</h2>
        <p className="text-lg mb-2 md:mb-4">Get 20% off on your next Booking.</p>

        <button className="relative md:mt-14 ml-10">
          <div className="absolute -inset-5">
            <div className="w-full h-full max-w-sm mx-auto lg:mx-0 opacity-30 blur-lg bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600"></div>
          </div>
          <a
            href="#"
            title=""
            className="relative z-10 inline-flex items-center justify-center w-full px-6 py-2 md:px-8 md:py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 border-2 border-transparent sm:w-auto rounded-xl font-pj hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            role="button"
          >
            Book Now 
          </a>
        </button>
      </div>
    </div>
  );
};

export default DiscountPopup;
