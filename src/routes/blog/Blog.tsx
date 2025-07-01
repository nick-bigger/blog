import { formatISO } from "date-fns";
import { Link } from "react-router-dom";

import { Card } from "@/components/ui/card";
import { posts } from "@/data/posts";

export const Blog = () => {
  return (
    <div className="relative z-20 mx-auto max-w-7xl">
      <Link to="/">back to home</Link>
      <Card className="mt-4">
        <h3 className="mb-4 text-3xl text-white">blog</h3>
        <ul>
          {posts
            .sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime()) // Sort by newest first
            .map((post) => (
              <li key={post.id}>
                <Link
                  to={`/blog/${post.id}`}
                  className="text-md font-semibold hover:text-blue-400"
                >
                  {formatISO(post.timestamp, { representation: "date" })} -
                  {post.title}
                </Link>
              </li>
            ))}
        </ul>
      </Card>
    </div>
  );
};
