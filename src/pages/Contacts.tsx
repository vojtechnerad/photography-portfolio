import { ReactNode } from "react";
import { FaFacebook } from "react-icons/fa6";
import { IoMdMailOpen } from "react-icons/io";
import styled from "styled-components";

// const CameraBody = styled.div`
//   background-color: black;
//   width: fit-content;
//   padding: 10px;
//   border-radius: 7px;
// `;

const Card = styled.div`
  background-color: lightgrey;
  width: fit-content;
  border-radius: 7px;
`;

const StyledRow = styled.tr`
  font-size: 24px;
`;

// const Name = styled.div`
//   font-family: "Corinthia", cursive;
//   font-weight: 700;
//   font-style: normal;
//   font-size: 40px;
// `;

type TRow = {
  icon: ReactNode;
  title: ReactNode;
};

export default function Contacts() {
  const Row = ({ icon, title }: TRow) => {
    return (
      <StyledRow>
        <td>{icon}</td>
        <td>{title}</td>
      </StyledRow>
    );
  };

  return (
    <Card>
      {/* <Name>Vojtěch Nerad</Name> */}
      <table>
        <Row
          icon={<IoMdMailOpen size={30} />}
          title={<td>nevr@vse.cz</td>}
        ></Row>
        <Row icon={<IoMdMailOpen />} title={<td>+420 606 123 456</td>}></Row>
        <Row
          icon={<FaFacebook />}
          title={<td>Facebook /vojtech.nerad</td>}
        ></Row>
        <Row icon={<span>F</span>} title={<td>Flickr </td>}></Row>
        <Row icon={<span>IG</span>} title={<td>X </td>}></Row>
        <Row icon={<span>X</span>} title={<td>@</td>}></Row>
      </table>
    </Card>
  );
}
