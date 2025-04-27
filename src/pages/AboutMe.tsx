import styled from "styled-components";
import picture from "../assets/vojtech-nerad.jpg";
import { IoCamera } from "react-icons/io5";
import { MdLens } from "react-icons/md";
import { ReactNode } from "react";

type TItemCard = {
  icon: ReactNode;
  brand: string;
  title: string;
};

const ItemCard = ({ icon, brand, title }: TItemCard) => {
  return (
    <div className="flex items-center bg-blue-500 rounded-md gap-3">
      <div className="p-3">{icon}</div>
      <div className="flex flex-col p-3">
        <span>{brand}</span>
        <span>{title}</span>
      </div>
    </div>
  );
};

export default function AboutMe() {
  return (
    <div>
      <h1>O mně</h1>
      <div className="flex">
        <img src={picture} alt="" width={200} />
        <p>
          Fotografii se věnuji už celé dva měsíce — od chvíle, kdy mi škola
          oznámila, že tohle bude povinný předmět v rámci vedlejší specializace.
          Od té doby se snažím tvářit, že vím, co dělám, a že clona a čas nejsou
          jen náhodná slova. Na tomto portfoliu najdete moje pokusy o umění,
          které vznikly s vypětím sil, trochou štěstí a občas i neplánovanou
          kreativitou.
        </p>
      </div>
      <h2>Čím fotím</h2>
      <div className="flex flex-col gap-2">
        <ItemCard
          icon={<IoCamera size={30} />}
          brand="Canon"
          title="EOS 1200D"
        />
        <ItemCard
          icon={<MdLens size={30} />}
          brand="Canon"
          title=" EF-S 18-55mm f/3.5-5.6 IS II"
        />
      </div>
    </div>
  );
}
