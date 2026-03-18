import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Experience from './components/Experience';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-body selection:bg-neon-red selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Experience />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}

export default App;
