import "./App.css";
import { Page } from "./pages/Page";
import { About } from "./pages/components/About/About";
import { Contact } from "./pages/components/Contacts/Contact";
import { Home } from "./pages/components/Home/Home";
import { Portofolios } from "./pages/components/Portofolios/Portofolios";
import { Services } from "./pages/components/Services/Services";
import { AsideBar } from "./pages/components/SideBar/AsideBar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="main-container">
      <AsideBar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/porto" element={<Portofolios />} />
          <Route path="/service" element={<Services />} />
          <Route path="/service" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
