import { Link } from "react-router-dom";
import { HotelType } from "../../../../backend/src/shared/types";

type Props = {
  hotels: HotelType[]; // Change to array of hotels
  limit: number; // Limit the number of hotels to display
};

const MostPopularHotels = ({ hotels, limit }: Props) => {
  // Slice the hotels array to only include the first 'limit' number of hotels
  const popularHotels = hotels.slice(0, limit);

  return (
    <div className="flex overflow-x-auto gap-5"> {/* Apply flex and horizontal overflow */}
    {popularHotels.map((hotel) => (
      <Link
        key={hotel._id}
        to={`/detail/${hotel._id}`}
        className="relative cursor-pointer overflow-hidden rounded-md m-5 md:m-0 flex-none" 
        style={{ minWidth: "300px" }} 
      >
        <div className="h-[300px]">
          <img
            src={hotel.imageUrls[0]}
            alt={hotel.name} // Add alt attribute for accessibility
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="absolute bottom-0 p-4 bg-black bg-opacity-50 w-full rounded-b-md">
          <span className="text-white font-bold tracking-tight text-2xl">
            {hotel.name}
          </span>
        </div>
      </Link>
    ))}
  </div>
  );
};

export default MostPopularHotels;
