import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { LINKS_SITES } from "../const/siteConfig";

import { Button } from "@mui/material";

import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import StyleIcon from "@mui/icons-material/Style";

import img3_600 from "../assets/imgs/products/3-600.webp";

type TypeItem = {
  id: number;
  label: string;
  price?: number;
  img?: string;
  srcSet?: string;
  full?: string;
  className?: string;
  classNames?: { img: string };
};

const default_items: TypeItem[] = [
  { id: 1, label: "After Shave", price: 8000 },
  { id: 2, label: "Polvo Texturizador", price: 9000 },
  {
    id: 3,
    label: "Shampoo Almendras/Frutos Rojos",
    price: 4500,
    className: "xs:col-span-2 xs:row-span-2",
    classNames: { img: "xs:w-[600px]" },
  },
  // { id: 4, label: "Shampoo frutos rojos", price: 4500, img: "" },
  {
    id: 5,
    label: "Pomada Gold/Fuerte mate",
    price: 9700,
    className: "sm:col-end-2",
  },
  {
    id: 6,
    label: "Gel de afeitado",
    price: 8000,
    className: "sm:col-start-3 sm:row-start-4",
  },
  {
    id: 7,
    label: "Óleo capilar",
    price: 6000,
    className:
      "xs:row-span-2 xs:row-start-4 sm:row-span-2 sm:row-start-1 sm:col-start-3",
  },
  {
    id: 8,
    label: "Logo",
    className: "hidden sm:block sm:col-start-3 sm:row-start-3",
  },
  {
    id: 9,
    label: "Fill",
    className: "hidden sm:block",
  },
];

export default function Products() {
  const [selected, setIsSelected] = useState(0);
  const [items, setItems] = useState<TypeItem[]>([]);

  useEffect(() => {
    const images_all = import.meta.glob(
      "../assets/imgs/products/**/*.{png,jpg,jpeg,svg,webp}",
      {
        eager: true,
        import: "default",
      }
    );

    const srcs = Object.entries(images_all) as string[][];

    const items_ = default_items.map((item) => {
      const img = srcs.find(([path, _]) => path.includes(`/${item.id}.`));

      if (img?.length) {
        item.img = img[1];
        if (item.id === 3) {
          item.srcSet = `${img[1]} 300w, ${img3_600} 600w`;
        }
      }

      const full = srcs.find(([path, _]) => path.includes(`/full/${item.id}.`));
      if (full?.length) item.full = full[1];

      return item;
    });

    setItems(items_);
  }, []);

  return (
    <section id="productos" className="section max-w-[900px]">
      <div className="italic text-neutral-500 text-sm">
        *Los precios pueden variar: 30/5/25
      </div>

      <h1 className="uppercase font-[western] text-6xl font-normal inline-flex gap-1 break-all">
        <StyleIcon className="h-14 w-fit" />
        Productos
      </h1>

      <article className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-10 w-fit place-self-center">
        {items.map((item) => (
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
                className={"not-prose" + (item.full ? " cursor-pointer" : "")}
                onClick={() => item.full && setIsSelected(item.id)}
              >
                <motion.img
                  src={item.img}
                  alt={item.label}
                  layoutId={"image" + item.id}
                  loading="lazy"
                  className={
                    "rounded-sm w-[300px] object-scale-down drop-shadow-[0_0_4px] drop-shadow-amber-400 hover:drop-shadow-[0_0_10px] hover:drop-shadow-amber-600 transition-shadow" +
                    (item?.classNames?.img ? " " + item.classNames.img : "")
                  }
                  srcSet={item.srcSet}
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
                          }).format(item.price ?? 0)}
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
                        >
                          <WhatsAppIcon />
                        </Button>
                      </div>
                    </motion.div>

                    <motion.img
                      src={item.full}
                      alt="Full"
                      layoutId={"image" + item.id}
                      className="rounded-sm not-prose"
                    />
                  </article>
                </motion.section>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </article>
    </section>
  );
}
