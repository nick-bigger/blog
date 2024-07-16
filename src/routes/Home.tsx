import { Link } from "react-router-dom";

import Logo from "../assets/logo.svg";

const poems = ["Her", "Lines", "Mother", "In My Dreams"];
const stories = ["Back", "Apologize"];

export const Home = () => {
  const poemWall = Array.from(
    { length: 30 * poems.length },
    () => poems[Math.floor(Math.random() * poems.length)],
  );
  const storyWall = Array.from(
    { length: 30 * stories.length },
    () => stories[Math.floor(Math.random() * stories.length)],
  );

  return (
    <div className="overflow-clip">
      <div className="flex flex-col gap-6 p-2 lg:p-6">
        <hr className="w-full border-black" />
        <div className="p-2">
          <div className="flex justify-between">
            <div>
              <p className="font-mono text-[10px] md:text-[15px] lg:text-[15px]">
                A COLLECTION OF THINGS
              </p>
              <p className="font-mono text-[10px] md:text-[15px] lg:text-[15px]">
                LOST IN AUSTIN
              </p>
            </div>
            <div>
              <p className="font-mono text-[10px] font-medium md:text-[15px] lg:text-[15px]">
                9F2F4D8E-478B36
              </p>
            </div>
          </div>
        </div>
        <hr className="w-full border-black" />
      </div>
      <div className="m-auto flex max-w-[1300px] flex-col p-6 pb-12 pt-8">
        <p className="text-[70px] font-black leading-[70px] tracking-tight sm:text-[100px] sm:leading-[100px] md:text-[150px] md:leading-[150px] lg:text-[200px] lg:leading-[200px]">
          Conifer
        </p>
        <p className="text-end text-[70px] font-black leading-[70px] tracking-tight sm:text-[100px] sm:leading-[100px] md:text-[150px] md:leading-[150px] lg:text-[200px] lg:leading-[200px]">
          Crown
        </p>
      </div>
      <div className="m-auto flex justify-center pb-12">
        <img src={Logo} className="h-16 md:h-36 lg:h-48" />
      </div>
      <div className="h-4 w-56 bg-red-600"></div>
      <hr className="border-black" />
      <p className="py-2">
        C/O/L/L/E/C/T/I/O/N/S///////////////////////////////////////////////////////////////////
      </p>
      <hr className="border-black" />
      <p className="bg-black py-20 pl-8 text-start font-mono text-3xl tracking-widest text-white">
        YOU
      </p>
      <div className="bg-black pb-20">
        <div className="mx-[-500px] flex flex-wrap gap-2 overflow-clip">
          {poemWall.map((option, idx) => (
            <Link to={`${option.replace(/\s+/g, "").toLowerCase()}`} key={idx}>
              <p
                className={`text-1xl uppercase lg:text-2xl ${idx % 2 === 0 ? "text-gray-400" : "text-white"}`}
              >
                {option}
              </p>
            </Link>
          ))}
        </div>
      </div>
      <hr className="border-black" />
      <p className="my-20 mr-8 text-end font-mono text-3xl tracking-widest">
        LOVE INURED
      </p>
      <div className="mx-[-500px] flex flex-wrap gap-2 overflow-clip">
        {storyWall.map((option, idx) => (
          <Link to={`${option.replace(/\s+/g, "").toLowerCase()}`} key={idx}>
            <p
              className={`text-1xl uppercase lg:text-2xl ${idx % 2 === 0 ? "text-gray-400" : "text-black"}`}
            >
              {option}
            </p>
          </Link>
        ))}
      </div>
      <hr className="mt-20 border-black" />
      <p className="py-2 text-end">
        /////////////////////////////////////////////////////////////////////////////
      </p>
      <hr className="border-black" />
    </div>
  );
};
