import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.span`
  font-family: "Corinthia", cursive;
  font-weight: 700;
  font-style: normal;
  font-size: 72px;
  line-height: 1.3;
`;

// const Subtitle = styled.span`
//   font-size: 36px;
// `;
export default function Header() {
  return (
    <Container>
      <Title>Vojtěch Nerad</Title>
      {/* <Subtitle>fotograf</Subtitle> */}
    </Container>
  );
}
