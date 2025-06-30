import { PropsWithChildren } from "react";

import { HomeButton } from "./HomeButton";

export const Poem = (props: PropsWithChildren) => {
  return (
    <div className="flex h-screen flex-col bg-[#141414] font-mono">
      <HomeButton />
      <div className="mx-12 mt-24 p-4 md:mt-48">
        <div className="max-w-[700px] text-xl lowercase text-white md:text-xl lg:text-2xl">
          {props.children}
        </div>
      </div>
    </div>
  );
};
