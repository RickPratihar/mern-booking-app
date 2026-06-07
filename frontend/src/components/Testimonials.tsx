import { FaQuoteLeft, FaStar } from "react-icons/fa";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rick Pratihar",
      role: "Developer",
      avatar: "https://i.ibb.co/ZgF5Zzz/avatar-1.png",
      quote: "Absolutely stunning! The hotel exceeded all expectations. Impeccable service, breathtaking views, and luxurious amenities made our stay unforgettable. We can't wait to return!",
      stars: 5,
    },
    {
      name: "Sourav singha",
      role: "Developer",
      avatar: "https://i.ibb.co/8BLjmqz/avatar-2.png",
      quote: "A hidden gem! From the warm welcome to the cozy rooms, every detail was perfect. The staff went above and beyond to ensure our comfort. Highly recommend for a peaceful getaway.",
      stars: 5,
    },
    {
      name: "Soumendu Dawn",
      role: "Developer",
      avatar: "https://i.ibb.co/y0KCX7p/avatar-3.png",
      quote: "Outstanding experience! The hotel's charm, combined with exceptional hospitality, made our stay remarkable. Delicious cuisine, stunning decor, and attentive staff made us feel truly pampered.",
      stars: 5,
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-slate-50 to-white rounded-3xl px-6 md:px-12 my-10 border border-slate-100/80">
      <div className="mx-auto text-center max-w-xl md:max-w-2xl mb-12">
        <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
          Guest Stories
        </span>
        <h3 className="text-3xl font-extrabold text-slate-800 tracking-tight mt-4 mb-3">
          What Our Guests Say
        </h3>
        <p className="text-sm text-slate-500 leading-relaxed">
          Discover firsthand accounts of unforgettable stays, exceptional service, and cherished memories from around the world.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="group flex flex-col justify-between bg-white border border-slate-100/80 rounded-2xl p-6 md:p-8 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_35px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 relative"
          >
            {/* Top section with quote icon and stars */}
            <div>
              <div className="flex justify-between items-center mb-6">
                <FaQuoteLeft className="text-blue-500/20 group-hover:text-blue-500/40 transition-colors duration-300" size={32} />
                <div className="flex text-amber-400 gap-0.5">
                  {Array.from({ length: item.stars }).map((_, i) => (
                    <FaStar key={i} size={13} />
                  ))}
                </div>
              </div>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed italic">
                "{item.quote}"
              </p>
            </div>

            {/* Bottom section with Avatar and User Info */}
            <div className="flex items-center gap-4 mt-8 pt-6 border-t border-slate-50">
              <img
                src={item.avatar}
                alt={item.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-slate-100 group-hover:border-blue-500 transition-colors duration-300"
              />
              <div>
                <h4 className="text-sm font-bold text-slate-800 tracking-tight">
                  {item.name}
                </h4>
                <p className="text-xs text-slate-400 font-medium">
                  {item.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
