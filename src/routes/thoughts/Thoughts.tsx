import React, { useState } from "react";

import { format, getMonth, getYear, isSameDay } from "date-fns";

import Avatar from "@/assets/avatar.png";
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
    const thoughtMonth = getMonth(thought.timestamp);

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
      <Card className="border-none">
        <CardHeader>
          <CardTitle>Thoughts</CardTitle>
          <CardDescription>
            kind of like my own personal twitter. random thoughts, ideas, etc.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex">
          <div className="flex flex-col border border-t-0 border-border bg-accent rounded-sm overflow-hidden">
            <div
              className={`flex cursor-pointer justify-center border-b-2 border-border p-1 hover:bg-primary ${
                selectedYear === null && selectedMonth === null
                  ? "bg-primary"
                  : ""
              }`}
              onClick={resetFilters}
            >
              <p>All</p>
            </div>
            {uniqueYears.map((year) => (
              <div
                key={year}
                className={`flex cursor-pointer justify-center border-b-2 border-border p-1 hover:bg-primary ${
                  selectedYear === year ? "bg-primary" : ""
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
                      className={`flex cursor-pointer justify-center border-b-2 border-border p-1 hover:bg-primary ${
                        selectedMonth === monthIndex ? "bg-primary" : ""
                      }`}
                      onClick={() => setSelectedMonth(monthIndex)}
                    >
                      <p>{getMonthName(monthIndex)}</p>
                    </div>
                  ))}
              </>
            )}
          </div>
          <div className="ml-4 flex max-w-3xl flex-1 flex-col gap-4 md:ml-8">
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
                      <p className="my-2 text-center text-sm text-muted-foreground">
                        {format(thought.timestamp, "MMMM d, yyyy")}{" "}
                      </p>
                    )}
                    <div className="relative rounded-lg rounded-tl-none border border-border bg-background p-4">
                      <div className="flex gap-2">
                        <div className="float-left block h-fit min-w-[32px] overflow-hidden rounded-sm border border-primary">
                          <img
                            src={Avatar}
                            className="h-[32px] w-[32px] min-w-[32px]"
                          />
                        </div>
                        <div>
                          <div className="flex flex-wrap gap-x-2">
                            <p className="leading-tight">nick</p>
                            <p className="leading-tight text-muted-foreground">
                              @daizycrown
                            </p>
                            <p className="leading-tight text-muted-foreground">
                              •
                            </p>
                            <p className="leading-tight text-muted-foreground">
                              {format(thought.timestamp, "HH:mm - MMM d, yyyy")}
                            </p>
                          </div>
                          <p>{thought.content}</p>
                        </div>
                      </div>
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
