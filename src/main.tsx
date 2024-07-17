import * as React from "react";

import * as ReactDOM from "react-dom/client";
import { RouterProvider, createHashRouter } from "react-router-dom";

import "./index.css";
import { Apologize } from "./routes/Apologize";
import { Back } from "./routes/Back";
import { ErrorPage } from "./routes/Error";
import { Her } from "./routes/Her";
import { Home } from "./routes/Home";
import { InMyDreams } from "./routes/InMyDreams";
import { Lines } from "./routes/Lines";
import { Mother } from "./routes/Mother";
import { Root } from "./routes/Root";

const router = createHashRouter([
  {
    element: <Root />,
    path: "*",
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "her",
        element: <Her />,
      },
      {
        path: "back",
        element: <Back />,
      },
      {
        path: "mother",
        element: <Mother />,
      },
      {
        path: "inmydreams",
        element: <InMyDreams />,
      },
      {
        path: "lines",
        element: <Lines />,
      },
      {
        path: "apologize",
        element: <Apologize />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
