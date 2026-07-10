import Navbar from '../components/navbar/Navbar';

import Hero from '../components/hero/Hero';
import About from '../pages/About';
import Services from '../pages/Services';
import Contact from '../pages/Contact';
import Portfolio from '../pages/Portfolio';

import Footer from '../components/footer/Footer';


function AppRoutes() {
  return (
    <>
      <Navbar />

      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Contact />

      <Footer />
    </>
  );
}

export default AppRoutes;