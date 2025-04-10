import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function ServiceCard({ service }) {
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
        <h3 className="text-md font-semibold text-gray-900">{service.title}</h3>
        <p className="mt-1 text-sm text-gray-600 line-clamp-2">{service.description}</p>
        <Link
          to={`/services/${service.id}`} // Navigate to the ServiceDetails page
          className="mt-2 text-xs px-2 py-1 bg-blue-50 text-blue-600 hover:bg-blue-100 rounded-md transition-colors"
        >
          more
        </Link>
      </div>
    </motion.div>
  );
}

export default ServiceCard;