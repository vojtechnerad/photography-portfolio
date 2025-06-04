import "./App.css";
import Toolbar from "./components/Toolbar";
import Header from "./components/Header";
import Contacts from "./pages/Contacts";
import AboutMe from "./pages/AboutMe";
import { Navigate, Route, Routes } from "react-router";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <>
      <Header />
      <Toolbar />
      <div className="flex-1 overflow-hidden">
        <Routes>
          <Route path="/" element={<Portfolio />} />

          <Route path="portfolio" element={<Portfolio />} />
          <Route path="kontakty" element={<Contacts />} />
          <Route path="o-mne" element={<AboutMe />} />

          <Route path="*" element={<Navigate to="/portfolio" replace />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
