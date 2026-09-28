import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import IntroVideo from "./components/IntroVideo";
import WorkGrid from "./components/WorkGrid";
import Approach from "./components/Approach";
import Services from "./components/Services";
import Process from "./components/Process";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      <div className="grain-overlay" />
      <Navbar />
      <main>
        <Hero />
        <IntroVideo />
        <WorkGrid />
        <Approach />
        <Services />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
