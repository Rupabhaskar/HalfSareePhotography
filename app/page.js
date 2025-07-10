"use client";
import HeroImageShow from './componets/heroimgshow';
import NavBar from './componets/NavBar';
import Plans from './componets/plans';
import Services from './componets/Services';
import Contact from './componets/Contact';
import Footer from './componets/footer';
import WhyChooseUs from './componets/WhyChooseUs';
import HalfSareeHighlightSection from './componets/HalfSareeHighlightSection';
import WhyWeExcel from './componets/WhyWeExcel';
import PricesareJustification from './componets/PricesareJustification';
import PricingGrid from './componets/PricingGrid';
import ScrollToTop from './componets/ScrollToTop';
import BookGallery from './componets/Gallery';

export default function HalfSareePhotography() {

const images = [
  { src: "/pic4 (5).jpg", alt: "Outdoor half saree photoshoot in London" },
  { src: "/pic4 (6).jpg", alt: "Studio half saree photography UK" },
  { src: "/pic3.jpg", alt: "Family photoshoot with half saree dress" },
  { src: "/pic4 (1).jpg", alt: "Family photoshoot with half saree dress" },
  { src: "/pic4 (2).jpg", alt: "Family photoshoot with half saree dress" },
  { src: "/pic4 (3).jpg", alt: "Family photoshoot with half saree dress" },
  { src: "/pic4 (4).jpg", alt: "Family photoshoot with half saree dress" },
];

const pages = images.map((img, index) => ({
  title: `Page ${index + 1}`,
  caption: img.alt,
  images: [img],
}));

  return (
    <div >
      <NavBar />
      <HeroImageShow />
      <WhyChooseUs />
      <HalfSareeHighlightSection />
      <WhyWeExcel />
      <PricingGrid />
      <Plans />
      <PricesareJustification />
      <Services />
      <BookGallery pages={pages} />
      <Contact />
      <Footer />
      <ScrollToTop/>
    </div>
  );
}
