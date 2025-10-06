import { motion } from "framer-motion";

import ContentCutIcon from "@mui/icons-material/ContentCut";
import SwitchAccessShortcutIcon from "@mui/icons-material/SwitchAccessShortcut";
import SchoolIcon from "@mui/icons-material/School";
import FavoriteIcon from "@mui/icons-material/Favorite";

import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import UpgradeIcon from "@mui/icons-material/Upgrade";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";

import FaceIcon from "@mui/icons-material/Face";
import Face2Icon from "@mui/icons-material/Face2";
import Face5Icon from "@mui/icons-material/Face5";
import FaceRetouchingNaturalIcon from "@mui/icons-material/FaceRetouchingNatural";
import DeblurIcon from "@mui/icons-material/Deblur";
import ColorizeIcon from "@mui/icons-material/Colorize";

import barber from "../assets/imgs/services/barber.jpg";
import peluqueria512 from "../assets/imgs/services/peluqueria-512.webp";

export default function Services() {
  const items = [
    {
      title: "Peluqueria",
      img: peluqueria512,
      imgText: (
        <p>
          ¿Buscas un cambio de look que realce tu estilo y personalidad?
          <br />
          Ofrecemos servicios de peluquería pensados para brindarte una
          experiencia transformadora, con cortes modernos y técnicas
          profesionales adaptadas a ti.
        </p>
      ),
      list: [
        {
          title: "Renova",
          text: "Tu imagen con cortes actuales y personalizados",
          icon: ContentCutIcon,
        },
        {
          title: "Realza",
          text: "Tus facciones con estilos que se adaptan a tu rostro",
          icon: SwitchAccessShortcutIcon,
        },
        {
          title: "Disfruta",
          text: "De un acabado profesional y detallado",
          icon: FavoriteIcon,
        },
        {
          title: "Recibí",
          text: "Asesoría personalizada sobre cuidado capilar",
          icon: SchoolIcon,
        },
      ],
      footerText:
        "Ya sea que busques un corte clásico o un estilo vanguardista, nos aseguramos de que salgas con una imagen fresca, segura y auténtica.",
    },
    {
      title: "Barberia",
      img: barber,
      imgText: (
        <p>
          ¿Quieres darle un toque de personalidad a tu barba?
          <br />
          Nuestra pigmentación es la solución perfecta para un look único y
          atractivo. Se utilizan técnicas de alta calidad para crear un
          resultado natural y duradero.
        </p>
      ),
      list: [
        {
          title: "Añadí",
          text: "Volumen y textura a tu barba",
          icon: AddCircleOutlineIcon,
        },
        {
          title: "Corregí",
          text: "Irregularidades y cicatrices",
          icon: AutoFixHighIcon,
        },
        {
          title: "Mejorá",
          text: "La definición y el contorno de tu barba",
          icon: UpgradeIcon,
        },
        {
          title: "Creá",
          text: "Un look personalizado que se adapte a tu estilo y preferencias",
          icon: EmojiObjectsIcon,
        },
      ],
      footerText:
        "Nuestra pigmentación es segura, eficaz y requiere un mantenimiento mínimo.",
    },
  ];

  const lista_destacados = [
    {
      label: "Corte Hombre",
      icon: FaceIcon,
      include: "Lavado, corte vapor de ozono, perfilado (ceja y barba)",
    },
    { label: "Corte Niño", icon: Face5Icon },
    {
      label: "Corte Dama",
      icon: Face2Icon,
      include: "Lavado, corte, secado",
    },
    { label: "Color", icon: ColorizeIcon },
    { label: "Reflejos", icon: DeblurIcon },
    { label: "Iluminación", icon: FaceRetouchingNaturalIcon },
  ];

  return (
    <section
      id="servicios"
      className="w-full max-lg:max-w-[900px] flex flex-col items-center gap-8 place-self-center px-2 sm:px-4 py-16"
    >
      <h1 className="uppercase font-[western] text-6xl max-xs:break-all font-normal">
        Servicios
      </h1>

      <article className="flex flex-col gap-16 lg:flex-row">
        {items.map((item, i) => (
          <motion.div
            key={i}
            className="flex flex-col gap-12"
            variants={{
              visible: {
                transition: {
                  delayChildren: 0.2,
                  staggerChildren: 0.2,
                },
              },
            }}
            initial="hidden"
            whileInView="visible"
          >
            <motion.div
              className="relative place-self-center rounded-lg overflow-hidden drop-shadow-[0_0_8px] drop-shadow-amber-400 mx-2"
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            >
              <img
                src={item.img}
                alt="cortando el pelo en el local"
                className="not-prose"
                width={512}
                height={512}
              />

              <div className="absolute bottom-0 p-4 bg-gradient-to-t from-black to-transparent">
                <h2 className="text-4xl max-xs:break-all">{item.title}</h2>

                {item.imgText}
              </div>
            </motion.div>

            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 text-center not-prose">
              {item.list.map((li, j) => (
                <motion.li
                  key={j}
                  className="flex flex-col items-center border-4 border-amber-500 rounded-lg p-4 gap-4 max-w-72 place-self-center h-full w-full"
                  variants={{
                    hidden: { opacity: 0, scale: 0 },
                    visible: { opacity: 1, scale: 1 },
                  }}
                >
                  <span className="text-6xl text-amber-400">
                    <li.icon fontSize="inherit" />
                  </span>

                  <b className="text-3xl">{li.title}</b>

                  <span className="min-h-14">{li.text}</span>
                </motion.li>
              ))}
            </ul>

            <motion.p
              className="max-w-[400px] place-self-center text-center"
              variants={{
                hidden: { opacity: 0, y: "100%" },
                visible: { opacity: 1, y: 0 },
              }}
            >
              {item.footerText}
            </motion.p>
          </motion.div>
        ))}
      </article>

      <article>
        <h2 className="text-4xl text-center">Destacados</h2>

        <motion.ol
          className="flex flex-wrap gap-4 justify-center not-prose"
          variants={{
            visible: {
              transition: {
                delayChildren: 0.1,
                staggerChildren: 0.1,
              },
            },
          }}
          initial="hidden"
          whileInView="visible"
        >
          {lista_destacados.map((li, i) => (
            <motion.li
              key={i}
              className="grid grid-cols-[repeat(auto-fit,minmax(180px,180px))] gap-4 text-2xl border-2 border-amber-500 rounded-lg p-2"
              variants={{
                hidden: { opacity: 0, scale: 0 },
                visible: { opacity: 1, scale: 1 },
              }}
            >
              <div className="flex flex-col gap-2 items-center">
                <li.icon className="h-16 w-fit text-amber-400" />

                <b>{li.label}</b>

                {li.include && (
                  <p className="text-sm max-w-32 text-center text-neutral-400">
                    {li.include}
                  </p>
                )}
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </article>
    </section>
  );
}
