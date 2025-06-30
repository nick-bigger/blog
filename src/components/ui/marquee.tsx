import React from "react";

type MarqueeProps = {
  speed?: number; // duration for one full loop
  className?: string;
  children: React.ReactNode;
};

export const Marquee = ({
  speed = 20,
  className = "",
  children,
}: MarqueeProps) => {
  return (
    <div className={`flex overflow-hidden ${className}`}>
      <div
        className="animate-marquee-loop flex w-max"
        style={{ animationDuration: `${speed}s` }}
      >
        <div className="flex items-center whitespace-nowrap">{children}</div>
        <div className="flex items-center whitespace-nowrap">{children}</div>
      </div>
    </div>
  );
};
