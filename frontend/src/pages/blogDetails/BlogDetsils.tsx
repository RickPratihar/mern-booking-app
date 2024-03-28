import React from "react";
import blogData from "../../data/blogData";
import { useParams } from "react-router-dom";
import "./blogDetails.css"
import Header from "../../components/Header";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";

interface BlogItem {
  id: number; // Corrected here
  title: string;
  date?: string;
  blogImg4?: string;
  des1?: string;
  blogImgTitle1?: string;
  blogImg1?: string;
  des2?: string;
  blogImgTitle2?: string;
  blogImg2?: string;
  des3?: string;
  blogImgTitle3?: string;
  blogImg3?: string;
  des4?: string;
}

const BlogDetails: React.FC = () => {
const { blogid }: { blogid?: string } = useParams();

if (!blogid) {
    return <div>Blog ID not provided!</div>;
}

const blogItem: BlogItem | undefined = blogData.find((p) => p.id === Number(blogid)) || { id: 0, title: '', blogImg4: '', date: '', des1: '', blogImgTitle1: '', blogImg1: '', des2: '', blogImgTitle2: '', blogImg2: '', des3: '', blogImgTitle3: '', blogImg3: '', des4: ''};

if (!blogItem) {
    return <div>Blog not found!</div>;
}

  return (
    <>
    <Header />
      <div className="blog-hero-img">
        <img src={blogItem.blogImg4} alt="" />
      </div>
      <div className="main-section">
        <div className="blog-header">
          <h1>{blogItem.title}</h1>
          <hr className="divider" />
          <span>{blogItem.date}</span>
        </div>
      </div>
      <div className="section1">
        <p>{blogItem.des1}</p>
        <h2>{blogItem.blogImgTitle1}</h2>
        <img src={blogItem.blogImg1} alt="" />
        <p>{blogItem.des2}</p>

        <h2>{blogItem.blogImgTitle2}</h2>
        <img src={blogItem.blogImg2} alt="" />
        <p>{blogItem.des3}</p>

        <h2>{blogItem.blogImgTitle3}</h2>
        <img src={blogItem.blogImg3} alt="" />
        <p>{blogItem.des4}</p>
      </div>
      <ScrollToTop />
    </>
  );
};

export default BlogDetails;