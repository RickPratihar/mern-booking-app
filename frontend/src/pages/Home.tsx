import { useQuery } from "react-query";
import * as apiClient from "../api-client";
import LatestDestinationCard from "../components/LastestDestinationCard";
import OfferSection from "../components/OfferSection";
import Blog from "../components/blog/blog";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import Testimonials from "../components/Testimonials";

const Home = () => {
  const { data: hotels } = useQuery("fetchQuery", () =>
    apiClient.fetchHotels()
  );

  const topRowHotels = hotels?.slice(0, 2) || [];
  const bottomRowHotels = hotels?.slice(2) || [];

  return (
    <div className="space-y-3"> 
      <OfferSection/>
      <Blog/>
      <h2 className="text-3xl font-bold">Latest Destinations</h2>
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