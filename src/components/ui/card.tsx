import React from "react";

import { cn } from "@/lib/utils";

function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn(
        "relative flex-1 border border-white bg-gray-900 p-5 hover:border-blue-400",
        className,
      )}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn(
        "text-1xl absolute left-[17px] top-[-13px] bg-gray-900 px-1 font-normal lowercase text-white",
        className,
      )}
      {...props}
    />
  );
}

export { Card, CardTitle };
