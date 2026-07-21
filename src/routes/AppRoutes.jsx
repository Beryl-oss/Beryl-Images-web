import Navbar from '../components/navbar/Navbar';

import Hero from '../components/hero/Hero';
const About = lazy(() => import ('../pages/About'));
const Services = lazy(() => import('../pages/Services'));
const Contact = lazy(() => import ('../pages/Contact'));
const Portfolio = lazy(() => import ('../pages/Portfolio'));

import Footer from '../components/footer/Footer';
import { lazy } from 'react';


function AppRoutes() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default AppRoutes;