import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Problem } from "@/components/site/Problem";
import { Journey } from "@/components/site/Journey";
import { TwoExperiences } from "@/components/site/TwoExperiences";
import { Features } from "@/components/site/Features";
import { MultiBranch } from "@/components/site/MultiBranch";
import { Comparison } from "@/components/site/Comparison";
import { Integrations } from "@/components/site/Integrations";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Journey />
        <TwoExperiences />
        <Features />
        <MultiBranch />
        <Comparison />
        <Integrations />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
