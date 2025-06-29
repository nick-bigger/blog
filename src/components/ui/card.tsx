import { PropsWithChildren } from "react";

const Card = (props: PropsWithChildren) => {
  return (
    <div
      className="relative flex-1 border border-white bg-gray-900 p-5"
      {...props}
    ></div>
  );
};

const CardTitle = (props: PropsWithChildren) => {
  return (
    <h2
      className="absolute left-[17px] top-[-18px] bg-gray-900 px-1 text-2xl font-normal text-white"
      {...props}
    ></h2>
  );
};

export { Card, CardTitle };
