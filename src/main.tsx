import * as React from "react";

import * as ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./index.css";
import { _227am } from "./routes/2:27am";
import { Apologize } from "./routes/Apologize";
import { Back } from "./routes/Back";
import { ErrorPage } from "./routes/Error";
import { Her } from "./routes/Her";
import { Home } from "./routes/Home";
import { ICantMakeYouStayBut } from "./routes/ICantMakeYouStayBut";
import { InMyDreams } from "./routes/InMyDreams";
import { Mother } from "./routes/Mother";
import { MyHeartCanBarelySwim } from "./routes/MyHeartCanBarelySwim";
import { Remains } from "./routes/Remains";
import { Retrograde } from "./routes/Retrograde";
import { Root } from "./routes/Root";
import { SecureYourOwnMaskFirstBeforeHelpingOthers } from "./routes/SecureYourOwnMaskFirstBeforeHelpingOthers";
import { Stuck } from "./routes/Stuck";

const router = createBrowserRouter([
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
        path: "227",
        element: <_227am />,
      },
      {
        path: "stuck",
        element: <Stuck />,
      },
      {
        path: "remains",
        element: <Remains />,
      },
      {
        path: "secureYourOwnMask",
        element: <SecureYourOwnMaskFirstBeforeHelpingOthers />,
      },
      {
        path: "myHeartCanBarelySwim",
        element: <MyHeartCanBarelySwim />,
      },
      {
        path: "stay",
        element: <ICantMakeYouStayBut />,
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
        path: "retrograde",
        element: <Retrograde />,
      },
      {
        path: "apologize",
        element: <Apologize />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
