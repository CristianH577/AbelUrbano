import { motion } from "framer-motion";

import barber from "../assets/imgs/services/barber.jpg";
import peluqueria512 from "../assets/imgs/services/peluqueria-512.webp";

import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import TaskAltIcon from "@mui/icons-material/TaskAlt";

const limpieza_facial = [
  {
    id: "limpieza_facial_expresss",
    title: "express",
    list: [
      "higiene facial",
      "exfoliación",
      "vapor de ozono",
      "espátula ultrasónica",
      "extracción de impurezas",
      "mascara relajante",
      "tonificación facial",
      "protección solar",
    ],
    price: 4000,
  },
  {
    id: "limpieza_facial_profunda",
    title: "profunda",
    list: [
      "+EXPRESS",
      "preparación de la piel",
      "dermaplaning",
      "peeling enzimático",
      "microdermoabrasión (punta de diamante)",
      "mascaras acorde",
      "hidratación final",
    ],
    price: 16000,
  },
];

const prices = [
  {
    label: "Corte Hombre",
    price: "$13.000",
    include: "Lavado, corte vapor de ozono, perfilado (ceja y barba)",
  },
  { label: "Corte Niño", price: "$10.000" },
  {
    label: "Corte Dama",
    price: "$15.000",
    include: "Lavado, corte, secado",
  },
  { label: "Color", price: "Desde $35.000" },
  { label: "Reflejos", price: "Desde $45.000" },
  { label: "Iluminación", price: "$45.000" },
];

const class_title =
  "uppercase font-[western] text-5xl max-xs:break-all font-normal";
const animation = {
  variants: {
    hidden: { opacity: 0, y: "50%" },
    visible: { opacity: 1, y: 0 },
  },
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true },
};

export default function Services() {
  return (
    <section id="servicios" className="section space-y-8">
      <motion.article
        className="flex flex-col items-center gap-8 lg:flex-row p-3 md:p-4"
        variants={{
          hidden: {},
          visible: {
            transition: {
              delayChildren: 0.5,
              staggerChildren: 0.3,
            },
          },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="relative max-w-lg lg:min-w-sm m-2 z-10">
          <motion.div
            className="absolute w-full h-full rounded-full z-10 bg-radial from-amber-400 via-amber-600 via-30% to-transparent to-70%"
            variants={{
              hidden: { opacity: 0, scale: 0 },
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{ duration: 0.5 }}
          ></motion.div>

          <div className="drop-shadow-[0_0_8px] drop-shadow-amber-400 relative z-20">
            <motion.div
              className="absolute inset-0 mask-paint-1 mask-paint-animate bg-contain bg-center bg-[url('./assets/imgs/services/peluqueria-512.webp')]"
              variants={{
                hidden: { maskSize: "0% 0%", maskPosition: "-100% 200%" },
                visible: { maskSize: "100% 100%", maskPosition: "0 0%" },
              }}
              transition={{ duration: 0.5 }}
            ></motion.div>
            <img
              src={peluqueria512}
              alt="cortando el pelo en el local"
              className="not-prose opacity-0"
              width={512}
              height={512}
            />
          </div>
        </div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: "50%" },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <motion.h1 className={class_title}>Peluqueria</motion.h1>

          <p>
            ¿Buscas un cambio de look que realce tu estilo y personalidad?
            Ofrecemos servicios de peluquería pensados para brindarte una
            experiencia transformadora, con cortes modernos y técnicas
            profesionales adaptadas a ti.
          </p>

          <ol className="list-none list-outside">
            {[
              "Renova tu imagen con cortes actuales y personalizados",
              "Realza tus facciones con estilos que se adaptan a tu rostro",
              "Disfruta de un acabado profesional y detallado",
              "Recibí asesoría personalizada sobre cuidado capilar",
            ].map((text, i) => (
              <li key={i} className="space-x-2">
                <DoubleArrowIcon /> {text}
              </li>
            ))}
          </ol>

          <p>
            Ya sea que busques un corte clásico o un estilo vanguardista, nos
            aseguramos de que salgas con una imagen fresca, segura y auténtica.
          </p>
        </motion.div>
      </motion.article>

      <motion.article
        className="flex flex-col items-center gap-2 lg:flex-row-reverse p-3 md:p-4"
        variants={{
          hidden: {},
          visible: {
            transition: {
              delayChildren: 0.5,
              staggerChildren: 0.3,
            },
          },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          className="w-fit max-w-md lg:min-w-sm m-2 rounded-lg overflow-hidden drop-shadow-[0_0_10px] drop-shadow-amber-400"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={barber}
            alt="cliente satisfecho con el servicio"
            className="w-full max-w-[400px] not-prose "
            width={400}
            height={400}
          />
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: "50%" },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <h1 className={class_title}>Barberia</h1>

          <p>
            ¿Quieres darle un toque de personalidad a tu barba? Nuestra
            pigmentación es la solución perfecta para un look único y atractivo.
            Se utilizan técnicas de alta calidad para crear un resultado natural
            y duradero. Con nuestra pigmentación puedes:
          </p>

          <ol className="list-none list-outside">
            {[
              "Añadir volumen y textura a tu barba",
              "Corregir irregularidades y cicatrices",
              "Mejorar la definición y el contorno de tu barba",
              "Crear un look personalizado que se adapte a tu estilo y preferencias",
            ].map((text, i) => (
              <li key={i} className="space-x-2">
                <TaskAltIcon /> {text}
              </li>
            ))}
          </ol>

          <p>
            Nuestra pigmentación es segura, eficaz y requiere un mantenimiento
            mínimo.
          </p>
        </motion.div>
      </motion.article>

      <motion.article
        className="w-full max-w-[92vw] md:w-fit p-2 sm:p-4 place-self-center"
        {...animation}
      >
        <h1 className={class_title}>Precios</h1>

        <div className="overflow-y-auto">
          <table className="text-xl mt-0">
            <tbody>
              {prices.map((item) => (
                <tr key={item.label}>
                  <td>{item.label}</td>
                  <td className="text-amber-400 whitespace-pre">
                    {item.price}
                  </td>
                  <td className="max-w-sm min-w-44">
                    {item?.include ? "Incluye: " + item?.include : ""}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <i className="text-sm text-neutral-400">
          *Consulte por otros servicios. Los precios pueden variar: 30/5/25
        </i>
      </motion.article>

      <motion.article
        className="text-center max-xs:break-all md:place-self-center p-3 md:p-4"
        {...animation}
      >
        <h1 className={class_title}>Limpieza facial</h1>

        <div className="grid gap-6 sm:grid-cols-2">
          {limpieza_facial.map((article) => (
            <div key={article.id} className="">
              <div className="uppercase font-[western] flex flex-col gap-1">
                <h1 className="text-5xl not-prose">{article.title}</h1>

                <span className="text-amber-400 text-5xl">
                  {Intl.NumberFormat("es-AR", {
                    style: "currency",
                    currency: "ARS",
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  }).format(article.price)}
                </span>
              </div>

              <ol className="list-disc capitalize flex-1 text-start">
                {article?.list &&
                  article.list.map((item, i) => <li key={i}>{item}</li>)}
              </ol>
            </div>
          ))}
        </div>

        <h2 className="uppercase font-[western] font-normal text-2xl">
          *incluye diagnostico de piel y armado de rutina
        </h2>
        <i className="text-sm text-neutral-400">
          *Los precios pueden variar: 30/5/25
        </i>
      </motion.article>
    </section>
  );
}
