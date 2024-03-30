import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import blogData from "../../data/blogData";

const BlogPage: React.FC = () => {
  return (
    <>
      <Header />
      <div className="flex justify-center items-center">
        <div className="2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 px-4 w-96 sm:w-auto">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl font-semibold leading-9 text-center text-gray-800">
              This Week Blogs
            </h1>
            <p className="text-base leading-normal text-center text-gray-600 mt-4 lg:w-1/2 md:w-10/12 w-11/12">
              If you're looking for random paragraphs, you've come to the right
              place. When a random word or a random sentence isn't quite enough
            </p>
          </div>
          {blogData.map((item, index) => (
            <div key={index} className="mt-12">
              <p className="p-6 text-xs font-medium leading-3 text-white bg-gray-800 absolute top-0 right-0">
                {item.date}
              </p>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img
                  src={item.imgUrl}
                  className="w-full h-56 object-cover object-center"
                  alt={item.title}
                />
                <div className="p-6">
                  <Link to={`/blogDetails/${item.id}`}>
                    <h2 className="text-xl font-semibold text-gray-800  hover:text-red-700 hover:underline">
                      {item.title}
                    </h2>
                  </Link>
                  <p className="text-base leading-6 text-gray-600 mt-2">
                    {item.description}
                  </p>
                  <div className="flex items-center mt-4 cursor-pointer text-gray-800 hover:text-gray-600 hover:underline">
                    <Link to={`/blogDetails/${item.id}`}>
                      <p className="pr-2 text-sm font-medium leading-none hover:text-red-700">
                        Read More
                      </p>
                    </Link>
                    <svg
                      className="fill-current text-gray-800 w-4 h-4"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.29289 16.2929C8.68342 16.6834 9.31658 16.6834 9.70711 16.2929L14.7071 11.2929C15.0976 10.9024 15.0976 10.2692 14.7071 9.87868C14.3166 9.48815 13.6834 9.48815 13.2929 9.87868L9 14.1716L4.70711 9.87868C4.31658 9.48815 3.68342 9.48815 3.29289 9.87868C2.90237 10.2692 2.90237 10.9024 3.29289 11.2929L8.29289 16.2929ZM8 19C8.55228 19 9 18.5523 9 18C9 17.4477 8.55228 17 8 17C7.44772 17 7 17.4477 7 18C7 18.5523 7.44772 19 8 19Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogPage;
