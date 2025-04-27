import { NavLink } from "react-router";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  background-color: darkgrey;
`;

export default function Toolbar() {
  return (
    <Container className="flex gap-2">
      <NavLink to="/portfolio">
        <span>Portfolio</span>
      </NavLink>

      <NavLink to="/o-mne">
        <span>O mně</span>
      </NavLink>

      <NavLink to="/kontakty">
        <span>Kontakt</span>
      </NavLink>
    </Container>
  );
}
