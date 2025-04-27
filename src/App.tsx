import "./App.css";
import Toolbar from "./components/Toolbar";
import Header from "./components/Header";
import Contacts from "./pages/Contacts";
import AboutMe from "./pages/AboutMe";
import styled from "styled-components";

const PageContent = styled.div`
  max-width: 1280px;
`;

function App() {
  return (
    <>
      <Header />
      <Toolbar />
      <PageContent>
        <AboutMe />
        <Contacts />
      </PageContent>
    </>
  );
}

export default App;
