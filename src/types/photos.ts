import { PhotoCategory } from "../enums/photoCategory";

export type Photo = {
  id: string;
  picture: string;
  title: string;
  description?: string;

  categories: Array<PhotoCategory>;
};
