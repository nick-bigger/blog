import * as React from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import * as ReactDOM from "react-dom/client";
import { RouterProvider, createHashRouter } from "react-router-dom";

import { Poem } from "./components/Poem";
import { Post } from "./components/Post";
import { ThemeProvider } from "./components/theme-provider";
import { Toaster } from "./components/ui/sonner";
import "./index.css";
import { About } from "./routes/About";
import { Blog } from "./routes/Blog";
import { ErrorPage } from "./routes/Error";
import { Poems } from "./routes/Poems";
import { Root } from "./routes/Root";
import { Songs } from "./routes/Songs";
import { Thoughts } from "./routes/Thoughts";
import { Welcome } from "./routes/Welcome";
import { Wrapper } from "./routes/Wrapper";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 30,
      refetchOnWindowFocus: false,
    },
  },
});

const router = createHashRouter([
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
      {
        path: "songs",
        element: <Songs />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="theme">
        <RouterProvider router={router} />
        <Toaster />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
