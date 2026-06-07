import { useQuery } from "react-query";
import * as apiClient from "../api-client";
import LatestDestinationCard from "../components/LastestDestinationCard";
import OfferSection from "../components/OfferSection";
import Blog from "../components/blog/blog";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import Testimonials from "../components/Testimonials";
import MostPopularHotels from "../components/MostPopularHotels/MostPopularHotels";


const Home = () => {
  const { data: hotels } = useQuery("fetchQuery", () =>
    apiClient.fetchHotels()
  );

  const topRowHotels = hotels?.slice(0, 2) || [];
  const bottomRowHotels = hotels?.slice(2) || [];

  return (
    <div className="space-y-6"> 
      <OfferSection/>
      <Blog/>
      <div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">Most Popular Hotels</h2>
        <p className="text-sm text-slate-500 mt-1 mb-4">Our most popular hotels, loved by most of our guests.</p>
        <MostPopularHotels hotels={hotels || []} limit={4} />
      </div>
      <div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">Latest Destinations</h2>
        <p className="text-sm text-slate-500 mt-1 mb-4">Most recent destinations added by our hosts</p>
        <div className="grid gap-4">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            {topRowHotels.map((hotel) => (
              <LatestDestinationCard hotel={hotel} key={hotel._id} />
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {bottomRowHotels.map((hotel) => (
              <LatestDestinationCard hotel={hotel} key={hotel._id} />
            ))}
          </div>
        </div>
      </div>
      <Testimonials/>
      <ScrollToTop/>
    </div>
  );
};

export default Home;