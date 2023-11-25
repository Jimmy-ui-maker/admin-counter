import About from "@/components/About";
import HeroPage from "@/components/HeroPage";
import ClassReps from "@/components/ClassReps";
import Coordinator from "@/components/Coordinator";
import SltOne from "@/components/SltOne";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <HeroPage />
      <main id="main">
        <About />
        <ClassReps />
        <SltOne />
        <Coordinator />
        <Contact />
      </main>
    </>
  );
}
