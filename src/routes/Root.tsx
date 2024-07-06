import { NavLink, Outlet, useLoaderData } from "react-router-dom";

import { format } from "date-fns";
import { useState } from "react";
import { H1, P } from "../components/Typography";
import { Article, getArticles } from "../data/articles";

export async function loader() {
  const articles = getArticles();
  return articles;
}

export const Root = () => {
  const [currentTab, setCurrentTab] = useState("food");
  const articles = useLoaderData() as Article[];

  const filteredArticles = articles.filter((article) => article.type === currentTab);

  return (
    <div className="flex h-screen">
      <div className="w-[700px] m-auto">
        <div className="flex justify-between mb-7 items-center">
          <H1>conifer</H1>
          <nav className="flex gap-4">
            <P
              className={`cursor-pointer ${currentTab === "food" ? "font-bold" : ""}`}
              onClick={() => setCurrentTab("food")}
            >
              food
            </P>
            <P>/</P>
            <P
              className={`cursor-pointer ${currentTab === "poem" ? "font-bold" : ""}`}
              onClick={() => setCurrentTab("poem")}
            >
              poems
            </P>
            <P>/</P>
            <P
              className={`cursor-pointer ${currentTab === "music" ? "font-bold" : ""}`}
              onClick={() => setCurrentTab("music")}
            >
              music
            </P>
          </nav>
        </div>
        <div className="flex gap-10">
          <table className="w-[150px] h-min">
            <tbody>
              {filteredArticles.length === 0 && (
                <tr>
                  <td>
                    <p>nothing yet</p>
                  </td>
                </tr>
              )}
              {filteredArticles.map((article) => {
                return (
                  <tr key={article.id}>
                    <td className="opacity-80">
                      {format(article.createdAt, "MM.dd")}
                    </td>
                    <td>
                    <NavLink
                      to={`articles/${article.id}`}
                      className={({ isActive }) =>
                        isActive
                          ? "underline text-[#609848]"
                          : ""
                      }
                    >
                      <P>{article.title}</P>
                    </NavLink>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="flex-1">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}