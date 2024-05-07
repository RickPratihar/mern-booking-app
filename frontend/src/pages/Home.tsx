import { useQuery } from "react-query";
import * as apiClient from "../api-client";
import LatestDestinationCard from "../components/LastestDestinationCard";
import OfferSection from "../components/OfferSection";
import Blog from "../components/blog/blog";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import Testimonials from "../components/Testimonials";
import DiscountPopup from "../components/DiscountPopup/DiscountPopup";
import MostPopularHotels from "../components/MostPopularHotels/MostPopularHotels";


const Home = () => {
  const { data: hotels } = useQuery("fetchQuery", () =>
    apiClient.fetchHotels()
  );

  const topRowHotels = hotels?.slice(0, 2) || [];
  const bottomRowHotels = hotels?.slice(2) || [];

  return (
    <div className="space-y-3 "> 
      <OfferSection/>
      <Blog/>
      <DiscountPopup/>
      <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">Most Popular Hotels</h2>
      <p>Our most Popular Hotel Most Of the people love this hotel</p>
      <MostPopularHotels hotels={hotels || []} limit={4} />
      <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">Latest Destinations</h2>
      <p>Most recent desinations added by our hosts</p>
      <div className="grid gap-4">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
          {topRowHotels.map((hotel) => (
            <LatestDestinationCard hotel={hotel} />
          ))}
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {bottomRowHotels.map((hotel) => (
            <LatestDestinationCard hotel={hotel} />
          ))}
        </div>
      </div>
      <Testimonials/>
      <ScrollToTop/>
    </div>
  );
};

export default Home;