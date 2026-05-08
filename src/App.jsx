// Layout
import { Navbar } from "./components/layout/Navbar/Navbar.jsx";
// import { Footer } from "./components/layout/Footer";

// Sections
import { Home } from "./components/sections/Home/Home.jsx";
import { About } from "./components/sections/About/About.jsx";
// import { Work } from "./components/sections/Work/Work.jsx";
// import { Contact } from "./components/sections/Contact/Contact.jsx";

export const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <About />
        {/* 
        <Work />
        <Contact /> */}
      </main>
      {/* <Footer /> */}
    </>
  );
};
