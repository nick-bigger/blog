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
    <div className="mx-auto max-w-7xl">
      <Card className="rounded-sm border-2 border-black bg-white p-[2px]">
        <div className="flex w-full flex-col items-center rounded-sm bg-gray-800 p-4 pb-40 pt-20">
          <div>
            <h3 className="mb-20 text-4xl uppercase">{poem.title}</h3>
            <Markdown
              components={{
                p(props) {
                  return <p className="mb-2 text-xl leading-7" {...props} />;
                },
              }}
            >
              {poem.content}
            </Markdown>
          </div>
        </div>
      </Card>
    </div>
  );
};
