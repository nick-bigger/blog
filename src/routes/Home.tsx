import { Link } from "react-router-dom";

const options = ["her", "lines", "apologize"];

export const Home = () => {
  const wordWall = Array.from(
    { length: 400 },
    () => options[Math.floor(Math.random() * options.length)],
  );

  return (
    <div className="h-screen overflow-hidden">
      <div className="p-2 flex gap-6 lg:p-6">
        <hr className="w-full border-black" />
        <div className="p-6">
          <p className="text-[15px]">A COLLECTION OF THINGS</p>
        </div>
        <hr className="w-full border-black" />
      </div>
      <div className="flex lg:p-10 p-6">
        <div className="w-screen">
          <p className="text-[100px] tracking-tight leading-[0.9] pb-20 lg:text-[200px]">
            Conifer
          </p>
          <p className="text-[100px] tracking-tight leading-[0.9] text-end lg:text-[200px]">
            Crown
          </p>
        </div>
      </div>
      <div className="flex gap-2 overflow-clip flex-wrap mx-[-500px]">
        {wordWall.map((option, idx) => (
          <Link to={`${option}`} key={idx}>
            <p
              className={`text-3xl uppercase ${idx % 2 === 0 ? "text-gray-300" : "text-black"}`}
            >
              {option}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};
