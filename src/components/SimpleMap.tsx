import { useState } from "react";

type Props = {
  lat: number;
  lng: number;
};

export default function SimpleMap({ lat, lng }: Props) {
  const [loaded, setLoaded] = useState(false);
  const mapUrl = `https://www.google.com/maps?q=${lat},${lng}&z=18&output=embed`;

  return (
    <div className="relative w-full h-64 rounded-lg overflow-hidden shadow bg-gray-200">
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <span className="text-gray-500 text-sm animate-pulse">
            Načítám mapu...
          </span>
        </div>
      )}

      <iframe
        src={mapUrl}
        width="100%"
        height="300px"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        onLoad={() => setLoaded(true)}
        className={`w-full h-full transition-opacity duration-300 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
