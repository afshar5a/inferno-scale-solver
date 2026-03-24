import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ValueCards from "@/components/ValueCards";
import WhyMatters from "@/components/WhyMatters";
import DecisionFramework from "@/components/DecisionFramework";
import CaseStudy from "@/components/CaseStudy";
import DesignedFor from "@/components/DesignedFor";
import SimulatorSection from "@/components/SimulatorSection";
import FAQ from "@/components/FAQ";
import About from "@/components/About";
import Footer from "@/components/Footer";

const Index = () => (
  <>
    <Navbar />
    <main>
      <Hero />
      <ValueCards />
      <WhyMatters />
      <DecisionFramework />
      <CaseStudy />
      <SimulatorSection />
      <DesignedFor />
      <FAQ />
      <About />
    </main>
    <Footer />
  </>
);

export default Index;
