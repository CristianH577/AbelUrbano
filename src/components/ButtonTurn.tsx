import { Button } from "@mui/material";
import { LINKS_SITES } from "../const/siteConfig";

export default function ButtonTurn() {
  return (
    <Button
      variant="outlined"
      color="warning"
      size="large"
      component="a"
      href={LINKS_SITES.wp + "&text=Hola. Quiero reservar un turno."}
      title="Reservar turno"
      target="_blank"
      rel="noopener noreferrer"
      className="not-prose text-4xl p-4 hover:bg-amber-400 font-[western] border-4 text-amber-400 border-amber-400 hover:text-amber-600 hover:border-amber-600 text-center rounded-lg"
    >
      Reservar turno
    </Button>
  );
}
