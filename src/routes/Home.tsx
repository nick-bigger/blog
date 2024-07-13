import { Link } from "react-router-dom";

const options = ["her", "lines", "apologize"];

export const Home = () => {
  const wordWall = Array.from(
    { length: 400 },
    () => options[Math.floor(Math.random() * options.length)],
  );

  return (
    <div>
      <div className="flex flex-col gap-6 p-2 lg:p-6">
        <hr className="w-full border-black" />
        <div className="p-2">
          <div className="flex justify-between">
            <div>
              <p className="font-mono text-[15px]">A COLLECTION OF THINGS</p>
              <p className="font-mono text-[15px]">LOST IN AUSTIN</p>
            </div>
            <div>
              <p className="font-mono text-[15px] font-medium">
                9F2F4D8E-478B36
              </p>
            </div>
          </div>
        </div>
        <hr className="w-full border-black" />
      </div>
      <div className="flex flex-col px-6 pb-0">
        <p className="text-[70px] font-black tracking-tight sm:text-[100px] md:text-[150px] lg:text-[200px]">
          Conifer
        </p>
        <p className="text-[70px] font-black tracking-tight sm:text-[100px] md:text-[150px] lg:text-end lg:text-[200px]">
          Crown
        </p>
      </div>
      <hr className="mb-2 border-black lg:m-6" />
      <div className="mx-[-500px] flex h-[300px] flex-wrap gap-2 overflow-clip">
        {wordWall.map((option, idx) => (
          <Link to={`${option}`} key={idx}>
            <p
              className={`text-2xl uppercase ${idx % 2 === 0 ? "text-gray-300" : "text-black"}`}
            >
              {option}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};
