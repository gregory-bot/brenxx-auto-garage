import Hero from '../components/Hero';
import Services from './Services';
import BookingSection from '../components/BookingSection';
import GalleryPreview from '../components/GalleryPreview'; 
import AboutUs from '../components/AboutUs';
import Contact from '../components/Contact';

function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <BookingSection />
      <GalleryPreview />
      <AboutUs />
      <Contact />
    </div>
  );
}

export default Home;