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
        Fotografii se věnuji celé tři měsíce — od chvíle, kdy jsem zjistil, že
        je to povinný předmět. Za tu dobu jsem zvládl zapnout fotoaparát,
        přepnout ho z auto na auto s bleskem a zjistit, co je to clona (něco s
        kolečkem). Každý snímek je pro mě cestou sebepoznání — většinou poznám,
        že to zas není ono. Ale cvakám dál. Inspiruje mě světlo, stíny a pocit,
        že když to přepnu do černobílé, vypadá to hned umělecky.
      </p>

      {/* Citat s fotkou */}
      <div className="pb-4">
        <div className="flex bg-white/5 p-3 rounded-xl items-center">
          <div className="p-2 grow-1 italic">
            <p>
              "Moje fotky jsou jako diamanty &ndash; rodí se pod brutálním
              tlakem."
            </p>
            <p className="text-xs">
              {/* (nedělní deadline odevzdání dalšího balíku se blíží, a já zase nic
              nemám) */}
              Do odevzdání dalšího balíku zbývá pár hodin a já zase nic nemám.
            </p>
            <br />
            <p>&ndash; Spořádaný student digitální fotografie</p>
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
