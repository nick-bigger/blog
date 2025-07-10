const WaveformBar = ({
  animationDelay,
  animationDuration,
  animationClass,
}: {
  animationDelay: number;
  animationDuration: number;
  animationClass: string;
}) => {
  return (
    <div
      className={`h-2 w-1 origin-bottom transform rounded-full bg-primary ${animationClass}`}
      style={{
        animationDelay: `${animationDelay}ms`,
        animationDuration: `${animationDuration}ms`,
      }}
    ></div>
  );
};

export const WaveForm = () => {
  const numBars = 5;
  const bars = Array.from({ length: numBars }); // Create an array to map over

  return (
    <div className="flex max-w-full items-center justify-start space-x-0.5 overflow-hidden p-1 sm:space-x-1">
      {bars.map((_, index) => {
        // Determine which animation class to use for variety
        const animationClass =
          index % 2 === 0 ? "animate-wave-up-down" : "animate-wave-pulse";
        // Calculate a unique delay for each bar to make the animation look random
        const delay = index * 30 + (Math.random() * 50 - 25); // Add slight randomness
        // Calculate a unique duration for each bar
        const duration = 1200 + (index % 7) * 50;

        return (
          <WaveformBar
            key={index}
            animationDelay={delay}
            animationDuration={duration}
            animationClass={animationClass}
          />
        );
      })}
    </div>
  );
};
