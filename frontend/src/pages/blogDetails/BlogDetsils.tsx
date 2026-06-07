import React from "react";
import blogData from "../../data/blogData";
import { useParams, Link } from "react-router-dom";
import Header from "../../components/Header";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import Footer from "../../components/Footer";

interface BlogItem {
  id: number;
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

  const blogItem: BlogItem | undefined = blogData.find(
    (p) => p.id === Number(blogid)
  ) || {
    id: 0,
    title: "",
    blogImg4: "",
    date: "",
    des1: "",
    blogImgTitle1: "",
    blogImg1: "",
    des2: "",
    blogImgTitle2: "",
    blogImg2: "",
    des3: "",
    blogImgTitle3: "",
    blogImg3: "",
    des4: "",
  };

  if (!blogItem) {
    return <div>Blog not found!</div>;
  }

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-800">
      <Header />
      
      {/* Hero Image */}
      <div className="relative w-full h-[40vh] md:h-[60vh] overflow-hidden bg-slate-900">
        <img 
          src={blogItem.blogImg4} 
          alt={blogItem.title} 
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
          <div className="container mx-auto max-w-4xl">
            <span className="inline-block px-3 py-1 bg-blue-600 text-white text-sm font-bold rounded-full mb-4">
              {blogItem.date}
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight drop-shadow-md">
              {blogItem.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <Link to="/blogpage" className="inline-flex items-center text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors mb-8">
            <span className="mr-2">&larr;</span> Back to all blogs
          </Link>
          
          <article className="prose prose-slate lg:prose-lg mx-auto">
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              {blogItem.des1}
            </p>

            {blogItem.blogImgTitle1 && (
              <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">
                {blogItem.blogImgTitle1}
              </h2>
            )}
            {blogItem.blogImg1 && (
              <img src={blogItem.blogImg1} alt="" className="w-full rounded-2xl shadow-sm mb-6" />
            )}
            {blogItem.des2 && (
              <p className="text-slate-600 leading-relaxed mb-8">{blogItem.des2}</p>
            )}

            {blogItem.blogImgTitle2 && (
              <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">
                {blogItem.blogImgTitle2}
              </h2>
            )}
            {blogItem.blogImg2 && (
              <img src={blogItem.blogImg2} alt="" className="w-full rounded-2xl shadow-sm mb-6" />
            )}
            {blogItem.des3 && (
              <p className="text-slate-600 leading-relaxed mb-8">{blogItem.des3}</p>
            )}

            {blogItem.blogImgTitle3 && (
              <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">
                {blogItem.blogImgTitle3}
              </h2>
            )}
            {blogItem.blogImg3 && (
              <img src={blogItem.blogImg3} alt="" className="w-full rounded-2xl shadow-sm mb-6" />
            )}
            {blogItem.des4 && (
              <p className="text-slate-600 leading-relaxed mb-8">{blogItem.des4}</p>
            )}
          </article>
        </div>
      </div>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default BlogDetails;
