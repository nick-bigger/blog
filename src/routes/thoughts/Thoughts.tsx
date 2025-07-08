import React, { useState } from "react";

// Import useState
import { format, formatRelative, getMonth, getYear, isSameDay } from "date-fns";

// Import getYear, getMonth
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { thoughts } from "../../data/thoughts";

export const Thoughts = () => {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  // Month is 0-indexed.
  const [selectedMonth, setSelectedMonth] = useState<number | null>(null);

  let previousTimestamp: Date | null = null;

  // Filter thoughts based on selectedYear and selectedMonth.
  const filteredThoughts = thoughts.filter((thought) => {
    const thoughtYear = getYear(thought.timestamp);
    const thoughtMonth = getMonth(thought.timestamp); // 0-indexed

    if (selectedYear !== null && thoughtYear !== selectedYear) {
      return false;
    }
    if (selectedMonth !== null && thoughtMonth !== selectedMonth) {
      return false;
    }
    return true;
  });

  // Get unique years and months from the thoughts data for sidebar.
  const uniqueYears = Array.from(
    new Set(thoughts.map((thought) => getYear(thought.timestamp))),
  ).sort((a, b) => b - a);
  const uniqueMonths = Array.from(
    new Set(thoughts.map((thought) => getMonth(thought.timestamp))),
  );

  const getMonthName = (monthIndex: number) => {
    // Dummy date to get month name.
    const date = new Date(2000, monthIndex, 1);
    return format(date, "MMM");
  };

  const resetFilters = () => {
    setSelectedYear(null);
    setSelectedMonth(null);
  };

  return (
    <div className="mx-auto max-w-7xl">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Thoughts</CardTitle>
          <CardDescription>
            kind of like my own personal twitter. random thoughts, ideas, etc.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex p-0">
          <div className="flex flex-col border border-black bg-gray-300 text-black">
            <div
              className={`flex cursor-pointer justify-center border-b-2 border-black p-1 hover:bg-gray-400 ${
                selectedYear === null && selectedMonth === null
                  ? "bg-gray-400"
                  : ""
              }`}
              onClick={resetFilters}
            >
              <p>All</p>
            </div>
            {uniqueYears.map((year) => (
              <div
                key={year}
                className={`flex cursor-pointer justify-center border-b-2 border-black p-1 hover:bg-gray-400 ${
                  selectedYear === year ? "bg-gray-400" : ""
                }`}
                onClick={() => {
                  setSelectedYear(year);
                  setSelectedMonth(null);
                }}
              >
                <p>{year}</p>
              </div>
            ))}
            {selectedYear !== null && (
              <>
                {uniqueMonths
                  .sort((a, b) => b - a)
                  .map((monthIndex) => (
                    <div
                      key={monthIndex}
                      className={`flex cursor-pointer justify-center border-b-2 border-black p-1 hover:bg-gray-400 ${
                        selectedMonth === monthIndex ? "bg-gray-400" : ""
                      }`}
                      onClick={() => setSelectedMonth(monthIndex)}
                    >
                      <p>{getMonthName(monthIndex)}</p>
                    </div>
                  ))}
              </>
            )}
          </div>
          <div className="m-2 ml-4 flex max-w-3xl flex-1 flex-col gap-4 md:m-4 md:ml-8">
            {filteredThoughts.length === 0 ? (
              <p className="text-gray-600">
                No thoughts found for this selection.
              </p>
            ) : (
              filteredThoughts.map((thought, index) => {
                const showDateSeparator =
                  previousTimestamp &&
                  !isSameDay(thought.timestamp, previousTimestamp);

                previousTimestamp = thought.timestamp;

                return (
                  <React.Fragment key={thought.timestamp.toISOString() + index}>
                    {showDateSeparator && (
                      <p className="my-2 text-center text-sm text-gray-300">
                        {format(thought.timestamp, "MMMM d, yyyy")}{" "}
                      </p>
                    )}
                    <div className="relative rounded-lg rounded-tl-none bg-white p-4 text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                      <div
                        className="absolute left-[1px] top-[1px] h-0 w-0 -translate-x-full -translate-y-px rotate-[90deg] transform-gpu border-r-[12px] border-t-[12px] border-r-transparent border-t-white"
                        style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
                      ></div>
                      <p className="mb-1 text-gray-500">
                        {formatRelative(thought.timestamp, new Date())}
                      </p>
                      <p>{thought.content}</p>
                    </div>
                  </React.Fragment>
                );
              })
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
