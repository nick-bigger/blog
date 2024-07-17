import { HomeButton } from "../components/HomeButton";
import { P } from "../components/Typography";

export const Lines = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#D8DACF]">
      <HomeButton />
      {Array.from({ length: 10 }).map((_, index) => (
        <div
          key={index}
          className="absolute h-1 w-full bg-[#141414]"
          style={{
            transform: `rotate(${Math.random() * 100}deg)`,
            transformOrigin: "top left",
            top: `${Math.random() * 100}vh`,
            left: `${Math.random() * 100}vw`,
          }}
        >
          <div className="m-auto w-[700px]">
            <div className="w-[300px] flex-col space-y-5 font-mono">
              <P>the thin lines</P>
              <P>that divide my life</P>
              <P>are suprisingly rigid</P>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
