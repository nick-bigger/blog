import { Link } from "react-router-dom";

import Logo from "../assets/logo.svg";

const waldosia = ["Her", "Mother", "In My Dreams"];
const evenAWorm = ["Back", "Apologize", "I Cant Make You Stay But"];
const occhiolism = ["Lines", "Good"];

export const Home = () => {
  return (
    <div className="overflow-clip">
      <div className="flex py-36">
        <img src={Logo} className="h-48" />
        <p className="text-2xl [writing-mode:vertical-lr]">conifer crown</p>
      </div>
      <div className="bg-[#141414] pb-40">
        <p className="pb-20 text-start text-4xl text-white">waldosia.</p>
        <div className="">
          {waldosia.map((option, idx) => (
            <Link to={`${option.replace(/\s+/g, "").toLowerCase()}`} key={idx}>
              <p className="text-2xl lowercase text-white lg:text-3xl">
                {option}
              </p>
            </Link>
          ))}
        </div>
      </div>
      <p className="mb-20 text-end text-4xl">.even a worm will turn</p>
      <div className="pb-40 text-end">
        {evenAWorm.map((option, idx) => (
          <Link to={`${option.replace(/\s+/g, "").toLowerCase()}`} key={idx}>
            <p className="text-2xl lowercase text-[#141414] lg:text-3xl">
              {option}
            </p>
          </Link>
        ))}
      </div>
      <div className="bg-[#141414] pb-64">
        <p className="pb-20 text-start text-4xl text-white">occhiolism.</p>
        <div className="pb-40">
          {occhiolism.map((option, idx) => (
            <Link to={`${option.replace(/\s+/g, "").toLowerCase()}`} key={idx}>
              <p className="text-2xl lowercase text-white lg:text-3xl">
                {option}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
