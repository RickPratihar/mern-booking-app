import { Link } from "react-router-dom";
import { HotelType } from "../../../../backend/src/shared/types";
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";

type Props = {
  hotels: HotelType[];
  limit: number;
};

const MostPopularHotels = ({ hotels, limit }: Props) => {
  const popularHotels = hotels.slice(0, limit);

  return (
    <div className="flex overflow-x-auto gap-6 pb-6 pt-2 scrollbar-thin scrollbar-thumb-slate-200">
      {popularHotels.map((hotel) => (
        <Link
          key={hotel._id}
          to={`/detail/${hotel._id}`}
          className="group relative cursor-pointer overflow-hidden rounded-2xl bg-white border border-slate-100 shadow-[0_4px_25px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_35px_rgba(0,0,0,0.12)] hover:-translate-y-1.5 transition-all duration-300 flex-none flex flex-col"
          style={{ width: "320px" }}
        >
          <div className="relative overflow-hidden h-[200px] w-full">
            {/* Hover zoom image */}
            <img
              src={hotel.imageUrls[0]}
              alt={hotel.name}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            
            {/* Floating Category tag */}
            {hotel.type && (
              <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-slate-800 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm">
                {hotel.type}
              </span>
            )}

            {/* Floating Price tag */}
            <span className="absolute bottom-3 right-3 bg-blue-600/90 backdrop-blur-sm text-white text-xs font-extrabold px-3 py-1.5 rounded-lg shadow-md">
              ${hotel.pricePerNight} <span className="text-[10px] font-normal text-slate-200">/ night</span>
            </span>
          </div>

          <div className="p-5 flex flex-col flex-1 gap-2 bg-white rounded-b-2xl">
            {/* Location */}
            <div className="flex items-center gap-1 text-slate-400 text-xs font-semibold">
              <FaMapMarkerAlt className="text-blue-500 shrink-0" size={12} />
              <span className="line-clamp-1">{hotel.city}, {hotel.country}</span>
            </div>

            {/* Name */}
            <h3 className="text-base font-bold text-slate-800 tracking-tight group-hover:text-blue-600 transition-colors duration-200 line-clamp-1 mt-0.5">
              {hotel.name}
            </h3>

            {/* Star Rating */}
            <div className="flex items-center gap-1.5 mt-1">
              <div className="flex text-amber-400 gap-0.5">
                {Array.from({ length: hotel.starRating }).map((_, i) => (
                  <FaStar key={i} size={11} />
                ))}
              </div>
              <span className="text-[11px] font-bold text-slate-500 mt-0.5">
                {hotel.starRating.toFixed(1)}
              </span>
            </div>

            {/* Description Teaser */}
            <p className="text-xs text-slate-500 leading-relaxed line-clamp-2 mt-2">
              {hotel.description}
            </p>

            {/* View Details Text link */}
            <div className="mt-4 pt-3 border-t border-slate-50 flex items-center justify-between text-xs font-bold text-blue-600 group-hover:text-blue-700">
              <span>View Details</span>
              <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-200">→</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MostPopularHotels;
