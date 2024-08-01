import { PropsWithChildren } from "react";

import { HomeButton } from "./HomeButton";

export const Poem = (props: PropsWithChildren) => {
  return (
    <div className="flex h-screen flex-col bg-[#141414]">
      <HomeButton />
      <div className="mx-auto mt-48 p-4 md:ml-48 md:mt-48">
        <div className="max-w-[700px] text-lg lowercase text-white md:text-xl lg:text-2xl">
          {props.children}
        </div>
      </div>
    </div>
  );
};
