import Header from "./components/header";
import Hero from "./components/hero";
import AboutUs from "./components/Aboutus";
import Programs from "./components/programs";
import Gallery from "./components/gallery";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import FloatingButton from "./components/FloatingButton";
import Footer from "./components/Footer";
export default function App() {
  return (
     <div className="font-sans scroll-smooth">
      <Header />
      <Hero />
      <AboutUs/>
      <Programs />
      <Gallery />
      <Testimonials />
      <Contact />
      <FloatingButton/>
      <Footer/>
    </div>
  );
}
