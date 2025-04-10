import { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import SearchBar from "./SearchBar";

const backgroundImages = [
  "https://i.postimg.cc/MG3zzpK0/yybn.jpg",
  "https://images.pexels.com/photos/4480505/pexels-photo-4480505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % backgroundImages.length
      );
    }, 8000); // Change image every 8 seconds

    return () => clearInterval(interval);
  }, []);

  const scrollToServices = () => {
    const servicesSection = document.querySelector("#services-section");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
            index === currentImageIndex ? "opacity-100 z-0" : "opacity-0"
          }`}          
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      ))}

      <div className="absolute inset-0 bg-black opacity-40 z-0"></div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4">
        {/* Search Bar */}
        <div className="absolute top-24 w-full flex justify-center">
          <SearchBar onSearch={(query) => console.log("Searching for:", query)} />
        </div>

        {/* Typewriter */}
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

        {/* CTA */}
        <div className="absolute bottom-8 flex justify-center w-full z-20">
          <button
            onClick={scrollToServices}
            className="bg-red-600 font-bold text-xl text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300"
          >
            Explore More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
