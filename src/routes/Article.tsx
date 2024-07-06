import { useLoaderData } from "react-router-dom";
import { P } from "../components/Typography";
import { Article as ArticleType, getArticle } from "../data/articles";

export async function loader({ params }) {
  const article = getArticle(params.articleId);
  return article;
}

export const Article = () => {
  const article = useLoaderData() as ArticleType;

  return (
    <P>{article.content}</P>
  );
}