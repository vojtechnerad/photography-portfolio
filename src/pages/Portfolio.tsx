import { GoDot } from "react-icons/go";
import PhotoMetaItem from "../components/PhotoMetaItem";
import { usePhotoStore } from "../stores/photoStore";
import { photoCategories, PhotoCategory } from "../enums/photoCategory";
import CategorySelector from "../components/CategorySelector";

export default function Portfolio() {
  const { filteredPhotos, selectPhoto, selectedPhoto } = usePhotoStore();

  return (
    <>
      {/* CATEGORIES */}
      <CategorySelector />
      {/* GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4">
        {filteredPhotos().map((item, index) => (
          <div
            key={index}
            className="relative w-full aspect-square overflow-hidden rounded-xl shadow cursor-pointer"
            onClick={() => selectPhoto(item)}
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
          onClick={() => selectPhoto(null)}
        >
          <div
            className="w-[90vw] h-[90vh] bg-black rounded-lg overflow-hidden flex"
            onClick={(e) => e.stopPropagation()}
          >
            {/* LEVÝ PANEL */}
            <div className="w-[300px] p-4 text-white border-r border-white/20 overflow-y-auto">
              <h2 className="text-xl font-semibold mb-2">
                {selectedPhoto.title}
              </h2>
              {selectedPhoto.description && (
                <p className="text-sm opacity-80">
                  {selectedPhoto.description}
                </p>
              )}

              {selectedPhoto.iso && (
                <PhotoMetaItem
                  icon={<GoDot />}
                  label="ISO"
                  value={selectedPhoto.iso}
                />
              )}

              {selectedPhoto.aperture && (
                <PhotoMetaItem
                  icon={<GoDot />}
                  label="Aperture"
                  value={selectedPhoto.aperture}
                />
              )}

              {selectedPhoto.shutterSpeed && (
                <PhotoMetaItem
                  icon={<GoDot />}
                  label="shutterSpeed"
                  value={selectedPhoto.shutterSpeed}
                />
              )}

              {selectedPhoto.shutterSpeed && (
                <PhotoMetaItem
                  icon={<GoDot />}
                  label="shutterSpeed"
                  value={selectedPhoto.shutterSpeed}
                />
              )}
            </div>

            {/* FOTKA */}
            <div className="flex-grow flex items-center justify-center relative bg-black">
              <img
                src={selectedPhoto.picture}
                alt="Detailní pohled"
                className="max-w-full max-h-full object-contain"
              />
              <button
                onClick={() => selectPhoto(null)}
                className="absolute top-2 right-2 text-white text-2xl bg-black/50 hover:bg-black/70 rounded-full w-10 h-10 flex items-center justify-center"
              >
                ✕
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
