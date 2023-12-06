import { Route, Routes } from "react-router-dom";
import Layout from "../component/layout/Layout";
import NotFound from "../pages/notFound/NotFound";
import { routes } from "./menuRoutes";

function AppRouter() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {routes.map(({ id, path, Element }) => (
          <Route key={id} path={path} element={<Element />} />
        ))}
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRouter;
