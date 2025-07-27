import { Helmet } from "react-helmet";
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
        <h1 className="text-2xl font-bold text-destructive">poem not found</h1>
        <Link to="/poems">back to poems</Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl rounded-sm border border-border">
      <Helmet>
        <title>nick's website | poems | {poem.title}</title>
      </Helmet>
      <Card className="min-h-screen border-none bg-white bg-[image:linear-gradient(90deg,transparent_79px,#abced4_79px,#abced4_81px,transparent_81px),linear-gradient(#eee_.1em,transparent_.1em)] bg-[size:100%_1.2em] text-black">
        <div className="flex w-full flex-col p-4 pl-24 pt-[64px]">
          <div>
            <Markdown
              components={{
                p(props) {
                  return (
                    <p
                      className="mb-[20.5px] text-xl leading-[22px]"
                      {...props}
                    />
                  );
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
