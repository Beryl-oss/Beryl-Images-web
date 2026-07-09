import Navbar from '../components/navbar/Navbar';

import Hero from '../components/hero/Hero';
import About from '../pages/About';
import Services from '../pages/Services';


function AppRoutes() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
    </>
  );
}

export default AppRoutes;