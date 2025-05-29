// import WeekendIcon from "@mui/icons-material/Weekend";
import HomeFilledIcon from "@mui/icons-material/HomeFilled";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import StyleIcon from "@mui/icons-material/Style";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

export const NAV_ITEMS = [
  {
    id: "home",
    icon: HomeFilledIcon,
    href: "inicio",
    label: "Inicio",
  },
  // {
  //   id: "local",
  //   icon: WeekendIcon,
  //   href: "local",
  //   label: "Local",
  // },
  {
    id: "services",
    icon: ContentCutIcon,
    href: "servicios",
    label: "Servicios",
  },
  {
    id: "products",
    icon: StyleIcon,
    href: "productos",
    label: "Productos",
  },
  {
    id: "course",
    icon: LocalLibraryIcon,
    href: "curso",
    label: "Curso",
  },
  {
    id: "contact",
    icon: AlternateEmailIcon,
    href: "contacto",
    label: "Contacto",
  },
];

export const LINKS_SITES = {
  map: "https://www.google.com/maps/place/Abel+Urbano/@-26.8363089,-65.2379875,17z/data=!4m6!3m5!1s0x94225d6dd0de8cd5:0xa82c027c32ab55bc!8m2!3d-26.8363089!4d-65.2379875!16s%2Fg%2F11l6ss8w5s?entry=ttu&g_ep=EgoyMDI1MDUyMS4wIKXMDSoASAFQAw%3D%3D",
  wp: "https://api.whatsapp.com/send?phone=543816565262",
  ig: "https://www.instagram.com/abelestilista/",
  fb: "https://www.facebook.com/4bLurbano/",
};
