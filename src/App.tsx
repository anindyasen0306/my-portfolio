import { Nav } from "./components/sections/Nav";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { TechStack } from "./components/sections/TechStack";
import { FeaturedProject } from "./components/sections/FeaturedProject";
import { OtherProjects } from "./components/sections/OtherProjects";
import { AIAutomation } from "./components/sections/AIAutomation";
import { Skills } from "./components/sections/Skills";
import { Education } from "./components/sections/Education";
import { CodingProfiles } from "./components/sections/CodingProfiles";
import { ResumeCTA } from "./components/sections/ResumeCTA";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/sections/Footer";

function App() {
  return (
    <div className="min-h-screen bg-void text-ink">
      <Nav />
      <main>
        <Hero />
        <About />
        <TechStack />
        <FeaturedProject />
        <OtherProjects />
        <AIAutomation />
        <Skills />
        <Education />
        <CodingProfiles />
        <ResumeCTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
