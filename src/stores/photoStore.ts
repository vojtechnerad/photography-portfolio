import { create } from "zustand";

import velka1 from "../assets/portfolio-pictures/neradvojtech-velka1.jpg";
import velka2 from "../assets/portfolio-pictures/neradvojtech-velka2.jpg";
import mala1 from "../assets/portfolio-pictures/neradvojtech-mala1.jpg";
import mala2 from "../assets/portfolio-pictures/neradvojtech-mala2.jpg";
import street1 from "../assets/portfolio-pictures/neradvojtech-street1.jpg";
import street2 from "../assets/portfolio-pictures/neradvojtech-street2.jpg";
import detail1 from "../assets/portfolio-pictures/neradvojtech-detail1.jpg";
import detail2 from "../assets/portfolio-pictures/neradvojtech-detail2.jpg";
import story1 from "../assets/portfolio-pictures/neradvojtech-story1.jpg";
import reklama1 from "../assets/portfolio-pictures/vojtechnerad-reklama1.jpg";

type Photo = {
  picture: string;
};

type PhotoStore = {
  photoList: Array<Photo>;
};

export const usePhotoStore = create<PhotoStore>((set, get) => ({
  photoList: [
    { picture: velka1 },
    { picture: velka2 },
    { picture: mala1 },
    { picture: mala2 },
    { picture: street1 },
    { picture: street2 },
    { picture: detail1 },
    { picture: detail2 },
    { picture: story1 },
    { picture: reklama1 },
  ],
}));
