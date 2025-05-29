import { LINKS_SITES } from "../const/siteConfig";

import { Link } from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import MapIcon from "@mui/icons-material/Map";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import logo from "../assets/imgs/logo.webp";

const contacts = [
  {
    id: "wp",
    label: "381 656 5262",
    title: "Ir a Whatsapp",
    icon: WhatsAppIcon,
    href: LINKS_SITES.wp,
  },
  {
    id: "ig",
    label: "/abelestilista",
    title: "Ir a Instagram",
    icon: InstagramIcon,
    href: LINKS_SITES.ig,
  },
  {
    id: "fb",
    label: "/4bLurbano",
    title: "Ir a Facebook",
    icon: FacebookIcon,
    href: LINKS_SITES.fb,
  },
  {
    id: "direcion",
    label: "Pje. Agustin Garcia 2442, S.M.T, Tucuman",
    title: "Ir a Google Maps",
    icon: MapIcon,
    href: LINKS_SITES.map,
  },
];

export default function Contact() {
  return (
    <section
      id="contacto"
      className="section px-4 font-[western] flex flex-col items-center break-all"
    >
      <img
        src={logo}
        alt="logo-footer"
        className="not-prose drop-shadow-[2px_2px_4px_black]"
      />

      <Link
        href={LINKS_SITES.wp + "&text=Hola. Quiero reservar un turno."}
        underline="hover"
        className="text-5xl uppercase text-amber-400 mb-12 not-prose"
        title="Reservar turno"
        target="_blank"
        rel="noopener noreferrer"
      >
        Reserva tu turno
      </Link>

      <article className="flex flex-col sm:flex-row flex-wrap gap-8 sm:items-center justify-center not-prose">
        {contacts.map((article) => (
          <div
            key={article.id}
            className="inline-flex gap-2 text-4xl uppercase mb-0"
          >
            <article.icon className="h-10 w-fit" />
            <Link
              href={article.href}
              underline="hover"
              className="text-inherit hover:text-amber-400"
              title={article.title}
              target="_blank"
              rel="noopener noreferrer"
            >
              {article.label}
            </Link>
          </div>
        ))}
      </article>
    </section>
  );
}
