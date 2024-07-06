const articles = [
  { 
    content: "test",
    id: 1,
    title: "first",
    type: "poem",
    createdAt: new Date(2024, 1, 1),
  },
  {
    content: "hello",
    id: 2,
    title: "second",
    type: "food",
    createdAt: new Date(2024, 3, 10),
  },
  {
    content: "another",
    id: 3,
    title: "third",
    type: "food",
    createdAt: new Date(2024, 3, 28),
  },
  {
    content: "woohoo",
    id: 4,
    title: "fourth",
    type: "food",
    createdAt: new Date(2024, 5, 3),
  }
]

export const getArticles = () => articles;

export const getArticle = (articleId: number) => articles.find((article) => article.id === Number(articleId));

export type Article = {
  content: string;
  id: number;
  title: string;
  type: string;
  createdAt: Date;
};