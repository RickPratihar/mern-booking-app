import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Layout from "./layouts/Layout";
import Register from "./pages/Register";
import Signin from "./pages/Signin";
import AddHotel from "./pages/AddHotel";
import { useAppContext } from "./contexts/AppContext";
import MyHotels from "./pages/MyHotels";
import EditHotel from "./pages/EditHotel";
import Search from "./pages/Search";
import Detail from "./pages/Detail";
import Booking from "./pages/Booking";
import MyBookings from "./pages/MyBookings";
import Home from "./pages/Home"; 
import BlogDetails from "./pages/blogDetails/BlogDetsils";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import BlogPage from "./pages/blogpage/BlogPage";
import LocomotiveScroll from 'locomotive-scroll';

const App = () => {

const locomotiveScroll = new LocomotiveScroll();

  const { isLoggedIn } = useAppContext();
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home/>
            </Layout>
          }
        />
        <Route
          path="/search"
          element={
            <Layout>
              <Search/>
            </Layout>
          }
        />
        <Route
          path="/detail/:hotelId"
          element={
            <Layout>
              <Detail/>
            </Layout>
          }
        />
        <Route
          path="/blogDetails/:blogid"
          element={
            // <Layout>
              <BlogDetails/>
            // </Layout>
          }
        />
         <Route path="/about" element={<AboutUs />} />
         <Route path="/contact" element={<ContactUs/>} />
         <Route path="/blog" element={<BlogPage/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/sign-in" element={<Signin />} />

        {isLoggedIn && (
          <>
              <Route
              path="/hotel/:hotelId/booking"
              element={
                <Layout>
                  <Booking />
                </Layout>
              }
            />
            <Route
              path="/add-hotel"
              element={
                <Layout>
                  <AddHotel />
                </Layout>
              }
            />
            <Route
              path="/edit-hotel/:hotelId"
              element={
                <Layout>
                  <EditHotel />
                </Layout>
              }
            />
            
            <Route
              path="/my-hotel"
              element={
                <Layout>
                  <MyHotels />
                </Layout>
              }
            />
               <Route
              path="/my-bookings"
              element={
                <Layout>
                  <MyBookings />
                </Layout>
              }
            />
          </>
        )}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
