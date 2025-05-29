import { motion } from "framer-motion";

import { LINKS_SITES } from "../const/siteConfig";

import { Link } from "@mui/material";

import imgCourse from "../assets/imgs/curso.webp";

export default function Course() {
  return (
    <section id="curso" className="section">
      <Link
        href={LINKS_SITES.wp + "&text=Hola. Me interesa el curso de barberia."}
        title="Consultar por whatsapp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <motion.img
          src={imgCourse}
          alt="promocion del curso"
          className="rounded-4xl place-self-center"
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
