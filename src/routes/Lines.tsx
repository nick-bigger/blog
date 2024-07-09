import { P } from "../components/Typography";


export const Lines = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {Array.from({ length: 10 }).map((_, index) => (
        <div
          key={index}
          className="absolute w-full h-1 bg-black opacity-10"
          style={{
            transform: `rotate(${Math.random() * 100}deg)`,
            transformOrigin: 'top left',
            top: `${Math.random() * 100}vh`,
            left: `${Math.random() * 100}vw`,
          }}
        >
        <div className="w-[700px] m-auto">
          <div className="flex-col space-y-5 w-[300px]">
            <P>the thin lines</P>
            <P>that divide my life</P>
            <P>are suprisingly rigid</P>
          </div>
        </div>
      </div>
      ))}
    </div>
  );
}