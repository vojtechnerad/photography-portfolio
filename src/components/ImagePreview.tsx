import { FaExpandAlt } from "react-icons/fa";
import { Photo } from "../types/photos";
import { usePhotoStore } from "../stores/photoStore";

type Props = {
  photo: Photo;
  index: number;
};

export default function ImagePreview({ photo, index }: Props) {
  const { selectPhoto } = usePhotoStore();

  return (
    <div
      key={index}
      className="relative w-full aspect-square overflow-hidden rounded-xl shadow cursor-pointer group select-none"
      onClick={() => selectPhoto(photo)}
    >
      {/* Photo */}
      <img
        src={photo.picture}
        alt={`Fotka ${index + 1}`}
        className="absolute inset-0 w-full h-full object-cover transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:brightness-20"
      />

      {/* Overlay */}
      <div className="absolute inset-0 flex flex-col justify-between p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out text-white">
        {/* Icon */}
        <div className="flex justify-end">
          <div className="p-1 rounded-full">
            <FaExpandAlt />
          </div>
        </div>

        {/* Title */}
        <div className="px-2 py-1 rounded text-sm text-left">{photo.title}</div>
      </div>
    </div>
  );
}
