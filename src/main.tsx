import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

import { Apologize } from "./routes/Apologize";
import { ErrorPage } from "./routes/Error";
import { Her } from "./routes/Her";
import { Home } from "./routes/Home";
import { Lines } from "./routes/Lines";
import { Root } from "./routes/Root";

const router = createBrowserRouter([
  {
    element: <Root />,
    path: "",
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
      },
      {
        path: "her",
        element: <Her />,
      },
      {
        path: "lines",
        element: <Lines />,
      },
      {
        path: "apologize",
        element: <Apologize />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);