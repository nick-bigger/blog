import React from "react";

import { cn } from "@/lib/utils";

function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className="relative flex-1 rounded-sm border-2 border-black bg-white p-[2px]"
    >
      <div className={cn("rounded-sm bg-gray-800 p-4", className)} {...props} />
    </div>
  );
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("text-1xl font-normal uppercase text-white", className)}
      {...props}
    />
  );
}

export { Card, CardTitle };
