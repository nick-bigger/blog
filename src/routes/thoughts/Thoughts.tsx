import React from "react";

import { format, formatRelative, isSameDay } from "date-fns";
import { Link } from "react-router-dom";

import { Card } from "@/components/ui/card";

import { thoughts } from "../../data/thoughts";

export const Thoughts = () => {
  let previousTimestamp: Date | null = null;

  return (
    <div className="mx-auto max-w-2xl p-1 pt-2 md:p-4">
      <Link to="/">back to home</Link>
      <Card className="mt-4 bg-[#141414]">
        <h3 className="mb-4 text-3xl text-white">thoughts</h3>
        <div className="ml-4 flex flex-col gap-4">
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
      </Card>
    </div>
  );
};
