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
    title: "Secure Your Own Mask First Before Helping Others",
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
      <div className="bg-[#141414] pb-40">
        <p className="pb-20 text-start text-4xl text-white">waldosia.</p>
        <div className="pl-4">
          {waldosia.map((option, idx) => (
            <Link to={option.slug} key={idx}>
              <p className="text-2xl lowercase text-white underline lg:text-2xl">
                {option.title}
              </p>
            </Link>
          ))}
        </div>
      </div>
      <div className="pb-40">
        <p className="pb-20 text-end text-4xl text-[#141414]">
          .even a worm will turn
        </p>
        <div className="pr-4">
          {evenAWorm.map((option, idx) => (
            <Link to={option.slug} key={idx}>
              <p className="text-end text-2xl lowercase text-[#141414] underline lg:text-2xl">
                {option.title}
              </p>
            </Link>
          ))}
        </div>
      </div>
      <div className="bg-[#141414] pb-40">
        <p className="pb-20 text-start text-4xl text-white">occhiolism.</p>
        <div className="pl-4">
          {occhiolism.map((option, idx) => (
            <Link to={option.slug} key={idx}>
              <p className="text-2xl lowercase text-white underline lg:text-2xl">
                {option.title}
              </p>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex h-screen items-center justify-center">
        <p className="font-mono text-2xl italic">fin</p>
      </div>
    </div>
  );
};
