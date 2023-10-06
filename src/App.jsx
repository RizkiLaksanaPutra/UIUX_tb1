import { Route, Routes } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";
import HomePage from "./pages/HomePage";
import { KelasPage } from "./pages/KelasPage";
import { TestimonialPage } from "./pages/TestimonialPage";
import { FaqPage } from "./pages/FaqPage";
import { SyaratKeten } from "./pages/SyaratKeten";

function App() {
  return (
    <div>
      <NavbarComponent />
      <Routes>
        <Route path="/" Component={HomePage}></Route>
        <Route path="/kelas" Component={KelasPage}></Route>
        <Route path="/testimonial" Component={TestimonialPage}></Route>
        <Route path="/faq" Component={FaqPage}></Route>
        <Route path="/syaratketen" Component={SyaratKeten}></Route>
      </Routes>
      <FooterComponent />
    </div>
  );
}

export default App;
