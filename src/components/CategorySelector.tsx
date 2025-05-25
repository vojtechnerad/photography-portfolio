import { IoMdCloseCircle } from "react-icons/io";
import { photoCategories } from "../enums/photoCategory";
import { usePhotoStore } from "../stores/photoStore";

export default function CategorySelector() {
  const { selectedCategory, selectCategory } = usePhotoStore();

  return (
    <div className="flex flex-col gap-2 w-full select-none">
      {photoCategories.map(({ id, label, icon }) => {
        const isActive = selectedCategory === id;

        return (
          <button
            key={id}
            onClick={() => selectCategory(isActive ? null : id)}
            className={`px-3 py-2 rounded-lg text-sm font-medium border transition cursor-pointer ${
              isActive
                ? "bg-white text-black hover:bg-white/80"
                : "border-transparent hover:bg-white/10"
            }`}
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="text-lg">{icon}</span>
                {label}
              </div>
              {isActive && <IoMdCloseCircle />}
            </div>
          </button>
        );
      })}
    </div>
  );
}
