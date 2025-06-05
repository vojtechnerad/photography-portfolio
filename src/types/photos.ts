import { PhotoCategory } from "../enums/photoCategory";
import { ShootingMode } from "../enums/shootingMode";

export type Photo = {
  id: string;
  picture: string;
  title: string;

  dateTaken?: Date;
  location?: { lat: number; lng: number };
  focalLength?: string;
  aperture?: string;
  shutterSpeed?: string;
  iso?: number;
  shootingMode?: ShootingMode;

  categories: Array<PhotoCategory>;
};
