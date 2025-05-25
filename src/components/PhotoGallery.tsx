import { usePhotoStore } from "../stores/photoStore";
import PhotoPreview from "./PhotoPreview";

export default function PhotoGallery() {
  const { filteredPhotos } = usePhotoStore();
  return (
    <div className="h-full grid grid-cols-2 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-6 gap-4">
      {filteredPhotos().map((item, index) => (
        <PhotoPreview key={index} photo={item} index={index} />
      ))}
    </div>
  );
}
