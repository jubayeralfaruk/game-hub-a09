import { useEffect, useState } from "react";
import banner1 from "../assets/bannerImg-1.png";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.jpg";

const Banner = () => {
  const slides = [banner1, banner2, banner3];
  const [current, setCurrent] = useState(0);

  // Auto Slide Logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000); // 3 seconds
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative w-full h-[40vh] md:h-[65vh] lg:h-[75vh] overflow-hidden">
      <img
        src={slides[current]}
        alt="banner"
        className="w-full h-full object-cover transition-all duration-700"
      />

      {/* Previous Button */}
      <button
        onClick={() =>
          setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
        }
        className="btn btn-circle absolute left-5 top-1/2 -translate-y-1/2"
      >
        ❮
      </button>

      {/* Next Button */}
      <button
        onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
        className="btn btn-circle absolute right-5 top-1/2 -translate-y-1/2"
      >
        ❯
      </button>
    </div>
  );
};

export default Banner;
