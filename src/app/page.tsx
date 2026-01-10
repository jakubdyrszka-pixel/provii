
import Hero from "@/components/sections/Hero";
import ProblemSolution from "@/components/sections/ProblemSolution";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProblemSolution />

      {/* Placeholder sections for next Prompt */}
      <section id="jak-to-dziala" className="py-20 text-center text-zinc-600">
        [Sekcja: Jak to działa - w przygotowaniu]
      </section>
      <section id="oferta" className="py-20 text-center text-zinc-600">
        [Sekcja: Oferta - w przygotowaniu]
      </section>
      <section id="cennik" className="py-20 text-center text-zinc-600">
        [Sekcja: Cennik - w przygotowaniu]
      </section>
    </main>
  );
}
