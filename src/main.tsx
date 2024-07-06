import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

import { Article, loader as articleLoader } from "./routes/Article";
import { ErrorPage } from "./routes/Error";
import { Root, loader as rootLoader } from "./routes/Root";

const router = createBrowserRouter([
  {
    children: [
      {
        path: "articles/:articleId",
        element: <Article />,
        loader: articleLoader,
      },
    ],
    path: "/",
    loader: rootLoader,
    element: <Root />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);