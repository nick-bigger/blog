import { useEffect, useState } from "react";

// Helper function to get ordinal suffix for dates (e.g., 1st, 2nd, 3rd)
const getOrdinalSuffix = (day: number): string => {
  if (day > 3 && day < 21) return "th"; // Covers 11th, 12th, 13th, etc.
  switch (day % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
};

export const Time = () => {
  const [currentDateFormatted, setCurrentDateFormatted] = useState<string>("");
  const [currentTimeFormatted, setCurrentTimeFormatted] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      // Format date part
      const day = now.toLocaleString("en-US", {
        timeZone: "America/Chicago",
        day: "numeric",
      });
      const month = now.toLocaleString("en-US", {
        timeZone: "America/Chicago",
        month: "short",
      });
      const year = now.toLocaleString("en-US", {
        timeZone: "America/Chicago",
        year: "numeric",
      });
      setCurrentDateFormatted(
        `${month} ${day}${getOrdinalSuffix(parseInt(day))}, ${year}`,
      );

      // Format time part
      const time = now.toLocaleTimeString("en-US", {
        timeZone: "America/Chicago",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true,
      });
      setCurrentTimeFormatted(`${time} CDT`);
    };

    // Update time immediately on mount
    updateTime();

    // Set up interval to update time every second
    const intervalId = setInterval(updateTime, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="font-mono">
      <p>{currentDateFormatted}</p>
      <p className="mt-1">{currentTimeFormatted}</p>
    </div>
  );
};
