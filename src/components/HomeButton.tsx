import { Link } from "react-router-dom";

export const HomeButton = () => {
  return (
    <Link to="../">
      <svg
        width="30px"
        height="30px"
        viewBox="0 0 30 30"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g stroke="none" strokeWidth="2" fill="none" fillRule="evenodd">
          <g id="30x30">
            <rect
              id="Rectangle"
              stroke="#000000"
              x="1"
              y="1"
              width="30"
              height="30"
            ></rect>
            <circle id="Oval" fill="#000000" cx="16" cy="16" r="8"></circle>
          </g>
        </g>
      </svg>
    </Link>
  );
};
