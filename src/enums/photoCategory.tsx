import { ReactNode } from "react";
import { GiDoubleStreetLights } from "react-icons/gi";
import { IoIosContrast } from "react-icons/io";

export enum PhotoCategory {
  STREET = "STREET",
  BLACK_AND_WHITE = "BLACK_AND_WHITE",
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
];
