import { useState } from "react";
import { FaSearch } from "react-icons/fa"; // Search icon
import { ImSpinner2 } from "react-icons/im"; // Loading spinner icon
import { useNavigate } from "react-router-dom"; // For navigation

// Example services list with IDs and anchor support
const services = [
  { id: 1, name: "Paint and Body works" },
  { id: 2, name: "Mechanical & Electrical Repairs" },
  { id: 3, name: "Conversions and Facelift" },
  { id: 4, name: "Other Services" },
  { id: 5, name: "Products"}, // Scroll target
];

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [filteredServices, setFilteredServices] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    setLoading(true);

    setTimeout(() => {
      const results = services.filter((service) =>
        service.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredServices(results);
      setShowSuggestions(true);
      setSelectedIndex(-1);
      onSearch(value);
      setLoading(false);
    }, 500);
  };

  const handleSuggestionClick = (service) => {
    setQuery(service.name);
    setShowSuggestions(false);
    onSearch(service.name);
    navigateToService(service);
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      setSelectedIndex((prev) =>
        prev < filteredServices.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === "ArrowUp") {
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : 0));
    } else if (e.key === "Enter" && selectedIndex >= 0) {
      const selectedService = filteredServices[selectedIndex];
      handleSuggestionClick(selectedService);
    }
  };

  const navigateToService = (service) => {
    if (service.anchor) {
      const element = document.getElementById(service.anchor);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate("/", { replace: true });
        setTimeout(() => {
          const el = document.getElementById(service.anchor);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 300);
      }
    } else if (service.name === "Products") {
      navigate("/our-items"); // Navigate to the "Our Items" page
    } else if (service.id === 12) {
      navigate(`/offers`);
    } else {
      navigate(`/services/${service.id}`);
    }
  };

  return (
    <div className="flex flex-col items-center w-full relative">
      <div className="relative w-68">
        <input
          type="text"
          value={query}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="search for services..."
          className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-lg pr-12 text-black"
        />

        <button
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-red-600 hover:bg-gray-700 text-white rounded-full p-3 transition duration-300 shadow-md"
          disabled={loading}
        >
          {loading ? (
            <ImSpinner2 className="text-white text-lg animate-spin" />
          ) : (
            <FaSearch className="text-white text-lg" />
          )}
        </button>
      </div>

      {query && showSuggestions && filteredServices.length > 0 && (
        <ul className="bg-white w-80 border border-gray-200 shadow-lg mt-2 rounded-lg overflow-hidden text-black absolute top-full z-50">
          {filteredServices.map((service, index) => (
            <li
              key={service.id}
              onClick={() => handleSuggestionClick(service)}
              className={`px-4 py-2 cursor-pointer transition duration-200 text-black ${
                selectedIndex === index ? "bg-blue-100" : "hover:bg-blue-50"
              }`}
            >
              {service.name}
            </li>
          ))}
        </ul>
      )}

      {query && showSuggestions && filteredServices.length === 0 && !loading && (
        <p className="text-red-500 mt-2 absolute top-full z-50">
          No matching services found🥲.
        </p>
      )}
    </div>
  );
};

export default SearchBar;
