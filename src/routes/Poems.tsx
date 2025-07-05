import { Link } from "react-router-dom";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { collections } from "@/data/collections";
import { poems } from "@/data/poems";

export const Poems = () => {
  return (
    <div className="mx-auto max-w-7xl">
      <Card className="rounded-sm border-2 border-black bg-white p-[2px]">
        <div className="rounded-sm bg-gray-800 p-4">
          <h3 className="mb-2 text-3xl lowercase text-white">Poems</h3>
          <p className="mb-4 text-gray-300">
            random poems. i like short poetry, and i'm working on moving into
            some longer form content as well
          </p>
          <Accordion type="multiple">
            {collections.map((collection, index) => (
              <AccordionItem
                key={index}
                value={collection.title}
                className="border-none"
              >
                <AccordionTrigger className="pb-4 text-2xl lowercase text-white">
                  {collection.title}
                </AccordionTrigger>
                <AccordionContent key={collection.id} className="pb-4">
                  {poems
                    .filter((poem) => poem.collectionId === collection.id)
                    .map((poem) => (
                      <Link to={`${poem.id}`} key={poem.id}>
                        <p className="text-md border-l-2 pl-4 lowercase text-white hover:text-blue-400 lg:text-xl">
                          {poem.title}
                        </p>
                      </Link>
                    ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Card>
    </div>
  );
};
