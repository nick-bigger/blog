import { PropsWithChildren } from "react";

import { HomeButton } from "./HomeButton";

export const Poem = (props: PropsWithChildren) => {
  return (
    <div className="flex h-screen justify-center overflow-hidden bg-[#141414]">
      <HomeButton />
      <div className="m-auto">
        <div className="max-w-[500px] flex-col text-2xl lowercase leading-10 text-white">
          {props.children}
        </div>
      </div>
    </div>
  );
};
