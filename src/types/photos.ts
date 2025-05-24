import { PhotoCategory } from "../enums/photoCategory";

export type Photo = {
  id: string;
  picture: string;
  title: string;
  description?: string;

  dateTaken?: Date;
  focalLength?: string;
  aperture?: string;
  shutterSpeed?: string;
  iso?: number;

  categories: Array<PhotoCategory>;
};
