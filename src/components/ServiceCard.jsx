import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function ServiceCard({ service }) {
  const handleClick = () => {
    // Scroll to top when the link is clicked
    window.scrollTo(0, 0);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-blue-50 rounded-lg shadow-lg overflow-hidden w-full"
    >
      <div className="relative overflow-hidden" style={{ paddingBottom: '56.25%' }}>
        <img
          src={service.image}
          alt={service.title}
          className="absolute top-0 left-0 w-full h-full object-contain transform transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
        <p className="text-gray-900 text-sm mb-4">{service.description}</p>
        <Link
          to={`/services/${service.id}`}
          onClick={handleClick}
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200 text-sm"
        >
          Explore more
        </Link>
      </div>
    </motion.div>
  );
}

export default ServiceCard;