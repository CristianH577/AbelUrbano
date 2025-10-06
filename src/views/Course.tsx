import { motion } from "framer-motion";

import { LINKS_SITES } from "../const/siteConfig";

import { Link } from "@mui/material";

import imgCourse from "../assets/imgs/curso.webp";
import imgCourse360 from "../assets/imgs/curso-360.webp";
import imgCourse640 from "../assets/imgs/curso-640.webp";

export default function Course() {
  return (
    <section id="curso" className="px-8 py-16">
      <Link
        href={LINKS_SITES.wp + "&text=Hola. Me interesa el curso de barberia."}
        title="Consultar por whatsapp"
        target="_blank"
        rel="noopener noreferrer"
        className=""
      >
        <motion.img
          src={imgCourse360}
          srcSet={`${imgCourse360} 360w, ${imgCourse640} 640w, ${imgCourse} 730w, `}
          alt="Promoción del curso"
          className="rounded-4xl place-self-center max-w-[640px] w-full"
          initial={{ boxShadow: "0 0 60px rgba(255, 0, 0, 0.8)" }}
          animate={{
            boxShadow: [
              "0 0 50px rgba(255, 0, 0, 0.8)", // rojo
              "0 0 50px rgba(0, 255, 0, 0.8)", // verde
              "0 0 50px rgba(0, 0, 255, 0.8)", // azul
              "0 0 50px rgba(255, 0, 255, 0.8)", // fucsia
              "0 0 50px rgba(255, 0, 0, 0.8)", // vuelve al rojo
            ],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />
      </Link>
    </section>
  );
}
