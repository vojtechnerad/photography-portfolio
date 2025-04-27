import styled from "styled-components";
import picture from "../assets/vojtech-nerad.jpg";
import { IoCamera } from "react-icons/io5";
import { MdLens } from "react-icons/md";

const ItemCard = styled.div`
  background-color: gray;
`;

export default function AboutMe() {
  return (
    <div>
      <h1>O mně</h1>
      <img src={picture} alt="" width={200} />
      <p>
        Fotografii se věnuji už celé dva měsíce — od chvíle, kdy mi škola
        oznámila, že tohle bude povinný předmět v rámci vedlejší specializace.
        Od té doby se snažím tvářit, že vím, co dělám, a že clona a čas nejsou
        jen náhodná slova. Na tomto portfoliu najdete moje pokusy o umění, které
        vznikly s vypětím sil, trochou štěstí a občas i neplánovanou
        kreativitou.
      </p>
      <h2>Čím fotím</h2>
      <ItemCard>
        <IoCamera size={100} color="white" />
        <span>Canon EOS 1200D</span>
      </ItemCard>
      <ItemCard>
        <MdLens size={100} color="white" />
        <span>Canon EF-S 18-55mm f/3.5-5.6 IS II</span>
      </ItemCard>
    </div>
  );
}
