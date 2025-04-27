import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  background-color: darkgrey;
`;

export default function Toolbar() {
  return (
    <Container>
      <span>Portfolio</span>
      <span>O mně</span>
      <span>Kontakt</span>
    </Container>
  );
}
