import { usePhotoStore } from "../stores/photoStore";
import CategorySelector from "../components/CategorySelector";
import { useEffect } from "react";
import PhotoGallery from "../components/PhotoGallery";
import Lightbox from "../components/Lightbox";

export default function Portfolio() {
  const { selectPhoto, selectedPhoto } = usePhotoStore();

  // ESC to close Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        selectPhoto(null);
      }
    };

    if (selectedPhoto) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedPhoto, selectPhoto]);

  return (
    <div className="grid grid-cols-[200px_1fr] w-full h-full">
      {/* CATEGORIES */}
      <div className="p-4">
        <CategorySelector />
      </div>

      {/* GRID */}
      <div className="overflow-y-auto">
        <div className="p-4 overflow-auto">
          <PhotoGallery />
        </div>
      </div>

      {/* LIGHTBOX */}
      {selectedPhoto && <Lightbox />}
    </div>
  );
}
