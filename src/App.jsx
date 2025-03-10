import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import ServiceDetails from './pages/ServiceDetails';
import { CartProvider } from './context/CartContext';
import AboutUs from './components/AboutUs';
import OffersPage from './pages/OffersPage'; // Correct import path
import ChatWidget from './components/ChatWidget'; // Import ChatWidget
import { useState } from 'react'; // Import useState

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <Router>
      <CartProvider>
        <div className="app">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/offers" element={<OffersPage />} /> {/* Corrected to use element prop */}
            <Route path="/services/:id" element={<ServiceDetails />} />
          </Routes>
          <div className="fixed bottom-6 right-6 z-50">
            <div className="flex flex-col gap-4 relative">
              <ChatWidget /> {/* Add ChatWidget */}
            </div>
          </div>
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;