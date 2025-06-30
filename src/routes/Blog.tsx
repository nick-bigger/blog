import { Outlet } from "react-router-dom";

import StarsGif from "../assets/stars.gif";

export const Blog = () => {
  return (
    <div
      className="font-pixel text-md min-h-screen bg-gray-900 p-4 tracking-wider text-gray-100"
      style={{
        backgroundImage: `url(${StarsGif})`,
      }}
    >
      <Outlet />
    </div>
  );
};
