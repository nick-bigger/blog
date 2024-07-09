import { Link } from "react-router-dom";

const options = ["her", "lines", "apologize"];

export const Home = () => {
  const wordWall = Array.from({ length: 400 }, () => options[Math.floor(Math.random() * options.length)]);

  return (
    <div className="h-screen overflow-hidden">
      <div className="flex gap-10 p-10">
        <div>
          <p className="text-[200px] tracking-tight leading-[0.9] text-end pl-20">Conifer</p>
          <p className="text-[200px] tracking-tight leading-[0.9] text-start">Crown</p>
        </div>
        <div className="flex flex-1 justify-center">
          <p className="text-[15px] italic">A COLLECTION OF THINGS</p>
        </div>
      </div>
      <div className="flex gap-2 overflow-clip flex-wrap mx-[-500px]">
        {wordWall.map((option, idx) => 
          <Link to={`${option}`} key={idx}>
            <p className={`text-3xl uppercase ${idx % 2 === 0 ? "text-gray-300" : "text-black"}`}>{option}</p>
          </Link>)
        }
      </div>
    </div>
  );
}