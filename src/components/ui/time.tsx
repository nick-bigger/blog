import { useEffect, useState } from "react";

export const Time = () => {
  const [currentTimeFormatted, setCurrentTimeFormatted] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      // Format time part
      const time = now.toLocaleTimeString("en-US", {
        timeZone: "America/Chicago",
        hour: "numeric",
        minute: "numeric",
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

  return <p className="mt-1">{currentTimeFormatted}</p>;
};
