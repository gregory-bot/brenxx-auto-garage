import Hero from '../components/Hero';
import Services from './Services';
import BookingSection from '../components/BookingSection';
import GalleryPreview from '../components/GalleryPreview'; 
import FAQ from "../components/FAQ";
import AboutUs from '../components/AboutUs';
import Contact from '../components/Contact';

function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <BookingSection />
      <GalleryPreview />
      <FAQ />
      <AboutUs />
      <Contact />
    </div>
  );
}

export default Home;