import { NavLink, useLocation } from "react-router";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  user-select: none;
`;

export default function Toolbar() {
  const location = useLocation();
  const isRoot = location.pathname === "/";

  const navLinkClass = (isActive: boolean) =>
    isActive
      ? "font-bold text-white"
      : "hover:text-white transition-colors duration-200";
  return (
    <Container className="flex justify-center gap-4 text-gray-300 text-lg pb-2">
      <NavLink
        to="/portfolio"
        className={({ isActive }) => navLinkClass(isActive || isRoot)}
      >
        <span>Portfolio</span>
      </NavLink>

      <NavLink to="/o-mne" className={({ isActive }) => navLinkClass(isActive)}>
        <span>O mně</span>
      </NavLink>

      <NavLink
        to="/kontakty"
        className={({ isActive }) => navLinkClass(isActive)}
      >
        <span>Kontakt</span>
      </NavLink>
    </Container>
  );
}
