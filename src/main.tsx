import * as React from "react";

import * as ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./index.css";
import { About } from "./routes/About";
import { ErrorPage } from "./routes/Error";
import { Poems } from "./routes/Poems";
import { Root } from "./routes/Root";
import { Welcome } from "./routes/Welcome";
import { Wrapper } from "./routes/Wrapper";
import { Blog } from "./routes/blog/Blog";
import { Post } from "./routes/blog/Post";
import { Poem } from "./routes/poetry/Poem";
import { Thoughts } from "./routes/thoughts/Thoughts";

const router = createBrowserRouter([
  {
    element: <Root />,
    path: "*",
    errorElement: <ErrorPage />,
    children: [
      {
        element: <Wrapper />,
        path: "*",
        children: [
          {
            path: "",
            element: <Welcome />,
          },
          {
            path: "about",
            element: <About />,
          },
        ],
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "blog/:id",
        element: <Post />,
      },
      {
        path: "thoughts",
        element: <Thoughts />,
      },
      {
        path: "poems",
        element: <Poems />,
      },
      {
        path: "poems/:id",
        element: <Poem />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
