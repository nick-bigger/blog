import { formatRelative } from "date-fns";
import { Link } from "react-router-dom";

import { Card } from "@/components/ui/card";

import { thoughts } from "../../data/thoughts";

export const Thoughts = () => {
  return (
    <div className="mx-auto max-w-2xl p-1 md:p-4">
      <Link to="/">back to home</Link>
      <Card className="mt-4">
        <h3 className="mb-4 text-3xl text-white">thoughts</h3>
        <div className="flex flex-col gap-4">
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
