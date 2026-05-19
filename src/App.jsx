// Layout
import { Navbar } from "./components/layout/Navbar/Navbar.jsx";
import { Footer } from "./components/layout/Footer/Footer.jsx";

// Sections
import { Home } from "./components/sections/Home/Home.jsx";
import { About } from "./components/sections/About/About.jsx";
import { Work } from "./components/sections/Work/Work.jsx";
import { Contact } from "./components/sections/Contact/Contact.jsx";

// UI
import { ScrollProgressBar } from "./components/ui/ScrollProgressBar/ScrollProgressBar.jsx";
import { ScrollToTopButton } from "./components/ui/ScrollToTopButton/ScrollToTopButton.jsx";

export const App = () => {
  return (
    <>
      <ScrollProgressBar />

      <Navbar />
      <main>
        <Home />
        <About />
        <Work />
        <Contact />
      </main>
      <Footer />

      <ScrollToTopButton />
    </>
  );
};
