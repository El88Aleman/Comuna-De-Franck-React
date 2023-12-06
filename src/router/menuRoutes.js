import HomeViews from "../pages/homeViews/HomeViews";
import HorariosColectivos from "../pages/horariosColectivos/HorariosColectivos";
import Industrias from "../pages/industrias/Industrias";
import Contacto from "../component/contacto/Contacto";

export const routes = [
  {
    id: "HomeViews",
    path: "/",
    Element: HomeViews,
  },
  {
    id: "HorariosColectivos",
    path: "/HorariosColectivos",
    Element: HorariosColectivos,
  },
  {
    id: "Industrias",
    path: "/Industrias",
    Element: Industrias,
  },
  {
    id: "Contacto",
    path: "/Contacto",
    Element: Contacto,
  },
];
