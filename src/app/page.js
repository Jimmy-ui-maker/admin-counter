import About from "@/components/About";
import Contact from "@/components/Contact";
import Faqs from "@/components/Faqs";
import HeroPage from "@/components/HeroPage";
import LevelCard from "@/components/LevelCard";

export default function Home() {
  return (
    <>
      <HeroPage />
      <About />
      <LevelCard />
      <Faqs />
      <Contact />
    </>
  );
}
