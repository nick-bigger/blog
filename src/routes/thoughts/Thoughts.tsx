import React from "react";

import { format, formatRelative, isSameDay } from "date-fns";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { thoughts } from "../../data/thoughts";

export const Thoughts = () => {
  let previousTimestamp: Date | null = null;

  return (
    <div className="mx-auto max-w-7xl">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Thoughts</CardTitle>
          <CardDescription>
            kind of like my own personal twitter. random thoughts, ideas, etc.
          </CardDescription>
        </CardHeader>
        <CardContent>
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
                  <div className="relative flex-1 rounded-lg rounded-tl-none bg-white p-4 text-black">
                    <div
                      className="absolute left-0 top-[1px] h-0 w-0 -translate-x-full -translate-y-px rotate-[90deg] transform-gpu border-r-[12px] border-t-[12px] border-r-transparent border-t-white"
                      style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
                    ></div>
                    <p className="mb-1 text-sm text-gray-500">
                      {formatRelative(thought.timestamp, new Date())}
                    </p>
                    <p>{thought.content}</p>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
