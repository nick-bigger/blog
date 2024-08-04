import { Link } from "react-router-dom";

import Logo from "../assets/logo.svg";

const waldosia = [
  { title: "Her", slug: "her" },
  { title: "Mother", slug: "mother" },
  { title: "In My Dreams", slug: "inMyDreams" },
  { title: "Remains", slug: "remains" },
  { title: "My Heart Can Barely Swim", slug: "myHeartCanBarelySwim" },
  { title: "The Night We Met", slug: "theNightWeMet" },
];
const evenAWorm = [
  { title: "Back", slug: "back" },
  { title: "Apologize", slug: "apologize" },
  { title: "I Can't Make You Stay", slug: "stay" },
  { title: "Stuck", slug: "stuck" },
];
const occhiolism = [
  { title: "Retrograde", slug: "retrograde" },
  { title: "Read 2:27AM", slug: "227" },
  {
    title: "Secure Your Own Mask First",
    slug: "secureYourOwnMask",
  },
];

export const Home = () => {
  return (
    <div className="overflow-clip">
      <div className="flex py-36">
        <img src={Logo} className="h-48" />
        <p className="text-2xl [writing-mode:vertical-lr]">conifer crown</p>
      </div>
      <div className="flex justify-start bg-[#141414] p-8">
        <p className="text-2xl text-white">collections</p>
      </div>
      <hr className="h-1 w-8 bg-white" />
      <div className="flex justify-start bg-[#141414] p-8">
        <div className="flex flex-col items-start">
          <div className="py-20">
            <p className="pb-10 text-2xl text-white">waldosia</p>
            <div className="">
              {waldosia.map((option, idx) => (
                <Link to={option.slug} key={idx}>
                  <p className="text-2xl lowercase text-white lg:text-2xl">
                    {option.title}
                  </p>
                </Link>
              ))}
            </div>
          </div>
          <hr className="h-1 w-8 bg-white" />
          <div className="py-20">
            <p className="pb-10 text-2xl text-white">even a worm will turn</p>
            <div className="">
              {evenAWorm.map((option, idx) => (
                <Link to={option.slug} key={idx}>
                  <p className="text-2xl lowercase text-white lg:text-2xl">
                    {option.title}
                  </p>
                </Link>
              ))}
            </div>
          </div>
          <hr className="h-1 w-8 bg-white" />
          <div className="py-20">
            <p className="pb-10 text-2xl text-white">occhiolism</p>
            <div className="">
              {occhiolism.map((option, idx) => (
                <Link to={option.slug} key={idx}>
                  <p className="text-2xl lowercase text-white lg:text-2xl">
                    {option.title}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
