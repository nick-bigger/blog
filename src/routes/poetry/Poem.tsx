import Markdown from "react-markdown";
import { Link, useParams } from "react-router-dom";

import { Card } from "@/components/ui/card";
import { poems } from "@/data/poems";

export const Poem = () => {
  const { id } = useParams<{ id: string }>();

  const poem = poems.find((p) => p.id === Number(id));

  if (!poem) {
    return (
      <div className="mx-auto p-1 text-center md:p-4">
        <h1 className="text-2xl font-bold text-red-500">Poem Not Found</h1>
        <Link to="/poems">back to poems</Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl p-1 md:p-4">
      <Link to="/poems">back to poems</Link>
      <Card className="mt-4 min-h-[700px] border border-white bg-[#141414] text-xl text-white">
        <div className="mt-20 flex w-full flex-col items-center">
          <div>
            <h3 className="mb-8 text-4xl">{poem.title}</h3>
            <Markdown>{poem.content}</Markdown>
          </div>
        </div>
      </Card>
    </div>
  );
};
