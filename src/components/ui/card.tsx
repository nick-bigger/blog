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
      className="text-1xl absolute left-[17px] top-[-13px] bg-gray-900 px-1 font-normal lowercase text-white"
      {...props}
    ></h2>
  );
};

export { Card, CardTitle };
