import { Link } from "react-router-dom";
import { HotelType } from "../../../backend/src/shared/types";
import { AiFillStar } from "react-icons/ai";
type Props = {
  hotel: HotelType;
};

const SearchResultsCard = ({ hotel }: Props) => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-[2fr_3fr] bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 rounded-2xl p-5 gap-6">
      <div className="w-full h-[250px] xl:h-[300px] rounded-xl overflow-hidden shrink-0">
        <img
          src={hotel.imageUrls[0]}
          className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
          alt={hotel.name}
        />
      </div>
      <div className="flex flex-col justify-between">
        <div>
          <div className="flex items-center mb-1">
            <span className="flex">
              {Array.from({ length: hotel.starRating }).map((_, idx) => (
                <AiFillStar key={idx} className="fill-yellow-400" />
              ))}
            </span>
            <span className="ml-2 text-xs font-bold text-slate-500 uppercase tracking-wider bg-slate-100 px-2 py-0.5 rounded-full">
              {hotel.type}
            </span>
          </div>
          <Link
            to={`/detail/${hotel._id}`}
            className="text-2xl font-extrabold text-slate-800 hover:text-blue-600 transition-colors cursor-pointer"
          >
            {hotel.name}
          </Link>
        </div>

        <div className="my-4">
          <p className="line-clamp-3 text-slate-600 text-sm leading-relaxed">
            {hotel.description}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mt-auto">
          <div className="flex flex-wrap gap-2 items-center">
            {hotel.facilities.slice(0, 3).map((facility, idx) => (
              <span key={idx} className="bg-slate-50 border border-slate-200 text-slate-600 px-3 py-1 rounded-lg font-semibold text-xs whitespace-nowrap">
                {facility}
              </span>
            ))}
            {hotel.facilities.length > 3 && (
              <span className="text-xs font-bold text-slate-400">
                +{hotel.facilities.length - 3} more
              </span>
            )}
          </div>
          <div className="flex flex-col items-start sm:items-end gap-2 w-full sm:w-auto">
            <span className="font-extrabold text-lg text-slate-800">
              ₹{hotel.pricePerNight} <span className="text-sm font-medium text-slate-500">/ night</span>
            </span>
            <Link
              to={`/detail/${hotel._id}`}
              className="w-full sm:w-auto px-6 py-2.5 font-bold text-white bg-blue-600 rounded-xl hover:bg-blue-700 shadow-md transition-all text-center"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResultsCard;