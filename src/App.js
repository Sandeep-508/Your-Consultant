import logo from './logo.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import Hero from './Components/Hero';
import Footer from './Components/Footer';
import Main from './Main';
import { useEffect } from 'react';
import ScrollToTop from './Components/ScrollToTop';

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 2000,
    });
  }, [])
  return (
    <>
      <Hero />
      <Main />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;