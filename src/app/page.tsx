import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
// import Websites from "@/components/Websites";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mt-40">
      <Hero />
      <Projects />
      {/* <Websites /> */}
    </div>
  );
}
