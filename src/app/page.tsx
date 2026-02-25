import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { Timeline } from "@/components/sections/timeline";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <main id="main-content" className="relative z-10 pt-16 md:pt-24 min-h-screen">
      <Hero />
      <About />
      <Services />
      <Timeline />
      <Contact />
    </main>
  );
}
