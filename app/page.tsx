import About from "../components/About";
import Work from "../components/Work";
import Services from "../components/Services";
import Pricing from "../components/Pricing";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ";

export default function Home() {
  return (
    <main className="bg-white">

      {/* ── STICKY HERO VIDEO ── */}
      <div className="sticky top-0 h-screen z-0 overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-black/0" />
      </div>

      {/* ── CONTENT SLIDES OVER VIDEO ── */}
      <div className="w-full relative z-10 flex flex-col">
        <About />
        <Work />
        {/* <Services /> */}
        <FAQ />
        {/* <Pricing /> */}
        {/* <Contact /> */}
        <Footer />
      </div>

    </main>
  );
}