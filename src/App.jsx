import './assets/icons/css/all.css';
import { BrowserRouter } from "react-router";
import "./utils/functions.js";
import ProjectRoutes from "./Routes";
import { BackscreenProvider } from "./context/BackscreenContext";
import Header from "./componentes/headerPadrao/header.jsx";
import Footer from "./componentes/FooterPadrao/footer.jsx";

function App() {
  return (
    <BrowserRouter>
      <BackscreenProvider>
        <Header />
          <ProjectRoutes />
        <Footer />
      </BackscreenProvider>
    </BrowserRouter>);
}

export default App;