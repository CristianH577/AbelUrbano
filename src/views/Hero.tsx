import { motion } from "framer-motion";

import logo from "../assets/imgs/logo.webp";

export default function Hero() {
  return (
    <motion.section
      id="inicio"
      className="w-dvw h-dvh flex flex-col items-center justify-center bg-fixed bg-cover bg-center bg-[url('./assets/imgs/fondo2.jpg')] relative p-4 sm:p-8"
      variants={{
        hidden: {},
        visible: {
          transition: {
            // delayChildren: 0.5,
            // staggerChildren: 0.3,
            ease: "easeInOut",
          },
        },
      }}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="absolute w-full h-[calc(100dvh+1px)] top-0 left-0 "
        style={{
          background:
            "linear-gradient(to top, var(--color-neutral-950) 50%, var(--color-neutral-950), transparent)",
          backgroundSize: "100% 400%",
        }}
        variants={{
          hidden: {},
          visible: {
            backgroundPosition: ["0% 100%", "0% 0%"],
          },
        }}
        transition={{
          duration: 2,
          delay: 1,
        }}
      ></motion.div>

      <motion.img
        src={logo}
        alt="logo"
        className="z-10 not-prose drop-shadow-[2px_2px_4px_black]"
        variants={{
          hidden: { opacity: 0, scale: 0, y: -100 },
          visible: { opacity: 1, scale: 1, y: 0 },
        }}
        transition={{ duration: 1 }}
      />

      <div className="flex gap-1 z-10 text-3xl drop-shadow-[2px_2px_4px_black] uppercase">
        {"Estilista".split("").map((char, index) => (
          <motion.b
            key={index}
            variants={{
              hidden: { opacity: 0, color: "orange" },
              visible: { opacity: 1, color: "orange" },
            }}
            transition={{
              delay: 1 + index * 0.1,
              // repeat: Infinity,
              // repeatType: "reverse",
              // ease: "easeInOut",
              // repeatDelay: 1,
            }}
          >
            {char}
          </motion.b>
        ))}
      </div>

      <div className="z-10 text-4xl font-[western] font-normal text-neutral-300 flex gap-1 mt-12">
        {"Run  hippie,  run".split(" ").map((char, index) => (
          <motion.span
            key={index}
            variants={{
              hidden: { opacity: 0, x: -10 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{
              delay: 1.45 + index * 0.3,
            }}
          >
            {char}
          </motion.span>
        ))}
      </div>
    </motion.section>
  );
}
