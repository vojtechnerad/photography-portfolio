import "./App.css";
import Toolbar from "./components/Toolbar";
import Header from "./components/Header";
import Contacts from "./pages/Contacts";
import AboutMe from "./pages/AboutMe";
import styled from "styled-components";
import { Route, Routes } from "react-router";
import Portfolio from "./pages/Portfolio";

const PageContent = styled.div`
  max-width: 1280px;
`;

function App() {
  return (
    <>
      <Header />
      <Toolbar />
      <PageContent>
        <Routes>
          <Route path="photography-portfolio">
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="kontakty" element={<Contacts />} />
            <Route path="o-mne" element={<AboutMe />} />
          </Route>
        </Routes>
      </PageContent>
    </>
  );
}

export default App;
