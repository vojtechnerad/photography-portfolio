import { NavLink } from "react-router";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  background-color: darkgrey;
`;

export default function Toolbar() {
  return (
    <Container>
      <NavLink to="/photography-portfolio/o-mne">
        <span>O mně</span>
      </NavLink>
      <NavLink to="/photography-portfolio/portfolio">
        <span>Portfolio</span>
      </NavLink>
      <NavLink to="/photography-portfolio/kontakty">
        <span>Kontakt</span>
      </NavLink>
    </Container>
  );
}
