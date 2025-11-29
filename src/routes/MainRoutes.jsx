import { BrowserRouter as Router, Routes, Route } from "react-router";
import ROUTES from "./routes";

// Import Pages

import Home from "../pages/Home";
import Vehicles from "../pages/Vehicles";
import About from "../pages/AboutUs";
import Contact from "../pages/Contact";
import ViewDetails from "../components/ViewDetails";





const MainRoutes = () => {
  return (
    <Routes>
     <Route path={ROUTES.HOME} element={<Home />} />;
     <Route path={ROUTES.VEHICLES} element={<Vehicles />} />;
     <Route path={ROUTES.ABOUT} element={<About />} />
     <Route path={ROUTES.CONTACT} element={<Contact />} />
    <Route path="/details/:id" element={<ViewDetails />} />




      

    </Routes>
  );
};

export default MainRoutes;
