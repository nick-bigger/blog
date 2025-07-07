import { format } from "date-fns/format";
import { Share2 } from "lucide-react";
import Markdown from "react-markdown";
import { useParams } from "react-router-dom";

import {
  Blockquote,
  H1,
  H2,
  H3,
  H4,
  Link,
  P,
  UL,
} from "@/components/Typography";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { posts } from "@/data/posts";

export const Post = () => {
  const { id } = useParams<{ id: string }>();

  const post = posts.find((p) => p.id === Number(id));

  if (!post) {
    return (
      <div className="mx-auto p-1 text-center md:p-4">
        <h1 className="text-2xl font-bold text-red-500">Post Not Found</h1>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl">
      <Card>
        <CardContent>
          <div className="flex flex-wrap justify-between">
            <div>
              <h3 className="text-3xl">{post.title}</h3>
              <p className="text-md mb-2 text-gray-500">
                {format(post.timestamp, "PP")}
              </p>
              <div className="mb-8 flex flex-wrap items-center gap-2">
                <p className="text-gray-300">Tags:</p>
                {post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1">
                    {post.tags.map((tag, tagIdx) => (
                      <Badge className="bg-gray-700" key={tagIdx}>
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="mb-4 flex gap-2">
              <Button
                className="size-8"
                variant="secondary"
                size="icon"
                onClick={async () => {
                  const shareData = {
                    title: post.title,
                    text: post.description,
                    url: `conifercrown.com/#/blog/${post.id}`,
                  };

                  await navigator.share(shareData);
                }}
              >
                <Share2 />
              </Button>
            </div>
          </div>
          <hr className="mb-8" />
          <Markdown
            components={{
              blockquote(props) {
                return <Blockquote {...props} />;
              },
              p(props) {
                return <P className="mb-4 text-xl" {...props} />;
              },
              ul(props) {
                return <UL {...props} />;
              },
              h1(props) {
                return <H1 {...props} />;
              },
              h2(props) {
                return <H2 {...props} />;
              },
              h3(props) {
                return <H3 {...props} />;
              },
              h4(props) {
                return <H4 {...props} />;
              },
              a(props) {
                return <Link className="text-xl" target="_blank" {...props} />;
              },
            }}
          >
            {post.content}
          </Markdown>
        </CardContent>
      </Card>
    </div>
  );
};
