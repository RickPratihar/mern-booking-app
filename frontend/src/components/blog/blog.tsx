import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./blog.css";
import blogData from "../../data/blogData";

interface BlogItem {
  id: number;
  imgUrl: string;
  title: string;
  description: string;
}

const Blog: React.FC = () => {
  const [limitedData, setLimitedData] = useState<BlogItem[]>([]);

  useEffect(() => {
    // Fetching data from data.js file (you can skip this if you're not fetching from an API)
    // For now, using a simple set timeout to simulate asynchronous data fetching
    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setLimitedData(blogData.slice(0, 3)); // Displaying the first 5 items
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="blog-head flex justify-between pb-4 pt-4">
        <h1 className="heading text-2xl font-bold ">Get inspiration for your next trip</h1>
        <Link to="/blog" className="more">More</Link>
      </div>
      <div className="secContent flex">
        {limitedData.map((item, index) => {
          return (
            <div key={index} className="blog-item">
              <div className="blog-img">
                <Link to={`/blogDetails/${item.id}`}>
                  <img
                    src={item.imgUrl}
                    alt="blog-img"
                    className={index === 0 ? "special-image" : "regular-image"}
                  />
                </Link>
              </div>

              <div className="blog-content">
                <h3 className={index === 0 ? "special-text" : "regular-text"}>
                  {item.title}
                </h3>
                <p
                  className={index === 0 ? "special-text2" : "regular-text2"}
                >
                  {item.description}
                </p>
                <Link
                  to={`/blogDetails/${item.id}`}
                  className={index === 0 ? "special-btn" : "regular-btn"}
                >
                  Read More
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Blog;
