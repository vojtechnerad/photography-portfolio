import picture from "../assets/vojtech-nerad.jpg";
import { ReactNode } from "react";
import { LuAperture, LuCamera } from "react-icons/lu";
import CenteredPageContainer from "../components/CenteredPageContainer";

type TEquipmentCard = {
  icon: ReactNode;
  title: string;
  text: string;
};

const EquipmentCard = ({ icon, title, text }: TEquipmentCard) => {
  return (
    <div className="flex items-center gap-4 p-6 bg-white/5 rounded-2xl shadow-md">
      {icon}
      <div>
        <p className=" text-sm text-gray-600 dark:text-gray-300">{title}</p>
        <h3 className="text-md font-semibold">{text}</h3>
      </div>
    </div>
  );
};

export default function AboutMe() {
  return (
    <CenteredPageContainer>
      <h2 className="text-2xl font-bold pb-2">Můj příběh</h2>
      <p className="text-justify pb-4">
        Fotografii se věnuji celé tři měsíce — od chvíle, kdy jsem se dozvěděl,
        že digitální fotografie je povinný předmět v rámci zvolené vedlejší
        specializace. Od té doby se snažím tvářit, že vím, co dělám, a že clona
        a čas nejsou jen náhodná slova. Na tomto portfoliu najdete moje pokusy o
        umění, které vznikly s vypětím sil, trochou štěstí a občas i
        neplánovanou kreativitou.
      </p>

      {/* Citat s fotkou */}
      <div className="pb-4">
        <div className="flex bg-white/5 p-3 rounded-xl items-center">
          <div className="p-2 grow-1 italic">
            <p>
              "Moje fotky jsou jako diamanty, vznikají pod obrovským tlakem."
            </p>
            <p className="text-sm">
              (nedělní deadline odevzdání dalšího balíku se blíží, a já zase nic
              nemám)
            </p>
            <br />
            <p>- Spořádaný student digitální fotografie</p>
          </div>
          <img src={picture} alt="" width={150} className="rounded-xl" />
        </div>
      </div>

      <h2 className="text-2xl font-bold pb-2">Moje vybavení</h2>
      <div className="grid md:grid-cols-2 gap-2">
        {/* Zrcadlovka */}
        <EquipmentCard
          icon={<LuCamera className="w-10 h-10" />}
          title="Zrcadlovka"
          text="Canon EOS 1200D"
        />

        {/* Objektiv */}
        <EquipmentCard
          icon={<LuAperture className="w-10 h-10" />}
          title="Objektiv"
          text="Canon EF-S 18-55mm f/3.5-5.6 IS II"
        />
      </div>
    </CenteredPageContainer>
  );
}
