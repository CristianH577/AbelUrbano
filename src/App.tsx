import { Divider } from "@mui/material";

import Hero from "./views/Hero";
import Course from "./views/Course";
import NavbarCustom from "./views/NavbarCustom";
import Products from "./views/Products";
import Contact from "./views/Contact";
import Services from "./views/Services";

export default function App() {
  return (
    <div className="relative bg-neutral-950 text-neutral-200 font-[roboto] prose prose-invert max-w-none pb-16">
      <NavbarCustom />

      <main className="space-y-16">
        <Hero />

        <Services />

        <Divider variant="middle" className="border-custom-divider" />

        <Products />

        <Divider variant="middle" className="border-custom-divider" />

        <Course />

        <Divider variant="middle" className="border-custom-divider" />

        <Contact />

        <section className="text-center my-4">
          <span className="text-neutral-500">
            Diseñado por{" "}
            <a
              href="https://github.com/CristianH577"
              target="_blank"
              rel="noopener noreferrer"
              title="Ir al perfil de Github"
              className="hover:boder-b border-neutral-400 text-inherit"
            >
              <span className="font-mono">©</span>
              VerdeAve
            </a>
          </span>
        </section>
      </main>
    </div>
  );
}
