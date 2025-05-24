import { photoCategories } from "../enums/photoCategory";
import { usePhotoStore } from "../stores/photoStore";

export default function CategorySelector() {
  const { selectedCategory, selectCategory } = usePhotoStore();
  return (
    <div className="flex flex-wrap gap-2">
      {photoCategories.map(({ id, label, icon }) => {
        const isActive = selectedCategory === id;

        return (
          <button
            key={id}
            onClick={() => selectCategory(isActive ? null : id)}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium border transition
              ${
                isActive
                  ? "bg-white text-black border-white"
                  : "bg-black/30 text-white border-white/30 hover:bg-black/40"
              }`}
          >
            <span className="text-lg">{icon}</span>
            {label}
            {isActive && <span>X</span>}
          </button>
        );
      })}
    </div>
  );
}
