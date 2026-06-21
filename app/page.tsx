import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Primitives from "@/components/Primitives";
import UseCasePillars from "@/components/UseCasePillars";
import VaultSection from "@/components/VaultSection";
import CTABand from "@/components/CTABand";
import StackSection from "@/components/StackSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white ">
      <NavBar />
      <Hero />
      <div id="protocol">
        <Primitives />
      </div>
      <UseCasePillars />
      <VaultSection />
      <CTABand />  
      <StackSection />
      <Footer />
    </main>
  );
}
