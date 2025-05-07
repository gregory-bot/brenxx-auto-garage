import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import OurItems from './pages/OurItems';
import BookingPage from './pages/BookingPage';
import GalleryPage from './pages/GalleryPage';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import ServiceDetails from './pages/ServiceDetails';
import { CartProvider } from './context/CartContext';
import AboutUs from './pages/AboutUs';
import FAQPage from './pages/FAQPage';
import ChatWidget from './components/ChatWidget';
import { useState } from 'react';

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
            <Route path="/our-items" element={<OurItems />} />
            <Route path="/book-appointment" element={<BookingPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/services/:id" element={<ServiceDetails />} />
          </Routes>
          <div className="fixed bottom-6 right-6 z-50">
            <div className="flex flex-col gap-4 relative">
              <ChatWidget />
            </div>
          </div>
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;