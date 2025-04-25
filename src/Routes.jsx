import { Routes, Route } from "react-router";

// utils
import {jsonRoute} from "./utils/json.js";


// Páginas
import NotFound from "./pages/NotFound";
import Home from "./pages/home/home";


const ProjectRoutes = () => {
    return (
        <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path={jsonRoute.Home} element={<Home />} />
        </Routes>
    );
};

export default ProjectRoutes;
