import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  user-select: none;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.span`
  font-family: "Corinthia", cursive;
  font-weight: 700;
  font-style: normal;
  line-height: 1.3;
`;

// const Subtitle = styled.span`
//   font-size: 36px;
// `;
export default function Header() {
  return (
    <Container>
      <Title className="text-5xl sm:text-7xl">Vojtěch Nerad</Title>
      {/* <Subtitle>fotograf</Subtitle> */}
    </Container>
  );
}
