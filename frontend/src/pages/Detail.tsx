import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import * as apiClient from "./../api-client";
import { AiFillStar } from "react-icons/ai";
import GuestInfoForm from "../forms/GuestInfoForm/GuestInfoForm";
import ReviewSection from "../components/Review/ReviewSection";

const Detail = () => {
  const { hotelId } = useParams();

  const { data: hotel } = useQuery(
    "fetchHotelById",
    () => apiClient.fetchHotelById(hotelId || ""),
    {
      enabled: !!hotelId,
    }
  );

  if (!hotel) {
    return <></>;
  }

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <span className="flex">
            {Array.from({ length: hotel.starRating }).map((_, idx) => (
              <AiFillStar key={idx} className="fill-yellow-400 text-xl" />
            ))}
          </span>
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider bg-slate-100 px-3 py-1 rounded-full">
            {hotel.type}
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight">{hotel.name}</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {hotel.imageUrls.map((image, idx) => (
          <div key={idx} className="h-[300px] rounded-2xl overflow-hidden shadow-sm">
            <img
              src={image}
              alt={hotel.name}
              className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        {hotel.facilities.map((facility, idx) => (
          <div key={idx} className="bg-slate-50 border border-slate-200 text-slate-700 font-semibold px-4 py-2 rounded-xl text-sm shadow-sm">
            {facility}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10">
        <div className="whitespace-pre-line text-slate-600 leading-relaxed text-lg">
          {hotel.description}
        </div>
        <div className="h-fit lg:sticky lg:top-6">
          <GuestInfoForm
            pricePerNight={hotel.pricePerNight}
            hotelId={hotel._id}
          />
        </div>
      </div>
      
      <div className="pt-8 border-t border-slate-100">
        <ReviewSection />
      </div>
    </div>
  );
};

export default Detail;