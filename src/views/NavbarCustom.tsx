import { useState } from "react";
import { motion } from "framer-motion";

import { NAV_ITEMS } from "../const/siteConfig";

import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

export default function NavbarCustom() {
  const [value, setValue] = useState("inicio");

  // @ts-ignore
  const handleChange = (event: any, newValue: string) => {
    const section = document.querySelector("#" + newValue);
    if (section) section.scrollIntoView();

    setValue(newValue);
  };

  return (
    <motion.nav
      className="fixed bottom-0 w-full z-30"
      initial={{ y: "100%" }}
      animate={{ y: 1 }}
      transition={{ delay: 3 }}
    >
      <BottomNavigation
        className="bg-neutral-900/80"
        value={value}
        onChange={handleChange}
      >
        {NAV_ITEMS.map((item) => (
          <BottomNavigationAction
            key={item.id}
            label={item.label}
            value={item.href}
            title={item.label}
            className={
              "text-white drop-shadow-md drop-shadow-black" +
              (item.id === "course" ? " hidden sm:inline-flex" : "")
            }
            icon={<item.icon />}
          />
        ))}
      </BottomNavigation>
    </motion.nav>
  );
}
