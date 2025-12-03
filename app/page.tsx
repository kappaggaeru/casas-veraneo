import AboutPreview from "./about-preview";
import FeaturedCard from "./cards/featured-card";
import Contact from "./contact";
import Footer from "./footer";
import Hero from "./hero";
import Navbar from "./navbar";

export default function Home() {
  return (
    <section className="bg-background text-foreground">
      <Navbar />
      <Hero />
      <div className="p-4 flex flex-col gap-2">
        <AboutPreview />
        <FeaturedCard />
        <Contact />
        <Footer />
      </div>
    </section>
  )
}
