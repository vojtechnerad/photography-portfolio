import "./App.css";
import Toolbar from "./components/Toolbar";
import Header from "./components/Header";
import Contacts from "./pages/Contacts";
import AboutMe from "./pages/AboutMe";
import styled from "styled-components";
import { Route, Routes } from "react-router";
import Portfolio from "./pages/Portfolio";

const PageContent = styled.div``;

function App() {
  return (
    <>
      <Header />
      <Toolbar />
      <PageContent className="max-w-7xl mx-auto">
        <Routes>
          <Route path="" element={<Portfolio />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="kontakty" element={<Contacts />} />
          <Route path="o-mne" element={<AboutMe />} />
        </Routes>
      </PageContent>
    </>
  );
}

export default App;
