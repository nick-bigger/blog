import { Link } from "react-router-dom";

import { Card } from "@/components/ui/card";

export const TestHello = () => {
  return (
    <>
      <Link to="/blog">back to blog</Link>
      <Card className="mt-4">
        <h3 className="mb-4 font-mono text-3xl text-white">test hello</h3>
        <p className="font-mono">
          Here's the first blog post for this website. I need something to go
          here to fill the space.
        </p>
      </Card>
    </>
  );
};
