import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const images = [
  "https://i.postimg.cc/vTvTdRpY/tt.jpg",
  "https://i.postimg.cc/02C2fmtz/xx.jpg",
  "https://i.postimg.cc/jjfHL0rv/IMG-20250227-WA0032-1.jpg",
  "https://i.postimg.cc/mgVbZNXw/towing.jpg",
  "https://i.postimg.cc/xCLwRvxK/diagnostics.jpg",
  "https://i.postimg.cc/jdGQHDjn/yyjj.jpg"
];

function AboutUs() {
  const [index, setIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
      setNextIndex((prevNextIndex) => (prevNextIndex + 1) % images.length);
    }, 9000); // Change image every 9 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-yellow-50"> {/* Changed background to black */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading Above the Image Carousel */}
        <h2 className="text-3xl text-blue-600 font-bold mb-6 text-center">
          About Brenxx
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Smooth Image Carousel */}
          <div className="relative w-full h-[250px] overflow-hidden rounded-lg shadow-lg">
            {images.map((img, imgIndex) => (
              <motion.img
                key={imgIndex}
                src={img}
                alt="brenxx auto"
                className="absolute inset-0 w-full h-full object-cover rounded-lg"
                style={{ position: "absolute", top: 0, left: 0 }}
                initial={{ opacity: imgIndex === index ? 1 : 0 }}
                animate={{ opacity: imgIndex === index ? 1 : 0 }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
              />
            ))}
            <div className="absolute inset-0 bg-black bg-opacity-20 rounded-lg"></div>
          </div>

          {/* About Us Content */}
          <div>
            <p className="text-black mb-6">
              We are a fully fledged and registered motor vehicle repair and
              maintenance garage run by highly specialists in different fields.
              </p>
              <p className="text-black mb-6">
                From motor vehicle diagnostics, mechanical repairs, maintenance service, accident repairs plus professional spray painting, Brenxx Auto got you covered.
                </p>
                <p className="text-black mb-6">
                  We are located in Nairobi County along the 2nd Avenue – Garden estate, with
              state of the art security system (including CCTV Surveillance) that ensures our
              clients' vehicles are safe and secure while they are at Brenxx Auto.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;