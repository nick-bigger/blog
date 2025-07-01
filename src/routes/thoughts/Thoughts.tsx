import { formatRelative } from "date-fns";
import { Link } from "react-router-dom";

import { Card } from "@/components/ui/card";

import { thoughts } from "../../data/thoughts";

export const Thoughts = () => {
  return (
    <div className="relative z-20 mx-auto max-w-4xl">
      <Link to="/">back to home</Link>
      <Card className="mt-4">
        <h3 className="mb-4 text-3xl text-white">thoughts</h3>
        <div className="flex flex-col gap-2">
          {thoughts.map((thought) => (
            <Card className="bg-white text-black">
              <p>{formatRelative(thought.timestamp, new Date())}</p>
              <p>{thought.content}</p>
            </Card>
          ))}
        </div>
      </Card>
    </div>
  );
};
