export const CRTScreen = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      <div
        className="absolute inset-0 bg-repeat-y"
        style={{
          backgroundImage:
            "linear-gradient(to top, rgba(0, 0, 0, 0.3) 1px, transparent 1px)",
          backgroundSize: "100% 2px",
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/10 to-transparent"></div>
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          background:
            "repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(0,0,0,.9) 2px, transparent 3px)",
          filter: "url(#noiseFilter)",
        }}
      ></div>
    </div>
  );
};
