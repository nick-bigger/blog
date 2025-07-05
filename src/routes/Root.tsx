import { Outlet } from "react-router-dom";

import StarsGif from "../assets/stars.gif";

export const Root = () => {
  return (
    <div
      className="min-h-screen bg-gray-900 p-5 px-4 font-cnc-ra text-lg tracking-wider text-gray-100"
      style={{
        backgroundImage: `url(${StarsGif})`,
      }}
    >
      <Outlet />
      <div>
        <div className="flex justify-center py-4">
          <script
            type="text/javascript"
            src="https://www.freevisitorcounters.com/auth.php?id=1840f318b952e4f7ad8ca1a3210afe2734c583c6"
          ></script>
          <script
            type="text/javascript"
            src="https://www.freevisitorcounters.com/en/home/counter/1357826/t/5"
          ></script>
          <a
            href="https://www.freevisitorcounters.com/en/home/stats/id/1357826"
            target="_blank"
          >
            <img src="https://www.freevisitorcounters.com/en/counter/render/1357826/t/5" />
          </a>
        </div>
        <footer className="text-center font-mono text-sm text-gray-400">
          <p>2025 nick, all rights reserved</p>
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
