import { FormEvent, useState } from "react";
import { useSearchContext } from "../contexts/SearchContext";
import { MdTravelExplore } from "react-icons/md";
import { FaCalendarAlt, FaUsers } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();
  const search = useSearchContext();

  const [destination, setDestination] = useState<string>(search.destination);
  const [checkIn, setCheckIn] = useState<Date>(search.checkIn);
  const [checkOut, setCheckOut] = useState<Date>(search.checkOut);
  const [adultCount, setAdultCount] = useState<number>(search.adultCount);
  const [childCount, setChildCount] = useState<number>(search.childCount);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    search.saveSearchValues(
      destination,
      checkIn,
      checkOut,
      adultCount,
      childCount
    );
    navigate("/search");
  };

  const handleClear = () => {
    setDestination("");
    const today = new Date();
    setCheckIn(today);
    setCheckOut(today);
    setAdultCount(1);
    setChildCount(0);
    search.saveSearchValues("", today, today, 1, 0);
  };

  const minDate = new Date();
  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() + 1);

  return (
    <form
      onSubmit={handleSubmit}
      className="-mt-14 p-4 md:p-6 bg-white/95 backdrop-blur-md rounded-2xl md:rounded-3xl border border-slate-200/50 shadow-[0_20px_50px_rgba(0,0,0,0.12)] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 items-stretch gap-4 relative z-30"
    >
      {/* Destination Field */}
      <div className="flex flex-col gap-1.5 border border-slate-200 hover:border-blue-500 rounded-xl p-3 bg-white transition-all duration-300">
        <span className="text-xs font-bold text-slate-500 flex items-center gap-1.5 uppercase tracking-wider">
          <MdTravelExplore size={16} className="text-blue-500" /> Location
        </span>
        <input
          placeholder="Where are you going?"
          className="text-sm md:text-base font-semibold text-slate-800 placeholder-slate-400 focus:outline-none w-full mt-1 bg-transparent"
          value={destination}
          onChange={(event) => setDestination(event.target.value)}
        />
      </div>

      {/* Guests Field */}
      <div className="flex flex-col gap-1.5 border border-slate-200 hover:border-blue-500 rounded-xl p-3 bg-white transition-all duration-300">
        <span className="text-xs font-bold text-slate-500 flex items-center gap-1.5 uppercase tracking-wider">
          <FaUsers size={16} className="text-blue-500" /> Guests
        </span>
        <div className="flex items-center gap-3 mt-1.5">
          <label className="text-xs font-semibold text-slate-600 flex items-center gap-1 flex-1">
            Adults
            <input
              className="w-12 text-sm font-bold text-slate-800 border border-slate-100 rounded p-0.5 focus:outline-none text-center bg-slate-50"
              type="number"
              min={1}
              max={20}
              value={adultCount}
              onChange={(event) => setAdultCount(parseInt(event.target.value) || 1)}
            />
          </label>
          <label className="text-xs font-semibold text-slate-600 flex items-center gap-1 flex-1">
            Kids
            <input
              className="w-12 text-sm font-bold text-slate-800 border border-slate-100 rounded p-0.5 focus:outline-none text-center bg-slate-50"
              type="number"
              min={0}
              max={20}
              value={childCount}
              onChange={(event) => setChildCount(parseInt(event.target.value) || 0)}
            />
          </label>
        </div>
      </div>

      {/* Check-in Field */}
      <div className="flex flex-col gap-1.5 border border-slate-200 hover:border-blue-500 rounded-xl p-3 bg-white transition-all duration-300">
        <span className="text-xs font-bold text-slate-500 flex items-center gap-1.5 uppercase tracking-wider">
          <FaCalendarAlt size={14} className="text-blue-500" /> Check-in
        </span>
        <DatePicker
          selected={checkIn}
          onChange={(date) => setCheckIn(date as Date)}
          selectsStart
          startDate={checkIn}
          endDate={checkOut}
          minDate={minDate}
          maxDate={maxDate}
          placeholderText="Check-in Date"
          className="text-sm md:text-base font-semibold text-slate-800 placeholder-slate-400 focus:outline-none w-full mt-1 bg-transparent"
          wrapperClassName="w-full"
        />
      </div>

      {/* Check-out Field */}
      <div className="flex flex-col gap-1.5 border border-slate-200 hover:border-blue-500 rounded-xl p-3 bg-white transition-all duration-300">
        <span className="text-xs font-bold text-slate-500 flex items-center gap-1.5 uppercase tracking-wider">
          <FaCalendarAlt size={14} className="text-blue-500" /> Check-out
        </span>
        <DatePicker
          selected={checkOut}
          onChange={(date) => setCheckOut(date as Date)}
          selectsStart
          startDate={checkIn}
          endDate={checkOut}
          minDate={minDate}
          maxDate={maxDate}
          placeholderText="Check-out Date"
          className="text-sm md:text-base font-semibold text-slate-800 placeholder-slate-400 focus:outline-none w-full mt-1 bg-transparent"
          wrapperClassName="w-full"
        />
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2.5 items-stretch mt-2 md:mt-0">
        <button
          type="submit"
          className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold rounded-xl shadow-lg hover:shadow-blue-500/20 transform hover:-translate-y-0.5 transition-all duration-300 text-base"
        >
          Search
        </button>
        <button
          type="button"
          onClick={handleClear}
          className="px-4 bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold rounded-xl border border-slate-200/60 transform hover:-translate-y-0.5 transition-all duration-300 text-base"
        >
          Clear
        </button>
      </div>
    </form>
  );
};

export default SearchBar;