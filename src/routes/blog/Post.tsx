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
      <div className="mx-auto p-1 text-center md:p-4">
        <h1 className="text-2xl font-bold text-red-500">Post Not Found</h1>
        <Link to="/blog">back to blog</Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-7xl p-1 md:p-4">
      <Link to="/blog">back to blog</Link>
      <Card className="mt-4 bg-[#141414] text-white">
        <h3 className="text-4xl">{post.title}</h3>
        <p className="text-md mb-6 text-gray-500">
          {formatISO(post.timestamp, { representation: "date" })}
        </p>
        <Markdown>{post.content}</Markdown>
      </Card>
    </div>
  );
};
