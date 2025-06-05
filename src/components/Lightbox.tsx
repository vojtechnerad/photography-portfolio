import PhotoMetaItem from "../components/PhotoMetaItem";
import SimpleMap from "../components/SimpleMap";
import { photoCategories } from "../enums/photoCategory";
import { usePhotoStore } from "../stores/photoStore";
import { MdIso, MdShutterSpeed, MdZoomIn } from "react-icons/md";
import { IoIosClose, IoMdAperture } from "react-icons/io";
import { BiCalendar, BiMap } from "react-icons/bi";
import { ShootingMode } from "../enums/shootingMode";
import { ReactNode } from "react";
import { TbMacroFilled } from "react-icons/tb";
import { HiOutlineEye } from "react-icons/hi";

const formatDate = (date: Date): string => {
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  return `${date.toLocaleDateString()} ${hours}:${minutes}`;
};

const shootingModeIcon = (mode: ShootingMode): ReactNode => {
  if (mode === ShootingMode.Macro) return <TbMacroFilled className="w-6 h-6" />;

  let text = "";
  if (mode === ShootingMode.AperturePriority) text = "Av";
  if (mode === ShootingMode.ShutterPriority) text = "Tv";
  return (
    <div className="w-6 h-6 rounded-full text-sm flex justify-center items-center font-bold select-none">
      {text}
    </div>
  );
};

const separator: ReactNode = <div className="py-1"></div>;

export default function Lightbox() {
  const { selectPhoto, selectedPhoto: photo } = usePhotoStore();
  return (
    photo && (
      <div
        className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center"
        onClick={() => selectPhoto(null)}
      >
        <div
          className="w-[90vw] h-[90vh] bg-[#121212] rounded-lg overflow-scroll sm:overflow-hidden flex flex-col sm:flex-row-reverse"
          onClick={(e) => e.stopPropagation()}
        >
          {/* FOTKA  */}
          <div className="flex items-center justify-center relative bg-black h-fit sm:h-auto sm:w-full">
            <img
              src={photo.picture}
              alt="Detailní pohled"
              className="max-w-full max-h-[500px] sm:max-h-full sm:h-full object-contain"
            />
            <button
              onClick={() => selectPhoto(null)}
              className="absolute top-2 right-2 text-white bg-black rounded-full  flex items-center justify-center hover:cursor-pointer p-1"
            >
              <IoIosClose className="w-8 h-8" />
              <span className="px-2">Zavřít</span>
            </button>
          </div>

          {/* LEVÝ PANEL */}
          <div className="sm:w-[300px] p-4 text-white sm:overflow-y-auto">
            <h2 className="text-xl font-semibold mb-2">{photo.title}</h2>

            <div className="py-2">
              {photo.categories.map((cat) => {
                const category = photoCategories.find((x) => x.id === cat);
                if (category) {
                  return (
                    <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/10 text-white text-sm font-medium">
                      <span className="text-lg">{category.icon}</span>
                      <span>{category.label}</span>
                    </div>
                  );
                }
              })}
            </div>

            {separator}

            <div className="flex flex-col">
              {photo.aperture && (
                <PhotoMetaItem
                  icon={<IoMdAperture />}
                  label="Clona"
                  value={photo.aperture}
                />
              )}

              {photo.shutterSpeed && (
                <PhotoMetaItem
                  icon={<MdShutterSpeed />}
                  label="Rychlost závěrky"
                  value={photo.shutterSpeed}
                />
              )}

              {photo.iso && (
                <PhotoMetaItem icon={<MdIso />} label="ISO" value={photo.iso} />
              )}

              {photo.focalLength && (
                <PhotoMetaItem
                  icon={<HiOutlineEye />}
                  label="Ohnisková vzdálenost"
                  value={photo.focalLength}
                />
              )}

              {photo.shootingMode && (
                <PhotoMetaItem
                  icon={shootingModeIcon(photo.shootingMode)}
                  label="Režim"
                  value={photo.shootingMode}
                />
              )}
            </div>

            {separator}

            {photo.dateTaken && (
              <PhotoMetaItem
                icon={<BiCalendar />}
                label="Datum a čas pořízení"
                value={formatDate(photo.dateTaken)}
              />
            )}

            {photo.location && (
              <>
                <PhotoMetaItem icon={<BiMap />} label="Lokace" />
                <SimpleMap lat={photo.location.lat} lng={photo.location.lng} />
              </>
            )}
          </div>
        </div>
      </div>
    )
  );
}
