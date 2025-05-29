import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { LINKS_SITES } from "../const/siteConfig";

import { Button } from "@mui/material";

import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import StyleIcon from "@mui/icons-material/Style";

const images_all = import.meta.glob(
  "../assets/imgs/products/**/*.{png,jpg,jpeg,svg,webp}",
  {
    eager: true,
  }
);

const products = [
  { id: 1, label: "After Shave", price: 8000, img: "" },
  { id: 2, label: "Polvo Texturizador", price: 9000, img: "" },
  {
    id: 3,
    label: "Shampoo Almendras/Frutos Rojos",
    price: 4500,
    className: "xs:col-span-2 xs:row-span-2",
    ClassNames: { img: "xs:w-[600px]" },
    img: "",
  },
  // { id: 4, label: "Shampoo frutos rojos", price: 4500, img: "" },
  {
    id: 5,
    label: "Pomada Gold/Fuerte mate",
    price: 9700,
    className: "sm:col-end-2",
    img: "",
  },
  {
    id: 6,
    label: "Gel de afeitado",
    price: 8000,
    className: "sm:col-start-3 sm:row-start-4",
    img: "",
  },
  {
    id: 7,
    label: "Óleo capilar",
    price: 6000,
    className:
      "xs:row-span-2 xs:row-start-4 sm:row-span-2 sm:row-start-1 sm:col-start-3",
    img: "",
  },
  {
    id: 8,
    label: "Logo",
    price: 0,
    className: "hidden sm:block sm:col-start-3 sm:row-start-3",
    img: "",
    disabledFull: true,
  },
  {
    id: 9,
    label: "Fill",
    price: 0,
    className: "hidden sm:block",
    img: "",
    disabledFull: true,
  },
];

export default function Products() {
  const [selected, setIsSelected] = useState(0);

  return (
    <section id="productos" className="section max-w-[900px]">
      <div className="italic text-neutral-500">*Los precios pueden variar.</div>

      <h1 className="uppercase font-[western] text-6xl font-normal inline-flex gap-1 break-all">
        <StyleIcon className="h-14 w-fit" />
        Productos
      </h1>

      <article className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-10 w-fit place-self-center">
        {products.map((item) => {
          // @ts-ignore
          const img = Object.entries(images_all).filter(([path, _]) =>
            path.includes("/" + item.id + ".")
          )[0][1].default;

          item.img = img;

          return (
            <motion.div
              key={item.id}
              className={
                "flex items-center justify-center" +
                (item?.className ? " " + item?.className : "")
              }
              variants={{
                hidden: { opacity: 0, scale: 0 },
                visible: { opacity: 1, scale: 1 },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <AnimatePresence>
                <motion.button
                  layoutId={"card" + item.id}
                  className={
                    "not-prose" + (!item?.disabledFull ? " cursor-pointer" : "")
                  }
                  onClick={() => !item?.disabledFull && setIsSelected(item.id)}
                >
                  <motion.img
                    src={item.img}
                    alt={item.label}
                    layoutId={"image" + item.id}
                    loading="lazy"
                    className={
                      "rounded-sm w-[300px] object-scale-down drop-shadow-[0_0_4px] drop-shadow-amber-400 hover:drop-shadow-[0_0_10px] hover:drop-shadow-amber-600 transition-shadow" +
                      (item?.ClassNames?.img ? " " + item.ClassNames.img : "")
                    }
                  />
                </motion.button>
              </AnimatePresence>

              <AnimatePresence>
                {selected === item.id && (
                  <motion.section
                    layoutId={"card" + item.id}
                    className="fixed inset-0 bg-black/50 z-50 overflow-auto flex items-center justify-center p-2 sm:p-6 cursor-pointer"
                    onClick={() => setIsSelected(0)}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <article className="my-auto relative">
                      <motion.div
                        className="sm:absolute z-10 w-full px-4 py-5 text-3xl font-bold flex flex-col sm:flex-row justify-between items-center gap-2 not-prose rounded-t-md sm:bg-black/30 max-xs:break-all"
                        initial={{ opacity: 0, y: "-100%" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "-100%" }}
                        transition={{ duration: 0.5 }}
                      >
                        <h2 className="drop-shadow drop-shadow-black">
                          {item.label}
                        </h2>

                        <div className="flex flex-wrap gap-2 justify-center">
                          <p className="text-amber-400 drop-shadow drop-shadow-black">
                            {Intl.NumberFormat("es-AR", {
                              style: "currency",
                              currency: "ARS",
                              minimumFractionDigits: 0,
                              maximumFractionDigits: 0,
                            }).format(item.price)}
                          </p>

                          <Button
                            component="a"
                            href={
                              LINKS_SITES.wp +
                              "&text=Hola. Me interesa: " +
                              item.label
                            }
                            title="Pedir por whatsapp"
                            target="_blank"
                            rel="noopener noreferrer"
                            variant="contained"
                            className="bg-gradient-to-l from-amber-700 to-amber-500 px-0 min-w-12 rounded-full hover:bg-gradient-to-r"
                            // color="success"
                            // startIcon={<WhatsAppIcon />}
                          >
                            <WhatsAppIcon />
                          </Button>
                        </div>
                      </motion.div>

                      <motion.img
                        src={item.img}
                        alt="Full"
                        layoutId={"image" + item.id}
                        className="rounded-sm not-prose"
                      />
                    </article>
                  </motion.section>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </article>

      {/* <AnimatePresence>
        <motion.div
          layoutId="card"
          onClick={() => setIsSelected(true)}
          className="rounded-lg overflow-hidden cursor-pointer"
        >
          <motion.img
            src={card.image}
            alt="Preview"
            layoutId="image"
            className="rounded-t-md"
          />
        </motion.div>
      </AnimatePresence> */}

      {/* <AnimatePresence>
        {selected && (
          <motion.div
            layoutId="card"
            className="fixed inset-0 bg-gray-800/50 z-50 p-6 overflow-auto flex items-center justify-center"
            onClick={() => setIsSelected(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="">
              <motion.img
                src={selected.img}
                alt="Full"
                layoutId="image"
                className="w- max-h-96 object-cover rounded-xl"
              />
              <motion.h2 className="mt-6 text-3xl font-bold">
                {selected.label}
              </motion.h2>
            </div>
          </motion.div>
        )}
      </AnimatePresence> */}
    </section>
  );
}
