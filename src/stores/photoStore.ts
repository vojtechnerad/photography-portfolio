import { create } from "zustand";
import { Photo } from "../types/photos";

import velka1 from "../assets/portfolio-pictures/neradvojtech-velka1.jpg";
import velka2 from "../assets/portfolio-pictures/neradvojtech-velka2.jpg";
import mala1 from "../assets/portfolio-pictures/neradvojtech-mala1.jpg";
import mala2 from "../assets/portfolio-pictures/neradvojtech-mala2.jpg";
import street1 from "../assets/portfolio-pictures/neradvojtech-street1.jpg";
import street2 from "../assets/portfolio-pictures/neradvojtech-street2.jpg";
import zmrazeny1 from "../assets/portfolio-pictures/zmrazeny1.jpg";
import zmrazeny2 from "../assets/portfolio-pictures/zmrazeny2.jpg";
import detail1 from "../assets/portfolio-pictures/neradvojtech-detail1.jpg";
import detail2 from "../assets/portfolio-pictures/neradvojtech-detail2.jpg";
import story1 from "../assets/portfolio-pictures/neradvojtech-story1.jpg";
import reklama1 from "../assets/portfolio-pictures/vojtechnerad-reklama1.jpg";
import charakter1 from "../assets/portfolio-pictures/charakter1.jpg";
import charakter2 from "../assets/portfolio-pictures/charakter2.jpg";
import cb1 from "../assets/portfolio-pictures/cb1.jpg";
import cb2 from "../assets/portfolio-pictures/cb2.jpg";
import sledovany1 from "../assets/portfolio-pictures/sledovany1.jpg";
import sledovany2 from "../assets/portfolio-pictures/sledovany2.jpg";
import naznaceny1 from "../assets/portfolio-pictures/naznaceny1.jpg";
import naznaceny2 from "../assets/portfolio-pictures/naznaceny2.jpg";
import naznaceny3 from "../assets/portfolio-pictures/naznaceny3.jpg";
import malba1 from "../assets/portfolio-pictures/malba1.jpg";
import malba2 from "../assets/portfolio-pictures/malba2.jpg";
import { PhotoCategory } from "../enums/photoCategory";
import { ShootingMode } from "../enums/shootingMode";

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
      focalLength: "18.0 mm",
      aperture: "13",
      shutterSpeed: "1/30",
      iso: 400,
      shootingMode: ShootingMode.AperturePriority,
      dateTaken: new Date("2025-04-08T19:02"),
      categories: [PhotoCategory.STREET],
    },
    {
      id: "velka-2",
      picture: velka2,
      title: "Kanceláře",
      location: { lat: 50.02689, lng: 14.49443 },
      categories: [PhotoCategory.STREET],
      focalLength: "45.0 mm",
      aperture: "13",
      shutterSpeed: "1/400",
      iso: 1600,
      shootingMode: ShootingMode.AperturePriority,
      dateTaken: new Date("2025-04-13T16:18"),
    },
    {
      id: "mala-1",
      picture: mala1,
      title: "Dívka s hrozny (Socha Réva)",
      location: { lat: 50.08485308660184, lng: 14.408726829697493 },
      categories: [PhotoCategory.STREET],
      focalLength: "55.0 mm",
      aperture: "5.6",
      shutterSpeed: "1/100",
      iso: 100,
      shootingMode: ShootingMode.AperturePriority,
      dateTaken: new Date("2025-04-10T18:01"),
    },
    {
      id: "mala-2",
      picture: mala2,
      title: "Květoucí větev s výhledem na Prahu",
      location: { lat: 50.08493781628289, lng: 14.408954597087712 },
      categories: [],
      focalLength: "55.0 mm",
      aperture: "5.6",
      shutterSpeed: "1/80",
      iso: 100,
      shootingMode: ShootingMode.AperturePriority,
      dateTaken: new Date("2025-04-10T18:06"),
    },
    {
      id: "street-1",
      picture: street1,
      title: "",
      categories: [PhotoCategory.BLACK_AND_WHITE],
      focalLength: "55.0 mm",
      aperture: "11",
      shutterSpeed: "1/50",
      iso: 1600,
      shootingMode: ShootingMode.AperturePriority,
      dateTaken: new Date("2025-04-11T18:02"),
    },
    {
      id: "street-2",
      picture: street2,
      title: "Praha: dvě tváře",
      categories: [PhotoCategory.BLACK_AND_WHITE],
      location: {
        lat: 50.081906761900925,
        lng: 14.421078526988842,
      },
      focalLength: "45.0 mm",
      aperture: "13",
      shutterSpeed: "1/400",
      iso: 1600,
      shootingMode: ShootingMode.AperturePriority,
      dateTaken: new Date("2025-04-11T16:24"),
    },
    {
      id: "zmrazeny-1",
      picture: zmrazeny1,
      title: "Let nad urbanismem",
      location: {
        lat: 50.026961,
        lng: 14.494293,
      },
      categories: [PhotoCategory.MOVEMENT, PhotoCategory.ANIMALS],
      focalLength: "55.0 mm",
      aperture: "5.6",
      shutterSpeed: "1/1600",
      iso: 1600,
      shootingMode: ShootingMode.ShutterPriority,
      dateTaken: new Date("2025-04-13T15:48"),
    },
    {
      id: "zmrazeny-2",
      picture: zmrazeny2,
      title: "Skok kachny",
      location: {
        lat: 50.026915,
        lng: 14.494388,
      },
      categories: [PhotoCategory.MOVEMENT, PhotoCategory.ANIMALS],
      focalLength: "55.0 mm",
      aperture: "5.6",
      shutterSpeed: "1/1600",
      iso: 1600,
      shootingMode: ShootingMode.ShutterPriority,
      dateTaken: new Date("2025-04-13T16:21"),
    },
    {
      id: "detail-1",
      picture: detail1,
      title: "",
      categories: [PhotoCategory.MACRO, PhotoCategory.PRODUCT],
    },
    {
      id: "detail-2",
      picture: detail2,
      title: "",
      categories: [PhotoCategory.MACRO],
    },
    { id: "story-1", picture: story1, title: "", categories: [] },
    {
      id: "reklama-1",
      picture: reklama1,
      title: "",
      categories: [PhotoCategory.PRODUCT],
    },
    {
      id: "charakter-1",
      picture: charakter1,
      title: "",
      categories: [],
    },
    {
      id: "charakter-2",
      picture: charakter2,
      title: "",
      categories: [],
    },
    {
      id: "cb-1",
      picture: cb1,
      title: "",
      categories: [PhotoCategory.BLACK_AND_WHITE],
    },
    {
      id: "cb-2",
      picture: cb2,
      title: "",
      categories: [PhotoCategory.BLACK_AND_WHITE],
    },
    {
      id: "naznaceny-1",
      picture: naznaceny1,
      title: "",
      categories: [PhotoCategory.MOVEMENT],
    },
    {
      id: "naznaceny-2",
      picture: naznaceny2,
      title: "",
      categories: [PhotoCategory.MOVEMENT],
    },
    {
      id: "naznaceny-3",
      picture: naznaceny3,
      title: "",
      categories: [PhotoCategory.MOVEMENT],
    },
    {
      id: "malba-1",
      picture: malba1,
      title: "Světelný klíč u dveřního zámku",
      categories: [],
    },
    {
      id: "malba-2",
      picture: malba2,
      title: "Monstrózní energie",
      categories: [PhotoCategory.PRODUCT],
    },
    {
      id: "sledovany-1",
      picture: sledovany1,
      title: "sledovany1",
      categories: [PhotoCategory.MOVEMENT],
    },
    {
      id: "sledovany-2",
      picture: sledovany2,
      title: "sledovany2",
      categories: [PhotoCategory.MOVEMENT],
    },
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
