import { PropsWithChildren } from "react";

import { HomeButton } from "./HomeButton";

export const Poem = (props: PropsWithChildren) => {
  return (
    <div className="flex h-screen flex-col justify-center bg-[#141414]">
      <HomeButton />
      <div className="m-auto p-4">
        <div className="max-w-[500px] flex-col text-2xl lowercase leading-10 text-white">
          {props.children}
        </div>
      </div>
    </div>
  );
};
