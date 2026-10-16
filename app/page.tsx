import Header from "@/components/Header";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Tournaments from "@/components/sections/Tournaments";
import Teams from "@/components/sections/Teams";
import Gallery from "@/components/sections/Gallery";
import JoinUs from "@/components/sections/JoinUs";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Tournaments />
        <Teams />
        <Gallery />
        <JoinUs />
      </main>
      <Footer />
    </>
  );
}
