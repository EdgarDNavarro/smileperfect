import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import SmilePerfect from './components/SmilePerfect';
import BeforeAfter from './components/BeforeAfter';
import Services from './components/Services';
import Statistics from './components/Statistics';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <SmilePerfect />
      <BeforeAfter />
      <Services />
      <Statistics />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;