import { Link, Outlet } from "react-router-dom";

import { Card, CardTitle } from "@/components/ui/card";
import { Time } from "@/components/ui/time";

import StarsGif from "../assets/stars.gif";

export const NewRoot = () => {
  return (
    <div
      className="font-pixel text-md min-h-screen bg-gray-900 p-4 tracking-wider text-gray-100"
      style={{
        backgroundImage: `url(${StarsGif})`,
      }}
    >
      <div className="crt-effect pointer-events-none absolute inset-0 z-30"></div>
      <div className="relative z-20 mx-auto max-w-7xl">
        <header className="mb-6 p-6 text-center">
          <h1 className="mb-2 text-4xl font-extrabold text-white md:text-5xl">
            conifer crown
          </h1>
        </header>
        <main className="flex flex-col gap-6 md:flex-row">
          <aside className="flex w-full flex-col gap-5 md:w-1/4">
            <Card>
              <CardTitle>navigation</CardTitle>
              <nav>
                <ul className="space-y-1">
                  <li>
                    <Link
                      to="/"
                      className="transition duration-200 hover:text-blue-400"
                    >
                      {">"}
                      {">"} home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about"
                      className="transition duration-200 hover:text-blue-400"
                    >
                      {">"}
                      {">"} about
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/blog"
                      className="transition duration-200 hover:text-blue-400"
                    >
                      {">"}
                      {">"} blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/poetry"
                      className="transition duration-200 hover:text-blue-400"
                    >
                      {">"}
                      {">"} poetry
                    </Link>
                  </li>
                </ul>
              </nav>
            </Card>
            <Card>
              <CardTitle>status</CardTitle>
              test
            </Card>
            <Card>
              <CardTitle>my time</CardTitle>
              <Time />
            </Card>
          </aside>
          <section className="flex max-h-[500px] w-full flex-grow flex-col gap-5 overflow-scroll md:w-1/2">
            <Outlet />
          </section>
          <aside className="flex w-full flex-col gap-5 md:w-1/4">
            <Card>
              <CardTitle>find me</CardTitle>
              <ul className="space-y-1">
                <li>
                  <a
                    href="https://www.instagram.com/nick.bigger/"
                    className="transition duration-200 hover:text-blue-400"
                  >
                    instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.goodreads.com/user/show/34398985-nick"
                    className="transition duration-200 hover:text-blue-400"
                  >
                    goodreads
                  </a>
                </li>
                <li>
                  <a
                    href="https://boxd.it/ec5Jr"
                    className="transition duration-200 hover:text-blue-400"
                  >
                    letterboxed
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/nickbigger/"
                    className="transition duration-200 hover:text-blue-400"
                  >
                    linkedin
                  </a>
                </li>
              </ul>
            </Card>
          </aside>
        </main>
        <div>
          <script
            type="text/javascript"
            src="https://www.freevisitorcounters.com/auth.php?id=07f699679f36309015b1c2a50c95d0e17c78ba51"
          ></script>
          <script
            type="text/javascript"
            src="https://www.freevisitorcounters.com/en/home/counter/1357776/t/5"
          ></script>
        </div>
        <footer className="mt-6 p-6 text-center font-mono text-sm text-gray-400">
          <p>2025 nick, all rights reserverd</p>
        </footer>
      </div>
      <style>
        {`
        .crt-effect {
          box-shadow: inset 0 0 100px rgba(0,0,0,0.8); /* Inner shadow for slight darkening */
          filter: blur(0.5px) saturate(1.2) hue-rotate(-5deg); /* Subtle blur, saturation, color shift */
          pointer-events: none; /* Allows clicks to pass through */
        }

        .crt-effect::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%),
                      linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
          background-size: 100% 2px, 3px 100%; /* Horizontal scanlines and subtle vertical color bleed */
          z-index: 10;
          pointer-events: none;
          opacity: 0.7; /* Adjust opacity for visibility */
        }

        .crt-effect::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(ellipse at center, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 75%, rgba(0,0,0,0.9) 100%);
          pointer-events: none;
          z-index: 11;
          opacity: 0.3; /* Vignette strength */
        }

        /* Basic flicker animation, can be made more complex */
        @keyframes flicker {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.98; } /* Slight flicker */
        }

        .crt-effect {
          animation: flicker 0.15s infinite alternate; /* Fast, subtle flicker */
        }

        /* Optional: Add a subtle screen curve effect */
        body {
          perspective: 1000px;
        }

        .max-w-7xl.mx-auto.relative.z-20 { /* Target the main content wrapper */
          transform: rotateX(0deg) rotateY(0deg); /* No rotation by default */
          transform-style: preserve-3d;
          transition: transform 0.3s ease-out; /* Smooth transition for potential hover/interaction */
        }

        /* Hover effect (optional, if you want slight interaction) */
        .max-w-7xl.mx-auto.relative.z-20:hover {
          transform: rotateX(0.5deg) rotateY(-0.5deg); /* Slight tilt on hover */
        }
        `}
      </style>
    </div>
  );
};
