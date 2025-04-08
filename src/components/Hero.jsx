import { useState, useEffect, useRef } from "react";
import Typewriter from "typewriter-effect";
import SearchBar from "./SearchBar"; // Import SearchBar component

const videos = [
  "https://www.pexels.com/download/video/18101976/",
  "https://videos.pexels.com/video-files/6872474/6872474-uhd_1440_2560_25fps.mp4",

];

function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7;
    }

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, 9000);

    return () => clearInterval(interval);
  }, []);

  const scrollToServices = () => {
    const servicesSection = document.querySelector("#services-section");
    if (servicesSection) {
      servicesSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      {videos.map((video, index) => (
        <video
          key={index}
          ref={index === activeIndex ? videoRef : null}
          autoPlay
          loop
          muted
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{ filter: "brightness(0.4)" }}
        >
          <source src={video} type="video/mp4" />
        </video>
      ))}

      {/* Overlay Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4">
        
        {/* Search Bar - Centered */}
        <div className="absolute top-24 w-full flex justify-center">
          <SearchBar onSearch={(query) => console.log("Searching for:", query)} />
        </div>

        {/* Typewriter Effect */}
        <div className="text-2xl md:text-6xl mb-12 text-center">
          <Typewriter
            options={{
              strings: [
                "Expert Auto Repair & Maintenance",
                "Keeping you on the road – One Fix at a Time",
                "Where Quality Repairs Meet Exceptional Service",
              ],
              autoStart: true,
              loop: true,
              delay: 80,
              deleteSpeed: 60,
            }}
          />
        </div>

        {/* CTA Button */}
        <div className="absolute bottom-20 flex justify-center w-full z-20">
        <button
          onClick={scrollToServices}
    className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-black-700 transition duration-300 animate-pulse"
        >
          Explore More
        </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
