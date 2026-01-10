
import Hero from "@/components/sections/Hero";
import ProblemSolution from "@/components/sections/ProblemSolution";
import HowItWorks from "@/components/sections/HowItWorks";
import Pricing from "@/components/sections/Pricing";
import FeaturesGrid from "@/components/FeaturesGrid";
import FAQ from "@/components/FAQ";
import StartCTA from "@/components/StartCTA";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProblemSolution />
      <HowItWorks />
      <FeaturesGrid />
      <Pricing />
      <FAQ />
      <Suspense fallback={<div>Ładowanie...</div>}>
        <StartCTA />
      </Suspense>
    </main>
  );
}
