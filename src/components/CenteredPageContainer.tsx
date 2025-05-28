import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};
export default function CenteredPageContainer({ children }: Props) {
  return (
    <div className="w-full h-full flex flex-col items-center overflow-auto select-none">
      <div className="max-w-screen-md">{children}</div>
    </div>
  );
}
