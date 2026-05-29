import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Gallery from '@/components/Gallery';
import Accommodation from '@/components/Accommodation';
import Amenities from '@/components/Amenities';
import Location from '@/components/Location';
import Reviews from '@/components/Reviews';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';

export default function Home() {
  return (
    <main className="overflow-x-hidden pb-20 md:pb-0">
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Accommodation />
      <Amenities />
      <Location />
      <Reviews />
      <Contact />
      <Footer />
      <FloatingButtons />
    </main>
  );
}
