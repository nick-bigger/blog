import { Link } from "react-router-dom";

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
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Poetry</CardTitle>
          <CardDescription>
            random poems. i like short poetry, and i'm working on moving into
            some longer form content as well
          </CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {collections.map((collection, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{collection.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul>
                  {poems
                    .filter((poem) => poem.collectionId === collection.id)
                    .map((poem) => (
                      <Link
                        to={`${poem.id}`}
                        key={poem.id}
                        className="transition duration-200 hover:text-blue-400"
                      >
                        <li className="text-xl">{poem.title}</li>
                      </Link>
                    ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};
