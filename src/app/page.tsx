import Image from "next/image";
import Hero from "@/components/Hero";
import ResultSection from "@/components/ResultSection";
import HistorySection from "@/components/HistorySection";

export default function Home() {
  return (
    <main>
      <Hero />
      <ResultSection />
      <HistorySection />
    </main>
  );
}
