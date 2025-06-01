import { ReactNode } from "react";

type Props = {
  icon: ReactNode;
  label: string;
  value?: string | number;
};

export default function PhotoMetaItem({ icon, label, value }: Props) {
  return (
    <div className="flex items-center gap-3 text-white rounded-xl py-1.5">
      {/* Icon */}
      <div className="w-6 h-6 flex items-center justify-center text-xl">
        {icon}
      </div>

      {/* Texts */}
      <div className="flex flex-col leading-tight">
        <span className="text-xs text-white/60">{label}</span>
        {value && <span className="font-semibold text-sm">{value}</span>}
      </div>
    </div>
  );
}
