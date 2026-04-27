// Layout
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

// Sections
import Hero from "./components/sections/Hero/Hero.jsx";
import About from "./components/sections/About/About.jsx";
import Work from "./components/sections/Work/Work.jsx";
import Contact from "./components/sections/Contact/Contact.jsx";

export const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Work />
        <Contact />
      </main>
      <Footer />
    </>
  );
};
