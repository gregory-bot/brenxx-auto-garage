import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const images = [
  "https://i.postimg.cc/jdGQHDjn/yyjj.jpg",
];

const testimonials = [
  {
    image: "https://i.postimg.cc/mgH72kL9/yyjj.jpg",
    name: "Brian",
    feedback: "Highly recommended!",
  },
  {
    image: "https://i.postimg.cc/Y9w5yv9z/ilo.jpg",
    name: "Peter",
    feedback: "Professional and reliable.",
  },
  {
    image: "https://i.postimg.cc/d3xpyBP0/teta.jpg",
    name: "Group",
    feedback: "Great customer service and attention to detail.",
  },
  {
    image: "https://i.postimg.cc/8cZx5wbZ/juja.jpg",
    name: "Paul",
    feedback: "Quick and efficient service.",
  },
  {
    image: "https://i.postimg.cc/PJWKtQXc/yty.jpg",
    name: "Chris Wilson",
    feedback: "Affordable and trustworthy. Will come back again!",
  },
];

function AboutUs() {
  const [index, setIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
      setNextIndex((prevNextIndex) => (prevNextIndex + 1) % images.length);
    }, 9000); // Change image every 9 seconds

    return () => clearInterval(interval);
  }, []);

  // Close the testimonial when clicking outside
  const handleOutsideClick = (e) => {
    if (e.target.id === "testimonial-overlay") {
      setSelectedTestimonial(null);
    }
  };

  return (
    <section className="py-16 bg-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading Above the Image Carousel */}
        <h2 className="text-4xl font-bold text-black mb-6 text-center">
          About Brenxx
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Smooth Image Carousel */}
          <div className="relative w-full h-[400px] overflow-hidden rounded-lg shadow-lg">
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
            At Brenxx Auto Garage, our passion for cars drives everything we do.
            </p>
            <p className="text-black mb-6">
            With a team of highly skilled specialists and a commitment to excellence, we deliver superior vehicle repair and maintenance services—from advanced diagnostics and mechanical repairs to accident restoration and professional spray painting.
            </p>
            <p className="text-black mb-6">
            Every job we take on reflects our dedication to precision, performance, and quality craftsmanship, ensuring your vehicle receives the care it truly deserves.
            </p>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mt-10">
          <h3 className="text-4xl font-bold text-center text-black mb-8">
            Our Partners
          </h3>
          <div className="flex justify-center items-center space-x-[-20px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="relative w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden border-4 border-white shadow-lg cursor-pointer"
                style={{
                  zIndex: testimonials.length - index,
                }}
                onClick={() => setSelectedTestimonial(testimonial)}
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Selected Testimonial Image and Text */}
          {selectedTestimonial && (
            <div
              id="testimonial-overlay"
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
              onClick={handleOutsideClick}
            >
              <motion.div
                className="bg-white p-6 rounded-lg shadow-lg text-center max-w-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={selectedTestimonial.image}
                  alt={selectedTestimonial.name}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <p className="italic text-lg md:text-xl">
                  "{selectedTestimonial.feedback}"
                </p>
                <p className="font-bold mt-2 text-black">
                  - {selectedTestimonial.name}
                </p>
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default AboutUs;