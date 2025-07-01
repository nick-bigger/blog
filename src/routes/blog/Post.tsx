import { formatISO } from "date-fns";
import Markdown from "react-markdown";
import { Link, useParams } from "react-router-dom";

import { Card } from "@/components/ui/card";
import { posts } from "@/data/posts";

export const Post = () => {
  const { id } = useParams<{ id: string }>();

  const post = posts.find((p) => p.id === Number(id));

  if (!post) {
    return (
      <div className="container mx-auto p-4 text-center">
        <h1 className="text-2xl font-bold text-red-500">Post Not Found</h1>
        <Link to="/blog">back to blog</Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <Link to="/blog">back to blog</Link>
      <Card className="mt-4 bg-white">
        <h3 className="mb-4 text-4xl text-black">{post.title}</h3>
        <p className="text-md mb-6 text-gray-500">
          {formatISO(post.timestamp, { representation: "date" })}
        </p>
        <div className="text-black">
          <Markdown>{post.content}</Markdown>
        </div>
      </Card>
    </div>
  );
};
