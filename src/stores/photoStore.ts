import { create } from "zustand";
import { Photo } from "../types/photos";

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
import { PhotoCategory } from "../enums/photoCategory";

type PhotoStore = {
  photoList: Array<Photo>;
  selectedPhoto: Photo | null;
  selectPhoto: (val: Photo | null) => void;
  filteredPhotos: () => Array<Photo>;
} & CategoryProps;

type CategoryProps = {
  selectedCategory: PhotoCategory | null;
  selectCategory: (val: PhotoCategory | null) => void;
};

export const usePhotoStore = create<PhotoStore>((set, get) => ({
  photoList: [
    {
      id: "velka-1",
      picture: velka1,
      title: "Karlův most při soumraku z náplavky",
      location: {
        lat: 50.088876,
        lng: 14.411195,
      },
      description:
        "Pohled z náplavky na ikonický Karlův most v Praze během klidného podvečera. V popředí stojí nutrie u vody, zatímco panorama historických budov Starého Města se zrcadlí na hladině Vltavy. Měkké světlo zapadajícího slunce zvýrazňuje architekturu a vytváří poklidnou atmosféru.",
      focalLength: "18.0 mm",
      aperture: "13",
      shutterSpeed: "1/30",
      iso: 400,
      categories: [PhotoCategory.STREET],
    },
    {
      id: "velka-2",
      picture: velka2,
      title: "",
      location: { lat: 50.02689, lng: 14.49443 },
      categories: [],
    },
    {
      id: "mala-1",
      picture: mala1,
      title: "",
      location: { lat: 50.08485308660184, lng: 14.408726829697493 },
      categories: [],
    },
    {
      id: "mala-2",
      picture: mala2,
      title: "",
      location: { lat: 50.08493781628289, lng: 14.408954597087712 },
      categories: [],
    },
    { id: "street-1", picture: street1, title: "", categories: [] },
    { id: "street-2", picture: street2, title: "", categories: [] },
    { id: "detail-1", picture: detail1, title: "", categories: [] },
    { id: "detail-2", picture: detail2, title: "", categories: [] },
    { id: "story-1", picture: story1, title: "", categories: [] },
    { id: "reklama-1", picture: reklama1, title: "", categories: [] },
  ],

  selectedPhoto: null,
  selectedCategory: null,

  selectPhoto: (val: Photo | null) => {
    set(() => ({
      selectedPhoto: val,
    }));
  },
  selectCategory: (val: PhotoCategory | null) => {
    console.log(val);
    set(() => ({
      selectedCategory: val,
    }));
  },

  filteredPhotos: () => {
    const { photoList, selectedCategory } = get();

    if (!selectedCategory) return photoList;
    return photoList.filter((photo) =>
      photo.categories.includes(selectedCategory)
    );
  },
}));
