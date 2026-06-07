import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import blogData from "../../data/blogData";

interface BlogItem {
  id: number;
  imgUrl: string;
  title: string;
  description: string;
  date: string;
}

const Blog: React.FC = () => {
  const [limitedData, setLimitedData] = useState<BlogItem[]>([]);

  useEffect(() => {
    setLimitedData(blogData.slice(0, 3));
  }, []);

  return (
    <div className="py-12">
      <div className="flex justify-between items-end mb-8 p-5 md:p-0">
        <div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
            Travel Inspiration
          </h2>
          <p className="text-sm text-slate-500 mt-1">Get inspiration and tips for your next adventure</p>
        </div>
        <Link
          to="/blog"
          className="text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors duration-200"
        >
          View More Articles &rarr;
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-5 md:p-0">
        {limitedData.map((item) => (
          <Link
            key={item.id}
            to={`/blogDetails/${item.id}`}
            className="group flex flex-col bg-white border border-slate-100/80 rounded-2xl overflow-hidden shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_35px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 h-full"
          >
            {/* Image section */}
            <div className="relative overflow-hidden h-[200px] w-full">
              <img
                src={item.imgUrl}
                alt={item.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-slate-800 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm">
                Inspiration
              </span>
            </div>

            {/* Content section */}
            <div className="p-6 flex flex-col flex-1 gap-2">
              <span className="text-[10px] font-extrabold text-blue-600 uppercase tracking-widest">
                {item.date}
              </span>
              <h3 className="text-base font-bold text-slate-800 tracking-tight group-hover:text-blue-600 transition-colors duration-200 line-clamp-2 mt-1">
                {item.title}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed mt-1 line-clamp-3">
                {item.description}
              </p>
              
              <div className="mt-6 pt-3 border-t border-slate-50 flex items-center justify-between text-xs font-bold text-blue-600 group-hover:text-blue-700 mt-auto">
                <span>Read Article</span>
                <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-200">&rarr;</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog;
