import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};
export default function CenteredPageContainer({ children }: Props) {
  return (
    <div className="w-full h-full flex flex-col items-center overflow-auto select-none pt-2">
      <div className="max-w-screen-md px-5">{children}</div>
    </div>
  );
}
