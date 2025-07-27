import { Link } from "react-router-dom";

import { Link as TextLink } from "@/components/Typography";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { collections } from "@/data/collections";
import { poems } from "@/data/poems";

export const Poems = () => {
  return (
    <div className="mx-auto max-w-7xl">
      <Card className="border-none">
        <CardHeader>
          <CardTitle className="text-3xl">Poetry</CardTitle>
          <CardDescription>
            random poems. i like short poetry, and i'm working on moving into
            some longer form content as well
          </CardDescription>
        </CardHeader>
        <CardContent>
          {collections.map((collection, index) => (
            <div key={index} className="mb-6">
              <div className="flex flex-col gap-2">
                {poems
                  .filter((poem) => poem.collectionId === collection.id)
                  .map((poem) => (
                    <TextLink
                      key={poem.id}
                      className="flex items-baseline justify-between gap-2 text-2xl lowercase no-underline"
                      asChild
                    >
                      <Link to={`${poem.id}`}>
                        {poem.title}
                        <span className="dots flex-grow border-b-[2px] border-dotted border-current"></span>
                        <span>
                          {poem.id > 1
                            ? poem.id + (poem.id * Math.random()).toFixed()
                            : 1}
                        </span>
                      </Link>
                    </TextLink>
                  ))}
                {index !== collections.length - 1 && (
                  <p className="mt-6 text-center">* . ﹢ ˖ ✦ ¸ .</p>
                )}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};
