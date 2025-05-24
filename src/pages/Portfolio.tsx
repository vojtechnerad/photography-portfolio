import { useState } from "react";
import { usePhotoStore } from "../stores/photoStore";

export default function Portfolio() {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const { photoList: photos } = usePhotoStore();

  return (
    <>
      {/* GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4">
        {photos.map((item, index) => (
          <div
            key={index}
            className="relative w-full aspect-square overflow-hidden rounded-xl shadow cursor-pointer"
            onClick={() => setSelectedPhoto(item.picture)}
          >
            <img
              src={item.picture}
              alt={`Fotka ${index + 1}`}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* LIGHTBOX */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center"
          onClick={() => setSelectedPhoto(null)}
        >
          <div className="max-w-3xl max-h-[90vh] relative">
            <img
              src={selectedPhoto}
              alt="Detailní pohled"
              className="rounded-lg max-w-full max-h-full object-contain"
            />
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-2 right-2 text-white text-2xl bg-black/50 hover:bg-black/70 rounded-full w-10 h-10 flex items-center justify-center"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
