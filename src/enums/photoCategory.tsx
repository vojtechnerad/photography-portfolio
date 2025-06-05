import { ReactNode } from "react";
import { FaCar, FaLeaf, FaLightbulb, FaPersonRunning } from "react-icons/fa6";
import { FiBox } from "react-icons/fi";
import { GiDoubleStreetLights } from "react-icons/gi";
import { IoIosContrast, IoIosPerson } from "react-icons/io";
import { MdPets } from "react-icons/md";
import { TbMacroFilled } from "react-icons/tb";

export enum PhotoCategory {
  STREET = "STREET",
  BLACK_AND_WHITE = "BLACK_AND_WHITE",
  MACRO = "MACRO",
  PRODUCT = "PRODUCT",
  MOVEMENT = "MOVEMENT",
  ANIMALS = "ANIMALS",
  VEHICLES = "VEHICLES",
  NATURE = "NATURE",
  LIGHT = "LIGHT",
  PERSON = "PERSON",
}

export const photoCategories: Array<{
  id: PhotoCategory;
  label: string;
  icon: ReactNode;
}> = [
  { id: PhotoCategory.STREET, label: "Město", icon: <GiDoubleStreetLights /> },
  {
    id: PhotoCategory.BLACK_AND_WHITE,
    label: "Černobílá",
    icon: <IoIosContrast />,
  },
  {
    id: PhotoCategory.MACRO,
    label: "Detail",
    icon: <TbMacroFilled />,
  },
  {
    id: PhotoCategory.PRODUCT,
    label: "Produkt",
    icon: <FiBox />,
  },
  {
    id: PhotoCategory.MOVEMENT,
    label: "Pohyb",
    icon: <FaPersonRunning />,
  },
  {
    id: PhotoCategory.ANIMALS,
    label: "Zvířata",
    icon: <MdPets />,
  },
  {
    id: PhotoCategory.VEHICLES,
    label: "Vozidla",
    icon: <FaCar />,
  },
  {
    id: PhotoCategory.NATURE,
    label: "Příroda",
    icon: <FaLeaf />,
  },
  {
    id: PhotoCategory.LIGHT,
    label: "Světlo",
    icon: <FaLightbulb />,
  },
  {
    id: PhotoCategory.PERSON,
    label: "Člověk",
    icon: <IoIosPerson />,
  },
];
