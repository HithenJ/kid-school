import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutUs from "./components/Aboutus";
import Programs from "./components/Programs";
import Gallery from "./components/Gallery";
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
