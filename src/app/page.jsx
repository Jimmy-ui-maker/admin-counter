import About from "@/components/About";
import HeroPage from "@/components/HeroPage";
import ClassReps from "@/components/ClassReps";
import Coordinator from "@/components/Coordinator";
import SltOne from "@/components/SltOne";
import LevelOne from "@/components/levels/100";
import LevelTwo from "@/components/levels/200";
import LevelThree from "@/components/levels/300";
import LevelFour from "@/components/levels/400";

export default function Home() {
  return (
    <>
      <HeroPage />
      <main id="main">
        <About />
        <ClassReps />
        <Coordinator />
        <LevelOne />
        <LevelTwo />
        <LevelThree />
        <LevelFour />
        <SltOne />
      </main>
    </>
  );
}
