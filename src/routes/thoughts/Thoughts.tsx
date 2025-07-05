import React from "react";

import { format, formatRelative, isSameDay } from "date-fns";

import { Card } from "@/components/ui/card";

import { thoughts } from "../../data/thoughts";

export const Thoughts = () => {
  let previousTimestamp: Date | null = null;

  return (
    <div className="mx-auto max-w-7xl">
      <Card className="rounded-sm border-2 border-black bg-white p-[2px]">
        <div className="rounded-sm bg-gray-800 p-4">
          <h3 className="mb-4 text-3xl text-white">thoughts</h3>
          <p className="mb-4 text-gray-300">
            kind of like my own personal twitter. random thoughts, ideas, etc.
          </p>
          <div className="ml-4 flex max-w-3xl flex-col gap-4">
            {thoughts.map((thought, index) => {
              const showDateSeparator =
                previousTimestamp &&
                !isSameDay(thought.timestamp, previousTimestamp);

              // Update previousTimestamp for the next iteration
              previousTimestamp = thought.timestamp;

              return (
                <React.Fragment key={thought.timestamp.toISOString() + index}>
                  {showDateSeparator && (
                    <p className="my-2 text-center text-sm text-gray-300">
                      {format(thought.timestamp, "MMMM d, yyyy")}{" "}
                    </p>
                  )}
                  <Card className="relative rounded-tl-none bg-white text-black hover:border-white">
                    <div
                      className="absolute left-0 top-0 h-0 w-0 -translate-x-full -translate-y-px rotate-[90deg] transform-gpu border-r-[12px] border-t-[12px] border-r-transparent border-t-white"
                      style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
                    ></div>
                    <p className="mb-1 text-sm text-gray-500">
                      {formatRelative(thought.timestamp, new Date())}
                    </p>
                    <p>{thought.content}</p>
                  </Card>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </Card>
    </div>
  );
};
