import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="font-sans bg-white text-gray-900">
      <Navbar />
      <Hero />
      <Services />
      <Contact />
    </div>
  );
}

export default App;
