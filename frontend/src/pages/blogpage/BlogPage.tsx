import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import blogData from "../../data/blogData";

const BlogPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-800">
      <Header />
      <div className="flex-1 flex justify-center py-10">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="flex flex-col items-center justify-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-4 tracking-tight text-center">
              Our Travel Blog
            </h1>
            <p className="text-slate-500 text-lg text-center max-w-2xl">
              Discover stories, tips, and inspiration from our community of travelers and hosts around the world.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogData.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-slate-100 transition-all duration-300 group flex flex-col h-full relative">
                <div className="absolute top-4 right-4 z-10 bg-slate-900/80 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm">
                  {item.date}
                </div>
                <div className="overflow-hidden aspect-[4/3]">
                  <img
                    src={item.imgUrl}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    alt={item.title}
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <Link to={`/blogDetails/${item.id}`}>
                    <h2 className="text-xl font-bold text-slate-800 hover:text-blue-600 transition-colors mb-3 line-clamp-2">
                      {item.title}
                    </h2>
                  </Link>
                  <p className="text-sm leading-relaxed text-slate-600 mb-6 line-clamp-3">
                    {item.description}
                  </p>
                  <div className="mt-auto">
                    <Link to={`/blogDetails/${item.id}`} className="inline-flex items-center text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors group/link">
                      Read More
                      <svg
                        className="ml-2 w-4 h-4 transform group-hover/link:translate-x-1 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPage;
