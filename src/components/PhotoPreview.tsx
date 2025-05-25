import { useState } from "react";
import { FaExpandAlt } from "react-icons/fa";
import { Photo } from "../types/photos";
import { usePhotoStore } from "../stores/photoStore";

type Props = {
  photo: Photo;
  index: number;
};

export default function PhotoPreview({ photo, index }: Props) {
  const { selectPhoto } = usePhotoStore();
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      key={index}
      className="relative w-full aspect-square overflow-hidden rounded-xl shadow cursor-pointer group select-none bg-[rgba(255,255,255,0.05)]"
      onClick={() => selectPhoto(photo)}
    >
      {/* Loader */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center z-10 bg-transparent">
          <div className="w-8 h-8 border-4 border-white/30 border-t-white rounded-full animate-spin" />
        </div>
      )}

      {/* Image */}
      <img
        src={photo.picture}
        alt={`Fotka ${index + 1}`}
        onLoad={() => setIsLoaded(true)}
        className={`absolute inset-0 w-full h-full object-cover transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:brightness-20 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Overlay */}
      {isLoaded && (
        <div className="absolute inset-0 flex flex-col justify-between p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out text-white">
          <div className="flex justify-end">
            <div className="p-1 rounded-full">
              <FaExpandAlt />
            </div>
          </div>
          <div className="px-2 py-1 rounded text-md text-left">
            {photo.title}
          </div>
        </div>
      )}
    </div>
  );
}
